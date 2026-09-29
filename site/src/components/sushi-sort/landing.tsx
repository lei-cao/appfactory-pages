// Bespoke landing page for sushi-sort.appfactory.sg (2.2, "The Mystery
// Tray"). Rendered by app/[locale]/apps/[slug]/page.tsx in place of the
// generic template; the lacquer theme comes from [data-app="sushi-sort"] in
// globals.css, so the semantic utilities here (bg-panel, border-line,
// text-slate…) resolve to the game's lacquer / vermilion / hinoki palette.
// Every picture is a real in-game capture (public/apps/sushi-sort/).

import Image from "next/image";
import { getApp, localized, type AppContent } from "@/content/apps";
import {
  sushiSortLanding,
  sushiSortMusicCredits,
  sushiSortSfxCredits,
  type CreditSource,
} from "@/content/sushi-sort";
import type { Locale } from "@/lib/i18n";
import { LANG_TAG, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

/** Screenshot pixel size (640px wide, iPhone Pro aspect minus the ad row). */
const SHOT_W = 640;
const SHOT_H = 1266;

/** Official "Download on the App Store" artwork from Apple Marketing Tools,
 * black badge, one file per locale, shown as delivered. */
const APP_STORE_BADGES: Record<
  Locale,
  { src: string; width: number; alt: string }
> = {
  en: {
    src: "/apps/sushi-sort/app-store-badge-en.svg",
    width: 119.66407,
    alt: "Download on the App Store",
  },
  "zh-cn": {
    src: "/apps/sushi-sort/app-store-badge-zh-cn.svg",
    width: 108.85157,
    alt: "App Store 下载",
  },
  "zh-tw": {
    src: "/apps/sushi-sort/app-store-badge-zh-tw.svg",
    width: 108.85157,
    alt: "App Store 下載",
  },
};
const BADGE_HEIGHT = 48;

function AppStoreBadge({ app, locale }: { app: AppContent; locale: Locale }) {
  if (!app.appStoreUrl) return null;
  const badge = APP_STORE_BADGES[locale];
  return (
    <a
      href={app.appStoreUrl}
      className="ss-store-badge inline-block leading-none"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badge.src}
        alt={badge.alt}
        width={(badge.width / 40) * BADGE_HEIGHT}
        height={BADGE_HEIGHT}
        className="h-12 w-auto"
      />
    </a>
  );
}

/** A real phone screenshot in a thin gold frame. */
function Shot({
  src,
  alt,
  className = "",
  priority,
  sizes = "(min-width: 640px) 280px, 45vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={SHOT_W}
      height={SHOT_H}
      sizes={sizes}
      priority={priority}
      className={`ss-shot h-auto w-full ${className}`}
    />
  );
}

/** Screenshot with a short caption underneath. */
function Figure({
  src,
  alt,
  caption,
  sizes,
}: {
  src: string;
  alt: string;
  caption: string;
  sizes?: string;
}) {
  return (
    <figure>
      <Shot src={src} alt={alt} sizes={sizes} />
      <figcaption className="text-slate mt-3 text-sm leading-snug">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <>
      <span className="spec-label">{eyebrow}</span>
      <h2 className="font-display mt-3 text-3xl leading-tight font-bold sm:text-4xl">
        {title}
      </h2>
      {body && (
        <p className="text-slate mt-4 max-w-xl text-lg leading-relaxed">
          {body}
        </p>
      )}
    </>
  );
}

/** A list of short points, each marked with a lacquer lid. */
function LidList({ points }: { points: { title: string; body: string }[] }) {
  return (
    <ul className="mt-8 space-y-6">
      {points.map((p) => (
        <li key={p.title} className="flex gap-4">
          <span className="ss-lid mt-0.5" aria-hidden>
            ?
          </span>
          <div>
            <h3 className="font-display text-lg font-bold">{p.title}</h3>
            <p className="text-slate mt-1 leading-relaxed">{p.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** One credit source: who, licence, site link, then its tracks. */
function CreditCard({
  source,
  byLabel,
  locale,
}: {
  source: CreditSource;
  byLabel: string;
  locale: Locale;
}) {
  return (
    <div className="border-line bg-panel rounded-2xl border p-6">
      <h4 className="font-display text-lg font-semibold">
        <a
          href={source.url}
          className="hover:text-indigo underline decoration-dotted underline-offset-4"
          rel="noopener"
        >
          {source.name}
        </a>
      </h4>
      {source.requiredCredit && (
        <p className="mt-1 text-sm font-semibold">{source.requiredCredit}</p>
      )}
      <p className="text-slate mt-1 text-sm">
        {byLabel} {source.by} · {source.licence[locale]}
      </p>
      <p className="mt-1 text-sm break-all">
        <a href={source.url} className="text-indigo" rel="noopener">
          {source.url}
        </a>
      </p>
      <ul className="mt-4 space-y-1.5 text-sm leading-relaxed">
        {source.tracks.map((t) => (
          <li key={t.url}>
            <a
              href={t.url}
              className="hover:text-indigo underline decoration-dotted underline-offset-4"
              rel="noopener"
            >
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function SushiSortLandingPage({ locale }: { locale: Locale }) {
  const app = getApp("sushi-sort")!;
  const loc = localized(app, locale);
  const copy = sushiSortLanding[locale];
  const origin = appOrigin(app.slug);
  const url = `${origin}${localePrefix(locale)}/`;
  const shot = Object.fromEntries(
    loc.screenshots.map((s) => [s.src.replace(/^.*\/shot-|\.png$/g, ""), s]),
  );

  const gameLd = {
    "@context": "https://schema.org",
    "@type": ["VideoGame", "MobileApplication"],
    name: loc.storeName,
    alternateName: loc.name,
    description: loc.metaDescription ?? loc.oneLiner,
    url,
    inLanguage: LANG_TAG[locale],
    genre: ["Puzzle", "Casual"],
    gamePlatform: ["iOS", "Android"],
    operatingSystem: "iOS",
    applicationCategory: "GameApplication",
    softwareVersion: app.version,
    image: `${origin}${app.ogImage}`,
    screenshot: loc.screenshots.map((s) => `${origin}${s.src}`),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: "Lei Cao" },
    publisher: { "@type": "Organization", name: "appfactory", url: "https://appfactory.sg" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="grid items-center gap-12 pt-12 pb-20 sm:pt-20 md:grid-cols-[1fr_1fr] md:pb-28">
        <div>
          <p className="border-indigo text-indigo inline-block rounded-full border px-3 py-1 text-sm font-medium">
            {copy.versionLabel}
          </p>
          <h1 className="font-display mt-6 text-5xl leading-[1.08] font-extrabold tracking-tight sm:text-6xl">
            <span className="block">{copy.heroLines[0]}</span>
            <span className="text-indigo block">{copy.heroLines[1]}</span>
          </h1>
          <p className="text-slate mt-6 max-w-md text-lg leading-relaxed">
            {copy.heroSub}
          </p>
          <div className="mt-8">
            <AppStoreBadge app={app} locale={locale} />
          </div>
          <p className="mt-4 text-sm">{copy.priceNote}</p>
          <p className="text-slate mt-1 text-sm">{loc.statusNote}</p>
          <p className="spec-label mt-6">{copy.kicker}</p>
        </div>
        <div className="mx-auto w-[72%] max-w-80 rotate-2 md:w-full">
          <Shot
            src={shot.master.src}
            alt={shot.master.alt}
            priority
            sizes="(min-width: 768px) 320px, 72vw"
          />
        </div>
      </section>

      {/* The mystery tray */}
      <section
        aria-label={copy.mysteryTitle}
        className="border-line grid gap-12 border-t py-20 md:grid-cols-[1fr_1fr] md:py-24"
      >
        <div>
          <SectionHead
            eyebrow={copy.mysteryEyebrow}
            title={copy.mysteryTitle}
            body={copy.mysteryBody}
          />
          <LidList points={copy.mysteryPoints} />
        </div>
        <div className="grid grid-cols-2 content-start gap-4 sm:gap-6">
          <Figure
            src={shot.lids.src}
            alt={shot.lids.alt}
            caption={copy.mysteryBefore}
            sizes="(min-width: 768px) 220px, 45vw"
          />
          <Figure
            src={shot.mystery.src}
            alt={shot.mystery.alt}
            caption={copy.mysteryAfter}
            sizes="(min-width: 768px) 220px, 45vw"
          />
        </div>
      </section>

      {/* Five courses */}
      <section
        aria-label={copy.coursesTitle}
        className="border-line grid gap-12 border-t py-20 md:grid-cols-[1fr_17rem] md:py-24"
      >
        <div>
          <SectionHead
            eyebrow={copy.coursesEyebrow}
            title={copy.coursesTitle}
            body={copy.coursesBody}
          />
          <ol className="border-line bg-panel mt-8 divide-y divide-[var(--color-line)] rounded-2xl border">
            {copy.courses.map((c, i) => (
              <li key={c.title} className="flex gap-4 px-5 py-4">
                <span className="font-display w-5 shrink-0 pt-0.5 font-bold text-[var(--ss-gold)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{c.title}</h3>
                  <p className="text-slate mt-0.5 leading-relaxed">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mx-auto w-2/3 max-w-72 md:w-full md:pt-10">
          <Figure
            src={shot.first.src}
            alt={shot.first.alt}
            caption={copy.firstCaption}
            sizes="(min-width: 768px) 272px, 66vw"
          />
        </div>
      </section>

      {/* Chef's Order */}
      <section
        aria-label={copy.orderTitle}
        className="border-line grid gap-12 border-t py-20 md:grid-cols-[17rem_1fr] md:py-24"
      >
        <div className="order-2 mx-auto w-2/3 max-w-72 md:order-1 md:w-full md:pt-10">
          <Figure
            src={shot.order.src}
            alt={shot.order.alt}
            caption={copy.orderCaption}
            sizes="(min-width: 768px) 272px, 66vw"
          />
        </div>
        <div className="order-1 md:order-2">
          <SectionHead
            eyebrow={copy.orderEyebrow}
            title={copy.orderTitle}
            body={copy.orderBody}
          />
          <LidList points={copy.orderPoints} />
        </div>
      </section>

      {/* Restaurant, worlds, music */}
      <section
        aria-label={copy.restaurantTitle}
        className="border-line border-t py-20 md:py-24"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead
              eyebrow={copy.restaurantEyebrow}
              title={copy.restaurantTitle}
              body={copy.restaurantBody}
            />
            <LidList points={copy.restaurantPoints} />
          </div>
          <div className="grid grid-cols-2 content-start gap-4 sm:gap-6">
            <Figure
              src={shot.restaurant.src}
              alt={shot.restaurant.alt}
              caption={copy.restaurantCaption}
              sizes="(min-width: 768px) 220px, 45vw"
            />
            <Figure
              src={shot["world-page"].src}
              alt={shot["world-page"].alt}
              caption={copy.worldsCaption}
              sizes="(min-width: 768px) 220px, 45vw"
            />
          </div>
        </div>
      </section>

      {/* Promises — the menu card */}
      <section aria-label={copy.promisesTitle} className="pb-20 md:pb-24">
        <div className="bg-panel relative rounded-3xl border-2 border-[rgba(212,165,74,0.45)] p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            <span className="cs-hanko" aria-hidden>
              誠
            </span>
            <span className="spec-label mt-5">{copy.promisesEyebrow}</span>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              {copy.promisesTitle}
            </h2>
            <p className="text-slate mt-4 max-w-2xl leading-relaxed">
              {copy.promisesIntro}
            </p>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {copy.promises.map((p) => (
              <li key={p.title} className="border-line border-t pt-4">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="text-slate mt-1.5 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-label={copy.faqTitle}
        className="border-line border-t py-20 md:py-24"
      >
        <SectionHead eyebrow={copy.faqEyebrow} title={copy.faqTitle} />
        <dl className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {loc.faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-display text-lg font-bold">{faq.q}</dt>
              <dd className="text-slate mt-2 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Music & sound credits */}
      <section
        id="credits"
        aria-label={copy.creditsTitle}
        className="border-line border-t py-20 md:py-24"
      >
        <SectionHead
          eyebrow={copy.creditsEyebrow}
          title={copy.creditsTitle}
          body={copy.creditsIntro}
        />
        <h3 className="font-display mt-10 text-xl font-semibold">
          {copy.creditsMusic}
        </h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <CreditCard
            source={sushiSortMusicCredits[0]}
            byLabel={copy.creditsMusicBy}
            locale={locale}
          />
          <div className="grid content-start gap-6">
            {sushiSortMusicCredits.slice(1).map((c) => (
              <CreditCard
                key={c.url}
                source={c}
                byLabel={copy.creditsMusicBy}
                locale={locale}
              />
            ))}
          </div>
        </div>
        <h3 className="font-display mt-10 text-xl font-semibold">
          {copy.creditsSfx}
        </h3>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {sushiSortSfxCredits.map((c) => (
            <CreditCard
              key={c.url}
              source={c}
              byLabel={copy.creditsSoundsBy}
              locale={locale}
            />
          ))}
        </div>
        <p className="text-slate mt-6 text-sm">{copy.creditsOriginal}</p>
      </section>

      {/* Closing CTA */}
      <section className="pb-24">
        <div className="bg-panel-2 rounded-3xl border-t-4 border-[var(--ss-vermilion)] px-8 py-12 text-center sm:px-16 sm:py-16">
          <div className="flex flex-col items-center">
            <Image
              src={app.icon}
              alt=""
              width={72}
              height={72}
              className="rounded-2xl"
            />
            <h2 className="font-display mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">
              {copy.closingTitle}
            </h2>
            <p className="text-slate mt-4 max-w-xl leading-relaxed">
              {copy.closingBody}
            </p>
            <div className="mt-8">
              <AppStoreBadge app={app} locale={locale} />
            </div>
            <p className="text-slate mt-5 text-sm">{copy.priceNote}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
