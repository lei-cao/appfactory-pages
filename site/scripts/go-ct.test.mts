// Unit tests for the landing-page half of /go links (src/lib/go-ct.ts): a
// visitor sent to the landing page carries the go source onto that app's App
// Store buttons as ct=. Run: npm test.

import { test } from "node:test";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { goArrival, goStoreHref, parseArrival } from "../src/lib/go-ct.ts";

const PN = "6788786222";
const pnStore = (ct: string) => `https://apps.apple.com/app/apple-store/id${PN}?pt=119559267&ct=${ct}&mt=8`;

test("the landing URL /go/poker-night/share-night redirects to is a go arrival", () => {
  // Exactly what lib/go-link.ts landingUrl produces (and go-link.test.mts pins).
  assert.deepEqual(goArrival("?utm_source=share-night&utm_medium=go&utm_campaign=poker-night"), {
    source: "share-night",
    slug: "poker-night",
  });
  assert.deepEqual(goArrival("?utm_source=share-hand&utm_medium=go&utm_campaign=poker-night"), {
    source: "share-hand",
    slug: "poker-night",
  });
  assert.deepEqual(goArrival("?utm_source=go&utm_medium=go&utm_campaign=poker-night"), { source: "go", slug: "poker-night" });
});

test("anything that isn't a go arrival is ignored, never defaulted", () => {
  for (const search of [
    "",
    "?ref=x",
    // Cross-promo links (tiltfree.ts, poker-night landing) are referral, not go.
    "?utm_source=appfactory.sg&utm_medium=referral&utm_campaign=crosspromo",
    "?utm_source=poker-night.appfactory.sg&utm_medium=referral&utm_campaign=crosspromo",
    "?utm_source=share-night&utm_campaign=poker-night",
    "?utm_source=share-night&utm_medium=GO&utm_campaign=poker-night",
    "?utm_source=Share-Night&utm_medium=go&utm_campaign=poker-night",
    "?utm_source=a.b&utm_medium=go&utm_campaign=poker-night",
    `?utm_source=${"a".repeat(41)}&utm_medium=go&utm_campaign=poker-night`,
    "?utm_source=share-night&utm_medium=go",
    "?utm_source=&utm_medium=go&utm_campaign=poker-night",
  ]) {
    assert.equal(goArrival(search), null, search);
  }
});

test("every placement ct on the arrival app becomes the go source", () => {
  for (const placement of ["site", "site-hero", "site-header", "site-price", "site-guide"]) {
    assert.equal(goStoreHref(pnStore(placement), "share-night", PN), pnStore("share-night"));
  }
});

test("App Store links without campaign params get pt/ct/mt added", () => {
  assert.equal(
    goStoreHref("https://apps.apple.com/app/id6794833643", "qr", "6794833643"),
    "https://apps.apple.com/app/id6794833643?pt=119559267&ct=qr&mt=8",
  );
  assert.equal(
    goStoreHref("https://apps.apple.com/us/app/sushi-sort-calm-color-puzzle/id6792529319", "share", "6792529319"),
    "https://apps.apple.com/us/app/sushi-sort-calm-color-puzzle/id6792529319?pt=119559267&ct=share&mt=8",
  );
});

test("other apps' App Store links and non-store links are left alone", () => {
  // TiltFree cross-promo on the Poker Night page keeps its own attribution.
  assert.equal(goStoreHref("https://apps.apple.com/app/id6758140114", "share-night", PN), null);
  // id prefix must not match a longer id.
  assert.equal(goStoreHref(`https://apps.apple.com/app/id${PN}1`, "share-night", PN), null);
  assert.equal(goStoreHref("https://apps.apple.com/developer/lei-cao/id1448332242", "share-night", PN), null);
  assert.equal(goStoreHref("https://play.google.com/store/apps/details?id=sg.appfactory.poker_night", "share-night", PN), null);
  assert.equal(goStoreHref(`https://evil.example/apps.apple.com/app/id${PN}`, "share-night", PN), null);
  assert.equal(goStoreHref("/en/guides", "share-night", PN), null);
  // A link that is itself a campaign (shared-list page, go/tracesheet/l) keeps it.
  assert.equal(goStoreHref("https://apps.apple.com/app/apple-store/id6816287607?pt=119559267&ct=list&mt=8", "qr", "6816287607"), null);
  assert.equal(goStoreHref(pnStore("sitemap"), "share-night", PN), null);
  // Already right: no rewrite needed.
  assert.equal(goStoreHref(pnStore("share-night"), "share-night", PN), null);
});

test("a stored arrival is re-validated", () => {
  assert.deepEqual(parseArrival('{"source":"share-hand","slug":"poker-night"}'), { source: "share-hand", slug: "poker-night" });
  for (const raw of [null, "", "nope", "{}", '{"source":"a b","slug":"poker-night"}', '{"source":"x","slug":1}', "null"]) {
    assert.equal(parseArrival(raw), null, String(raw));
  }
});

test("the root layout mounts GoCt", () => {
  const layout = readFileSync(new URL("../src/app/[locale]/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /<GoCt appleIds=\{APPLE_IDS\} \/>/);
});
