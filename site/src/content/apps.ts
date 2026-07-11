// App registry — the single place a new app is added to appear on the hub
// and get its own <slug>.appfactory.sg site. `scripts/add-app.mjs` handles
// the matching DNS + Vercel domain setup.

export type AppStatus = "building" | "testflight" | "in-review" | "live";

export const STATUS_LABEL: Record<AppStatus, string> = {
  building: "In the works",
  testflight: "TestFlight beta",
  "in-review": "In App Review",
  live: "Live",
};

export interface Screenshot {
  src: string;
  alt: string;
}

export interface PrivacySection {
  heading: string;
  /** Paragraphs; a string[] item renders as a bullet list. */
  body: (string | string[])[];
}

export interface AppContent {
  slug: string;
  /** Short display name, e.g. "Poker Night". */
  name: string;
  /** Full store listing name. */
  storeName: string;
  /** Hero headline on the app's landing page. */
  tagline: string;
  /** Store subtitle — used on build records and meta descriptions. */
  subtitle: string;
  oneLiner: string;
  /** Sequential factory build number (order the apps left the line). */
  buildNumber: number;
  version: string;
  status: AppStatus;
  /** One honest sentence about where the app is right now. */
  statusNote: string;
  platforms: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  icon: string;
  features: { title: string; body: string }[];
  screenshots: Screenshot[];
  /** Trust block rendered prominently on the landing page. */
  trust?: { title: string; body: string };
  faqs: { q: string; a: string }[];
  privacy: { updated: string; sections: PrivacySection[] };
}

import { pokerNight } from "./poker-night";

export const apps: AppContent[] = [pokerNight];

export function getApp(slug: string): AppContent | undefined {
  return apps.find((a) => a.slug === slug);
}
