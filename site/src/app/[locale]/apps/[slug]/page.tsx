import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { SushiSortLandingPage } from "@/components/sushi-sort/landing";
import { TracesheetLandingPage } from "@/components/tracesheet/landing";
import { EmberDeckLandingPage } from "@/components/ember-deck/landing";
import { StatusBadge } from "@/components/status";
import { StoreBadges } from "@/components/store-badges";
import { getDict } from "@/lib/dictionaries";
import { isLocale, languageAlternates, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

const CREDITS_COPY = {
  en: {
    title: "Music & sound credits",
    intro: "The music and sound effects in this game come from these sources, used under their licences.",
    music: "Music",
    sfx: "Sound effects",
    tracks: "Tracks",
  },
  "zh-cn": {
    title: "音乐与音效致谢",
    intro: "本游戏的音乐与音效来自以下来源，并按其许可使用。",
    music: "音乐",
    sfx: "音效",
    tracks: "曲目",
  },
  "zh-tw": {
    title: "音樂與音效致謝",
    intro: "本遊戲的音樂與音效來自以下來源，並依其授權使用。",
    music: "音樂",
    sfx: "音效",
    tracks: "曲目",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApp(slug);
  if (!app || !isLocale(locale)) return {};
  const loc = localized(app, locale);
  const title = loc.metaTitle ?? loc.storeName;
  const description = loc.metaDescription ?? loc.oneLiner;
  const image = app.ogImage ?? loc.screenshots[0]?.src ?? app.icon;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${appOrigin(slug)}${localePrefix(locale)}`,
      languages: languageAlternates(appOrigin(slug), "/"),
    },
    ...(app.icon && { icons: { icon: app.icon } }),
    ...(app.appStoreId && { itunes: { appId: app.appStoreId } }),
    openGraph: {
      title,
      description,
      url: `${appOrigin(slug)}${localePrefix(locale)}`,
      siteName: loc.name,
      type: "website",
      ...(image && {
        images: app.ogImage
          ? [{ url: image, width: 1200, height: 630, alt: loc.storeName }]
          : [image],
      }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function AppLanding({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const app = getApp(slug);
  if (!app) notFound();

  // Apps with a bespoke landing page render it instead of the template.
  if (slug === "sushi-sort") return <SushiSortLandingPage locale={locale} />;
  if (slug === "tracesheet") return <TracesheetLandingPage locale={locale} />;
  if (slug === "ember-deck") return <EmberDeckLandingPage locale={locale} />;

  const loc = localized(app, locale);
  const dict = getDict(locale);
  const credits = CREDITS_COPY[locale];

  return (
    <main>
      {/* Hero */}
      <section className="grid items-center gap-12 pt-20 pb-16 sm:grid-cols-[3fr_2fr] sm:pt-28 sm:pb-24">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <StatusBadge status={app.status} label={dict.status[app.status]} />
            <span className="spec-label">v{app.version}</span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            {loc.tagline}
          </h1>
          <p className="text-slate mt-6 max-w-lg text-lg leading-relaxed">
            {loc.oneLiner}
          </p>
          <div className="mt-9">
            <StoreBadges app={app} dict={dict} />
          </div>
          <p className="spec-label mt-4">{loc.statusNote}</p>
        </div>
        {loc.screenshots[0] && (
          <div className="relative mx-auto w-full max-w-70">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-indigo opacity-15 blur-3xl"
            />
            <Image
              src={loc.screenshots[0].src}
              alt={loc.screenshots[0].alt}
              width={640}
              height={1391}
              priority
              className="border-line relative rounded-2xl border shadow-2xl"
            />
          </div>
        )}
      </section>

      {/* Features */}
      <section aria-label={dict.app.whatItDoes} className="pb-20">
        <h2 className="spec-label border-line border-b pb-3">
          {dict.app.whatItDoes}
        </h2>
        <div className="grid gap-x-10 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {loc.features.map((f) => (
            <div key={f.title}>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens */}
      {loc.screenshots.length > 1 && (
        <section aria-label={dict.app.screens} className="pb-20">
          <h2 className="spec-label border-line border-b pb-3">
            {dict.app.screens}
          </h2>
          <div className="flex gap-6 overflow-x-auto pt-10 pb-2">
            {loc.screenshots.slice(1).map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={480}
                height={1043}
                className="border-line w-56 shrink-0 rounded-2xl border sm:w-64"
              />
            ))}
          </div>
        </section>
      )}

      {/* Music & sound credits (licence condition) */}
      {app.credits && (
        <section id="credits" aria-label={credits.title} className="pb-20">
          <h2 className="spec-label border-line border-b pb-3">
            {credits.title}
          </h2>
          <p className="text-slate mt-6 max-w-2xl leading-relaxed">
            {credits.intro}
          </p>
          <h3 className="font-display mt-8 text-lg font-semibold">
            {credits.music}
          </h3>
          <p className="mt-2 leading-relaxed">
            Music: もみじば (Momijiba) —{" "}
            <a
              href={app.credits.musicUrl}
              className="underline underline-offset-4 hover:text-indigo"
            >
              MOMIZizm MUSiC
            </a>{" "}
            <a
              href={app.credits.musicUrl}
              className="text-slate break-all underline underline-offset-4 hover:text-indigo"
            >
              {app.credits.musicUrl}
            </a>
          </p>
          {app.credits.tracks.length > 0 && (
            <>
              <p className="spec-label mt-5">{credits.tracks}</p>
              <ul className="text-slate mt-3 grid gap-x-10 gap-y-1.5 text-sm leading-relaxed sm:grid-cols-2">
                {app.credits.tracks.map((t) => (
                  <li key={t.url}>
                    {t.style}{" "}
                    <a
                      href={t.url}
                      className="underline underline-offset-4 hover:text-indigo"
                    >
                      “{t.title}”
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
          <h3 className="font-display mt-8 text-lg font-semibold">
            {credits.sfx}
          </h3>
          <p className="mt-2 leading-relaxed">
            <a
              href={app.credits.sfx.url}
              className="underline underline-offset-4 hover:text-indigo"
            >
              {app.credits.sfx.line}
            </a>
          </p>
        </section>
      )}

      {/* Trust block */}
      {loc.trust && (
        <section className="pb-24">
          <div className="border-line bg-panel rounded-2xl border p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold">
              {loc.trust.title}
            </h2>
            <p className="text-slate mt-3 max-w-2xl leading-relaxed">
              {loc.trust.body}
            </p>
          </div>
        </section>
      )}

      {/* Studio cross-promo (e.g. Poker Night → TiltFree) */}
      {app.studioLink && (
        <section className="pb-24">
          <p className="spec-label border-line border-t pt-6">
            <a
              href={app.studioLink.urls[locale] ?? app.studioLink.urls.en}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-indigo-soft"
            >
              {app.studioLink.text[locale]}{" "}
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </p>
        </section>
      )}
    </main>
  );
}
