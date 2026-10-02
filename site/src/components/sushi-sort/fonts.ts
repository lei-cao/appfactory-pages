// Sushi Sort's display face: Shippori Mincho B1, the same mincho serif the
// game uses for its level plaques and order tickets. Self-hosted at build
// time by next/font (latin subset; CJK falls through to the system mincho /
// song faces in globals.css). preload is off because the [slug] layout
// imports this for every app site.

import { Shippori_Mincho_B1 } from "next/font/google";

const shippori = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

export const sushiSortFontClass = shippori.variable;
