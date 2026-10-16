// Decoder tests for shared TraceSheet lists. Run: npm test. The fixtures in
// tracesheet-share-fixtures.json are made by the Dart encoder in the app repo
// (`dart run tool/gen_share_fixtures.dart`, apps/tracesheet) and committed
// unchanged on both sides; this proves the browser decoder reads what the app
// writes.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { deflateRawSync } from "node:zlib";
import { decodeShareFragment, segments, MAX_FRAGMENT_CHARS } from "../src/lib/share-list.ts";

const fixtures = JSON.parse(
  readFileSync(new URL("./tracesheet-share-fixtures.json", import.meta.url), "utf8"),
);

const b64url = (b: Uint8Array) => Buffer.from(b).toString("base64url");
const wrap = (json: unknown, version = 1) =>
  b64url(Buffer.concat([Buffer.from([version]), deflateRawSync(Buffer.from(JSON.stringify(json)))]));

test("fixtures are format version 1", () => {
  assert.equal(fixtures.version, 1);
});

for (const c of fixtures.cases) {
  test(`decodes the Dart fixture ${c.name}`, async () => {
    const r = await decodeShareFragment(c.fragment);
    assert.ok(r.ok, `expected ok, got ${JSON.stringify(r)}`);
    assert.equal(r.list.id, c.expected.id);
    assert.equal(r.list.name, c.expected.name);
    assert.deepEqual(r.list.items, c.expected.items);
    assert.equal(c.link, `https://appfactory.sg/go/tracesheet/l#${c.fragment}`);
  });
}

for (const b of fixtures.bad) {
  test(`refuses the Dart fixture ${b.name} as ${b.error}`, async () => {
    const r = await decodeShareFragment(b.fragment);
    assert.deepEqual(r, { ok: false, error: b.error });
  });
}

test("target segments split a marked sentence into context and blanks", async () => {
  const c = fixtures.cases.find((x: { name: string }) => x.name === "sentences_and_targets");
  const r = await decodeShareFragment(c.fragment);
  assert.ok(r.ok);
  assert.deepEqual(segments(r.list.items[1]), [
    { text: "我们在", isTarget: false },
    { text: "公园", isTarget: true },
    { text: "里", isTarget: false },
    { text: "唱歌", isTarget: true },
    { text: "。", isTarget: false },
  ]);
  assert.deepEqual(segments(r.list.items[0]), [{ text: r.list.items[0].text, isTarget: true }]);
});

test("over-long and malformed fragments are not shares", async () => {
  assert.deepEqual(await decodeShareFragment("A".repeat(MAX_FRAGMENT_CHARS + 1)), { ok: false, error: "notShare" });
  assert.deepEqual(await decodeShareFragment("abc def"), { ok: false, error: "notShare" });
  assert.deepEqual(await decodeShareFragment("A"), { ok: false, error: "corrupt" });
});

test("a zip bomb stops at the cap", async () => {
  const bomb = wrap({ n: "x", pad: "a".repeat(2 * 1024 * 1024) });
  assert.deepEqual(await decodeShareFragment(bomb), { ok: false, error: "tooLarge" });
});

test("invalid items and targets are refused", async () => {
  const bad = [
    { n: "x", x: [{ t: "春天", k: "cn", tg: [[0, 5]] }] },
    { n: "x", x: [{ t: "春天", k: "cn", tg: [[1, 1]] }] },
    { n: "x", x: [{ t: "春天", k: "cn", tg: [[-1, 1]] }] },
    { n: "x", x: [{ t: "我们在公园", k: "cn", tg: [[0, 3], [2, 4]] }] },
    { n: "x", x: [{ t: "我们在公园", k: "cn", tg: [[3, 5], [0, 2]] }] },
    { n: "x", x: [{ t: "春天", k: "cn", tg: [[0.5, 1]] }] },
    { n: "x", x: [{ t: "a😀b", k: "cn", tg: [[2, 3]] }] },
    { n: "x", x: [{ t: "a", k: "martian" }] },
    { n: "x", x: [{ t: "  ", k: "en" }] },
    { n: "x", x: [{ t: "a\u0000b", k: "en" }] },
    { n: "x", x: [] },
    { n: "", x: [{ t: "a", k: "en" }] },
    [1, 2],
  ];
  for (const json of bad) {
    assert.deepEqual(await decodeShareFragment(wrap(json)), { ok: false, error: "invalid" }, JSON.stringify(json));
  }
  assert.deepEqual(await decodeShareFragment(wrap({ n: "x", x: [{ t: "a", k: "en" }] }, 2)), {
    ok: false,
    error: "unsupportedVersion",
  });
});

test("random corruption never throws", async () => {
  const good = Buffer.from(fixtures.cases[0].fragment, "base64url");
  let seed = 42;
  const rnd = (n: number) => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) % n);
  for (let i = 0; i < 200; i++) {
    const b = Buffer.from(good);
    for (let k = 0; k < 1 + rnd(4); k++) b[1 + rnd(b.length - 1)] = rnd(256);
    const r = await decodeShareFragment(b64url(b));
    assert.equal(typeof r.ok, "boolean");
  }
});
