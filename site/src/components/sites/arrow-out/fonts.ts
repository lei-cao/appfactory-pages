import localFont from "next/font/local";

// Clash Grotesk (Indian Type Foundry, ITF Free Font License, via Fontshare),
// Latin only, self-hosted: builds never fetch fonts. Chinese falls back to the
// platform's sans faces listed in site.css.
const clash = localFont({
  src: [
    { path: "./fonts/clash-grotesk-400.woff2", weight: "400" },
    { path: "./fonts/clash-grotesk-500.woff2", weight: "500" },
  ],
  variable: "--font-ao-clash",
  display: "swap",
});

export const arrowOutFontClass = clash.variable;
