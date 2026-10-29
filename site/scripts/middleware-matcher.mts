// `middlewareRuns(path)`: whether src/middleware.ts runs for a path. Reads
// `config.matcher` from the source and compiles it with Next's own matcher
// code, so tests see exactly what Next does.

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { getMiddlewareMatchers } = require("next/dist/build/analysis/get-page-static-info.js");
const { getMiddlewareRouteMatcher } = require("next/dist/shared/lib/router/utils/middleware-route-matcher.js");

const src = readFileSync(new URL("../src/middleware.ts", import.meta.url), "utf8");
const raw = src.match(/^\s*matcher:\s*(\[.*\]),?$/m)?.[1];
if (!raw) throw new Error("src/middleware.ts must declare `matcher: [...]` on one line");
const matches = getMiddlewareRouteMatcher(getMiddlewareMatchers(JSON.parse(raw), {}));

export const middlewareRuns = (path: string): boolean => matches(path, { headers: {}, cookies: {} }, {});
