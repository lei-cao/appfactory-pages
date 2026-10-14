// Hub-only picture data. Posters are each app's real store screenshots
// (apps/<dir>/fastlane/screenshots in the appfactory repo; TiltFree's from its
// live App Store listing), converted to 860px webp in public/hub/posters as
// <slug>-<n>-<locale>.webp. Re-run the conversion when a store listing changes.

import type { Locale } from "@/lib/i18n";

/** Your developer page: the hub's one solid action. */
export const APP_STORE_DEVELOPER_URL =
  "https://apps.apple.com/developer/lei-cao/id1448332242";

/** Locales each app has posters in; the rest fall back (see poster()). */
const POSTER_LOCALES: Record<string, Locale[]> = {
  "poker-night": ["en", "zh-cn"],
  tiltfree: ["en", "zh-tw"],
  tracesheet: ["en", "zh-cn", "zh-tw"],
  "sushi-sort": ["en"],
  "ember-deck": ["en", "zh-cn"],
  "arrow-out": ["en"],
  "tile-trio": ["en"],
  "slide-jam": ["en"],
};

/** Posters 1–3 exist for every app above. */
export const POSTER_COUNT = 3;

/** Store poster n for an app, in the page's language when it exists. */
export function poster(slug: string, n: number, locale: Locale): string | null {
  const have = POSTER_LOCALES[slug];
  if (!have) return null;
  const order: Locale[] =
    locale === "zh-cn" ? ["zh-cn", "zh-tw", "en"] : locale === "zh-tw" ? ["zh-tw", "zh-cn", "en"] : ["en"];
  const l = order.find((x) => have.includes(x)) ?? "en";
  return `/hub/posters/${slug}-${n}-${l}.webp`;
}

/** Store posters are 1290×2796 (6.9" iPhone); TiltFree's are 860×1864. */
export const POSTER_SIZE = { width: 860, height: 1864 };

/** Hero crossfade, in order: the most colourful posters first. */
export const HERO_SLUGS = ["slide-jam", "sushi-sort", "ember-deck", "poker-night"];

/** The Apps section, in reading order: writing, then the poker family. */
export const APP_ORDER = ["tracesheet", "poker-night", "tiltfree"];

/** Ember Deck's gameplay loop replaces its poster in the games index. */
export const LOOPS: Record<string, { src: Partial<Record<Locale, string>>; poster: string }> = {
  "ember-deck": {
    src: {
      en: "/apps/ember-deck/v2/video/gameplay-en.mp4",
      "zh-cn": "/apps/ember-deck/v2/video/gameplay-zh.mp4",
      "zh-tw": "/apps/ember-deck/v2/video/gameplay-zh.mp4",
    },
    poster: "/apps/ember-deck/v2/video/gameplay-en.webp",
  },
};

/** thinking.poker: the studio's poker study website. */
export const THINKING_POKER = {
  url: { en: "https://thinking.poker/en", "zh-cn": "https://thinking.poker/zh-CN", "zh-tw": "https://thinking.poker/zh-TW" } as Record<Locale, string>,
  /** Screens captured from the live site, 1200×1000 webp. */
  shots: ["home", "equity", "preflop", "trainer"] as const,
  shot: (name: string, locale: Locale) => `/hub/thinking-poker/${name}-${locale}.webp`,
};
