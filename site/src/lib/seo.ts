// Pure JSON-LD builders. No runtime imports — origins and data are passed in
// so this stays Node-testable (see scripts/seo.test.mts), like go-link.ts.

import type { AppBase, AppLocalized } from "@/content/apps";

type Json = Record<string, unknown>;

const CONTEXT = "https://schema.org";

export function orgId(hubOrigin: string): string {
  return `${hubOrigin}/#org`;
}

export function websiteId(hubOrigin: string): string {
  return `${hubOrigin}/#website`;
}

/** Path of the generated 1200x630 card for an app (or the app's own card). */
export function ogImagePath(app: Pick<AppBase, "slug" | "ogImage">): string {
  return app.ogImage ?? `/og/${app.slug}.png`;
}

/** Make a site-relative path absolute; pass absolute URLs through. */
export function absUrl(origin: string, pathOrUrl: string): string {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${origin}${pathOrUrl}`;
}

export function organizationLd(p: {
  hubOrigin: string;
  name: string;
  email: string;
}): Json {
  return {
    "@context": CONTEXT,
    "@type": "Organization",
    "@id": orgId(p.hubOrigin),
    name: p.name,
    url: p.hubOrigin,
    email: p.email,
    logo: `${p.hubOrigin}/apple-icon.png`,
    address: { "@type": "PostalAddress", addressCountry: "SG" },
  };
}

export function websiteLd(p: {
  hubOrigin: string;
  name: string;
  langTag: string;
  description?: string;
}): Json {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    "@id": websiteId(p.hubOrigin),
    name: p.name,
    url: p.hubOrigin,
    inLanguage: p.langTag,
    ...(p.description && { description: p.description }),
    publisher: { "@id": orgId(p.hubOrigin) },
  };
}

const APPLICATION_CATEGORY: Record<NonNullable<AppBase["category"]>, string> = {
  game: "GameApplication",
  utility: "UtilitiesApplication",
  education: "EducationalApplication",
  lifestyle: "LifestyleApplication",
  productivity: "BusinessApplication",
};

export function appLd(p: {
  app: Pick<
    AppBase,
    | "slug"
    | "version"
    | "platforms"
    | "appStoreUrl"
    | "playStoreUrl"
    | "ogImage"
    | "category"
  >;
  loc: Pick<
    AppLocalized,
    "name" | "storeName" | "oneLiner" | "screenshots"
  >;
  langTag: string;
  /** The app's own origin, e.g. https://poker-night.appfactory.sg */
  origin: string;
  /** Canonical URL of the landing page for this locale. */
  url: string;
  hubOrigin: string;
}): Json {
  const { app, loc } = p;
  const isGame = app.category === "game";
  const stores = [app.appStoreUrl, app.playStoreUrl].filter(
    (u): u is string => !!u,
  );
  return {
    "@context": CONTEXT,
    "@type": isGame ? ["MobileApplication", "VideoGame"] : "MobileApplication",
    name: loc.storeName,
    alternateName: loc.name,
    description: loc.oneLiner,
    url: p.url,
    operatingSystem: app.platforms.join(", "),
    ...(app.category && {
      applicationCategory: APPLICATION_CATEGORY[app.category],
    }),
    image: absUrl(p.origin, ogImagePath(app)),
    screenshot: loc.screenshots.map((s) => absUrl(p.origin, s.src)),
    inLanguage: p.langTag,
    softwareVersion: app.version,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: stores.length
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
    },
    ...(stores.length && { installUrl: stores[0], sameAs: stores }),
    publisher: { "@id": orgId(p.hubOrigin) },
    author: { "@id": orgId(p.hubOrigin) },
  };
}

export function faqLd(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]): Json {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function hubItemListLd(items: { name: string; url: string }[]): Json {
  return {
    "@context": CONTEXT,
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: it.url,
      name: it.name,
    })),
  };
}
