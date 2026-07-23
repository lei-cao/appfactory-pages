// One sitemap for the whole deployment. It is served identically on the apex
// and on every app subdomain (the middleware skips paths with an extension),
// and lists absolute canonical URLs across all hosts — cross-host entries are
// fine because robots.txt on every host points at this sitemap.

import type { MetadataRoute } from "next";
import { apps, localized } from "@/content/apps";
import { languageAlternates, LOCALES, localePrefix } from "@/lib/i18n";
import { appOrigin, hubOrigin } from "@/lib/site";

function entriesFor(
  origin: string,
  path: string,
  lastModified?: string,
): MetadataRoute.Sitemap {
  const p = path === "/" ? "" : path;
  return LOCALES.map((locale) => ({
    url: `${origin}${localePrefix(locale)}${p || "/"}`,
    lastModified: lastModified ? new Date(lastModified) : undefined,
    alternates: { languages: languageAlternates(origin, path) },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [...entriesFor(hubOrigin(), "/")];
  for (const app of apps) {
    const origin = appOrigin(app.slug);
    const en = localized(app, "en");
    out.push(...entriesFor(origin, "/"));
    out.push(...entriesFor(origin, "/support"));
    out.push(...entriesFor(origin, "/privacy", en.privacy.updated));
    if (en.terms) out.push(...entriesFor(origin, "/terms", en.terms.updated));
  }
  return out;
}
