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
 * hreflang alternates for a page. `path` is the locale-less path ("/support");
 * `origin` the canonical host origin.
 */
export function languageAlternates(origin: string, path: string) {
  const p = path === "/" ? "" : path;
  return {
    en: `${origin}${p || "/"}`,
    "zh-CN": `${origin}/zh-cn${p}`,
    "zh-TW": `${origin}/zh-tw${p}`,
    "x-default": `${origin}${p || "/"}`,
  };
}

/** Tiny template helper: fmt("v{v}", {v: "1.4"}) → "v1.4". */
export function fmt(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}
