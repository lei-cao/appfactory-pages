// Landing-page half of the /go convention (docs/go-links.md): a visitor the
// short link sent to the landing page (Android without Play, desktop, WeChat,
// a Mac that isn't an iPad) arrives with `utm_source=<source>&utm_medium=go&
// utm_campaign=<slug>`. The site's App Store buttons each carry a placement ct
// (`site-hero`, `site-header`…); for that visitor they carry the go source
// instead, so an install from a shared card counts under the same ASC campaign
// (`ct=share-night`) as an iPhone that went straight to the store.
//
// Pure (no React, no runtime imports) so scripts/go-ct.test.mts runs it under
// plain Node; components/go-ct.tsx applies it in the browser.

/** Same shape the middleware's sanitizeCampaign accepts (lib/go-link.ts). */
const SOURCE_RE = /^[a-z0-9-]{1,40}$/;
const SLUG_RE = /^[a-z0-9-]{1,60}$/;

/** sessionStorage key the arrival is kept under for the rest of the visit. */
export const GO_CT_KEY = "af_go_ct";

export interface GoArrival {
  /** The /go source, used verbatim as the App Store ct. */
  source: string;
  /** The app the short link was for (utm_campaign). */
  slug: string;
}

/**
 * The go arrival in a query string, or null. Strict on purpose: only
 * `utm_medium=go` counts (cross-promo links carry utm_medium=referral), and a
 * source the middleware would not have produced is ignored rather than mapped
 * to a default.
 */
export function goArrival(search: string): GoArrival | null {
  const q = new URLSearchParams(search);
  if (q.get("utm_medium") !== "go") return null;
  const source = q.get("utm_source") ?? "";
  const slug = q.get("utm_campaign") ?? "";
  if (!SOURCE_RE.test(source) || !SLUG_RE.test(slug)) return null;
  return { source, slug };
}

/** Parse a stored arrival back (sessionStorage is untrusted input). */
export function parseArrival(raw: string | null): GoArrival | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw) as Partial<GoArrival>;
    if (typeof v?.source !== "string" || typeof v?.slug !== "string") return null;
    return SOURCE_RE.test(v.source) && SLUG_RE.test(v.slug) ? { source: v.source, slug: v.slug } : null;
  } catch {
    return null;
  }
}

/**
 * `href` with `ct=<source>` (and the studio's pt, mt=8) when it is an App Store
 * link to the arrival's app (`appleId`) whose ct is a site placement or
 * absent; null for anything else, so a cross-promo button for another app (or
 * a link that is its own campaign) keeps its own ct. Same rewrite as
 * lib/store-links.ts appStoreAt.
 */
export function goStoreHref(href: string, source: string, appleId: string): string | null {
  let u: URL;
  try {
    u = new URL(href);
  } catch {
    return null;
  }
  if (u.hostname !== "apps.apple.com" && u.hostname !== "itunes.apple.com") return null;
  if (u.pathname.match(/\/id(\d+)(?:\/|$)/)?.[1] !== appleId) return null;
  // Only site placements (or no ct) give way; a link that is itself a
  // campaign (the shared-list page's ct=list) keeps its own token.
  const ct = u.searchParams.get("ct");
  if (ct !== null && ct !== source && !/^site(-|$)/.test(ct)) return null;
  u.searchParams.set("pt", "119559267");
  u.searchParams.set("ct", source);
  u.searchParams.set("mt", "8");
  const next = u.toString();
  return next === href ? null : next;
}
