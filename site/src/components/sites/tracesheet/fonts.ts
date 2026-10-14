import localFont from "next/font/local";

// TraceSheet's two faces, self-hosted (Latin subsets, fetched with
// scripts/self-host-font.mjs): League Spartan 700 for display, Figtree for
// text. Chinese, Japanese and Korean fall through to the platform faces
// listed in site.css.
const spartan = localFont({
  src: [{ path: "./fonts/league-spartan-700-latin.woff2", weight: "700" }],
  variable: "--ts-font-spartan",
  display: "swap",
});

const figtree = localFont({
  src: [{ path: "./fonts/figtree-var-latin.woff2", weight: "400 600" }],
  variable: "--ts-font-figtree",
  display: "swap",
});

export const tracesheetFontClass = `${spartan.variable} ${figtree.variable}`;
