// Unit tests for the /go short-link resolver. Run: npm test (Node >= 23
// strips the TypeScript types natively; no test framework needed).

import { test } from "node:test";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import {
  detectPage,
  isGoPath,
  isShareListPath,
  resolveGo,
  sanitizeCampaign,
} from "../src/lib/go-link.ts";

const APEX = "appfactory.sg";

// Mirror of the registry's routing fields (src/content/*.ts). The registry uses
// the "@/" alias, so "registry fixture matches the content files" below reads
// the sources as text to keep this table honest.
const REGISTRY = [
  { file: "poker-night", slug: "poker-night", appStoreId: "6788786222" },
  { file: "tiltfree", slug: "tiltfree", appStoreId: "6758140114", externalUrls: { en: "https://www.pokertools.ai?utm_source=appfactory.sg&utm_medium=referral&utm_campaign=crosspromo" } },
  { file: "sushi-sort", slug: "sushi-sort", appStoreId: "6792529319" },
  { file: "tracesheet", slug: "tracesheet", host: "lingowonders", domain: "lingowonders.com", appStoreId: "6816287607" },
  { file: "ember-deck", slug: "ember-deck" },
  { file: "courtyard-arrows", slug: "arrow-out" },
  { file: "porcelain-trio", slug: "tile-trio", appStoreId: "6818530086" },
  { file: "glossy-blocks", slug: "slide-jam", appStoreId: "6818530151" },
  { file: "bottle-guess", slug: "bottle-guess" },
  { file: "crowd-siege", slug: "crowd-siege" },
  { file: "harvest-town", slug: "harvest-town" },
] as { file: string; slug: string; host?: string; domain?: string; appStoreId?: string; playStoreUrl?: string; externalUrls?: { en: string } }[];

// Not in the registry: exercises the Play branch (no live app has a Play URL yet).
const PLAY_APP = { slug: "both", appStoreId: "123", playStoreUrl: "https://play.google.com/store/apps/details?id=x.y" };

const APPS = [...REGISTRY, PLAY_APP];
const deps = { apex: APEX, getApp: (s: string) => APPS.find((a) => a.slug === s) };

const UA = {
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  ipad: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  // iPadOS Safari (desktop mode) sends exactly this too.
  macSafari: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
  macChrome: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  imessage: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
  android: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
  windows: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  empty: "",
};

const apple = (id: string, ct: string) =>
  `https://apps.apple.com/app/apple-store/id${id}?pt=119559267&ct=${ct}&mt=8`;
const utm = (src: string, slug: string) => `utm_source=${src}&utm_medium=go&utm_campaign=${slug}`;
const landing = (app: (typeof APPS)[number], src: string) => {
  if ("externalUrls" in app && app.externalUrls) return `https://www.pokertools.ai/?${utm(src, app.slug)}`;
  const host = "domain" in app && app.domain ? app.domain : `${("host" in app && app.host) || app.slug}.${APEX}`;
  return `https://${host}/?${utm(src, app.slug)}`;
};
const redirect = (url: string) => ({ kind: "redirect", url });
const go = (path: string, ua: string) => resolveGo(path, ua, deps);

test("registry fixture matches the content files", () => {
  const index = readFileSync(new URL("../src/content/apps.ts", import.meta.url), "utf8");
  const files = [...index.matchAll(/^import \{ \w+ \} from "\.\/([a-z0-9-]+)";$/gm)].map((m) => m[1]);
  assert.deepEqual(files, REGISTRY.map((a) => a.file), "add a REGISTRY row for every app in apps.ts");
  for (const a of REGISTRY) {
    const src = readFileSync(new URL(`../src/content/${a.file}.ts`, import.meta.url), "utf8");
    assert.match(src, new RegExp(`^  slug: "${a.slug}",$`, "m"), a.file);
    const id = src.match(/^ {2}appStoreId: "(\d+)",$/m)?.[1];
    assert.equal(id, a.appStoreId, `${a.file} appStoreId`);
    assert.equal(/^ {2}domain: "/m.test(src), !!a.domain, `${a.file} domain`);
    assert.equal(/^ {2}externalUrls:/m.test(src), !!a.externalUrls, `${a.file} externalUrls`);
    if (a.file === "ember-deck") {
      // Its store URLs are ternaries on this flag; flip the fixture with it.
      assert.match(src, /const RELEASED = \{ ios: false, android: false \};/);
    } else {
      assert.equal(/^ {2}playStoreUrl:/m.test(src), !!a.playStoreUrl, `${a.file} playStoreUrl`);
      assert.equal(/^ {2}appStoreUrl:/m.test(src), !!a.appStoreId, `${a.file} appStoreUrl`);
    }
  }
  const tilt = readFileSync(new URL("../src/content/tiltfree.ts", import.meta.url), "utf8");
  assert.match(tilt, /en: `https:\/\/www\.pokertools\.ai\?\$\{UTM\}`/);
});

test("every app x platform lands where docs/go-links.md says", () => {
  for (const app of APPS) {
    const path = `/go/${app.slug}/ig-reels`;
    const id = app.appStoreId;
    const land = landing(app, "ig-reels");
    const play = app.playStoreUrl
      ? `${app.playStoreUrl}&referrer=utm_source%3Dig-reels%26utm_medium%3Dgo%26utm_campaign%3D${app.slug}`
      : land;
    const expected: Record<keyof typeof UA, unknown> = {
      iphone: redirect(id ? apple(id, "ig-reels") : land),
      ipad: redirect(id ? apple(id, "ig-reels") : land),
      macSafari: id ? { kind: "detect", ios: apple(id, "ig-reels"), other: land } : redirect(land),
      macChrome: id ? { kind: "detect", ios: apple(id, "ig-reels"), other: land } : redirect(land),
      imessage: redirect(land),
      android: redirect(play),
      windows: redirect(land),
      empty: redirect(land),
    };
    for (const [name, ua] of Object.entries(UA)) {
      assert.deepEqual(go(path, ua), expected[name as keyof typeof UA], `${app.slug} ${name}`);
    }
  }
});

test("Android: Play with the install referrer when listed, else the landing page", () => {
  assert.deepEqual(
    go("/go/both/share", UA.android),
    redirect("https://play.google.com/store/apps/details?id=x.y&referrer=utm_source%3Dshare%26utm_medium%3Dgo%26utm_campaign%3Dboth"),
  );
  // LingoWonders (slug tracesheet) is iOS-only; lingowonders.com is its landing page.
  assert.deepEqual(
    go("/go/tracesheet/ig-reels", UA.android),
    redirect("https://lingowonders.com/?utm_source=ig-reels&utm_medium=go&utm_campaign=tracesheet"),
  );
});

test("desktop never goes to a store; TiltFree lands on pokertools.ai, not a phantom subdomain", () => {
  assert.deepEqual(
    go("/go/tiltfree/qr", UA.windows),
    redirect("https://www.pokertools.ai/?utm_source=qr&utm_medium=go&utm_campaign=tiltfree"),
  );
  assert.deepEqual(
    go("/go/poker-night/share", UA.windows),
    redirect("https://poker-night.appfactory.sg/?utm_source=share&utm_medium=go&utm_campaign=poker-night"),
  );
});

test("poker-night surfaces each keep their source as ct=", () => {
  for (const src of ["share-hand", "share-night", "wrapped", "share-app", "settings", "qr"]) {
    assert.deepEqual(go(`/go/poker-night/${src}`, UA.iphone), redirect(apple("6788786222", src)), src);
    assert.deepEqual(
      go(`/go/poker-night/${src}`, UA.android),
      redirect(`https://poker-night.appfactory.sg/?utm_source=${src}&utm_medium=go&utm_campaign=poker-night`),
      src,
    );
  }
});

test("default and invalid campaigns become go", () => {
  assert.deepEqual(go("/go/tracesheet", UA.iphone), redirect(apple("6816287607", "go")));
  assert.deepEqual(go("/go/tracesheet/", UA.iphone), redirect(apple("6816287607", "go")));
  assert.deepEqual(go("/go/tracesheet/a_b", UA.iphone), redirect(apple("6816287607", "go")));
  assert.deepEqual(go("/go/poker-night/Bad_Campaign", UA.windows), redirect(landing(REGISTRY[0], "go")));
  assert.equal(sanitizeCampaign("Share"), "share");
  assert.equal(sanitizeCampaign("x".repeat(41)), "go");
  assert.equal(sanitizeCampaign("x".repeat(40)), "x".repeat(40));
  assert.equal(sanitizeCampaign("%3Cscript%3E"), "go");
});

test("slug is case-insensitive; unknown or missing slug goes to the apex", () => {
  assert.deepEqual(go("/go/TraceSheet", UA.windows), redirect(landing(REGISTRY[3], "go")));
  for (const p of ["/go/nope", "/go/nope/qr", "/go/", "/go"]) {
    for (const ua of Object.values(UA)) assert.deepEqual(go(p, ua), redirect("https://appfactory.sg/"), p);
  }
});

test("detect page: touch screen -> App Store, else landing; no-JS falls back to landing", () => {
  const ios = apple("6788786222", "qr");
  const other = "https://poker-night.appfactory.sg/?utm_source=qr&utm_medium=go&utm_campaign=poker-night";
  const html = detectPage(ios, other);
  assert.ok(html.includes(`var I=${JSON.stringify(ios)};var O=${JSON.stringify(other)};`));
  assert.ok(html.includes("location.replace(navigator.maxTouchPoints>1?I:O)"));
  assert.ok(html.includes(`<noscript><meta http-equiv="refresh" content="0;url=${other.replace(/&/g, "&amp;")}">`));
  assert.ok(html.includes('<meta name="robots" content="noindex">'));
  // A hostile URL can't break out of the script or the attribute.
  const evil = detectPage('x</script><script>alert(1)</script>', 'y"><script>');
  assert.ok(!evil.includes("</script><script>"));
  assert.ok(!evil.includes('y"><script>'));
});

test("only /go/tracesheet/l renders the shared-list page; other /go paths still redirect", () => {
  for (const p of ["/go/tracesheet/l", "/go/tracesheet/l/", "/go/TraceSheet/L"]) {
    assert.equal(isShareListPath(p), true, p);
  }
  for (const p of ["/go/tracesheet", "/go/tracesheet/sheet", "/go/tracesheet/s", "/go/tracesheet/list", "/go/tracesheet/l/x", "/go/other/l", "/l"]) {
    assert.equal(isShareListPath(p), false, p);
  }
  assert.equal(isGoPath("/go/tracesheet/sheet"), true);
  assert.deepEqual(go("/go/tracesheet/sheet", UA.iphone), redirect(apple("6816287607", "sheet")));
});
