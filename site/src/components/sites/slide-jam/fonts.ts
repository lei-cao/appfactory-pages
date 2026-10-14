import localFont from "next/font/local";

// Epilogue (SIL OFL), variable 400–900, Latin subset, self-hosted (Google
// Fonts downloads time out at build time). Chinese falls back to the system
// faces listed in --sj-display in site.css.
const epilogue = localFont({
  src: [{ path: "./fonts/epilogue-var-latin.woff2", weight: "400 900" }],
  variable: "--font-epilogue",
  display: "swap",
});

export const slideJamFontClass = epilogue.variable;
