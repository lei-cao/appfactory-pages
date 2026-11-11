// Popline for Mac pages (APPFA2-3): the rules that replace the iOS copy guard
// on /mac/*. Paddle reviews these pages before it approves the account, so
// the test pins what its review needs: a clear product and price, and terms,
// refund policy and privacy policy reachable from the navigation, with the
// seller's legal name and Paddle's Merchant of Record wording.
//
// Source checks always run. Rendered checks read the `next build` output
// (skipped without one; `npm run guard` builds first).

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import * as mac from "../src/content/popline-mac.ts";

const MOR =
  "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders.";
/** mkt-rules voice: banned words and the em dash. */
const VOICE = /—|\b(revolutionary|ultimate|game-changing|seamless|effortless|unlock|supercharge|elevate|best)\b/i;
/** A dollar amount: "$39", "$39.00", "$1,000". */
const PRICE_RE = /\$\s?\d+(?:,\d{3})*(?:\.\d+)?/g;
/** Paddle rejects blanket no-refund language. */
const NO_REFUNDS = /no refunds|all sales (are )?final|non-refundable/i;

function strings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, out));
  else if (value && typeof value === "object") Object.values(value).forEach((v) => strings(v, out));
  return out;
}

const ALL = strings({
  landing: mac.LANDING,
  support: mac.SUPPORT,
  terms: mac.TERMS,
  refunds: mac.REFUNDS,
  privacy: mac.PRIVACY,
});

test("one price: $39 for Pro, $0 for Free, nothing else", () => {
  assert.equal(mac.PRICE, "$39");
  assert.equal(mac.PRICE_NUMBER, "39");
  const amounts = ALL.flatMap((s) => s.match(PRICE_RE) ?? []);
  assert.ok(amounts.includes("$39"));
  assert.deepEqual([...new Set(amounts)].sort(), ["$0", "$39"]);
  assert.equal(ALL.some((s) => /discount|launch price|sale price|per month|\/mo\b|subscription price/i.test(s)), false);
});

test("terms: seller legal name, Paddle Merchant of Record wording verbatim, governing law, contact", () => {
  const terms = strings(mac.TERMS).join("\n");
  assert.equal(mac.SELLER, "APPFACTORY STUDIO PTE. LTD.");
  assert.ok(terms.includes(mac.SELLER));
  assert.ok(terms.includes(MOR), "Paddle's MoR sentence, word for word");
  assert.match(terms, /laws of Singapore/);
  assert.match(terms, /lei@appfactory\.sg/);
  for (const h of ["Acceptable use", "Ownership", "No guarantee", "Suspension and termination", "Refunds"])
    assert.ok(mac.TERMS.sections.some((s) => s.heading === h), `terms has "${h}"`);
});

test("refund policy: a 14 to 90 day window, how to ask via paddle.net, no blanket exclusions", () => {
  assert.ok(mac.REFUND_DAYS >= 14 && mac.REFUND_DAYS <= 90);
  const refunds = strings(mac.REFUNDS).join("\n");
  assert.ok(refunds.includes(`${mac.REFUND_DAYS} days`));
  assert.match(refunds, /paddle\.net/);
  assert.equal(NO_REFUNDS.test(ALL.join("\n")), false);
});

test("privacy: names the controller, Paddle as a recipient, the update check, the site analytics, user rights", () => {
  const p = strings(mac.PRIVACY).join("\n");
  assert.ok(p.includes(mac.SELLER));
  assert.match(p, /controller/);
  assert.match(p, /Paddle/);
  assert.match(p, /update/i);
  assert.match(p, /No system profile is sent/);
  assert.match(p, /Google Analytics/);
  assert.match(p, /Global Privacy Control/);
  assert.match(p, /within one month/);
});

test("copy follows mkt-rules voice: no em dash, no banned words", () => {
  const bad = ALL.filter((s) => VOICE.test(s));
  assert.deepEqual(bad, []);
});

test("buttons are placeholders until Paddle and 1.0 exist", () => {
  assert.equal(mac.MAC_LINKS.download, undefined);
  assert.equal(mac.MAC_LINKS.buy, undefined);
});

// ---- rendered ----

const BUILD = new URL("../.next/server/app/", import.meta.url);
const built = existsSync(new URL("en/apps/popline/mac.html", BUILD));

test("rendered Mac pages: all five exist in English, legal pages in the nav, one price", { skip: built ? false : "no .next build" }, () => {
  for (const { path } of mac.MAC_PAGES) {
    const f = new URL(`en/apps/popline/mac${path}.html`, BUILD);
    assert.ok(existsSync(f), `en/mac${path} rendered`);
    const html = readFileSync(f, "utf8");
    const meta = JSON.parse(readFileSync(new URL(`en/apps/popline/mac${path}.meta`, BUILD), "utf8"));
    assert.notEqual(meta.status, 404, `en/mac${path} is not a 404`);
    const where = `mac${path || "/"}`;
    assert.match(html, /<title>[^<]+<\/title>/, `${where}: title`);
    assert.match(html, /<link rel="canonical" href="https:\/\/popline\.appfactory\.sg\/mac/, `${where}: canonical`);
    for (const p of ["/terms", "/refunds", "/privacy", "/support"])
      assert.ok(html.includes(`href="/apps/popline/mac${p}"`), `${where}: links to mac${p}`);
    assert.ok(html.includes(mac.SELLER), `${where}: names the seller`);
    assert.ok(html.includes("Merchant of Record"), `${where}: says Paddle is the Merchant of Record`);
    // A Mac page must not carry the iOS Smart App Banner or point at the iOS legal pages.
    assert.equal(/apple-itunes-app/.test(html), false, `${where}: no iOS app banner`);
    assert.equal(/href="\/apps\/popline\/(privacy|support)"/.test(html), false, `${where}: no iOS legal links`);
    // Visible markup only: the RSC payload in <script> uses "$1"-style references.
    const visible = html.replace(/<script[\s\S]*?<\/script>/g, "");
    const amounts = [...new Set(visible.match(PRICE_RE) ?? [])].sort();
    assert.ok(amounts.every((a) => a === "$0" || a === "$39"), `${where}: prices ${amounts.join(", ")}`);
  }
  const landing = readFileSync(new URL("en/apps/popline/mac.html", BUILD), "utf8");
  assert.match(landing, /\$39/);
  assert.match(landing, /Free/);
  assert.match(landing, /"price":"39"/, "JSON-LD offer at 39");
  assert.match(landing, /editor\.webp/, "leads with the app screenshot");
  assert.match(landing, /data-placeholder="true"/, "buttons are placeholders");
});

test("rendered Mac pages: zh-cn and zh-tw are 404 (English only)", { skip: built ? false : "no .next build" }, () => {
  for (const l of ["zh-cn", "zh-tw"])
    for (const { path } of mac.MAC_PAGES) {
      const f = new URL(`${l}/apps/popline/mac${path}.meta`, BUILD);
      if (!existsSync(f)) continue; // not prerendered at all is also fine
      assert.equal(JSON.parse(readFileSync(f, "utf8")).status, 404, `${l}/mac${path}`);
    }
});

test("rendered iOS pages do not pick up the Mac shell", { skip: built ? false : "no .next build" }, () => {
  for (const l of ["en", "zh-cn", "zh-tw"])
    for (const p of ["", "/privacy", "/support"]) {
      const html = readFileSync(new URL(`${l}/apps/popline${p}.html`, BUILD), "utf8");
      assert.equal(html.includes("mac-site"), false, `${l}${p || "/"}`);
    }
});
