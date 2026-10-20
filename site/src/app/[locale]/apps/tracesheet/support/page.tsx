import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LwSupport } from "@/components/sites/tracesheet/support-page";
import { getApp, localized } from "@/content/apps";
import { tracesheetSupport } from "@/content/tracesheet";
import { getDict } from "@/lib/dictionaries";
import { fmt, isLocale } from "@/lib/i18n";
import { appPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  return appPageMetadata({
    app,
    loc,
    locale,
    path: "/support",
    title: tracesheetSupport[locale].metaTitle,
    description: fmt(getDict(locale).support.meta, { name: loc.storeName }),
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LwSupport locale={locale} />;
}
