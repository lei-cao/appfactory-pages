import localFont from "next/font/local";

// LingoWonders' two Latin faces, self-hosted (Latin subsets): Source Serif 4
// for headings, the textbook voice, and Figtree for text. Chinese, Japanese
// and Korean fall through to the platform's own faces (Songti / PingFang /
// Kaiti and friends) listed in site.css, so no CJK webfont is downloaded.
const serif = localFont({
  src: [{ path: "./fonts/source-serif-4-var-latin.woff2", weight: "400 700" }],
  variable: "--lw-font-serif",
  display: "swap",
});

const figtree = localFont({
  src: [{ path: "./fonts/figtree-var-latin.woff2", weight: "400 600" }],
  variable: "--lw-font-sans",
  display: "swap",
});

export const tracesheetFontClass = `${serif.variable} ${figtree.variable}`;
