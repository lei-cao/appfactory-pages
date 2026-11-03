// Store links with a campaign token per placement (App Marketing tracking.md):
// every App Store button on a site page is the app's link with its own ct.

/** The same App Store URL with `ct=<placement>` (and the studio's pt, mt=8). */
export function appStoreAt(url: string, ct: string): string {
  const u = new URL(url);
  u.searchParams.set("pt", "119559267");
  u.searchParams.set("ct", ct);
  u.searchParams.set("mt", "8");
  return u.toString();
}
