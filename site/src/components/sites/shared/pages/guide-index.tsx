import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { getDict } from "@/lib/dictionaries";
import { guideLanguageAlternates, isGuideLocale, listGuideArticles } from "@/lib/guide";
import { fmt, isLocale, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";
import { appPageMetadata, breadcrumbLd, JsonLd } from "@/lib/seo";
import { GuideCta } from "@/components/sites/poker-night/guide-cta";

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
  return appPageMetadata({
    app,
    loc,
    locale,
    path: "/guide",
    title: fmt(dict.guide.title, { name: loc.name }),
    description: dict.guide.intro,
    languages: guideLanguageAlternates(appOrigin(app), "/guide"),
  });
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
    <main className="pn-guide">
      <JsonLd
        data={[
          breadcrumbLd(app, loc, locale, [
            { name: fmt(dict.guide.title, { name: loc.name }), path: "/guide" },
          ]),
        ]}
      />
      <header className="pn-guide__head">
        <h1 className="pn-guide__h1">{fmt(dict.guide.title, { name: loc.name })}</h1>
        <p className="pn-lead">{dict.guide.intro}</p>
      </header>

      <ol className="pn-guide__list">
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`${base}/${article.id}`}>
              <strong>{article.title}</strong>
              <span>
                {article.description}{" "}
                {fmt(dict.guide.minutesRead, { n: String(article.readingMinutes) })}
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <GuideCta locale={locale} slug={slug} name={loc.name} storeUrl={app.appStoreUrl} />
    </main>
  );
}
