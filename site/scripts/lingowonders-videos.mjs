// Sync LingoWonders' latest YouTube videos for the landing page
// (npm run videos:lingowonders [-- --limit 6]; Node 20+, macOS `sips`).
//
// The site promises no tracking, so the page never embeds YouTube or loads
// anything from it. This script does the fetching instead, at sync time:
// it reads the channel's RSS feed (which intermittently answers 404, so it
// retries, then falls back to the channel's /videos page and each watch page
// for the upload date), copies each thumbnail into
// public/apps/tracesheet/videos/<id>.jpg (≤ 640 px wide), and writes
// src/content/lingowonders-videos.json, newest first. The cards link out to
// youtube.com/watch?v=<id>. Re-run, commit and deploy to show new videos.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const CHANNEL_ID = "UCkd122Jzs8JwNICRd8tQU9A";
const HANDLE = "@LingoWondersApp";
const SITE = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(SITE, "public/apps/tracesheet/videos");
const OUT_JSON = join(SITE, "src/content/lingowonders-videos.json");
const PUBLIC_PATH = "/apps/tracesheet/videos";

const limitArg = process.argv.indexOf("--limit");
const LIMIT = limitArg > 0 ? Number(process.argv[limitArg + 1]) : 6;

// A desktop UA and English headers get the same page markup every time.
const HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  "accept-language": "en-US,en;q=0.9",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, as = "text") {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return as === "bytes" ? Buffer.from(await res.arrayBuffer()) : res.text();
}

function decodeXml(s) {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, "&");
}

/** Videos from the channel feed: [{ id, title, published }]. */
async function fromRss() {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
  let lastErr;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const xml = await get(url);
      const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
      return entries.map((e) => ({
        id: e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)[1],
        title: decodeXml(e.match(/<title>([^<]*)<\/title>/)[1]),
        published: e.match(/<published>([^<]+)<\/published>/)[1],
      }));
    } catch (err) {
      lastErr = err;
      console.warn(`rss attempt ${attempt}: ${err.message}`);
      await sleep(1500 * attempt);
    }
  }
  throw lastErr;
}

/** Walk ytInitialData for video items (old videoRenderer and new lockupViewModel). */
function collectVideos(node, out) {
  if (!node || typeof node !== "object") return;
  if (node.videoRenderer?.videoId) {
    const v = node.videoRenderer;
    const title = v.title?.runs?.map((r) => r.text).join("") ?? v.title?.simpleText ?? "";
    out.push({ id: v.videoId, title });
    return;
  }
  const l = node.lockupViewModel;
  if (l?.contentId && l.contentType === "LOCKUP_CONTENT_TYPE_VIDEO") {
    out.push({ id: l.contentId, title: l.metadata?.lockupMetadataViewModel?.title?.content ?? "" });
    return;
  }
  for (const k in node) collectVideos(node[k], out);
}

/** Videos from the channel's /videos tab; the date comes from each watch page. */
async function fromChannelPage(limit) {
  const html = await get(`https://www.youtube.com/${HANDLE}/videos`);
  const m = html.match(/var ytInitialData = (\{[\s\S]*?\});<\/script>/);
  if (!m) throw new Error("no ytInitialData on the channel page");
  const found = [];
  collectVideos(JSON.parse(m[1]), found);
  const seen = new Set();
  const videos = found.filter((v) => !seen.has(v.id) && seen.add(v.id)).slice(0, limit);
  for (const v of videos) {
    const watch = await get(`https://www.youtube.com/watch?v=${v.id}`);
    const date = watch.match(/"publishDate":"([^"]+)"/) ?? watch.match(/itemprop="datePublished" content="([^"]+)"/);
    if (!date) throw new Error(`no publish date for ${v.id}`);
    v.published = date[1];
  }
  return videos;
}

/** Copy one thumbnail (16:9 hq720, else mqdefault) and shrink it to ≤ 640 px wide. */
async function saveThumb(id) {
  const file = join(OUT_DIR, `${id}.jpg`);
  if (existsSync(file)) return;
  let bytes;
  for (const name of ["hq720.jpg", "mqdefault.jpg"]) {
    try {
      bytes = await get(`https://i.ytimg.com/vi/${id}/${name}`, "bytes");
      break;
    } catch (err) {
      console.warn(`thumb ${id}/${name}: ${err.message}`);
    }
  }
  if (!bytes) throw new Error(`no thumbnail for ${id}`);
  writeFileSync(file, bytes);
  execFileSync("sips", ["-Z", "640", "-s", "format", "jpeg", "-s", "formatOptions", "62", file, "--out", file], {
    stdio: "ignore",
  });
}

let videos;
try {
  videos = await fromRss();
  console.log(`rss: ${videos.length} videos`);
} catch {
  console.warn("rss unavailable; reading the channel page");
  videos = await fromChannelPage(LIMIT);
  console.log(`channel page: ${videos.length} videos`);
}

videos = videos
  .map((v) => ({ ...v, published: new Date(v.published).toISOString() }))
  .sort((a, b) => b.published.localeCompare(a.published))
  .slice(0, LIMIT);

mkdirSync(OUT_DIR, { recursive: true });
for (const v of videos) {
  await saveThumb(v.id);
  v.thumbnail = `${PUBLIC_PATH}/${v.id}.jpg`;
  console.log(`${v.id}  ${v.published.slice(0, 10)}  ${(statSync(join(OUT_DIR, `${v.id}.jpg`)).size / 1024).toFixed(0)} KB  ${v.title}`);
}

// Drop thumbnails of videos that are no longer in the list.
const keep = new Set(videos.map((v) => `${v.id}.jpg`));
for (const f of readdirSync(OUT_DIR)) if (!keep.has(f)) rmSync(join(OUT_DIR, f));

const manifest = {
  channel: `https://www.youtube.com/${HANDLE}`,
  synced: new Date().toISOString(),
  videos: videos.map(({ id, title, published, thumbnail }) => ({ id, title, published, thumbnail })),
};
writeFileSync(OUT_JSON, JSON.stringify(manifest, null, 1) + "\n");
console.log(`wrote ${OUT_JSON}`);
