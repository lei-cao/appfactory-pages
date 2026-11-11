import type { Metadata } from "next";
import { getApp } from "@/content/apps";
import { MAC_PATH, MAC_VERSION, PRICE_CURRENCY, PRICE_NUMBER, SELLER } from "@/content/popline-mac";
import { appOrigin, hubOrigin } from "@/lib/site";

const SLUG = "popline";
const OG_IMAGE = "/apps/popline/mac/editor.webp";

/** Absolute URL of a Mac page on popline.appfactory.sg (English only, no locale prefix). */
export function macUrl(path = ""): string {
  return `${appOrigin(getApp(SLUG)!)}${MAC_PATH}${path}`;
}

/** Internal link to a Mac page: path-style, which the middleware cleans up on the subdomain. */
export function macHref(path = ""): string {
  return `/apps/${SLUG}${MAC_PATH}${path}`;
}

/**
 * Metadata for a Mac page. Not appPageMetadata: that one adds the iOS Smart
 * App Banner (itunes.appId) and an hreflang set for all three locales, and
 * these pages are English only and sell a Mac app.
 */
export function macMetadata(path: string, title: string, description: string): Metadata {
  const url = macUrl(path);
  const image = `${appOrigin(getApp(SLUG)!)}${OG_IMAGE}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: { en: url, "x-default": url } },
    icons: { icon: "/apps/popline/mac/icon.png", apple: "/apps/popline/mac/icon.png" },
    openGraph: {
      title,
      description,
      url,
      siteName: "Popline for Mac",
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 2000, height: 1093, alt: "Popline for Mac editor" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/** SoftwareApplication with the one real offer: Pro at $39. Free tier as a $0 offer. */
export function macAppLd(description: string) {
  const url = macUrl();
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#app`,
    name: "Popline for Mac",
    description,
    url,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "macOS 26",
    softwareVersion: MAC_VERSION,
    image: `${appOrigin(getApp(SLUG)!)}/apps/popline/mac/icon.png`,
    screenshot: `${appOrigin(getApp(SLUG)!)}${OG_IMAGE}`,
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: PRICE_CURRENCY, availability: "https://schema.org/PreOrder" },
      { "@type": "Offer", name: "Pro", price: PRICE_NUMBER, priceCurrency: PRICE_CURRENCY, availability: "https://schema.org/PreOrder" },
    ],
    publisher: { "@id": `${hubOrigin()}/#org` },
    provider: { "@type": "Organization", name: SELLER },
  };
}

export function macBreadcrumbLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Popline for Mac", item: macUrl() },
      { "@type": "ListItem", position: 2, name, item: macUrl(path) },
    ],
  };
}
