// Unit tests for the /go short-link resolver. Run: npm test (Node >= 23
// strips the TypeScript types natively; no test framework needed).

import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveGoLink, sanitizeCampaign } from "../src/lib/go-link.ts";

const APPS = [
  { slug: "tracesheet", appStoreUrl: "https://apps.apple.com/app/id6816287607?pt=1&ct=site&mt=8" },
  { slug: "both", appStoreId: "123", playStoreUrl: "https://play.google.com/store/apps/details?id=x" },
  { slug: "unreleased" },
];
const deps = { apex: "appfactory.sg", getApp: (s: string) => APPS.find((a) => a.slug === s) };

const UA = {
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)",
  ipad: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)",
  mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
  android: "Mozilla/5.0 (Linux; Android 14; Pixel 8)",
  windows: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
};

const apple = (id: string, ct: string) =>
  `https://apps.apple.com/app/apple-store/id${id}?pt=119559267&ct=${ct}&mt=8`;

test("Apple UAs go to the App Store with the campaign", () => {
  for (const ua of [UA.iphone, UA.ipad, UA.mac]) {
    assert.equal(resolveGoLink("/go/tracesheet/sheet", ua, deps), apple("6816287607", "sheet"));
  }
  assert.equal(resolveGoLink("/go/both", UA.iphone, deps), apple("123", "go"));
});

test("default and invalid campaigns become go", () => {
  assert.equal(resolveGoLink("/go/tracesheet", UA.iphone, deps), apple("6816287607", "go"));
  assert.equal(resolveGoLink("/go/tracesheet/", UA.iphone, deps), apple("6816287607", "go"));
  assert.equal(resolveGoLink("/go/tracesheet/a_b", UA.iphone, deps), apple("6816287607", "go"));
  assert.equal(sanitizeCampaign("Share"), "share");
  assert.equal(sanitizeCampaign("x".repeat(41)), "go");
  assert.equal(sanitizeCampaign("x".repeat(40)), "x".repeat(40));
  assert.equal(sanitizeCampaign("%3Cscript%3E"), "go");
});

test("Android gets Play when present, else the site", () => {
  assert.equal(resolveGoLink("/go/both/x", UA.android, deps), APPS[1].playStoreUrl);
  assert.equal(resolveGoLink("/go/tracesheet", UA.android, deps), "https://tracesheet.appfactory.sg/");
});

test("everything else, and apps with no store id, get the site", () => {
  assert.equal(resolveGoLink("/go/tracesheet", UA.windows, deps), "https://tracesheet.appfactory.sg/");
  assert.equal(resolveGoLink("/go/tracesheet", "", deps), "https://tracesheet.appfactory.sg/");
  assert.equal(resolveGoLink("/go/unreleased", UA.iphone, deps), "https://unreleased.appfactory.sg/");
  assert.equal(resolveGoLink("/go/TraceSheet", UA.windows, deps), "https://tracesheet.appfactory.sg/");
});

test("unknown or missing slug goes to the apex", () => {
  assert.equal(resolveGoLink("/go/nope", UA.iphone, deps), "https://appfactory.sg/");
  assert.equal(resolveGoLink("/go/", UA.iphone, deps), "https://appfactory.sg/");
  assert.equal(resolveGoLink("/go", UA.iphone, deps), "https://appfactory.sg/");
});
