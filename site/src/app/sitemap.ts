// One sitemap for the whole deployment. It is served identically on the apex
// and on every app subdomain (the middleware skips paths with an extension),
// and lists absolute canonical URLs across all hosts — cross-host entries are
// fine because robots.txt on every host points at this sitemap.

import type { MetadataRoute } from "next";
import { apps, localized } from "@/content/apps";
import {
  GUIDE_ARTICLE_IDS,
  GUIDE_LOCALES,
  getGuideArticleMeta,
  guideLanguageAlternates,
} from "@/lib/guide";
import { TRACESHEET_GUIDE_IDS, tracesheetGuideUpdated } from "@/content/tracesheet-guides";
import { canonicalUrl, languageAlternates, LOCALES } from "@/lib/i18n";
import { appOrigin, hubOrigin } from "@/lib/site";

function entriesFor(
  origin: string,
  path: string,
  lastModified?: string,
): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: canonicalUrl(origin, locale, path),
    lastModified: lastModified ? new Date(lastModified) : undefined,
    alternates: { languages: languageAlternates(origin, path) },
  }));
}

// Poker Night's home-game guide: only "en" and "zh-cn" have content
// ("zh-tw" guide articles haven't been written — see lib/guide.ts), so this
// can't reuse entriesFor's all-LOCALES loop or languageAlternates' fixed
// three-locale hreflang set.
function guideEntriesFor(origin: string): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const locale of GUIDE_LOCALES) {
    out.push({
      url: canonicalUrl(origin, locale, "/guide"),
      alternates: { languages: guideLanguageAlternates(origin, "/guide") },
    });
    for (const id of GUIDE_ARTICLE_IDS) {
      const meta = getGuideArticleMeta(locale, id);
      out.push({
        url: canonicalUrl(origin, locale, `/guide/${id}`),
        lastModified: meta.updated ? new Date(meta.updated) : undefined,
        alternates: {
          languages: guideLanguageAlternates(origin, `/guide/${id}`),
        },
      });
    }
  }
  return out;
}

// LingoWonders guides: every id exists in all three locales, so the normal
// entriesFor() hreflang set applies. The index exists only once there is a guide.
function tracesheetGuideEntries(origin: string): MetadataRoute.Sitemap {
  if (TRACESHEET_GUIDE_IDS.length === 0) return [];
  return [
    ...entriesFor(origin, "/guide"),
    ...TRACESHEET_GUIDE_IDS.flatMap((id) =>
      entriesFor(origin, `/guide/${id}`, tracesheetGuideUpdated(id)),
    ),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [...entriesFor(hubOrigin(), "/")];
  for (const app of apps) {
    // External apps live on their own domain — skip subdomain sitemap entries.
    if (app.externalUrls) continue;
    const origin = appOrigin(app);
    const en = localized(app, "en");
    out.push(...entriesFor(origin, "/"));
    out.push(...entriesFor(origin, "/support"));
    out.push(...entriesFor(origin, "/privacy", en.privacy.updated));
    if (en.terms) out.push(...entriesFor(origin, "/terms", en.terms.updated));
    if (app.slug === "poker-night") out.push(...guideEntriesFor(origin));
    if (app.slug === "tracesheet") out.push(...tracesheetGuideEntries(origin));
  }
  return out;
}
