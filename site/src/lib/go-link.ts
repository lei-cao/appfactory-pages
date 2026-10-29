// Factory short links: https://appfactory.sg/go/<slug>[/<source>] sends an
// iPhone/iPad to the App Store, an Android phone to Google Play (else the
// app's landing page) and everything else to the landing page, carrying the
// source through as App Store `ct=`, Play `referrer=` and landing `utm_*`.
// Printed QR codes and share texts point here, so the destination can change
// later without reprinting — responses are no-store for the same reason.
// The convention for every app is written up in docs/go-links.md.
//
// Pure (no Next.js, only type imports) so scripts/go-link.test.mts can run it
// under plain Node; the middleware injects the apex domain and the registry.

import type { AppBase } from "@/content/apps";

/** App Store Connect provider token for campaign analytics (`pt=`). */
export const APPLE_PROVIDER_TOKEN = "119559267";

export const DEFAULT_CAMPAIGN = "go";

/** `utm_medium` on landing pages and in the Play install referrer. */
export const GO_MEDIUM = "go";

const CAMPAIGN_RE = /^[a-z0-9-]{1,40}$/;

/**
 * Link-preview fetchers and crawlers posing as a Mac skip the detect page and
 * get the plain landing redirect, so a shared link previews the app's OG card.
 * iMessage's preview agent claims to be a Mac (and facebookexternalhit). Only
 * consulted for Macintosh UAs: in-app browsers on phones (WhatsApp, Telegram…)
 * must still reach the store.
 */
const BOT_RE = /bot|crawl|spider|slurp|facebookexternalhit|facebot|preview|whatsapp|telegram|discord|embedly/i;

type GoApp = Pick<
  AppBase,
  "slug" | "host" | "domain" | "appStoreUrl" | "appStoreId" | "playStoreUrl" | "externalUrls"
>;

export interface GoLinkDeps {
  apex: string;
  getApp: (slug: string) => GoApp | undefined;
}

/**
 * What the middleware answers: a 302, or (Macintosh UAs, which may be iPadOS
 * Safari in desktop mode) a tiny page that picks between the App Store and the
 * landing page with `navigator.maxTouchPoints` — the server can't tell an
 * iPad from a Mac.
 */
export type GoDecision =
  | { kind: "redirect"; url: string }
  | { kind: "detect"; ios: string; other: string };

/** True for `/go` and anything under `/go/`. */
export function isGoPath(pathname: string): boolean {
  return pathname === "/go" || pathname.startsWith("/go/");
}

/**
 * The shared-list page, `/go/tracesheet/l#<data>` (LingoWonders share links).
 * Unlike every other /go path it renders a page instead of redirecting: the
 * list is in the URL fragment, which only the browser sees.
 */
export function isShareListPath(pathname: string): boolean {
  return /^\/go\/tracesheet\/l\/?$/i.test(pathname);
}

export function sanitizeCampaign(raw: string | undefined): string {
  const c = (raw ?? "").toLowerCase();
  return CAMPAIGN_RE.test(c) ? c : DEFAULT_CAMPAIGN;
}

/** Numeric App Store id: the explicit field, else parsed from the URL. */
export function appleIdOf(app: GoApp): string | null {
  if (app.appStoreId && /^\d+$/.test(app.appStoreId)) return app.appStoreId;
  return app.appStoreUrl?.match(/\/id(\d+)/)?.[1] ?? null;
}

/** The app's own page: external site, own domain, else its appfactory.sg subdomain. */
export function landingOf(app: GoApp, apex: string): string {
  if (app.externalUrls?.en) return app.externalUrls.en;
  if (app.domain) return `https://${app.domain}/`;
  return `https://${app.host ?? app.slug}.${apex}/`;
}

/** utm_source = the link's source, utm_medium = go, utm_campaign = the app slug. */
function utm(source: string, slug: string): [string, string][] {
  return [
    ["utm_source", source],
    ["utm_medium", GO_MEDIUM],
    ["utm_campaign", slug],
  ];
}

/** Landing page with the go-link utm params (replacing any baked-in ones). */
function landingUrl(app: GoApp, apex: string, source: string): string {
  const u = new URL(landingOf(app, apex));
  for (const [k, v] of utm(source, app.slug)) u.searchParams.set(k, v);
  return u.toString();
}

function appStoreUrl(id: string, source: string): string {
  return `https://apps.apple.com/app/apple-store/id${id}?pt=${APPLE_PROVIDER_TOKEN}&ct=${source}&mt=8`;
}

/** Play listing with the install referrer (`referrer=utm_source%3D<source>%26…`). */
function playUrl(playStoreUrl: string, slug: string, source: string): string {
  const u = new URL(playStoreUrl);
  u.searchParams.set("referrer", new URLSearchParams(utm(source, slug)).toString());
  return u.toString();
}

/** Where a `/go/...` request should land. */
export function resolveGo(pathname: string, userAgent: string, { apex, getApp }: GoLinkDeps): GoDecision {
  const redirect = (url: string): GoDecision => ({ kind: "redirect", url });
  const [slugRaw, campaignRaw] = pathname.slice("/go/".length).split("/");
  const app = slugRaw ? getApp(slugRaw.toLowerCase()) : undefined;
  if (!app) return redirect(`https://${apex}/`);

  const source = sanitizeCampaign(campaignRaw);
  const landing = landingUrl(app, apex, source);
  const appleId = appleIdOf(app);

  if (userAgent.includes("Android")) {
    return redirect(app.playStoreUrl ? playUrl(app.playStoreUrl, app.slug, source) : landing);
  }
  if (/iPhone|iPad|iPod/.test(userAgent)) {
    return redirect(appleId ? appStoreUrl(appleId, source) : landing);
  }
  // iPadOS Safari reports itself as Macintosh; only a touch screen tells it apart.
  if (userAgent.includes("Macintosh") && appleId && !BOT_RE.test(userAgent)) {
    return { kind: "detect", ios: appStoreUrl(appleId, source), other: landing };
  }
  return redirect(landing);
}

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** JSON for an inline script; `<` escaped so a URL can never close the tag. */
const jsString = (s: string) => JSON.stringify(s).replace(/</g, "\\u003c");

/** The Macintosh detect page: touch screen (iPad) → App Store, else landing. */
export function detectPage(ios: string, other: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Opening…</title>
<script>var I=${jsString(ios)};var O=${jsString(other)};location.replace(navigator.maxTouchPoints>1?I:O);</script>
<noscript><meta http-equiv="refresh" content="0;url=${escapeAttr(other)}"></noscript></head>
<body style="font-family:system-ui,sans-serif;padding:2rem"><p><a href="${escapeAttr(other)}">Continue</a> · <a href="${escapeAttr(ios)}">App Store</a></p></body></html>`;
}
