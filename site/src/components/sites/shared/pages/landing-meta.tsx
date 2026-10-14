// generateMetadata for every app site's home page.
import type { Metadata } from "next";
import { getApp, localized } from "@/content/apps";
import { isLocale } from "@/lib/i18n";
import { appPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApp(slug);
  if (!app || !isLocale(locale)) return {};
  const loc = localized(app, locale);
  return appPageMetadata({
    app,
    loc,
    locale,
    title: loc.metaTitle ?? loc.storeName,
    description: loc.metaDescription ?? loc.oneLiner,
  });
}
