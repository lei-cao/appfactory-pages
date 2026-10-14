// Ember Deck's two faces, self-hosted from ./fonts (Latin subsets fetched with
// scripts/self-host-font.mjs) so builds never download from Google: Young
// Serif for display, Source Serif 4 (variable 400–700) for reading. Chinese
// falls through to the system serif faces listed in site.css.

import localFont from "next/font/local";

const youngSerif = localFont({
  src: [{ path: "./fonts/young-serif-400-latin.woff2", weight: "400" }],
  variable: "--font-ed-display",
  display: "swap",
});

const sourceSerif = localFont({
  src: [{ path: "./fonts/source-serif-4-var-latin.woff2", weight: "400 700" }],
  variable: "--font-ed-text",
  display: "swap",
});

export const emberDeckFontClass = `${youngSerif.variable} ${sourceSerif.variable}`;
