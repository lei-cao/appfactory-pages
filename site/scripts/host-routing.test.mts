// Host routing: renamed-app redirects, rewrites, locale handling, sitemap and
// canonical origins. Run: npm test.

import { test } from "node:test";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { decideHost, renamedLabels, slugForLabel } from "../src/lib/host-routing.ts";
import { ROUTING_LOCALES } from "../src/lib/host-routing.ts";
import { LOCALES } from "../src/lib/i18n.ts";
import { HOST_SLUGS } from "../src/lib/analytics.ts";
import { appHost, appOrigin } from "../src/lib/site.ts";

const APEX = "appfactory.sg";
const APPS = [
  { slug: "tracesheet", host: "lingowonders" },
  { slug: "sushi-sort" },
  { slug: "poker-night" },
];
const route = (host: string, pathname: string, search = "", port = "") =>
  decideHost({ host, port, pathname, search, apex: APEX, apps: APPS });

test("locale constants mirror lib/i18n", () => {
  assert.deepEqual([...ROUTING_LOCALES], [...LOCALES]);
});

test("old tracesheet host 308s to the same path on lingowonders", () => {
  for (const [path, search] of [
    ["/", ""],
    ["/privacy", ""],
    ["/zh-cn/support", ""],
    ["/guide/x", "?a=1"],
  ]) {
    assert.deepEqual(route("tracesheet.appfactory.sg", path, search), {
      action: "redirect-external",
      location: `https://lingowonders.appfactory.sg${path}${search}`,
    });
  }
});

test("tracesheet.localhost redirects to lingowonders.localhost, keeping the port", () => {
  assert.deepEqual(route("tracesheet.localhost", "/zh-tw/privacy", "?q=1", "3000"), {
    action: "redirect-external",
    location: "http://lingowonders.localhost:3000/zh-tw/privacy?q=1",
  });
});

test("new host serves the tracesheet app", () => {
  for (const host of ["lingowonders.appfactory.sg", "lingowonders.localhost"]) {
    assert.deepEqual(route(host, "/"), { action: "rewrite", pathname: "/en/apps/tracesheet" });
    assert.deepEqual(route(host, "/zh-cn/support"), {
      action: "rewrite",
      pathname: "/zh-cn/apps/tracesheet/support",
    });
  }
});

test("new host cleans path-style /apps/tracesheet", () => {
  assert.deepEqual(route("lingowonders.appfactory.sg", "/apps/tracesheet/support"), {
    action: "redirect-path",
    pathname: "/support",
  });
  assert.deepEqual(route("lingowonders.appfactory.sg", "/zh-cn/apps/tracesheet"), {
    action: "redirect-path",
    pathname: "/zh-cn/",
  });
});

test("other apps are unchanged", () => {
  assert.deepEqual(route("sushi-sort.appfactory.sg", "/privacy"), {
    action: "rewrite",
    pathname: "/en/apps/sushi-sort/privacy",
  });
  assert.deepEqual(route("poker-night.appfactory.sg", "/zh-tw"), {
    action: "rewrite",
    pathname: "/zh-tw/apps/poker-night",
  });
  assert.deepEqual(route("poker-night.appfactory.sg", "/apps/poker-night/support"), {
    action: "redirect-path",
    pathname: "/support",
  });
});

test("calm-sort still redirects to sushi-sort; www to apex", () => {
  assert.deepEqual(route("calm-sort.appfactory.sg", "/support", "?x=1"), {
    action: "redirect-external",
    location: "https://sushi-sort.appfactory.sg/support?x=1",
  });
  assert.deepEqual(route("www.appfactory.sg", "/zh-cn", "?a=b"), {
    action: "redirect-external",
    location: "https://appfactory.sg/zh-cn?a=b",
  });
});

test("hub host and /en stripping", () => {
  assert.deepEqual(route("appfactory.sg", "/"), { action: "rewrite", pathname: "/en" });
  assert.deepEqual(route("appfactory.sg", "/apps/tracesheet"), {
    action: "rewrite",
    pathname: "/en/apps/tracesheet",
  });
  assert.deepEqual(route("appfactory.sg", "/en/x"), { action: "redirect-path", pathname: "/x" });
  assert.deepEqual(route("lingowonders.appfactory.sg", "/en"), {
    action: "redirect-path",
    pathname: "/",
  });
  // deeper hosts (preview URLs) are not app hosts
  assert.deepEqual(route("x.y.localhost", "/"), { action: "rewrite", pathname: "/en" });
});

test("rename table is derived from the registry", () => {
  assert.equal(renamedLabels(APPS)["tracesheet"], "lingowonders");
  assert.equal(renamedLabels(APPS)["calm-sort"], "sushi-sort");
  assert.equal(slugForLabel("lingowonders", APPS), "tracesheet");
  assert.equal(slugForLabel("poker-night", APPS), "poker-night");
});

test("app origins come from host ?? slug", () => {
  assert.equal(appHost({ slug: "tracesheet", host: "lingowonders" }), "lingowonders");
  assert.equal(appOrigin({ slug: "tracesheet", host: "lingowonders" }), "https://lingowonders.appfactory.sg");
  assert.equal(appOrigin({ slug: "poker-night" }), "https://poker-night.appfactory.sg");
  assert.equal(appOrigin("poker-night"), "https://poker-night.appfactory.sg");
});

test("analytics HOST_SLUGS matches the registry hosts", () => {
  // The registry uses the "@/" alias, so read the app content as text.
  const src = readFileSync(new URL("../src/content/tracesheet.ts", import.meta.url), "utf8");
  assert.match(src, /slug: "tracesheet",\s*host: "lingowonders"/);
  assert.deepEqual(HOST_SLUGS, { lingowonders: "tracesheet" });
});

test("no module in the app builds a tracesheet.appfactory.sg URL", () => {
  for (const f of ["../src/app/sitemap.ts", "../src/app/llms.txt/route.ts", "../src/lib/seo.tsx"]) {
    assert.ok(!readFileSync(new URL(f, import.meta.url), "utf8").includes("tracesheet.appfactory.sg"), f);
  }
});
