import { test } from "node:test";
import assert from "node:assert/strict";
import { cannonCubes } from "../src/content/cannon-cubes.ts";
import { decideHost } from "../src/lib/host-routing.ts";

test("Otter Harbor keeps old paths and queries across the host redirect", () => {
  assert.equal(cannonCubes.slug, "cannon-cubes");
  assert.equal(cannonCubes.host, "otter-harbor");
  for (const pathname of ["/", "/privacy", "/zh-cn/support", "/zh-tw/privacy", "/en/privacy"]) {
    assert.deepEqual(decideHost({ host: "cannon-cubes.appfactory.sg", pathname, search: "?source=test", apex: "appfactory.sg", apps: [cannonCubes] }), {
      action: "redirect-external",
      location: `https://otter-harbor.appfactory.sg${pathname}?source=test`,
    });
  }
});
