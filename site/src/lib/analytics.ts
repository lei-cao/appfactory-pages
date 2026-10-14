// Pure GA4 helpers (no React) so they can be unit-tested. The loader lives in
// components/analytics.tsx; it renders nothing unless NEXT_PUBLIC_GA_ID is set.

/** EEA (EU + IS, LI, NO), UK and Switzerland. */
export const GA_DENIED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

/**
 * Consent Mode v2 default commands, in call order: ads storage denied
 * everywhere; analytics storage denied in the regions above, granted elsewhere.
 * The region-specific default must come first; the general one is the fallback.
 */
export function consentDefaults() {
  const ads = {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  } as const;
  return [
    { ...ads, analytics_storage: "denied", region: GA_DENIED_REGIONS },
    { ...ads, analytics_storage: "granted" },
  ];
}

/** A well-formed GA4 measurement id, or null (unset / malformed -> GA off). */
export function parseGaId(raw: string | undefined): string | null {
  const id = (raw ?? "").trim();
  return /^G-[A-Z0-9]{4,}$/.test(id) ? id : null;
}

export type StoreName = "app-store" | "google-play";

/** Which store an outbound href points at, if any. */
export function storeOf(href: string): StoreName | null {
  let host: string;
  try {
    host = new URL(href, "https://appfactory.sg").hostname;
  } catch {
    return null;
  }
  if (host === "apps.apple.com" || host === "itunes.apple.com") return "app-store";
  if (host === "play.google.com") return "google-play";
  return null;
}

/** App slug for a page: explicit data-app, else subdomain, else /apps/<slug>, else "hub". */
export function appSlugFor(
  hostname: string,
  pathname: string,
  explicit?: string | null,
): string {
  if (explicit) return explicit;
  const sub = hostname.match(/^([a-z0-9-]+)\.appfactory\.sg$/)?.[1];
  if (sub && sub !== "www") return sub;
  const m = pathname.match(/^(?:\/(?:zh-cn|zh-tw))?\/apps\/([a-z0-9-]+)/);
  return m ? m[1] : "hub";
}
