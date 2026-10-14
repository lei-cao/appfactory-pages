// Locale machinery. URL scheme: English is unprefixed (canonical), Chinese
// variants live under /zh-cn and /zh-tw on every host — the middleware adds
// the internal /en prefix so routes always render under app/[locale]/.

export const LOCALES = ["en", "zh-cn", "zh-tw"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** BCP 47 tag for <html lang> and hreflang. */
export const LANG_TAG: Record<Locale, string> = {
  en: "en",
  "zh-cn": "zh-CN",
  "zh-tw": "zh-TW",
};

/** Short label shown in the language switcher. */
export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  "zh-cn": "简体",
  "zh-tw": "繁體",
};

export function isLocale(x: string | undefined): x is Locale {
  return (LOCALES as readonly string[]).includes(x ?? "");
}

/** URL prefix for a locale — empty for the default locale. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/**
 * The one canonical URL form: no trailing slash, English unprefixed, so the
 * home page is the bare origin ("https://appfactory.sg"). Canonical tags,
 * hreflang, the sitemap and JSON-LD must all go through this so they agree.
 */
export function canonicalUrl(origin: string, locale: Locale, path = "/"): string {
  return `${origin}${localePrefix(locale)}${path === "/" ? "" : path}`;
}

/**
 * hreflang alternates for a page. `path` is the locale-less path ("/support");
 * `origin` the canonical host origin.
 */
export function languageAlternates(origin: string, path: string) {
  const p = path === "/" ? "" : path;
  return {
    en: `${origin}${p}`,
    "zh-CN": `${origin}/zh-cn${p}`,
    "zh-TW": `${origin}/zh-tw${p}`,
    "x-default": `${origin}${p}`,
  };
}

/** Tiny template helper: fmt("v{v}", {v: "1.4"}) → "v1.4". */
export function fmt(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

/** Only "en" and "zh-cn" have Poker Night guide content; zh-Hant isn't written. */
export type GuideLocale = "en" | "zh-cn";
export const GUIDE_LOCALES: GuideLocale[] = ["en", "zh-cn"];
export function isGuideLocale(locale: Locale): locale is GuideLocale {
  return locale === "en" || locale === "zh-cn";
}

/**
 * Split a browser-visible or internal pathname into the locale-less page path
 * ("/guide/holdem-basics"), dropping the locale prefix and, when `slug` is
 * given, the internal "/apps/<slug>" prefix the middleware rewrites to.
 */
export function pagePathOf(pathname: string, slug?: string): string {
  const seg = pathname.split("/")[1];
  let rest = isLocale(seg) ? pathname.slice(seg.length + 1) || "/" : pathname;
  if (slug) {
    const app = `/apps/${slug}`;
    if (rest === app) rest = "/";
    else if (rest.startsWith(`${app}/`)) rest = rest.slice(app.length);
  }
  return rest;
}

/** Locales a page exists in (guide pages are en + zh-cn only). */
export function localesForPage(pagePath: string): readonly Locale[] {
  return /^\/guide(\/|$)/.test(pagePath) ? GUIDE_LOCALES : LOCALES;
}

/**
 * Locale-switcher target. `cleanSubdomain` true means we're on <slug>.<apex>,
 * where the canonical path has no "/apps/<slug>" segment; otherwise (apex or
 * preview, path-style) the "/apps/<slug>" prefix is kept.
 */
export function switchHref(
  pathname: string,
  target: Locale,
  slug: string | undefined,
  cleanSubdomain: boolean,
): string {
  const page = pagePathOf(pathname, slug);
  const tail = page === "/" ? "" : page;
  const base = slug && !cleanSubdomain ? `/apps/${slug}${tail}` : tail;
  return `${localePrefix(target)}${base}` || "/";
}
