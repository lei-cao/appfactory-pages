import localFont from "next/font/local";

// Boska (Indian Type Foundry, via Fontshare; free for commercial and web use),
// self-hosted so builds never fetch fonts. Latin only: Chinese text falls
// back to the system Song / Ming faces listed in site.css.
const boska = localFont({
  src: [
    { path: "./fonts/boska-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/boska-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/boska-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-boska",
  display: "swap",
});

export const tileTrioFontClass = boska.variable;
