// Which paths reach the middleware at all (Next's own matcher code, see
// middleware-matcher.mts), so a /go path that never reaches the resolver
// fails here. Run: npm test. The end-to-end HTTP check is
// scripts/go-http.e2e.mts (npm run build && npm run test:http).

import { test } from "node:test";
import assert from "node:assert/strict";
import { middlewareRuns as runs } from "./middleware-matcher.mts";

test("every /go path reaches the middleware, dots included", () => {
  for (const path of [
    "/go",
    "/go/",
    "/go/poker-night/qr",
    "/go/poker-night/a.b",
    "/go/poker-night/v1.2",
    "/go/no.such/qr",
    "/go/tracesheet/l",
    "/go/x.png",
  ]) {
    assert.equal(runs(path), true, path);
  }
});

test("pages still run, static assets and Next internals still skip", () => {
  for (const path of ["/", "/en", "/en/apps", "/privacy", "/gopher"]) assert.equal(runs(path), true, path);
  for (const path of ["/app-ads.txt", "/brand/logo.png", "/goat.png", "/_next/static/chunks/a.js", "/_vercel/insights/script.js"]) {
    assert.equal(runs(path), false, path);
  }
});
