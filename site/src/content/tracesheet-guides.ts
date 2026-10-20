// LingoWonders guides: /guide and /guide/<id>, in all three locales.
//
// Contract used by the sitemap: every id in TRACESHEET_GUIDE_IDS renders at
// /guide/<id> in en, zh-cn and zh-tw, and tracesheetGuideUpdated(id) is its
// lastModified date.
//
// The bodies live in ./tracesheet-guides/<locale>.ts. Facts come from the
// 2.1 store copy (fastlane/metadata/ios/*/description.txt, release_notes.txt)
// and the app's own Help & FAQ; button and screen names are the app's ARB
// strings (lib/l10n/app_en.arb, app_zh_Hans.arb, app_zh_Hant.arb). In body
// text, [[Label]] marks an in-app label and renders as a UI chip.

import type { Locale } from "@/lib/i18n";
import { guidesEn } from "./tracesheet-guides/en";
import { guidesZhCn } from "./tracesheet-guides/zh-cn";
import { guidesZhTw } from "./tracesheet-guides/zh-tw";

const GUIDE_IDS = [
  "getting-started",
  "read-anything",
  "share-to-lingowonders",
  "listen-and-say",
  "week-pack",
  "write-stroke-by-stroke",
  "dictation-and-paper-check",
  "print-practice-sheets",
  "word-library-and-lists",
  "free-and-pro",
] as const;

export type LwGuideId = (typeof GUIDE_IDS)[number];

/** Guide ids in reading order. */
export const TRACESHEET_GUIDE_IDS: readonly LwGuideId[] = GUIDE_IDS;

const UPDATED: Record<LwGuideId, string> = {
  "getting-started": "2026-10-20",
  "read-anything": "2026-10-20",
  "share-to-lingowonders": "2026-10-20",
  "listen-and-say": "2026-10-20",
  "week-pack": "2026-10-20",
  "write-stroke-by-stroke": "2026-10-20",
  "dictation-and-paper-check": "2026-10-20",
  "print-practice-sheets": "2026-10-20",
  "word-library-and-lists": "2026-10-20",
  "free-and-pro": "2026-10-20",
};

/** ISO date (YYYY-MM-DD) the guide was last updated, for sitemap lastModified. */
export function tracesheetGuideUpdated(id: string): string {
  return isLwGuideId(id) ? UPDATED[id] : "2026-10-20";
}

export function isLwGuideId(id: string): id is LwGuideId {
  return (TRACESHEET_GUIDE_IDS as readonly string[]).includes(id);
}

/** The 2.1 App Store screens (store order). Each exists as a phone crop under
 * /apps/tracesheet/screens/<loc>/ (600×1171), a full store shot under
 * shots21/<loc>/ (720×1564) and an iPad shot under ipad/<loc>/ (1000×1333). */
export const LW_SCREENS = [
  "01-read",
  "02-read-aloud",
  "03-week-pack",
  "04-tap-word",
  "05-whole-check",
  "06-write",
  "07-dictation",
  "08-tian-sheet",
  "09-library",
  "10-private",
] as const;
export type LwScreen = (typeof LW_SCREENS)[number];

export interface LwGuideFigure {
  screen: LwScreen;
  /** "phone" (default) is the cropped app screen; "ipad" the full iPad shot. */
  device?: "phone" | "ipad";
  alt: string;
  caption: string;
}

export interface LwGuideStep {
  title: string;
  /** Paragraphs; a string[] item renders as a bullet list. */
  body: (string | string[])[];
  figure?: LwGuideFigure;
}

export interface LwGuide {
  /** The article's h1. */
  title: string;
  /** <title>, at most 60 characters. */
  metaTitle: string;
  /** Meta description, at most 155 characters. */
  description: string;
  /** One line for the contents list. */
  summary: string;
  intro: string[];
  steps: LwGuideStep[];
  tips: string[];
  /** Other guides worth reading next, linked after the tips. */
  related?: { guide: LwGuideId; label: string }[];
}

export interface LwGuideChrome {
  indexTitle: string;
  indexMetaTitle: string;
  indexDescription: string;
  indexIntro: string;
  /** Breadcrumb / nav name of the index. */
  guides: string;
  /** "Step {n}", read by screen readers before each step. */
  step: string;
  /** "{n} steps" under each contents entry. */
  steps: string;
  tipsTitle: string;
  next: string;
  previous: string;
  allGuides: string;
  updated: string;
  getApp: string;
  getAppBody: string;
  help: string;
}

export type LwGuideSet = { chrome: LwGuideChrome; guides: Record<LwGuideId, LwGuide> };

const SETS: Record<Locale, LwGuideSet> = {
  en: guidesEn,
  "zh-cn": guidesZhCn,
  "zh-tw": guidesZhTw,
};

export function lwGuideSet(locale: Locale): LwGuideSet {
  return SETS[locale];
}

export function lwGuide(locale: Locale, id: LwGuideId): LwGuide {
  return SETS[locale].guides[id];
}
