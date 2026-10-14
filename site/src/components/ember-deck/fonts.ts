// Ember Deck's two typefaces (ux-v2 §1.4), self-hosted from ./fonts (Latin
// subsets, fetched with scripts/self-host-font.mjs) so builds never download
// from Google. Grenze Gotisch is display-only (≥ 22pt headings); Alegreya
// Sans carries everything else. preload is off: the size-adjusted fallbacks
// keep layout shift negligible.

import localFont from "next/font/local";

const grenze = localFont({
  src: [
    { path: "./fonts/grenze-gotisch-700-latin.woff2", weight: "700" },
    { path: "./fonts/grenze-gotisch-900-latin.woff2", weight: "900" },
  ],
  variable: "--font-grenze",
  display: "swap",
  preload: false,
});

const alegreya = localFont({
  src: [
    { path: "./fonts/alegreya-sans-500-latin.woff2", weight: "500" },
    { path: "./fonts/alegreya-sans-700-latin.woff2", weight: "700" },
    { path: "./fonts/alegreya-sans-800-latin.woff2", weight: "800" },
  ],
  variable: "--font-alegreya",
  display: "swap",
  preload: false,
});

export const emberDeckFontClass = `${grenze.variable} ${alegreya.variable}`;
