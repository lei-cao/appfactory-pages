// Host -> routing decision for the middleware, as a pure function (no Next
// imports) so scripts/host-routing.test.mts can run it under plain Node.
//
// Hosts: the apex is the hub, `<label>.appfactory.sg` (and
// `<label>.localhost[:port]` in dev) is an app site. An app's public label is
// its `host` when set (a rebrand), else its slug; the slug stays the internal
// route id (/apps/<slug>/...).

// No runtime imports (Node's type stripping can't resolve the "@/" alias or
// extensionless paths), so the locale constants are mirrored from lib/i18n.ts;
// scripts/host-routing.test.mts asserts they stay equal.

export const ROUTING_LOCALES = ["en", "zh-cn", "zh-tw"] as const;
type Locale = (typeof ROUTING_LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

function isLocale(x: string | undefined): x is Locale {
  return (ROUTING_LOCALES as readonly string[]).includes(x ?? "");
}

function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

export interface HostApp {
  slug: string;
  host?: string;
}

export interface HostRoutingInput {
  /** Lower-cased host header without the port. */
  host: string;
  /** Port from the host header ("" when absent); only used for localhost. */
  port?: string;
  pathname: string;
  search: string;
  apex: string;
  apps: readonly HostApp[];
}

export type HostDecision =
  /** 308 to an absolute URL on another host. */
  | { action: "redirect-external"; location: string }
  /** 308 to another path on the same host (same query). */
  | { action: "redirect-path"; pathname: string }
  /** Internal rewrite; the browser URL does not change. */
  | { action: "rewrite"; pathname: string };

// Subdomains that used to be a different app, before the registry existed
// (Calm Sort became Sushi Sort on 2026-07-28; calm-sort.appfactory.sg is still
// in an App Store listing, so it must not 404). Old label -> new label.
const LEGACY_RENAMES: Record<string, string> = { "calm-sort": "sushi-sort" };

/** Old label -> new label for every renamed app (registry `host` != slug). */
export function renamedLabels(apps: readonly HostApp[]): Record<string, string> {
  const out = { ...LEGACY_RENAMES };
  for (const a of apps) if (a.host && a.host !== a.slug) out[a.slug] = a.host;
  return out;
}

/** Public host label -> internal slug (identity for apps without a `host`). */
export function slugForLabel(label: string, apps: readonly HostApp[]): string {
  return apps.find((a) => (a.host ?? a.slug) === label)?.slug ?? label;
}

/** Split "/zh-cn/support" into locale + locale-less rest ("/support"). */
export function splitLocale(pathname: string): { locale: Locale | null; rest: string } {
  const seg = pathname.split("/")[1];
  if (isLocale(seg)) {
    return { locale: seg, rest: pathname.slice(seg.length + 1) || "/" };
  }
  return { locale: null, rest: pathname };
}

/** `{ label, root }` for `label.apex` / `label.localhost`; null otherwise. */
export function subdomainOf(
  host: string,
  apex: string,
): { label: string; root: string } | null {
  for (const root of [apex, "localhost"]) {
    if (host !== root && host.endsWith(`.${root}`)) {
      const label = host.slice(0, -(root.length + 1));
      // Only single-label subdomains route to apps; anything deeper
      // (e.g. Vercel preview URLs matched against "localhost") is ignored.
      if (label && !label.includes(".")) return { label, root };
    }
  }
  return null;
}

/**
 * Decide what to do with a (non-/go, non-static) request. Locale handling:
 * English is unprefixed and canonical, so an explicit /en 308s to the clean
 * path; the internal rewrite always carries a locale segment.
 */
export function decideHost({
  host,
  port = "",
  pathname,
  search,
  apex,
  apps,
}: HostRoutingInput): HostDecision {
  if (host === `www.${apex}`) {
    return { action: "redirect-external", location: `https://${apex}${pathname}${search}` };
  }

  const sub = subdomainOf(host, apex);

  // Renamed apps: the old subdomain keeps working forever (App Store listings,
  // printed material, shipped builds), redirecting the same path to the new one.
  const renamed = sub && renamedLabels(apps)[sub.label];
  if (sub && renamed) {
    const origin =
      sub.root === apex
        ? `https://${renamed}.${apex}`
        : `http://${renamed}.${sub.root}${port ? `:${port}` : ""}`;
    return { action: "redirect-external", location: `${origin}${pathname}${search}` };
  }

  const { locale, rest } = splitLocale(pathname);
  if (locale === DEFAULT_LOCALE) return { action: "redirect-path", pathname: rest };

  const effective: Locale = locale ?? DEFAULT_LOCALE;

  if (sub) {
    const slug = slugForLabel(sub.label, apps);
    // In-app links are path-style (/apps/<slug>/support) so they work on the
    // apex and on previews; on the app's own host that prefix is redundant.
    const appPrefix = `/apps/${slug}`;
    if (rest === appPrefix || rest.startsWith(`${appPrefix}/`)) {
      return {
        action: "redirect-path",
        pathname: localePrefix(effective) + (rest.slice(appPrefix.length) || "/"),
      };
    }
    return {
      action: "rewrite",
      pathname: `/${effective}${appPrefix}${rest === "/" ? "" : rest}`,
    };
  }

  // Hub host.
  return { action: "rewrite", pathname: `/${effective}${rest === "/" ? "" : rest}` };
}
