// End-to-end /go check over HTTP: starts `next start` on the production build
// and requests real paths, so the matcher, the middleware and the resolver run
// together. Run: npm run build && npm run test:http (or set GO_BASE_URL to test
// a running server or preview deploy instead).

import { test, before, after } from "node:test";
import { spawn, type ChildProcess } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import assert from "node:assert/strict";

const SITE = new URL("..", import.meta.url).pathname;
const PN = "6788786222"; // poker-night
const apple = (id: string, ct: string) => `https://apps.apple.com/app/apple-store/id${id}?pt=119559267&ct=${ct}&mt=8`;
const UA = {
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  ipad: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
  imessage: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
  android: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
  windows: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
};
const pnLanding = (src: string) => `https://poker-night.appfactory.sg/?utm_source=${src}&utm_medium=go&utm_campaign=poker-night`;

let base = process.env.GO_BASE_URL ?? "";
let server: ChildProcess | undefined;

const freePort = () =>
  new Promise<number>((resolve, reject) => {
    const s = createServer().listen(0, () => {
      const { port } = s.address() as { port: number };
      s.close(() => resolve(port));
    });
    s.on("error", reject);
  });

before(async () => {
  if (base) return;
  assert.ok(existsSync(`${SITE}.next/BUILD_ID`), "no production build: run `npm run build` first");
  const port = await freePort();
  // No -H: bound to one interface, `next start` 308-loops middleware rewrites
  // (it rewrites to localhost), which production never sees.
  base = `http://localhost:${port}`;
  server = spawn(`${SITE}node_modules/.bin/next`, ["start", "-p", String(port)], {
    cwd: SITE,
    stdio: "ignore",
  });
  for (let i = 0; i < 100; i++) {
    try {
      await fetch(`${base}/go`, { redirect: "manual" });
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error(`next start did not answer on ${base}`);
});

after(() => {
  server?.kill();
});

async function get(path: string, ua: string) {
  const res = await fetch(base + path, { redirect: "manual", headers: { "user-agent": ua } });
  return { status: res.status, location: res.headers.get("location"), cache: res.headers.get("cache-control"), body: await res.text() };
}

async function expectRedirect(path: string, ua: string, location: string) {
  const r = await get(path, ua);
  assert.deepEqual({ status: r.status, location: r.location, cache: r.cache }, { status: 302, location, cache: "no-store" }, path);
}

test("a dot in the source falls back to ct=go instead of a 404", async () => {
  await expectRedirect("/go/poker-night/a.b", UA.iphone, apple(PN, "go"));
  await expectRedirect("/go/poker-night/v1.2", UA.iphone, apple(PN, "go"));
  await expectRedirect("/go/poker-night/a.b", UA.android, pnLanding("go"));
  await expectRedirect("/go/poker-night/a.b", UA.windows, pnLanding("go"));
});

test("a dot in the slug is an unknown slug and goes home", async () => {
  for (const ua of [UA.iphone, UA.android, UA.windows]) {
    await expectRedirect("/go/no.such/qr", ua, "https://appfactory.sg/");
  }
  await expectRedirect("/go/x.png", UA.iphone, "https://appfactory.sg/");
});

test("one normal link per platform", async () => {
  await expectRedirect("/go/poker-night/share-hand", UA.iphone, apple(PN, "share-hand"));
  await expectRedirect("/go/poker-night/wrapped", UA.ipad, apple(PN, "wrapped"));
  await expectRedirect("/go/poker-night/qr", UA.android, pnLanding("qr"));
  await expectRedirect("/go/poker-night/settings", UA.windows, pnLanding("settings"));
  await expectRedirect("/go/poker-night/share-app", UA.imessage, pnLanding("share-app"));
  await expectRedirect("/go/tracesheet/ig-reels", UA.android, "https://lingowonders.com/?utm_source=ig-reels&utm_medium=go&utm_campaign=tracesheet");

  const mac = await get("/go/poker-night/share-night", UA.mac);
  assert.equal(mac.status, 200);
  assert.equal(mac.cache, "no-store");
  assert.match(mac.body, /navigator\.maxTouchPoints/);
  assert.ok(mac.body.includes(JSON.stringify(apple(PN, "share-night"))), "detect page carries the App Store URL");
  assert.ok(mac.body.includes(JSON.stringify(pnLanding("share-night"))), "detect page carries the landing URL");
});

test("share-list page and static files are untouched", async () => {
  const list = await get("/go/tracesheet/l", UA.iphone);
  assert.deepEqual([list.status, list.cache], [200, "no-store"]);
  const asset = await get("/app-ads.txt", UA.iphone);
  assert.equal(asset.status, 200);
});
