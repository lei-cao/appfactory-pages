// Copy guard for Popline (HQ-104). Apple review reads the Marketing URL
// (popline.appfactory.sg), so everything a reviewer or a crawler can read on
// it must match the store listing: never free / 免费 / 免費 / 無料, 9 caption
// styles (Karaoke and Pill are not in 1.0), and the App Store seller as the
// developer on /privacy.
//
// Two layers:
// 1. Source: every string in the Popline registry, the landing chrome and the
//    shared dictionary sections Popline pages render. Always runs.
// 2. Rendered HTML of all 9 pages (/, /privacy, /support × en, zh-cn, zh-tw):
//    visible text, <title>, meta description, og:*, twitter:*, alt text and
//    JSON-LD (the whole document is scanned). Reads the `next build` output in
//    .next/ (skipped when there is no build), or a live site with
//      COPY_GUARD_BASE=https://popline.appfactory.sg npm test
//    (also works with a preview URL: COPY_GUARD_BASE=https://<preview>/apps/popline).

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { popline } from "../src/content/popline.ts";
import { COPY } from "../src/components/sites/popline/copy.ts";
import { getDict } from "../src/lib/dictionaries.ts";

const LOCALES = ["en", "zh-cn", "zh-tw"] as const;
const PAGES = ["", "/privacy", "/support"] as const;
/**
 * The one exception (APPFA2-3): Popline for Mac has a free tier and must say
 * so, so its pages under /mac are not scanned for BANNED. They are English
 * only, their copy lives in src/content/popline-mac.ts (never walked by the
 * source layer below), and scripts/popline-mac.test.mts holds their own rules.
 * Nothing else is exempt: the tests below prove the iOS pages still fail on
 * "free" and that the exception covers /mac and nothing more.
 */
const MAC_EXEMPT = ["/mac", "/mac/support", "/mac/terms", "/mac/refunds", "/mac/privacy"] as const;
const isMacRoute = (p: string) => p === "/mac" || p.startsWith("/mac/");
const SELLER = "APPFACTORY STUDIO PTE. LTD.";

/** Words that must never appear (any case, any language we ship). */
const BANNED = /\bfree\b|免费|免費|無料/i;
/** Facts that changed for 1.0: nine styles, no Karaoke or Pill. */
const STALE = /\bkaraoke\b|\bpill\b|\b11 (caption )?styles\b|十一种|十一種|11 ?[种種](字幕)?样式|11 ?[种種]字幕|11 ?[种種]樣式|卡拉 ?OK/i;
/** The 1.0 style list, exactly (store-listing-v1.md). */
const STYLES = ["Punch", "Reveal", "Minimal", "Editorial", "Bold", "Highlight", "Block", "Shadow", "Emoji pop"];

function strings(value: unknown, path = "", out: [string, string][] = []): [string, string][] {
  if (typeof value === "string") out.push([path, value]);
  else if (Array.isArray(value)) value.forEach((v, i) => strings(v, `${path}[${i}]`, out));
  else if (value && typeof value === "object")
    for (const [k, v] of Object.entries(value)) strings(v, path ? `${path}.${k}` : k, out);
  return out;
}

/** What the rendered-page scan reports for one page: banned and stale words. */
export function scanHtml(html: string): { banned: string[]; stale: string[] } {
  return {
    banned: html.match(new RegExp(BANNED.source, "gi")) ?? [],
    stale: html.match(new RegExp(STALE.source, "gi")) ?? [],
  };
}

function hits(all: [string, string][], re: RegExp): string[] {
  return all.filter(([, s]) => re.test(s)).map(([p, s]) => `${p}: ${s.slice(0, 120)}`);
}

test("Popline registry and landing copy: no free wording, no stale style facts", () => {
  const all = [...strings(popline, "popline"), ...strings(COPY, "COPY")];
  assert.ok(all.length > 150, "walked the content");
  assert.deepEqual(hits(all, BANNED), []);
  assert.deepEqual(hits(all, STALE), []);
});

test("every locale lists exactly the nine 1.0 styles, matching the store subtitle", () => {
  for (const l of LOCALES) {
    const f = popline.i18n[l].features.find((x) => /9 /.test(x.title) && STYLES.every((s) => x.body.includes(s)));
    assert.ok(f, `${l}: a feature names all nine styles`);
  }
  assert.equal(popline.i18n["zh-cn"].subtitle, "几秒出字幕，无水印");
  assert.equal(popline.i18n["zh-tw"].subtitle, "快速上字幕，無浮水印");
  assert.equal(popline.i18n.en.subtitle, "Fast captions, no watermark");
});

test("shared dictionary sections Popline pages render have no free wording", () => {
  for (const l of LOCALES) {
    const d = getDict(l);
    const all = strings({ app: d.app, privacy: d.privacy, support: d.support, badges: d.badges, status: d.status }, l);
    assert.deepEqual(hits(all, BANNED), []);
  }
});

test("Popline privacy names the App Store seller; other apps keep their default", () => {
  assert.equal(popline.developer, SELLER);
  for (const l of LOCALES) assert.match(getDict(l).privacy.intro, /\{developer\}/);
});

test("Popline is live on the App Store with a pt/ct link", () => {
  assert.equal(popline.status, "live");
  assert.equal(popline.appStoreId, "6829481152");
  assert.match(popline.appStoreUrl ?? "", /^https:\/\/apps\.apple\.com\/app\/apple-store\/id6829481152\?pt=119559267&ct=site&mt=8$/);
});

// ---- rendered pages ----

const BUILD = new URL("../.next/server/app/", import.meta.url);
const LIVE = process.env.COPY_GUARD_BASE?.replace(/\/$/, "");

async function page(locale: string, p: string): Promise<string | null> {
  if (LIVE) {
    const url = `${LIVE}${locale === "en" ? "" : `/${locale}`}${p}`;
    // Subdomain form puts the locale first; the /apps/popline path form after the app.
    const u = LIVE.includes("/apps/popline")
      ? `${LIVE.replace("/apps/popline", "")}${locale === "en" ? "" : `/${locale}`}/apps/popline${p}`
      : url;
    const res = await fetch(u, { redirect: "follow" });
    assert.equal(res.status, 200, `${u} → ${res.status}`);
    return res.text();
  }
  const f = new URL(`${locale}/apps/popline${p || ""}.html`, BUILD);
  return existsSync(f) ? readFileSync(f, "utf8") : null;
}

const rendered = LIVE || existsSync(new URL(`en/apps/popline.html`, BUILD));
// CI / pre-merge: `COPY_GUARD_REQUIRE=1 npm test` after `next build` fails
// instead of skipping when there is nothing rendered to scan.
if (process.env.COPY_GUARD_REQUIRE && !rendered)
  throw new Error("copy guard: no .next build and no COPY_GUARD_BASE to scan");

test(
  "rendered Popline pages (text, meta, og, twitter, alt, JSON-LD) pass the guard",
  { skip: rendered ? false : "no .next build and no COPY_GUARD_BASE" },
  async () => {
    for (const l of LOCALES)
      for (const p of PAGES) {
        const html = await page(l, p);
        assert.ok(html, `${l}${p} rendered`);
        const where = `${LIVE ?? "build"} ${l}${p || "/"}`;
        // The scan covers the parts Apple and crawlers read: prove they are there.
        assert.match(html, /<title>[^<]+<\/title>/, `${where}: title`);
        assert.match(html, /<meta name="description"/, `${where}: description`);
        assert.match(html, /<meta property="og:title"/, `${where}: og`);
        assert.match(html, /<meta name="twitter:/, `${where}: twitter`);
        assert.match(html, /application\/ld\+json/, `${where}: JSON-LD`);
        const { banned: bad, stale } = scanHtml(html);
        assert.deepEqual(bad, [], `${where}: banned words ${bad.join(", ")}`);
        assert.deepEqual(stale, [], `${where}: stale facts ${stale.join(", ")}`);
        if (p === "/privacy") {
          assert.ok(html.includes(SELLER), `${where}: names ${SELLER}`);
          assert.equal(/lei cao/i.test(html), false, `${where}: still says lei cao`);
        }
        if (p === "") {
          assert.match(html, /alt="[^"]+"/, `${where}: alt text`);
          if (popline.status !== "live") {
            assert.equal(/apps\.apple\.com/.test(html), false, `${where}: no App Store link before release`);
            const soon = { en: "Coming soon on the", "zh-cn": "即将登陆", "zh-tw": "即將登上" }[l];
            assert.ok(html.includes(soon), `${where}: shows "${soon} App Store"`);
          }
          assert.ok(/AI presenter|AI 主持人/.test(html), `${where}: AI presenter label`);
        }
      }
    if (!LIVE) {
      // Other apps keep the individual developer name (Popline-only change).
      const other = new URL("en/apps/poker-night/privacy.html", BUILD);
      if (existsSync(other)) assert.match(readFileSync(other, "utf8"), /is developed by lei cao/);
    }
  },
);

// ---- the /mac exception (APPFA2-3) ----

test("the Mac exception is /mac only: no iOS page is exempt, and the Mac copy is not in the scanned sources", () => {
  for (const p of PAGES) assert.equal(isMacRoute(p), false, `${p || "/"} must stay scanned`);
  for (const p of MAC_EXEMPT) assert.ok(isMacRoute(p), `${p} is a Mac route`);
  for (const p of ["/macro", "/support/mac", "/privacy#mac", "/zh-cn/mac"]) assert.equal(isMacRoute(p), false, p);
  // The scanned registry and landing chrome never carry Mac sales copy.
  const all = [...strings(popline, "popline"), ...strings(COPY, "COPY")];
  assert.deepEqual(hits(all, /\$39|Popline for Mac/), []);
});

test("the scan still fails an iOS page that says free (fixture)", () => {
  const ok = `<title>Popline</title><p>Fast captions, no watermark.</p>`;
  assert.deepEqual(scanHtml(ok).banned, []);
  for (const word of ["Free", "free trial", "FREE", "免费", "免費", "無料"]) {
    const html = ok.replace("no watermark", `no watermark, ${word}`);
    assert.ok(scanHtml(html).banned.length > 0, `"${word}" is caught`);
  }
});

test(
  "the scan still fails a real rendered iOS page once free is added, and would fail every Mac page",
  { skip: existsSync(new URL("en/apps/popline.html", BUILD)) ? false : "no .next build" },
  () => {
    for (const l of LOCALES)
      for (const p of PAGES) {
        const html = readFileSync(new URL(`${l}/apps/popline${p}.html`, BUILD), "utf8");
        assert.deepEqual(scanHtml(html).banned, [], `${l}${p || "/"} is clean`);
        const injected = html.replace("</h1>", " Free</h1>");
        assert.notEqual(injected, html, `${l}${p || "/"} has an h1 to inject into`);
        assert.ok(scanHtml(injected).banned.length > 0, `${l}${p || "/"} fails with free in it`);
      }
    // The exemption is doing real work: the Mac landing says Free and the scan sees it.
    const mac = readFileSync(new URL("en/apps/popline/mac.html", BUILD), "utf8");
    assert.ok(scanHtml(mac).banned.length > 0, "the Mac page says free, which is why it is exempt");
  },
);
