import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { getDict } from "@/lib/dictionaries";
import {
  GUIDE_ARTICLE_IDS,
  GUIDE_LOCALES,
  getGuideArticle,
  getGuideArticleMeta,
  guideLanguageAlternates,
  isGuideLocale,
  type GuideArticleId,
} from "@/lib/guide";
import { fmt, isLocale, LANG_TAG, localePrefix } from "@/lib/i18n";
import { appOrigin, hubOrigin } from "@/lib/site";
import { appPageMetadata, appPageUrl, breadcrumbLd, JsonLd } from "@/lib/seo";
import { GuideCta } from "@/components/sites/poker-night/guide-cta";

function isGuideArticleId(x: string): x is GuideArticleId {
  return (GUIDE_ARTICLE_IDS as readonly string[]).includes(x);
}

// Only Poker Night, in en/zh-cn, has guide content. Rather than rely on
// Next threading the parent layout's {locale, slug} params down to this
// generateStaticParams (in practice that returned an empty merged set and
// silently produced zero static pages), this returns fully-qualified
// {locale, slug, articleId} tuples itself — the same self-contained pattern
// ../../layout.tsx already uses for {locale, slug}. dynamicParams = false
// below turns every other (locale, slug, articleId) combo the parent layout
// allows into a 404 instead of an on-demand render.
export function generateStaticParams() {
  return GUIDE_LOCALES.flatMap((locale) =>
    GUIDE_ARTICLE_IDS.map((articleId) => ({
      locale,
      slug: "poker-night",
      articleId,
    })),
  );
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string; articleId: string }>;
}): Promise<Metadata> {
  const { locale, slug, articleId } = await params;
  if (!isLocale(locale)) return {};
  if (!isGuideLocale(locale)) return {};
  const app = getApp(slug);
  if (!app) return {};
  if (slug !== "poker-night") return {};
  if (!isGuideArticleId(articleId)) return {};

  const loc = localized(app, locale);
  const article = getGuideArticle(locale, articleId, slug);
  return appPageMetadata({
    app,
    loc,
    locale,
    path: `/guide/${articleId}`,
    title: `${article.title} — ${loc.name}`,
    description: article.description,
    languages: guideLanguageAlternates(appOrigin(slug), `/guide/${articleId}`),
    type: "article",
  });
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; articleId: string }>;
}) {
  const { locale, slug, articleId } = await params;
  if (!isLocale(locale)) notFound();
  const app = getApp(slug);
  if (!app) notFound();
  if (slug !== "poker-night") notFound();
  if (!isGuideLocale(locale)) notFound();
  if (!isGuideArticleId(articleId)) notFound();

  const dict = getDict(locale);
  const article = getGuideArticle(locale, articleId, slug);
  const base = `${localePrefix(locale)}/apps/${slug}/guide`;
  const loc = localized(app, locale);
  const url = appPageUrl(slug, locale, `/guide/${articleId}`);
  const at = GUIDE_ARTICLE_IDS.indexOf(articleId);
  const prev = at > 0 ? getGuideArticleMeta(locale, GUIDE_ARTICLE_IDS[at - 1]) : null;
  const next = at < GUIDE_ARTICLE_IDS.length - 1 ? getGuideArticleMeta(locale, GUIDE_ARTICLE_IDS[at + 1]) : null;

  return (
    <main className="pn-guide">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            inLanguage: LANG_TAG[locale],
            url,
            mainEntityOfPage: url,
            ...(article.updated && { dateModified: article.updated }),
            ...(app.ogImage && { image: new URL(app.ogImage, url).toString() }),
            author: { "@id": `${hubOrigin()}/#org` },
            publisher: { "@id": `${hubOrigin()}/#org` },
            about: { "@id": `${appPageUrl(slug, locale)}#app` },
          },
          breadcrumbLd(app, loc, locale, [
            { name: fmt(dict.guide.title, { name: loc.name }), path: "/guide" },
            { name: article.title, path: `/guide/${articleId}` },
          ]),
        ]}
      />
      <header className="pn-guide__head">
        <Link href={base} className="pn-link pn-small">
          {dict.guide.back}
        </Link>
        <h1 className="pn-guide__h1">{article.title}</h1>
        <p className="pn-lead">{article.description}</p>
      </header>

      <div className="pn-guide__article">
        <aside className="pn-guide__aside">
          <p>
            {fmt(dict.guide.minutesRead, { n: String(article.readingMinutes) })}
            <br />
            {fmt(dict.guide.updated, { date: article.updated })}
          </p>
          <p>
            <Link href={base} className="pn-textlink">
              {fmt(dict.guide.title, { name: loc.name })}
            </Link>
          </p>
        </aside>
        <div>
          <div className="pn-guide__body" dangerouslySetInnerHTML={{ __html: article.html }} />
          <nav className="pn-guide__next" aria-label={fmt(dict.guide.title, { name: loc.name })}>
            {prev && (
              <Link href={`${base}/${prev.id}`}>
                <small>←</small>
                <strong>{prev.title}</strong>
              </Link>
            )}
            {next && (
              <Link href={`${base}/${next.id}`}>
                <small>→</small>
                <strong>{next.title}</strong>
              </Link>
            )}
          </nav>
          <GuideCta locale={locale} slug={slug} name={loc.name} storeUrl={app.appStoreUrl} />
        </div>
      </div>
    </main>
  );
}
