// Fraunces, self-hosted from ./fonts (Latin subset, fetched with
// scripts/self-host-font.mjs) so builds never download from Google.
import localFont from "next/font/local";

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-400-latin.woff2", weight: "400" },
    { path: "./fonts/fraunces-600-latin.woff2", weight: "600" },
  ],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});

export const pokerNightFontClass = fraunces.variable;
