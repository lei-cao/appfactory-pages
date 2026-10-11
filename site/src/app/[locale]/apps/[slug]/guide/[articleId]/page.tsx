import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { getDict } from "@/lib/dictionaries";
import {
  GUIDE_ARTICLE_IDS,
  GUIDE_LOCALES,
  getGuideArticle,
  guideLanguageAlternates,
  isGuideLocale,
  type GuideArticleId,
} from "@/lib/guide";
import { fmt, isLocale, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

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

export const dynamicParams = false;

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
  return {
    title: { absolute: `${article.title} — ${loc.name}` },
    description: article.description,
    alternates: {
      canonical: `${appOrigin(slug)}${localePrefix(locale)}/guide/${articleId}`,
      languages: guideLanguageAlternates(
        appOrigin(slug),
        `/guide/${articleId}`,
      ),
    },
    icons: { icon: app.icon },
  };
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

  return (
    <main className="mx-auto w-full max-w-2xl pt-16 pb-24">
      <Link
        href={base}
        className="spec-label transition-colors hover:text-indigo-soft"
      >
        {dict.guide.back}
      </Link>
      <h1 className="font-display mt-4 text-4xl font-bold">
        {article.title}
      </h1>
      <p className="spec-label mt-3">
        {fmt(dict.guide.minutesRead, { n: String(article.readingMinutes) })}
        {" · "}
        {fmt(dict.guide.updated, { date: article.updated })}
      </p>
      <div
        className="text-slate mt-8 leading-relaxed [&_a]:text-indigo-soft [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-line [&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:font-display [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-paper [&_h3]:font-display [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-paper [&_li]:leading-relaxed [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:mt-3 [&_strong]:font-semibold [&_strong]:text-paper [&_table]:mt-4 [&_table]:w-full [&_table]:border-collapse [&_td]:border-line [&_td]:border-b [&_td]:py-2 [&_td]:pr-4 [&_th]:border-line [&_th]:border-b [&_th]:pb-2 [&_th]:pr-4 [&_th]:text-left [&_th]:font-semibold [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </main>
  );
}
