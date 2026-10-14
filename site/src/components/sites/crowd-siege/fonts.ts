import localFont from "next/font/local";

// Big Shoulders (condensed capitals for the poster lines) over Public Sans
// (text), both SIL OFL, Latin subsets, self-hosted. Chinese text falls back
// to the system sans faces listed in site.css.
const shoulders = localFont({
  src: [{ path: "./fonts/big-shoulders-800-latin.woff2", weight: "800" }],
  variable: "--font-siege-display",
  display: "swap",
});

const publicSans = localFont({
  src: [
    { path: "./fonts/public-sans-400-latin.woff2", weight: "400" },
    { path: "./fonts/public-sans-600-latin.woff2", weight: "600" },
  ],
  variable: "--font-siege-text",
  display: "swap",
});

export const crowdSiegeFontClass = `${shoulders.variable} ${publicSans.variable}`;
