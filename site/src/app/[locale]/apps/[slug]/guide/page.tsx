import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { getDict } from "@/lib/dictionaries";
import { guideLanguageAlternates, isGuideLocale, listGuideArticles } from "@/lib/guide";
import { fmt, isLocale, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  if (!isGuideLocale(locale)) return {};
  const app = getApp(slug);
  if (!app) return {};
  if (slug !== "poker-night") return {};
  const loc = localized(app, locale);
  const dict = getDict(locale);
  return {
    title: { absolute: fmt(dict.guide.title, { name: loc.name }) },
    description: dict.guide.intro,
    alternates: {
      canonical: `${appOrigin(slug)}${localePrefix(locale)}/guide`,
      languages: guideLanguageAlternates(appOrigin(slug), "/guide"),
    },
    icons: { icon: app.icon },
  };
}

export default async function GuideIndex({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const app = getApp(slug);
  if (!app) notFound();
  if (slug !== "poker-night") notFound();
  if (!isGuideLocale(locale)) notFound();

  const loc = localized(app, locale);
  const dict = getDict(locale);
  const articles = listGuideArticles(locale);
  const base = `${localePrefix(locale)}/apps/${slug}/guide`;

  return (
    <main className="mx-auto w-full max-w-2xl pt-16 pb-24">
      <span className="spec-label">{dict.guide.eyebrow}</span>
      <h1 className="font-display mt-3 text-4xl font-bold">
        {fmt(dict.guide.title, { name: loc.name })}
      </h1>
      <p className="text-slate mt-4 leading-relaxed">{dict.guide.intro}</p>

      <ol className="mt-10 space-y-6">
        {articles.map((article) => (
          <li key={article.id} className="border-line border-b pb-6">
            <Link
              href={`${base}/${article.id}`}
              className="font-display text-lg font-semibold transition-colors hover:text-indigo-soft"
            >
              {article.order}. {article.title}
            </Link>
            <p className="text-slate mt-2 leading-relaxed">
              {article.description}
            </p>
            <p className="spec-label mt-2">
              {fmt(dict.guide.minutesRead, { n: String(article.readingMinutes) })}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
}
