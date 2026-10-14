#!/usr/bin/env node
// Download a Google Fonts family's Latin woff2 files into
// the repo so next/font/local can serve them. Builds then never fetch fonts
// from Google, which times out from some networks.
//
//   node scripts/self-host-font.mjs "<Family Name>" <weights> <out dir>
//   node scripts/self-host-font.mjs "Fraunces" 400,600 src/components/poker-night/fonts
//
// weights: comma list (400,600) or "400..700" for a variable range.
// Latin subset only: next/font/local cannot give each file its own
// unicode-range, so a second subset for the same weight would shadow the
// first. CJK text falls back to the platform's faces via the font stack.
// Prints the next/font/local `src` array to paste into the font module.

import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const [family, weightsArg, outDir] = process.argv.slice(2);
if (!family || !weightsArg || !outDir) {
  console.error('usage: self-host-font.mjs "<Family>" <400,700|400..700> <out dir>');
  process.exit(2);
}
const range = weightsArg.includes("..");
const weights = range ? [weightsArg.replace("..", " ")] : weightsArg.split(",");
const slug = family.toLowerCase().replace(/\s+/g, "-");
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

// curl, not fetch: Node's fetch to Google Fonts times out on some networks
// where curl does not.
function get(url, type) {
  const out = execFileSync(
    "curl",
    ["-sfL", "--retry", "4", "--retry-all-errors", "--max-time", "30", "-A", UA, url],
    { maxBuffer: 64 * 1024 * 1024 },
  );
  return type === "text" ? out.toString("utf8") : out;
}

await mkdir(outDir, { recursive: true });
const src = [];
for (const w of weights) {
  const axis = range ? w.replace(" ", "..") : w;
  const css = get(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${axis}&display=swap`,
    "text",
  );
  // Blocks look like: /* latin */ @font-face { ... src: url(...) format('woff2'); unicode-range: ...; }
  for (const block of css.split("/* ").slice(1)) {
    const subset = block.slice(0, block.indexOf(" */"));
    if (subset !== "latin") continue;
    const url = block.match(/url\((https:[^)]+)\)/)?.[1];
    if (!url) continue;
    const file = `${slug}-${range ? "var" : w}-${subset}.woff2`;
    await writeFile(join(outDir, file), get(url));
    // path as seen from a font module that sits next to the out dir
    src.push({ path: `./${basename(outDir)}/${file}`, weight: w });
  }
}
console.error(`saved ${src.length} file(s) to ${outDir}`);
console.log(JSON.stringify(src, null, 2));
