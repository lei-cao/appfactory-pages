// Home-game guide reader for Poker Night's marketing site.
//
// Source of truth for the *content* is the app repo
// (apps/poker-night/assets/content/guide/*.json); this site renders the
// already-generated, web-ready Markdown copies
// (apps/poker-night/docs/content/web/{en,zh}/<id>.md), which are copied
// verbatim into site/content/poker-night/guide/{en,zh}/ at publish time.
// Never hand-edit those .md files — regenerate and re-copy them instead.
//
// Markdown is plain (headings, bold/italic, lists, GFM tables, blockquotes,
// and relative links to other articles like `./hand-rankings.md`) — no
// images, no code fences. `marked` is the one small dependency this adds;
// front matter is parsed by hand below rather than pulling in a YAML
// library, since the generator's front matter shape is fixed and simple
// (flat scalar keys, one inline array, one nested block we don't need).

import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { localePrefix, type Locale } from "./i18n";

/** Reading order from apps/poker-night/docs/content/README.md. */
export const GUIDE_ARTICLE_IDS = [
  "holdem-basics",
  "hand-rankings",
  "betting-rounds",
  "blinds-antes-straddles",
  "showdown-side-pots",
  "omaha-plo",
  "preflop-hands",
  "outs-and-odds",
  "hosting-home-game",
  "house-rules",
  "etiquette",
  "dealing-and-misdeals",
  "chips-and-stacks",
  "cash-vs-tournament",
  "tournament-blind-structures",
  "settle-up-with-poker-night",
  "poker-glossary",
] as const;

export type GuideArticleId = (typeof GUIDE_ARTICLE_IDS)[number];

/** Only "en" and "zh-cn" have guide content; zh-Hant hasn't been written. */
export type GuideLocale = "en" | "zh-cn";

export const GUIDE_LOCALES: GuideLocale[] = ["en", "zh-cn"];

export function isGuideLocale(locale: Locale): locale is GuideLocale {
  return locale === "en" || locale === "zh-cn";
}

/**
 * hreflang alternates for a guide page — only "en" and "zh-cn" exist, unlike
 * `languageAlternates` in ./i18n, which always includes "zh-TW" for pages
 * that exist in all three locales.
 */
export function guideLanguageAlternates(origin: string, path: string) {
  const p = path === "/" ? "" : path;
  return {
    en: `${origin}${p || "/"}`,
    "zh-CN": `${origin}/zh-cn${p}`,
    "x-default": `${origin}${p || "/"}`,
  };
}

/** Site locale -> the guide content directory it reads from. */
function contentDir(locale: GuideLocale): string {
  const dir = locale === "en" ? "en" : "zh";
  return path.join(process.cwd(), "content", "poker-night", "guide", dir);
}

export interface GuideFrontMatter {
  title: string;
  description: string;
  slug: string;
  updated: string;
  readingMinutes: number;
}

export interface GuideArticleMeta extends GuideFrontMatter {
  id: GuideArticleId;
  order: number;
}

export interface GuideArticle extends GuideArticleMeta {
  /** Rendered HTML body (front matter and the generator comment stripped). */
  html: string;
}

/**
 * Minimal front-matter reader for this generator's fixed shape: top-level
 * `key: value` lines only. Nested blocks (just `alternates:` here) are
 * skipped because their child lines are indented and the key regex below
 * only matches unindented lines. Not a general YAML parser by design.
 */
function parseFrontMatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const [, frontMatter, body] = match;
  const data: Record<string, string> = {};
  for (const line of frontMatter.split("\n")) {
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!kv) continue; // indented (nested) or blank lines
    const [, key, rawValue] = kv;
    data[key] = rawValue.trim().replace(/^"(.*)"$/, "$1");
  }
  return { data, body };
}

function readRaw(locale: GuideLocale, id: GuideArticleId): string {
  return fs.readFileSync(path.join(contentDir(locale), `${id}.md`), "utf8");
}

/** Rewrite `./other-article.md` links to this site's guide route. */
function rewriteArticleLinks(markdown: string, locale: Locale, slug: string): string {
  const prefix = `${localePrefix(locale)}/apps/${slug}/guide`;
  return markdown.replace(
    /\]\(\.\/([a-z0-9-]+)\.md\)/g,
    (_match, articleId) => `](${prefix}/${articleId})`,
  );
}

export function getGuideArticleMeta(
  locale: GuideLocale,
  id: GuideArticleId,
): GuideArticleMeta {
  const { data } = parseFrontMatter(readRaw(locale, id));
  return {
    id,
    order: GUIDE_ARTICLE_IDS.indexOf(id) + 1,
    title: data.title ?? id,
    description: data.description ?? "",
    slug: data.slug ?? id,
    updated: data.updated ?? "",
    readingMinutes: Number(data.readingMinutes ?? 0),
  };
}

export function listGuideArticles(locale: GuideLocale): GuideArticleMeta[] {
  return GUIDE_ARTICLE_IDS.map((id) => getGuideArticleMeta(locale, id));
}

export function getGuideArticle(
  locale: GuideLocale,
  id: GuideArticleId,
  appSlug: string,
): GuideArticle {
  const raw = readRaw(locale, id);
  const { data, body } = parseFrontMatter(raw);
  const withoutGeneratorComment = body
    .replace(/<!--\s*Generated by[\s\S]*?-->\n*/, "")
    .trim();
  // Every generated article body opens with a fixed "# Title / *description*
  // / N min read · Updated <date>" block that duplicates front matter this
  // page already renders as its own <h1> and meta line — strip it so the
  // title and reading time don't appear twice.
  const withoutHeaderBlock = withoutGeneratorComment
    .replace(/^#[^\n]*\n+\*[^\n]*\*\n+[^\n]*\n+/, "")
    .trim();
  const linked = rewriteArticleLinks(withoutHeaderBlock, locale, appSlug);
  const html = marked.parse(linked, { async: false }) as string;
  return {
    id,
    order: GUIDE_ARTICLE_IDS.indexOf(id) + 1,
    title: data.title ?? id,
    description: data.description ?? "",
    slug: data.slug ?? id,
    updated: data.updated ?? "",
    readingMinutes: Number(data.readingMinutes ?? 0),
    html,
  };
}
