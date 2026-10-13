// SEO invariants. Run: npm test. Pure modules are imported directly; the
// middleware (which needs Next's runtime) is checked from its source text.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { LOCALES, canonicalUrl, languageAlternates } from "../src/lib/i18n.ts";
import {
  appSlugFor,
  consentDefaults,
  parseGaId,
  storeOf,
} from "../src/lib/analytics.ts";

const ORIGINS = ["https://appfactory.sg", "https://poker-night.appfactory.sg"];
const PATHS = ["/", "/support", "/privacy", "/guide/holdem-basics"];

test("canonical URLs never end in a slash", () => {
  for (const o of ORIGINS)
    for (const l of LOCALES)
      for (const p of PATHS) assert.ok(!canonicalUrl(o, l, p).endsWith("/"), `${o} ${l} ${p}`);
  assert.equal(canonicalUrl("https://appfactory.sg", "en"), "https://appfactory.sg");
  assert.equal(canonicalUrl("https://appfactory.sg", "zh-cn"), "https://appfactory.sg/zh-cn");
});

test("hreflang alternates equal the canonical URLs (sitemap uses the same)", () => {
  const tag = { en: "en", "zh-cn": "zh-CN", "zh-tw": "zh-TW" } as const;
  for (const o of ORIGINS)
    for (const p of PATHS) {
      const alt = languageAlternates(o, p);
      for (const l of LOCALES) assert.equal(alt[tag[l]], canonicalUrl(o, l, p));
      assert.equal(alt["x-default"], canonicalUrl(o, "en", p));
    }
  // guide.ts can't be imported here (extensionless imports); check its text.
  const guide = readFileSync(new URL("../src/lib/guide.ts", import.meta.url), "utf8");
  assert.equal(guide.includes('${p || "/"}'), false);
});

test("sitemap.ts builds every <loc> with canonicalUrl", () => {
  const src = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
  assert.equal(/url:\s*`/.test(src), false, "sitemap must not hand-build URLs");
  assert.ok((src.match(/url: canonicalUrl\(/g) ?? []).length >= 3);
});

test("IndexNow key file exists, matches its name, and middleware skips it", () => {
  const pub = new URL("../public/", import.meta.url);
  const keyFiles = readdirSync(pub).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  assert.equal(keyFiles.length, 1);
  const key = keyFiles[0].replace(".txt", "");
  assert.equal(readFileSync(new URL(keyFiles[0], pub), "utf8").trim(), key);

  const mw = readFileSync(new URL("../src/middleware.ts", import.meta.url), "utf8");
  const matcher = mw.match(/matcher:\s*\["([^"]+)"\]/)?.[1];
  assert.ok(matcher, "matcher not found");
  const re = new RegExp(`^${JSON.parse(`"${matcher}"`)}$`);
  // Not matched by the middleware => served as the static file on every host.
  assert.equal(re.test(`/${key}.txt`), false);
  assert.equal(re.test("/llms.txt"), false);
  assert.equal(re.test("/robots.txt"), false);
  assert.equal(re.test("/support"), true);
});

test("consent defaults: ads denied everywhere, analytics denied only in listed regions", () => {
  const [regional, general] = consentDefaults();
  assert.equal(regional.analytics_storage, "denied");
  assert.ok(regional.region.includes("DE") && regional.region.includes("GB"));
  assert.equal(general.analytics_storage, "granted");
  for (const d of [regional, general]) {
    assert.equal(d.ad_storage, "denied");
    assert.equal(d.ad_user_data, "denied");
    assert.equal(d.ad_personalization, "denied");
  }
});

test("GA id parsing and store click helpers", () => {
  assert.equal(parseGaId(undefined), null);
  assert.equal(parseGaId(""), null);
  assert.equal(parseGaId("UA-123"), null);
  assert.equal(parseGaId(" G-ABC123XYZ "), "G-ABC123XYZ");
  assert.equal(storeOf("https://apps.apple.com/app/id1?pt=1"), "app-store");
  assert.equal(storeOf("https://play.google.com/store/apps/details?id=x"), "google-play");
  assert.equal(storeOf("/support"), null);
  assert.equal(storeOf("https://appfactory.sg/"), null);
  assert.equal(appSlugFor("tracesheet.appfactory.sg", "/"), "tracesheet");
  assert.equal(appSlugFor("appfactory.sg", "/zh-cn/apps/poker-night"), "poker-night");
  assert.equal(appSlugFor("appfactory.sg", "/", "ember-deck"), "ember-deck");
  assert.equal(appSlugFor("appfactory.sg", "/"), "hub");
});
