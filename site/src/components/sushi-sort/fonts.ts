import localFont from "next/font/local";

// Shippori Mincho B1 (SIL OFL), the game's own typeface, Latin subset only,
// self-hosted: the Google build of this family is ~244 CJK slices, and
// fetching them at build time times out. Chinese and Japanese text falls
// back to the system Mincho / Song faces listed in the site's font stack.
const shippori = localFont({
  src: [
    { path: "./fonts/shippori-mincho-b1-400-latin.woff2", weight: "400" },
    { path: "./fonts/shippori-mincho-b1-500-latin.woff2", weight: "500" },
    { path: "./fonts/shippori-mincho-b1-700-latin.woff2", weight: "700" },
  ],
  variable: "--font-shippori",
  display: "swap",
});

export const sushiSortFontClass = shippori.variable;
