// Ember Deck's two typefaces (ux-v2 §1.4), self-hosted at build time by
// next/font. Grenze Gotisch is display-only (≥ 22pt headings); Alegreya Sans
// carries everything else. preload is off because the [slug] layout imports
// this for every app site — only ember-deck pages actually use the faces,
// and the size-adjusted fallbacks keep layout shift negligible.

import { Alegreya_Sans, Grenze_Gotisch } from "next/font/google";

const grenze = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-grenze",
  display: "swap",
  preload: false,
});

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-alegreya",
  display: "swap",
  preload: false,
});

export const emberDeckFontClass = `${grenze.variable} ${alegreya.variable}`;
