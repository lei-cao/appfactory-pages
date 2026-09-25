// Bespoke landing page for tracesheet.appfactory.sg. Rendered by
// app/[locale]/apps/[slug]/page.tsx in place of the generic template; the
// paper-and-ink theme comes from [data-app="tracesheet"] in globals.css.
//
// There are no App Store screenshots yet, so every visual on this page is a
// CSS/SVG composition of the 田字格 practice grid — the product's own motif —
// rather than a placeholder image.

import { getApp, localized } from "@/content/apps";
import { tracesheetLanding } from "@/content/tracesheet";
import { StoreBadges } from "@/components/store-badges";
import { getDict } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { LANG_TAG, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

/** A 田字格 practice cell: dashed cross guides, ink border, a hanzi in the
 * kai stack. `diag` adds the 米字格 diagonal guides. `tone` switches the
 * glyph between the "guide to trace" red and the "written in ink" color. */
function GridCell({
  char,
  tone = "trace",
  diag = false,
  className = "",
}: {
  char: string;
  tone?: "trace" | "ink";
  diag?: boolean;
  className?: string;
}) {
  return (
    <div className={`ts-cell ${className}`}>
      {diag && <span className="ts-cell-diag" aria-hidden />}
      <span
        className="font-kai relative select-none leading-none"
        style={{
          fontSize: "58%",
          color: tone === "trace" ? "var(--color-indigo-soft)" : "var(--color-paper)",
          opacity: tone === "trace" ? 0.85 : 1,
        }}
        aria-hidden
      >
        {char}
      </span>
    </div>
  );
}

/** 拼音 four-line grid: a solid top/base pair with two dashed inner rules,
 * pinyin sitting on the top third the way a child's workbook prints it. */
function PinyinLines({ pinyin }: { pinyin: string }) {
  return (
    <div className="border-line bg-panel rounded-xl border px-4 py-5" aria-hidden>
      <div className="font-kai text-slate mb-2 text-center text-sm">{pinyin}</div>
      <div className="flex flex-col gap-1.5">
        <div className="border-paper h-0 border-t-[1.5px]" />
        <div className="h-0 border-t border-dashed" style={{ borderColor: "var(--ts-grid-dashed)" }} />
        <div className="h-0 border-t border-dashed" style={{ borderColor: "var(--ts-grid-dashed)" }} />
        <div className="border-paper h-0 border-t-[1.5px]" />
      </div>
    </div>
  );
}

/** 笔顺 stroke-order row: numbered mini cells, each a little more "written"
 * than the last. */
function StrokeOrderRow() {
  const strokes = [1, 2, 3, 4];
  return (
    <div className="flex gap-2" aria-hidden>
      {strokes.map((n) => (
        <div key={n} className="flex flex-1 flex-col items-center gap-1">
          <div className="ts-cell !aspect-square w-full">
            <span
              className="text-indigo text-xs font-bold"
              style={{ opacity: 0.7 + n * 0.06 }}
            >
              {n}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** English handwriting ruler: topline/midline/baseline with a traced word
 * in a dashed guide font-weight. */
function EnglishLines({ word }: { word: string }) {
  return (
    <div className="border-line bg-panel rounded-xl border px-4 py-5" aria-hidden>
      <div className="relative flex h-11 items-end justify-center">
        <div className="border-paper absolute inset-x-0 top-0 h-0 border-t-[1.5px]" />
        <div
          className="absolute inset-x-0 top-1/2 h-0 -translate-y-1/2 border-t border-dashed"
          style={{ borderColor: "var(--ts-grid-dashed)" }}
        />
        <div className="border-paper absolute inset-x-0 bottom-0 h-0 border-t-[1.5px]" />
        <span
          className="relative pb-0.5 text-lg font-semibold italic tracking-wide"
          style={{ color: "var(--color-indigo-soft)" }}
        >
          {word}
        </span>
      </div>
    </div>
  );
}

export async function TracesheetLandingPage({ locale }: { locale: Locale }) {
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  const copy = tracesheetLanding[locale];
  const dict = getDict(locale);
  const origin = appOrigin(app.slug);
  const url = `${origin}${localePrefix(locale)}/`;

  const appLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: loc.storeName,
    alternateName: loc.name,
    description: loc.metaDescription ?? loc.oneLiner,
    url,
    inLanguage: LANG_TAG[locale],
    applicationCategory: "EducationApplication",
    operatingSystem: "iOS",
    image: `${origin}${app.icon}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="grid items-center gap-14 pt-16 pb-20 sm:grid-cols-[1.1fr_1fr] sm:pt-24 sm:pb-28">
        <div>
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

        {/* Hero motif: a 田字格 cell mid-trace, a finished cell, a pinyin tag */}
        <div className="relative mx-auto w-full max-w-80">
          <div className="flex items-end justify-center gap-5">
            <GridCell
              char="字"
              tone="trace"
              diag
              className="w-32 -rotate-3 shadow-xl sm:w-40"
            />
            <div className="flex flex-col items-center gap-3">
              <GridCell char="学" tone="ink" className="w-20 rotate-2 shadow-lg sm:w-24" />
              <span
                className="font-kai border-line bg-panel rounded-full border px-3 py-1 text-sm shadow-sm"
                aria-hidden
              >
                xué
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
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
              <h3 className="font-display mt-4 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-slate mt-2 text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
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

      {/* Sheet styles — the CSS/SVG gallery standing in for screenshots */}
      <section aria-label={copy.sheetsTitle} className="pb-24">
        <div className="border-line bg-panel relative rounded-3xl border p-8 shadow-sm sm:p-12">
          <div
            aria-hidden
            className="border-line pointer-events-none absolute inset-2.5 rounded-[1.25rem] border border-dashed opacity-60"
          />
          <div className="relative">
            <span className="ts-seal" aria-hidden>
              描
            </span>
            <span className="spec-label mt-5 block">{copy.sheetsEyebrow}</span>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              {copy.sheetsTitle}
            </h2>
            <p className="text-slate mt-4 max-w-2xl leading-relaxed">
              {copy.sheetsIntro}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* 1. 描红 tracing */}
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <GridCell char="学" tone="ink" diag />
                  <GridCell char="校" tone="trace" diag />
                </div>
                <h3 className="font-display text-sm font-semibold">
                  {copy.sheets[0].label}
                </h3>
                <p className="text-slate text-xs leading-relaxed">
                  {copy.sheets[0].sub}
                </p>
              </div>

              {/* 2. 笔顺 stroke order */}
              <div className="flex flex-col gap-3">
                <StrokeOrderRow />
                <h3 className="font-display text-sm font-semibold">
                  {copy.sheets[1].label}
                </h3>
                <p className="text-slate text-xs leading-relaxed">
                  {copy.sheets[1].sub}
                </p>
              </div>

              {/* 3. 拼音 four-line grids */}
              <div className="flex flex-col gap-3">
                <PinyinLines pinyin="tīng xiě" />
                <h3 className="font-display text-sm font-semibold">
                  {copy.sheets[2].label}
                </h3>
                <p className="text-slate text-xs leading-relaxed">
                  {copy.sheets[2].sub}
                </p>
              </div>

              {/* 4. English handwriting */}
              <div className="flex flex-col gap-3">
                <EnglishLines word="trace" />
                <h3 className="font-display text-sm font-semibold">
                  {copy.sheets[3].label}
                </h3>
                <p className="text-slate text-xs leading-relaxed">
                  {copy.sheets[3].sub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      {loc.trust && (
        <section aria-label={copy.trustTitle} className="pb-24">
          <span className="spec-label">{copy.trustEyebrow}</span>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            {copy.trustTitle}
          </h2>
          <p className="text-slate mt-4 max-w-2xl leading-relaxed">
            {loc.trust.body}
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {copy.trustChips.map((chip) => (
              <li
                key={chip}
                className="border-line bg-panel spec-label rounded-full border px-4 py-2"
              >
                {chip}
              </li>
            ))}
          </ul>
        </section>
      )}

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
        <div className="border-line relative overflow-hidden rounded-3xl border p-10 text-center sm:p-16">
          <div className="relative flex flex-col items-center">
            <div className="flex gap-3">
              <GridCell char="加" tone="trace" className="w-14" />
              <GridCell char="油" tone="ink" className="w-14" />
            </div>
            <h2 className="font-display mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">
              {copy.closingTitle}
            </h2>
            <p className="text-slate mt-4 max-w-xl leading-relaxed">
              {copy.closingBody}
            </p>
            <div className="mt-8">
              <StoreBadges app={app} dict={dict} />
            </div>
            <p className="text-slate mt-5 text-sm">{copy.priceNote}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
