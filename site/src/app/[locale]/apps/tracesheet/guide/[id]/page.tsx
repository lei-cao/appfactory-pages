import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LwGuideArticle } from "@/components/sites/tracesheet/guide-pages";
import { getApp, localized } from "@/content/apps";
import { isLwGuideId, lwGuide, TRACESHEET_GUIDE_IDS } from "@/content/tracesheet-guides";
import { isLocale, LOCALES } from "@/lib/i18n";
import { appPageMetadata } from "@/lib/seo";

// Every guide exists in all three locales. Return the full {locale, id}
// tuples here (rather than relying on the parent's params) and refuse the
// rest, so the build pre-renders exactly LOCALES × ids.
export function generateStaticParams() {
  return LOCALES.flatMap((locale) => TRACESHEET_GUIDE_IDS.map((id) => ({ locale, id })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isLocale(locale) || !isLwGuideId(id)) return {};
  const app = getApp("tracesheet")!;
  const g = lwGuide(locale, id);
  return appPageMetadata({
    app,
    loc: localized(app, locale),
    locale,
    path: `/guide/${id}`,
    title: g.metaTitle,
    description: g.description,
    type: "article",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  if (!isLocale(locale) || !isLwGuideId(id)) notFound();
  return <LwGuideArticle locale={locale} id={id} />;
}
