import localFont from "next/font/local";

// Shippori Mincho B1 (SIL OFL), Latin subset only, self-hosted: the Google
// build of this family is ~244 CJK slices, and fetching them all at build
// time times out. Chinese and Japanese text falls back to the system Mincho
// / Song faces listed in the theme's font stack.
const shippori = localFont({
  src: [
    { path: "./fonts/shippori-mincho-b1-700-latin.woff2", weight: "700" },
    { path: "./fonts/shippori-mincho-b1-800-latin.woff2", weight: "800" },
  ],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

export const sushiSortFontClass = shippori.variable;
