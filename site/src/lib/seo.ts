// JSON-LD builders for structured data (Poker Night only for now). Kept
// honest: no ratings, no review counts, no invented numbers.

import type { AppContent, AppLocalized } from "@/content/apps";
import { LANG_TAG, localePrefix, type Locale } from "@/lib/i18n";
import { appOrigin, hubOrigin, SITE_NAME } from "@/lib/site";

const ORIGIN_FOR_ASSETS = (slug: string) => appOrigin(slug);

export function softwareApplicationLd(
  app: AppContent,
  loc: AppLocalized,
  locale: Locale,
) {
  const origin = ORIGIN_FOR_ASSETS(app.slug);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: loc.storeName,
    alternateName: loc.name,
    description: loc.metaDescription ?? loc.oneLiner,
    url: `${origin}${localePrefix(locale)}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    inLanguage: LANG_TAG[locale],
    softwareVersion: app.version,
    image: `${origin}${app.ogImage ?? app.icon}`,
    screenshot: loc.screenshots.map((s) => `${origin}${s.src}`),
    ...(app.appStoreUrl && {
      downloadUrl: app.appStoreUrl,
      installUrl: app.appStoreUrl,
    }),
    offers: [
      {
        "@type": "Offer",
        name: "Free download",
        price: "0",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Poker Night Pro (in-app purchase, one-time)",
        price: "7.99",
        priceCurrency: "USD",
      },
    ],
    publisher: { "@type": "Organization", name: SITE_NAME, url: hubOrigin() },
  };
}

export function faqPageLd(loc: AppLocalized, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LANG_TAG[locale],
    mainEntity: loc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Serialise for a <script type="application/ld+json"> (escape "<"). */
export function ldJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
