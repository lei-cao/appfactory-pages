// Poker Night's display face: Fraunces, the app's own headline font (brand
// "Midnight Chip": navy, gold, cream). preload is off because the [slug]
// layout imports this for every app site; only poker-night pages use it.

import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});

export const pokerNightFontClass = fraunces.variable;
