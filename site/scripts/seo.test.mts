// Unit tests for the pure JSON-LD builders. Run: npm test.

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  appLd,
  breadcrumbLd,
  faqLd,
  hubItemListLd,
  organizationLd,
  websiteLd,
} from "../src/lib/seo.ts";

const HUB = "https://appfactory.sg";
const loc = {
  name: "Demo",
  storeName: "Demo: The App",
  oneLiner: "One line.",
  screenshots: [{ src: "/apps/demo/a.png", alt: "a" }],
};
const base = {
  slug: "demo",
  version: "1.0.0",
  platforms: ["iOS", "Android"],
  category: "game" as const,
};
const build = (extra = {}) =>
  appLd({
    app: { ...base, ...extra },
    loc,
    langTag: "en",
    origin: "https://demo.appfactory.sg",
    url: "https://demo.appfactory.sg",
    hubOrigin: HUB,
  });

// Collect every string that is (or lives under) a URL-bearing key.
const URL_KEYS = new Set(["url", "@id", "logo", "image", "screenshot", "installUrl", "sameAs", "item"]);
function urlValues(node: unknown, inUrlKey = false, out: string[] = []): string[] {
  if (typeof node === "string") {
    if (inUrlKey) out.push(node);
  } else if (Array.isArray(node)) {
    node.forEach((n) => urlValues(n, inUrlKey, out));
  } else if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) urlValues(v, URL_KEYS.has(k), out);
  }
  return out;
}

test("appLd without store URLs is PreOrder with no installUrl", () => {
  const ld = build() as any;
  assert.equal(ld.offers.availability, "https://schema.org/PreOrder");
  assert.equal("installUrl" in ld, false);
  assert.equal("sameAs" in ld, false);
  assert.deepEqual(ld["@type"], ["MobileApplication", "VideoGame"]);
  assert.equal(ld.applicationCategory, "GameApplication");
  assert.equal(ld.operatingSystem, "iOS, Android");
  assert.equal(ld.image, "https://demo.appfactory.sg/og/demo.png");
});

test("appLd with store URLs is InStock with installUrl and sameAs", () => {
  const a = "https://apps.apple.com/app/id1";
  const p = "https://play.google.com/store/apps/details?id=x";
  const ld = build({ appStoreUrl: a, playStoreUrl: p, category: "lifestyle" }) as any;
  assert.equal(ld.offers.availability, "https://schema.org/InStock");
  assert.equal(ld.installUrl, a);
  assert.deepEqual(ld.sameAs, [a, p]);
  assert.equal(ld["@type"], "MobileApplication");
  assert.equal(ld.applicationCategory, "LifestyleApplication");
});

test("appLd never emits aggregateRating or reviews", () => {
  for (const extra of [{}, { appStoreUrl: "https://apps.apple.com/app/id1" }]) {
    const s = JSON.stringify(build(extra));
    assert.equal(s.includes("aggregateRating"), false);
    assert.equal(s.includes("review"), false);
  }
});

test("faqLd maps q/a to Question/acceptedAnswer", () => {
  const ld = faqLd([{ q: "Q1?", a: "A1" }, { q: "Q2?", a: "A2" }]) as any;
  assert.equal(ld["@type"], "FAQPage");
  assert.equal(ld.mainEntity.length, 2);
  assert.deepEqual(ld.mainEntity[1], {
    "@type": "Question",
    name: "Q2?",
    acceptedAnswer: { "@type": "Answer", text: "A2" },
  });
});

test("every URL value is absolute https", () => {
  const outputs = [
    organizationLd({ hubOrigin: HUB, name: "appfactory", email: "a@b.c" }),
    websiteLd({ hubOrigin: HUB, name: "appfactory", langTag: "en" }),
    build({ appStoreUrl: "https://apps.apple.com/app/id1" }),
    build(),
    breadcrumbLd([{ name: "a", url: HUB }, { name: "b", url: `${HUB}/x` }]),
    hubItemListLd([{ name: "Demo", url: "https://demo.appfactory.sg" }]),
  ];
  for (const o of outputs) {
    const urls = urlValues(o);
    assert.ok(urls.length > 0);
    for (const u of urls) assert.match(u, /^https:\/\/[^/\s]+/, u);
  }
});

test("org and website ids are stable", () => {
  assert.equal((organizationLd({ hubOrigin: HUB, name: "x", email: "e" }) as any)["@id"], `${HUB}/#org`);
  const w = websiteLd({ hubOrigin: HUB, name: "x", langTag: "zh-CN" }) as any;
  assert.equal(w["@id"], `${HUB}/#website`);
  assert.equal(w.inLanguage, "zh-CN");
  assert.deepEqual(w.publisher, { "@id": `${HUB}/#org` });
});
