// Bespoke landing page for tracesheet.appfactory.sg. Rendered by
// app/[locale]/apps/[slug]/page.tsx in place of the generic template; the
// paper-and-ink theme comes from [data-app="tracesheet"] in globals.css.
//
// v7 launch: hero video from the promo hero cuts, the real App Store
// screenshots, the Free vs Pro table and the share-free section. Copy lives
// in content/tracesheet.ts. Design rules: paper, ink and a little vermilion;
// no gradients, glass, glow blobs, emoji bullets or stock art.

import Image from "next/image";
import { getApp, localized } from "@/content/apps";
import {
  tracesheetLanding,
  type TracesheetPlanRow,
} from "@/content/tracesheet";
import { HeroVideo } from "@/components/tracesheet/hero-video";
import type { Locale } from "@/lib/i18n";
import { LANG_TAG, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

/** A 田字格 practice cell: dashed cross guides, ink border, a hanzi in the
 * kai stack. `tone` switches the glyph between the "guide to trace" red and
 * the "written in ink" color. */
function GridCell({
  char,
  tone = "trace",
  className = "",
}: {
  char: string;
  tone?: "trace" | "ink";
  className?: string;
}) {
  return (
    <div className={`ts-cell ${className}`}>
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

/** Official "Download on the App Store" artwork from Apple Marketing Tools
 * (toolbox.marketingtools.apple.com), black preferred badge, one file per
 * locale. Shown as delivered: no recolor, no extra chrome. */
const APP_STORE_BADGES: Record<
  Locale,
  { src: string; width: number; alt: string }
> = {
  en: {
    src: "/apps/tracesheet/app-store-badge-en.svg",
    width: 119.66407,
    alt: "Download on the App Store",
  },
  "zh-cn": {
    src: "/apps/tracesheet/app-store-badge-zh-cn.svg",
    width: 108.85157,
    alt: "App Store 下载",
  },
  "zh-tw": {
    src: "/apps/tracesheet/app-store-badge-zh-tw.svg",
    width: 108.85157,
    alt: "App Store 下載",
  },
};

const BADGE_HEIGHT = 48;

function StoreButton({ href, locale }: { href?: string; locale: Locale }) {
  if (!href) return null;
  const badge = APP_STORE_BADGES[locale];
  return (
    <a href={href} className="ts-store-badge inline-block leading-none">
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

function Check({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      role="img"
      aria-label={label}
      className="inline-block"
    >
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCell({
  value,
  yes,
  no,
}: {
  value: TracesheetPlanRow["free"];
  yes: string;
  no: string;
}) {
  if (value === true) return <Check label={yes} />;
  if (value === false)
    return (
      <span className="text-slate" aria-label={no}>
        —
      </span>
    );
  return <span className="text-sm">{value}</span>;
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <>
      <span className="spec-label">{eyebrow}</span>
      <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="text-slate mt-4 max-w-2xl text-lg leading-relaxed">
          {intro}
        </p>
      )}
    </>
  );
}

export async function TracesheetLandingPage({ locale }: { locale: Locale }) {
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  const copy = tracesheetLanding[locale];
  const origin = appOrigin(app.slug);
  const url = `${origin}${localePrefix(locale)}/`;
  const yes = locale === "en" ? "Included" : "包含";
  const no = locale === "en" ? "Not included" : "不包含";

  const appLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: loc.storeName,
    alternateName: loc.name,
    description: loc.metaDescription ?? loc.oneLiner,
    url,
    inLanguage: LANG_TAG[locale],
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS",
    image: `${origin}${app.icon}`,
    screenshot: loc.screenshots.map((s) => `${origin}${s.src}`),
    installUrl: app.appStoreUrl,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD" },
      {
        "@type": "Offer",
        name: "TraceSheet Pro",
        price: "14.99",
        priceCurrency: "USD",
      },
    ],
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
      <section className="pt-14 pb-20 sm:pt-20 sm:pb-28">
        <span className="spec-label">{copy.kicker}</span>
        <h1
          className={`font-display mt-5 font-bold leading-[1.04] tracking-tight sm:text-7xl ${
            locale === "en" ? "text-5xl" : "text-[2.5rem]"
          }`}
        >
          {copy.heroLines[0]}
          <br />
          {copy.heroLines[1]}
          <br />
          <span className="text-indigo">{copy.heroLines[2]}</span>
        </h1>
        <div className="mt-8 grid gap-8 sm:grid-cols-[1.35fr_1fr] sm:items-end">
          <p className="text-slate max-w-xl text-lg leading-relaxed">
            {copy.heroSub}
          </p>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <StoreButton href={app.appStoreUrl} locale={locale} />
            <p className="text-indigo text-sm font-medium">{loc.statusNote}</p>
            <ul className="ts-facts text-slate flex flex-col gap-y-1 text-sm sm:flex-row sm:flex-wrap sm:justify-end">
              {copy.heroFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <HeroVideo video={copy.video} label={copy.videoLabel} />
        </div>
      </section>

      {/* Learn — screenshots */}
      <section aria-label={copy.learnTitle} className="pb-24">
        <SectionHead
          eyebrow={copy.learnEyebrow}
          title={copy.learnTitle}
          intro={copy.learnIntro}
        />
        <ol className="-mx-6 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0">
          {copy.learnSteps.map((step, i) => {
            const shot = loc.screenshots[step.shot];
            return (
              <li key={step.title} className="w-[62%] shrink-0 snap-start sm:w-auto">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={720}
                  height={1564}
                  sizes="(max-width: 639px) 62vw, 190px"
                  className="border-line w-full rounded-2xl border"
                />
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-indigo font-mono text-xs">0{i + 1}</span>
                  <h3 className="font-display font-semibold">{step.title}</h3>
                </div>
                <p className="text-slate mt-1.5 text-sm leading-relaxed">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Print */}
      <section
        aria-label={copy.printTitle}
        className="grid gap-12 pb-24 sm:grid-cols-[1fr_1fr] sm:items-center"
      >
        <div>
          <SectionHead
            eyebrow={copy.printEyebrow}
            title={copy.printTitle}
            intro={copy.printIntro}
          />
          <ul className="mt-8 space-y-3">
            {copy.printPoints.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed">
                <span className="ts-tick mt-[0.45em]" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {copy.printShots.map((idx, i) => {
            const shot = loc.screenshots[idx];
            return (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1564}
                sizes="(max-width: 639px) 45vw, 230px"
                className={`border-line w-full rounded-2xl border ${i === 1 ? "mt-10" : ""}`}
              />
            );
          })}
        </div>
      </section>

      {/* Free vs Pro */}
      <section aria-label={copy.planTitle} className="pb-24">
        <SectionHead
          eyebrow={copy.planEyebrow}
          title={copy.planTitle}
          intro={copy.planIntro}
        />
        <div className="border-line bg-panel mt-10 overflow-hidden rounded-2xl border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-line border-b align-bottom">
                <th scope="col" className="spec-label p-4 font-normal sm:p-6">
                  {copy.planFeatureHeader}
                </th>
                <th scope="col" className="w-[24%] p-4 font-normal sm:w-[20%] sm:p-6">
                  <span className="font-display block text-lg font-bold">
                    {copy.planFree.name}
                  </span>
                  <span className="block text-sm font-semibold">
                    {copy.planFree.price}
                  </span>
                  <span className="text-slate mt-1 block text-xs leading-snug">
                    {copy.planFree.note}
                  </span>
                </th>
                <th
                  scope="col"
                  className="ts-pro-col w-[26%] p-4 font-normal sm:w-[22%] sm:p-6"
                >
                  <span className="font-display flex items-center gap-2 text-lg font-bold">
                    {copy.planPro.name}
                    <span className="ts-pro-seal" aria-hidden>
                      PRO
                    </span>
                  </span>
                  <span className="block text-sm font-semibold">
                    {copy.planPro.price}
                  </span>
                  <span className="text-slate mt-1 block text-xs leading-snug">
                    {copy.planPro.note}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {copy.planRows.map((row) => (
                <tr key={row.label} className="border-line border-b last:border-b-0">
                  <th
                    scope="row"
                    className="px-4 py-3.5 text-sm font-normal leading-snug sm:px-6 sm:text-base"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-3.5 sm:px-6">
                    <PlanCell value={row.free} yes={yes} no={no} />
                  </td>
                  <td className="ts-pro-col px-4 py-3.5 sm:px-6">
                    <PlanCell value={row.pro} yes={yes} no={no} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate mt-4 text-sm">{copy.planFootnote}</p>
      </section>

      {/* Share free — teachers & parents */}
      <section aria-label={copy.shareTitle} className="pb-24">
        <div className="border-line bg-panel relative rounded-3xl border p-8 sm:p-12">
          <div
            aria-hidden
            className="border-line pointer-events-none absolute inset-2.5 rounded-[1.25rem] border border-dashed opacity-60"
          />
          <div className="relative">
            <span className="ts-seal" aria-hidden>
              印
            </span>
            <div className="mt-6">
              <SectionHead eyebrow={copy.shareEyebrow} title={copy.shareTitle} />
            </div>
            <p className="text-slate mt-4 max-w-2xl text-lg leading-relaxed">
              {copy.shareBody}
            </p>
            <ol className="mt-10 grid gap-8 sm:grid-cols-3">
              {copy.shareSteps.map((step, i) => (
                <li key={step.title} className="border-line border-t pt-5">
                  <span className="text-indigo font-mono text-xs">0{i + 1}</span>
                  <h3 className="font-display mt-2 text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-slate mt-1.5 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Privacy */}
      {loc.trust && (
        <section aria-label={loc.trust.title} className="pb-24">
          <SectionHead eyebrow={copy.trustEyebrow} title={loc.trust.title} />
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
        <SectionHead eyebrow={copy.faqEyebrow} title={copy.faqTitle} />
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
        <div className="border-line flex flex-col items-center rounded-3xl border px-6 py-14 text-center sm:p-16">
          <div className="flex gap-3">
            <GridCell
              char={locale === "zh-tw" ? "寫" : "写"}
              tone="trace"
              className="w-16 text-[4rem]"
            />
            <GridCell char="字" tone="ink" className="w-16 text-[4rem]" />
          </div>
          <h2 className="font-display mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">
            {copy.closingTitle}
          </h2>
          <p className="text-slate mt-4 max-w-xl leading-relaxed">
            {copy.closingBody}
          </p>
          <div className="mt-8">
            <StoreButton href={app.appStoreUrl} locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
