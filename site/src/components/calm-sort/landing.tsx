// Bespoke landing page for calm-sort.appfactory.sg. Rendered by
// app/[locale]/apps/[slug]/page.tsx in place of the generic template; the
// warm theme comes from [data-app="calm-sort"] in globals.css, so all
// semantic utilities here (bg-panel, border-line, text-slate…) resolve to
// the izakaya palette.

import Image from "next/image";
import { getApp, localized } from "@/content/apps";
import { calmSortLanding } from "@/content/calm-sort";
import { StoreBadges } from "@/components/store-badges";
import { getDict } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { LANG_TAG, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

// Ceramic-plate palette lifted from the app icon.
const PLATES = ["#e8834a", "#f2c063", "#4fa394", "#e89ca6"];

/** A serving lane with ceramic plates — the game's core object, in CSS. */
function Lane({
  plates,
  highlight,
  done,
}: {
  plates: number[];
  highlight?: boolean;
  done?: boolean;
}) {
  return (
    <div
      className="border-line bg-panel-2 flex h-9 w-full items-center gap-2 rounded-full border px-2.5"
      aria-hidden
    >
      {plates.map((p, i) => (
        <span
          key={i}
          className="inline-block h-5 w-5 rounded-full shadow-sm"
          style={{
            background: PLATES[p],
            outline:
              highlight && i === 0 ? "2px solid var(--color-indigo)" : "none",
            outlineOffset: "2px",
          }}
        />
      ))}
      {done && (
        <span className="text-indigo ml-auto pr-1 text-sm font-bold">✓</span>
      )}
    </div>
  );
}

const STEP_LANES = [
  <Lane key="a" plates={[0, 2, 1]} highlight />,
  <div key="b" className="flex w-full flex-col gap-2">
    <Lane plates={[0, 2]} />
    <Lane plates={[0, 0]} highlight />
  </div>,
  <Lane key="c" plates={[3, 3, 3, 3]} done />,
];

export async function CalmSortLandingPage({ locale }: { locale: Locale }) {
  const app = getApp("calm-sort")!;
  const loc = localized(app, locale);
  const copy = calmSortLanding[locale];
  const dict = getDict(locale);
  const origin = appOrigin(app.slug);
  const url = `${origin}${localePrefix(locale)}/`;

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
      <section className="relative grid items-center gap-14 pt-16 pb-20 sm:grid-cols-[1.1fr_1fr] sm:pt-24 sm:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {[8, 26, 44, 62, 81, 93].map((left, i) => (
            <span
              key={left}
              className="cs-petal"
              style={{
                left: `${left}%`,
                top: `${(i % 3) * 9}%`,
                animationDelay: `${i * 1.7}s`,
                animationDuration: `${10 + (i % 4) * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="relative">
          <span className="spec-label">{copy.kicker}</span>
          <h1 className="font-display mt-4 text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            {copy.heroWords[0]}
            <br />
            {copy.heroWords[1]}
            <br />
            <span className="text-indigo">{copy.heroWords[2]}</span>
          </h1>
          <p className="text-slate mt-6 max-w-md text-lg leading-relaxed">
            {copy.heroSub}
          </p>
          <div className="mt-9">
            <StoreBadges app={app} dict={dict} />
          </div>
          <p className="spec-label mt-4">{loc.statusNote}</p>
          <p className="text-slate mt-2 text-sm">{copy.priceNote}</p>
        </div>
        <div className="relative mx-auto w-full max-w-105">
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(233,150,105,0.55), rgba(238,157,180,0.25), transparent)",
            }}
          />
          <div className="relative flex items-end justify-center">
            <Image
              src="/apps/calm-sort/shot-board.png"
              alt={loc.screenshots[1].alt}
              width={375}
              height={815}
              className="border-line relative z-0 w-40 -rotate-6 rounded-2xl border shadow-xl sm:w-48"
            />
            <Image
              src="/apps/calm-sort/shot-home.png"
              alt={loc.screenshots[0].alt}
              width={375}
              height={815}
              priority
              className="border-line relative z-10 -ml-10 w-52 rotate-2 rounded-3xl border shadow-2xl sm:w-64"
            />
          </div>
        </div>
      </section>

      {/* Promises — the signature menu card */}
      <section aria-label={copy.promisesTitle} className="pb-24">
        <div className="border-line bg-panel relative rounded-3xl border p-8 shadow-sm sm:p-12">
          <div
            aria-hidden
            className="border-line pointer-events-none absolute inset-2.5 rounded-[1.25rem] border border-dashed opacity-70"
          />
          <div className="relative">
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
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {copy.promises.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="bg-indigo mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold text-white"
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{p.title}</h3>
                    <p className="text-slate mt-1.5 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it plays */}
      <section aria-label={copy.howTitle} className="pb-24">
        <span className="spec-label">{copy.howEyebrow}</span>
        <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
          {copy.howTitle}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {copy.steps.map((step, i) => (
            <div
              key={step.title}
              className="border-line bg-panel flex flex-col rounded-2xl border p-6"
            >
              <span className="font-display text-indigo text-sm font-bold">
                0{i + 1}
              </span>
              <div className="mt-4 mb-5 flex min-h-20 items-center">
                {STEP_LANES[i]}
              </div>
              <h3 className="font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-slate mt-2 text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ten worlds — the tasting course */}
      <section aria-label={copy.worldsTitle} className="pb-24">
        <div
          className="border-line rounded-3xl border p-8 sm:p-12"
          style={{
            background:
              "linear-gradient(120deg, var(--color-panel), var(--color-panel-2))",
          }}
        >
          <span className="spec-label">{copy.worldsEyebrow}</span>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            {copy.worldsTitle}
          </h2>
          <p className="text-slate mt-4 max-w-3xl leading-relaxed">
            {copy.worldsBody}
          </p>
          <div className="mt-10" aria-hidden>
            <div
              className="relative h-3 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #f0dcb4, #e2a86b, #b06a3c, #4a2c1a)",
              }}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#fdf8ec] shadow-sm"
                  style={{
                    left: `${3 + (i * 94) / 9}%`,
                    background: i < 5 ? "#e2a86b" : i < 8 ? "#a45f36" : "#432818",
                  }}
                />
              ))}
            </div>
            <div className="text-slate mt-4 flex justify-between gap-4 text-xs sm:text-sm">
              <span>{copy.worldFirst}</span>
              <span className="text-right">{copy.worldLast}</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section aria-label={copy.insideTitle} className="pb-24">
        <span className="spec-label">{copy.insideEyebrow}</span>
        <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
          {copy.insideTitle}
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {loc.features.map((f) => (
            <div key={f.title}>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens */}
      <section aria-label={copy.galleryTitle} className="pb-24">
        <span className="spec-label">{copy.galleryEyebrow}</span>
        <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
          {copy.galleryTitle}
        </h2>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-2">
          {loc.screenshots.map((shot) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={375}
              height={815}
              className="border-line w-56 shrink-0 rounded-2xl border shadow-md sm:w-64"
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section aria-label={copy.faqTitle} className="pb-24">
        <span className="spec-label">{copy.faqEyebrow}</span>
        <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
          {copy.faqTitle}
        </h2>
        <dl className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {loc.faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-display text-lg font-semibold">{faq.q}</dt>
              <dd className="text-slate mt-2 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Closing CTA */}
      <section className="pb-28">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center sm:p-16"
          style={{
            background: "linear-gradient(135deg, #5a3a22, #3a2415 60%, #2c1a0e)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(600px 300px at 80% 0%, rgba(238,157,180,0.35), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center">
            <Image
              src={app.icon}
              alt=""
              width={72}
              height={72}
              className="rounded-2xl shadow-lg"
            />
            <h2 className="font-display mt-6 max-w-2xl text-3xl font-bold text-[#f8f0e1] sm:text-4xl">
              {copy.closingTitle}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[#d9c5a8]">
              {copy.closingBody}
            </p>
            <div className="cs-dark mt-8">
              <StoreBadges app={app} dict={dict} />
            </div>
            <p className="mt-5 text-sm text-[#bfa987]">{copy.priceNote}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
