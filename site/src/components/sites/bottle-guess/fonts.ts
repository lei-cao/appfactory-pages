import localFont from "next/font/local";

// Bricolage Grotesque (SIL OFL), Latin subset, self-hosted variable file:
// heavy at display sizes, plain at text sizes. Chinese text falls back to
// the system sans faces listed in site.css.
const bricolage = localFont({
  src: [{ path: "./fonts/bricolage-grotesque-var-latin.woff2", weight: "400 800" }],
  variable: "--font-canswap",
  display: "swap",
});

export const canSwapFontClass = bricolage.variable;
