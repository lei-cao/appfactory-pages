// SEO for every app subdomain: page metadata (canonical, hreflang, Open Graph,
// Twitter, Smart App Banner) and JSON-LD builders. Kept honest: no ratings
// (no aggregateRating unless a rating is visible on the page), no review counts, no invented numbers.

import type { Metadata } from "next";
import type { AppContent, AppLocalized } from "@/content/apps";
import {
  LANG_TAG,
  canonicalUrl,
  languageAlternates,
  type Locale,
} from "@/lib/i18n";
import { appOrigin, type AppHostRef, CONTACT_EMAIL, hubOrigin, SITE_NAME } from "@/lib/site";

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  "zh-cn": "zh_CN",
  "zh-tw": "zh_TW",
};

/** Absolute URL on the app's own subdomain (the canonical host). */
function abs(app: AppHostRef | string, src: string): string {
  return new URL(src, appOrigin(app)).toString();
}

/** Canonical URL of a locale-less path ("/support") on an app's subdomain. */
export function appPageUrl(app: AppHostRef | string, locale: Locale, path = "/"): string {
  return canonicalUrl(appOrigin(app), locale, path);
}

/**
 * Full metadata for one page of an app site. Every page — landing, support,
 * privacy, terms, guide — goes through here so canonical, hreflang, social
 * cards and the App Store banner never drift apart.
 */
export function appPageMetadata({
  app,
  loc,
  locale,
  path = "/",
  title,
  description,
  languages,
  type = "website",
}: {
  app: AppContent;
  loc: AppLocalized;
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  /** Override the hreflang set (pages that don't exist in every locale). */
  languages?: Record<string, string>;
  type?: "website" | "article";
}): Metadata {
  const url = appPageUrl(app, locale, path);
  const ogSrc = app.ogImage ?? loc.screenshots[0]?.src ?? app.icon;
  const image = ogSrc ? abs(app, ogSrc) : undefined;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: languages ?? languageAlternates(appOrigin(app), path),
    },
    ...(app.icon && {
      icons: { icon: app.icon, apple: app.icon },
    }),
    ...(app.appStoreId && { itunes: { appId: app.appStoreId } }),
    openGraph: {
      title,
      description,
      url,
      siteName: loc.name,
      locale: OG_LOCALE[locale],
      type,
      ...(image && {
        images: app.ogImage
          ? [{ url: image, width: 1200, height: 630, alt: loc.storeName }]
          : [{ url: image, alt: loc.storeName }],
      }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

/** schema.org applicationCategory for the app's shelf, unless it sets one. */
function schemaCategory(app: AppContent): string {
  if (app.schemaCategory) return app.schemaCategory;
  return app.category === "game" ? "GameApplication" : "UtilitiesApplication";
}

export function softwareApplicationLd(
  app: AppContent,
  loc: AppLocalized,
  locale: Locale,
) {
  const url = appPageUrl(app, locale);
  const live = app.status === "live";
  const store = app.appStoreUrl ?? app.playStoreUrl;
  return {
    "@context": "https://schema.org",
    "@type":
      app.category === "game"
        ? ["MobileApplication", "VideoGame"]
        : "MobileApplication",
    "@id": `${url}#app`,
    name: loc.storeName,
    alternateName: loc.name,
    description: loc.metaDescription ?? loc.oneLiner,
    url,
    applicationCategory: schemaCategory(app),
    operatingSystem: app.platforms.join(", "),
    ...(app.category === "game" && { gamePlatform: app.platforms }),
    inLanguage: LANG_TAG[locale],
    softwareVersion: app.version,
    ...(app.icon && { image: abs(app, app.icon) }),
    ...(loc.screenshots.length > 0 && {
      screenshot: loc.screenshots.map((s) => abs(app, s.src)),
    }),
    ...(live &&
      store && {
        downloadUrl: store,
        installUrl: store,
      }),
    // Always present (Google requires offers for a software rich result).
    // Free to download; apps that aren't in a store yet are pre-order.
    offers: [
      {
        "@type": "Offer",
        name: "Free download",
        price: "0",
        priceCurrency: "USD",
        availability: live
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
        ...(live && store && { url: store }),
      },
      ...(app.proOffer
        ? [
            {
              "@type": "Offer",
              name: app.proOffer.name,
              price: app.proOffer.price,
              priceCurrency: "USD",
              availability: live
                ? "https://schema.org/InStock"
                : "https://schema.org/PreOrder",
            },
          ]
        : []),
    ],
    publisher: { "@id": `${hubOrigin()}/#org` },
  };
}

const SAME_AS = ["https://x.com/AppFactorySG"];

/** The studio, referenced by @id from every app's JSON-LD. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${hubOrigin()}/#org`,
    name: SITE_NAME,
    url: hubOrigin(),
    logo: `${hubOrigin()}/brand/avatar.png`,
    email: CONTACT_EMAIL,
    // Only profiles the studio actually runs (marketing/SHARED.md). Add
    // TikTok/Instagram/YouTube here once those accounts exist and are public.
    sameAs: SAME_AS,
    address: { "@type": "PostalAddress", addressCountry: "SG" },
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

/** schema.org VideoObject for a promo video on an app page (video rich results). */
export function videoObjectLd(
  app: AppHostRef | string,
  locale: Locale,
  v: { name: string; description: string; src: string; poster: string; duration: number; uploadDate: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.name,
    description: v.description,
    thumbnailUrl: abs(app, v.poster),
    contentUrl: abs(app, v.src),
    uploadDate: v.uploadDate,
    duration: `PT${Math.round(v.duration)}S`,
    inLanguage: LANG_TAG[locale],
    publisher: { "@id": `${hubOrigin()}/#org` },
  };
}

/** Studio › App › Page trail for subpages of an app site. */
export function breadcrumbLd(
  app: AppContent,
  loc: AppLocalized,
  locale: Locale,
  trail: { name: string; path: string }[],
) {
  const items = [
    { name: SITE_NAME, url: canonicalUrl(hubOrigin(), locale) },
    { name: loc.name, url: appPageUrl(app, locale) },
    ...trail.map((t) => ({
      name: t.name,
      url: appPageUrl(app, locale, t.path),
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Serialise for a <script type="application/ld+json"> (escape "<"). */
export function ldJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** One or more JSON-LD blocks, rendered as script tags. */
export function JsonLd({ data }: { data: unknown[] }) {
  return (
    <>
      {data.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(d) }}
        />
      ))}
    </>
  );
}
