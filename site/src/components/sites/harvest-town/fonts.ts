import localFont from "next/font/local";

// Besley (a fat Clarendon, the face of a country-fair bill) over Libre
// Franklin (text), both SIL OFL, Latin subsets, self-hosted. Chinese text
// falls back to the system faces listed in site.css.
const besley = localFont({
  src: [{ path: "./fonts/besley-800-latin.woff2", weight: "800" }],
  variable: "--font-hollow-display",
  display: "swap",
});

const franklin = localFont({
  src: [
    { path: "./fonts/libre-franklin-400-latin.woff2", weight: "400" },
    { path: "./fonts/libre-franklin-600-latin.woff2", weight: "600" },
  ],
  variable: "--font-hollow-text",
  display: "swap",
});

export const haystackFontClass = `${besley.variable} ${franklin.variable}`;
