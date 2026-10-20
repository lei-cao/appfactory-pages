import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LwGuideIndex } from "@/components/sites/tracesheet/guide-pages";
import { getApp, localized } from "@/content/apps";
import { lwGuideSet } from "@/content/tracesheet-guides";
import { isLocale } from "@/lib/i18n";
import { appPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const app = getApp("tracesheet")!;
  const chrome = lwGuideSet(locale).chrome;
  return appPageMetadata({
    app,
    loc: localized(app, locale),
    locale,
    path: "/guide",
    title: chrome.indexMetaTitle,
    description: chrome.indexDescription,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LwGuideIndex locale={locale} />;
}
