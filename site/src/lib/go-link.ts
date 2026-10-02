// Factory short links: https://appfactory.sg/go/<slug>[/<campaign>] sends a
// phone to the right store and everything else to the app's site. Printed QR
// codes and share texts point here, so the destination can change later
// without reprinting — responses are no-store for the same reason.
//
// Pure (no Next.js, only type imports) so scripts/go-link.test.mts can run it
// under plain Node; the middleware injects the apex domain and the registry.

import type { AppBase } from "@/content/apps";

/** App Store Connect provider token for campaign analytics (`pt=`). */
export const APPLE_PROVIDER_TOKEN = "119559267";

export const DEFAULT_CAMPAIGN = "go";

const CAMPAIGN_RE = /^[a-z0-9-]{1,40}$/;

type GoApp = Pick<AppBase, "slug" | "appStoreUrl" | "appStoreId" | "playStoreUrl">;

export interface GoLinkDeps {
  apex: string;
  getApp: (slug: string) => GoApp | undefined;
}

/** True for `/go` and anything under `/go/`. */
export function isGoPath(pathname: string): boolean {
  return pathname === "/go" || pathname.startsWith("/go/");
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

/** Where a `/go/...` request should land. */
export function resolveGoLink(
  pathname: string,
  userAgent: string,
  { apex, getApp }: GoLinkDeps,
): string {
  const home = `https://${apex}/`;
  const [slugRaw, campaignRaw] = pathname.slice("/go/".length).split("/");
  const app = slugRaw ? getApp(slugRaw.toLowerCase()) : undefined;
  if (!app) return home;

  const site = `https://${app.slug}.${apex}/`;
  const campaign = sanitizeCampaign(campaignRaw);

  if (userAgent.includes("Android")) return app.playStoreUrl ?? site;

  // iPadOS Safari reports itself as Macintosh.
  if (/iPhone|iPad|Macintosh/.test(userAgent)) {
    const id = appleIdOf(app);
    if (!id) return site;
    return `https://apps.apple.com/app/apple-store/id${id}?pt=${APPLE_PROVIDER_TOKEN}&ct=${campaign}&mt=8`;
  }

  return site;
}
