// Bespoke landing page for ember-deck.appfactory.sg. Rendered by
// app/[locale]/apps/[slug]/page.tsx in place of the generic template. The
// theme comes from [data-app="ember-deck"] in globals.css (charcoal +
// parchment + ember), fonts from ./fonts.ts via the [slug] layout.
//
// Art is copied from the app repo (assets/images/**, docs/evidence/listing)
// into public/apps/ember-deck/ as WebP. Hero portraits don't exist yet, so
// the hero teaser uses code-drawn silhouettes over each hero's signature
// card art — swap in the painted busts when ui_v2 art lands.

import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import {
  emberDeckLanding,
  emberDeckReleased,
  type EmberDeckLanding,
} from "@/content/ember-deck";
import { StoreBadges } from "@/components/store-badges";
import { getDict, type Dict } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { LANG_TAG, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

const IMG = "/apps/ember-deck";

// Hero accents from ux-v2 §1.5 (heroEmberknight / heroVenomblade / heroAshenSeer).
const HEROES = [
  { kind: "knight", accent: "#f0a030", sigil: `${IMG}/sigil-emberknight.webp` },
  { kind: "blade", accent: "#6fbf5e", sigil: `${IMG}/sigil-venomblade.webp` },
  { kind: "seer", accent: "#9fd8d6", sigil: `${IMG}/sigil-seer.webp` },
] as const;

// Act plates + per-act key light (ux-v2 §1.2 DO #8: act identity via light).
const ACTS = [
  { img: `${IMG}/act-1.webp`, tint: "rgba(240,160,48,0.18)", accent: "#e08a3a" },
  { img: `${IMG}/act-2.webp`, tint: "rgba(63,163,168,0.42)", accent: "#6fe0d0" },
  { img: `${IMG}/act-3.webp`, tint: "rgba(232,69,44,0.22)", accent: "#ff6a1f" },
];

/** Woodcut-cut flame glyph (code-drawn; ux-v2 forbids emoji for Heat). */
function Flame({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden fill={color}>
      <path d="M12 1 C13 7 19 10 19 18 C19 25 15.5 30 12 31 C8.5 30 5 25 5 18 C5 14 7 11 8.5 9 C8.8 12 10 14 11.5 14.5 C10.5 10 11 5 12 1 Z" />
      <path
        d="M12 16 C12.8 19 15 20.5 15 24 C15 27 13.6 29 12 29.5 C10.4 29 9 27 9 24 C9 21.5 10.8 19.5 12 16 Z"
        fill="#fff4d6"
        opacity="0.75"
      />
    </svg>
  );
}

/** Unrevealed-hero silhouette, rim-lit in the hero's accent colour. */
function HeroSilhouette({ kind, accent }: { kind: (typeof HEROES)[number]["kind"]; accent: string }) {
  const body = "#0d0a0c";
  const rim = { stroke: accent, strokeOpacity: 0.6, strokeWidth: 1.4 };
  return (
    <svg viewBox="0 0 200 220" className="h-full w-full" aria-hidden>
      {kind === "seer" && (
        <>
          <circle cx="100" cy="92" r="60" fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="168" y1="58" x2="168" y2="220" stroke={body} strokeWidth="7" />
          <circle cx="168" cy="50" r="9" fill="none" stroke={accent} strokeOpacity="0.7" strokeWidth="2" />
        </>
      )}
      {kind === "blade" && (
        <g stroke={body} strokeWidth="7" strokeLinecap="round">
          <line x1="44" y1="160" x2="20" y2="92" />
          <line x1="156" y1="160" x2="180" y2="92" />
          <line x1="16" y1="108" x2="36" y2="100" />
          <line x1="184" y1="108" x2="164" y2="100" />
        </g>
      )}
      <path d="M14 220 C20 176 52 150 100 150 C148 150 180 176 186 220 Z" fill={body} {...rim} />
      {kind === "knight" && (
        <>
          <path d="M100 58 L100 20 L106 58 Z" fill={body} {...rim} />
          <path d="M70 154 L70 98 C70 70 84 56 100 56 C116 56 130 70 130 98 L130 154 Z" fill={body} {...rim} />
          <path d="M16 190 C22 160 48 146 78 150 L72 178 Z" fill={body} {...rim} />
          <path d="M184 190 C178 160 152 146 122 150 L128 178 Z" fill={body} {...rim} />
          <rect x="80" y="97" width="40" height="4" rx="2" fill={accent} opacity="0.85" />
        </>
      )}
      {kind === "blade" && (
        <>
          <path d="M58 158 C54 112 70 70 100 44 C130 70 146 112 142 158 C128 146 114 142 100 142 C86 142 72 146 58 158 Z" fill={body} {...rim} />
          <path d="M84 108 L96 111 M104 111 L116 108" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        </>
      )}
      {kind === "seer" && (
        <>
          <path d="M64 160 C58 110 72 64 100 34 C128 64 142 110 136 160 Z" fill={body} {...rim} />
          <circle cx="100" cy="92" r="3.5" fill={accent} opacity="0.9" />
        </>
      )}
    </svg>
  );
}

/** Beat visuals for the Heat explainer — all code-drawn, Heat hues only. */
function HeatBeatVisual({ i, tag }: { i: number; tag: string }) {
  if (i === 0) {
    const lit = ["var(--ed-heat1)", "var(--ed-heat2)", "var(--ed-heat3)"];
    return (
      <div className="flex items-end gap-2" aria-hidden>
        {[0, 1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className="block w-7 rounded-[3px] border"
            style={{
              height: 30 + n * 5,
              background: n < 3 ? lit[n] : "var(--ed-heat0)",
              borderColor: n < 3 ? "rgba(255,244,214,0.35)" : "#3a3240",
              opacity: n < 3 ? 1 : 0.55,
            }}
          />
        ))}
      </div>
    );
  }
  if (i === 1) {
    return (
      <div className="relative h-20 w-15" aria-hidden>
        <div className="ed-frame absolute inset-0 rounded-md bg-[#241e2a]" />
        <div className="absolute inset-x-2 top-2 h-8 rounded-sm bg-[#1a1620]" />
        <div className="absolute inset-x-2 bottom-2.5 h-1 rounded bg-[#3a3240]" />
        <div className="absolute inset-x-2 bottom-5 h-1 rounded bg-[#3a3240]" />
        <span
          className="absolute -top-3 -right-4 flex h-9 w-9 items-center justify-center rounded-full border-2"
          style={{ background: "#2a1a16", borderColor: "var(--ed-blaze)" }}
        >
          <Flame className="h-5 w-4" color="var(--ed-blaze)" />
        </span>
        <span className="sr-only">{tag}</span>
      </div>
    );
  }
  return (
    <div className="flex w-full max-w-56 items-center gap-2.5" aria-hidden>
      <div
        className="h-3 flex-1 rounded-full border border-[#3a3240]"
        style={{
          background:
            "linear-gradient(90deg, var(--ed-heat0), var(--ed-heat1) 25%, var(--ed-heat2) 50%, var(--ed-heat3) 72%, var(--ed-heat4) 90%, var(--ed-heat5))",
        }}
      />
      <Flame className="ed-breathe h-9 w-7" color="var(--ed-heat3)" />
    </div>
  );
}

function Availability({
  copy,
  statusNote,
  dict,
  dark,
}: {
  copy: EmberDeckLanding;
  statusNote: string;
  dict: Dict;
  dark?: boolean;
}) {
  const app = getApp("ember-deck")!;
  if (emberDeckReleased) {
    return (
      <div>
        <StoreBadges app={app} dict={dict} />
        <p className="text-slate mt-3 text-sm">{copy.priceNote}</p>
      </div>
    );
  }
  // Pre-release: a plain statement, no store badges or links (release rule).
  return (
    <div>
      <p
        className={`ed-frame inline-flex items-center gap-3 rounded-md px-5 py-3 text-lg font-bold ${dark ? "bg-[#120f17]/70" : "bg-panel/80"}`}
      >
        <Flame className="h-5 w-4 shrink-0" color="var(--ed-heat3)" />
        {statusNote}
      </p>
      <p className="text-slate mt-3 text-base">{copy.priceNote}</p>
    </div>
  );
}

export async function EmberDeckLandingPage({ locale }: { locale: Locale }) {
  const app = getApp("ember-deck")!;
  const loc = localized(app, locale);
  const copy = emberDeckLanding[locale];
  const origin = appOrigin(app.slug);
  const url = `${origin}${localePrefix(locale)}/`;
  const support = `${localePrefix(locale)}/apps/${app.slug}/support`;
  const dict = getDict(locale);

  const gameLd = {
    "@context": "https://schema.org",
    "@type": ["VideoGame", "MobileApplication"],
    name: loc.storeName,
    alternateName: loc.name,
    description: loc.metaDescription ?? loc.oneLiner,
    url,
    inLanguage: LANG_TAG[locale],
    genre: ["Card game", "Roguelike", "Strategy"],
    gamePlatform: ["iOS", "Android"],
    operatingSystem: "iOS, Android",
    applicationCategory: "GameApplication",
    playMode: "SinglePlayer",
    image: `${origin}${app.ogImage}`,
    screenshot: loc.screenshots.map((s) => `${origin}${s.src}`),
    ...(emberDeckReleased
      ? { offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }
      : {}),
    author: { "@type": "Person", name: "Lei Cao" },
    publisher: { "@type": "Organization", "@id": "https://appfactory.sg/#org", name: "appfactory", url: "https://appfactory.sg" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero — full-bleed key art sliding under the header */}
      <section className="ed-bleed -mt-[4.25rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/key-art.webp`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[28%_72%] sm:-scale-x-100 sm:object-[50%_80%]"
          />
          {/* scrims: header band, reading side, fade into the page */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(18,15,23,0.85) 0%, rgba(18,15,23,0.35) 22%, rgba(18,15,23,0.1) 55%, rgba(18,15,23,0.55) 82%, #120f17 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(18,15,23,0.92) 0%, rgba(18,15,23,0.6) 38%, transparent 60%)",
            }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 sm:-scale-x-100">
            {[14, 20, 26, 31, 37, 43, 24, 34].map((left, i) => (
              <span
                key={i}
                className="ed-ember"
                style={{
                  left: `${left}%`,
                  bottom: `${16 + (i % 3) * 4}%`,
                  animationDelay: `${i * 1.1}s`,
                  animationDuration: `${7 + (i % 4) * 1.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[100svh] w-full max-w-5xl items-center px-6 pt-28 pb-32 sm:min-h-[720px] sm:grid-cols-[1.25fr_1fr] sm:px-10 sm:pt-32 sm:pb-24">
          <div>
            <span className="spec-label">{copy.kicker}</span>
            <h1
              className={`font-display mt-4 font-black tracking-tight ${
                locale === "en"
                  ? "text-[3.6rem] leading-[0.95] sm:text-[5.5rem]"
                  : "text-[2.75rem] leading-[1.15] sm:text-7xl"
              }`}
            >
              {copy.heroLines[0]}
              <br />
              {copy.heroLines[1]}
              {locale === "en" ? " " : ""}
              <span className="text-indigo">{copy.heroLines[2]}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#e8dcc8]/90">{copy.heroSub}</p>
            <div className="mt-8">
              <Availability copy={copy} statusNote={loc.statusNote} dict={dict} dark />
            </div>
            <a
              href="#heat"
              className="text-indigo-soft mt-6 inline-flex items-center gap-2 text-base font-bold underline decoration-[#9c6b3a] underline-offset-4 transition-colors hover:text-paper"
            >
              {copy.heatEyebrow} ↓
            </a>
          </div>
          <div className="relative hidden h-full sm:block" aria-hidden>
            <Image
              src={`${IMG}/hollow-king.webp`}
              alt=""
              width={768}
              height={768}
              sizes="460px"
              className="absolute -right-28 bottom-6 w-[27rem] max-w-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </section>

      {/* Heat — the hook in three beats */}
      <section id="heat" aria-labelledby="heat-title" className="scroll-mt-8 pt-10 pb-24">
        <div className="max-w-2xl">
          <span className="spec-label">{copy.heatEyebrow}</span>
          <h2 id="heat-title" className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
            {copy.heatTitle}
          </h2>
          <p className="text-slate mt-4 text-lg leading-relaxed">{copy.heatIntro}</p>
        </div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          {copy.heatBeats.map((beat, i) => (
            <li key={beat.title} className="ed-frame bg-panel flex flex-col rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-indigo text-3xl font-bold">{i + 1}</span>
                <span className="text-sm font-extrabold tracking-wide text-[#ff9a2e]">{beat.tag}</span>
              </div>
              <div className="mt-5 mb-6 flex min-h-20 items-center">
                <HeatBeatVisual i={i} tag={beat.tag} />
              </div>
              <h3 className="text-xl font-extrabold">{beat.title}</h3>
              <p className="text-slate mt-2 leading-relaxed">{beat.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Heroes */}
      <section aria-labelledby="heroes-title" className="pb-24">
        <div className="max-w-2xl">
          <span className="spec-label">{copy.heroesEyebrow}</span>
          <h2 id="heroes-title" className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
            {copy.heroesTitle}
          </h2>
          <p className="text-slate mt-4 text-lg leading-relaxed">{copy.heroesIntro}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {copy.heroes.map((hero, i) => {
            const h = HEROES[i];
            return (
              <article key={hero.name} className="ed-frame bg-panel overflow-hidden rounded-lg">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={h.sigil}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 300px, 100vw"
                    className="object-cover opacity-60"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(70% 60% at 50% 45%, transparent, rgba(18,15,23,0.75)), linear-gradient(180deg, transparent 40%, #1a1620 100%)`,
                    }}
                  />
                  <div className="absolute inset-x-8 bottom-0 top-6">
                    <HeroSilhouette kind={h.kind} accent={h.accent} />
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <h3 className="font-display text-3xl font-bold" style={{ color: h.accent }}>
                    {hero.name}
                  </h3>
                  <p className="mt-2 text-lg leading-snug italic">{hero.line}</p>
                  <p className="text-slate mt-3 leading-relaxed">{hero.style}</p>
                  <p className="mt-4 border-t border-[#3a3240] pt-3 text-sm font-extrabold tracking-wide text-[#e3b04b]">
                    {hero.unlock}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="text-slate mt-4 text-sm">{copy.heroesNote}</p>
      </section>

      {/* Acts */}
      <section aria-labelledby="acts-title" className="pb-24">
        <div className="max-w-2xl">
          <span className="spec-label">{copy.actsEyebrow}</span>
          <h2 id="acts-title" className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
            {copy.actsTitle}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {copy.acts.map((act, i) => (
            <article
              key={act.name}
              className="ed-frame relative flex aspect-[16/11] flex-col justify-end overflow-hidden rounded-lg sm:aspect-[3/4]"
            >
              <Image
                src={ACTS[i].img}
                alt=""
                fill
                sizes="(min-width: 640px) 300px, 100vw"
                className="object-cover object-[50%_35%]"
              />
              <div className="absolute inset-0" style={{ background: ACTS[i].tint, mixBlendMode: "color" }} />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(18,15,23,0.1) 20%, rgba(18,15,23,0.92) 78%)" }}
              />
              <div className="relative p-6">
                <span className="text-sm font-extrabold tracking-widest uppercase" style={{ color: ACTS[i].accent }}>
                  {act.label}
                </span>
                <h3 className="font-display mt-1 text-3xl font-bold">{act.name}</h3>
                <p className="mt-2 leading-relaxed text-[#e8dcc8]/85">{act.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="ed-frame bg-panel mt-5 flex items-center gap-5 overflow-hidden rounded-lg pr-6">
          <Image
            src={`${IMG}/hollow-king.webp`}
            alt=""
            width={768}
            height={768}
            sizes="112px"
            className="-my-2 w-28 shrink-0"
          />
          <p className="font-display py-4 text-xl leading-snug font-bold sm:text-3xl">{copy.finalBoss}</p>
        </div>
      </section>

      {/* Feature grid */}
      <section aria-labelledby="features-title" className="pb-24">
        <div className="max-w-2xl">
          <span className="spec-label">{copy.featuresEyebrow}</span>
          <h2 id="features-title" className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
            {copy.featuresTitle}
          </h2>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-9 border-t border-[#3a3240] pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {loc.features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <Flame className="mt-1 h-6 w-5 shrink-0" color="var(--ed-heat2)" />
              <div>
                <h3 className="text-xl font-extrabold">{f.title}</h3>
                <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Screens — PRE-RELEASE placeholders, replace with v2 store shots */}
      <section aria-labelledby="screens-title" className="pb-24" data-replaceable="v1-screens">
        <div className="max-w-2xl">
          <span className="spec-label">{copy.screensEyebrow}</span>
          <h2 id="screens-title" className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
            {copy.screensTitle}
          </h2>
          <p className="mt-4 inline-block rounded-md border border-dashed border-[#9c6b3a] px-4 py-2 text-sm text-[#e3b04b]">
            {copy.screensNote}
          </p>
        </div>
        <div className="ed-bleed">
          <ul className="mx-auto flex max-w-5xl snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pt-8 pb-3 sm:scroll-px-10 sm:px-10 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {loc.screenshots.map((shot) => (
              <li key={shot.src} className="shrink-0 snap-start">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={640}
                  height={1260}
                  sizes="(min-width: 640px) 208px, 176px"
                  className="ed-frame w-44 rounded-xl sm:w-52 lg:w-full"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="pb-24">
        <div className="max-w-2xl">
          <span className="spec-label">{copy.faqEyebrow}</span>
          <h2 id="faq-title" className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
            {copy.faqTitle}
          </h2>
        </div>
        <dl className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {copy.faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="text-xl font-extrabold">{faq.q}</dt>
              <dd className="text-slate mt-2 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
        <Link
          href={support}
          className="text-indigo-soft mt-10 inline-block font-bold underline decoration-[#9c6b3a] underline-offset-4 transition-colors hover:text-paper"
        >
          {copy.supportLink} →
        </Link>
      </section>

      {/* Press kit */}
      <section aria-labelledby="press-title" className="pb-24">
        <div className="max-w-2xl">
          <span className="spec-label">{copy.pressEyebrow}</span>
          <h2 id="press-title" className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
            {copy.pressTitle}
          </h2>
          <p className="text-slate mt-4 text-lg leading-relaxed">{copy.pressBody}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <dl className="ed-parchment ed-frame grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 rounded-lg p-6 sm:p-8">
            {copy.pressFacts.map((f) => (
              <div key={f.label} className="contents">
                <dt className="text-sm font-extrabold tracking-wide text-[#5a3a22] uppercase">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="ed-frame bg-panel rounded-lg p-6 sm:p-8">
            <ul className="divide-y divide-[#3a3240]">
              {copy.pressItems.map((item) => (
                <li key={item.file}>
                  <a
                    href={item.file}
                    download
                    className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-indigo"
                  >
                    <span className="font-bold">{item.label}</span>
                    <span className="text-slate text-sm">{item.meta}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`${IMG}/press/ember-deck-press-kit.zip`}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#9c6b3a] bg-[#2a1a16] px-5 py-3 font-extrabold text-[#ffd36b] transition-colors hover:border-[#f0a030]"
            >
              {copy.pressZip}
            </a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="pb-28">
        <div className="ed-frame relative overflow-hidden rounded-lg px-6 py-14 text-center sm:px-16">
          <Image src={`${IMG}/act-3.webp`} alt="" fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover object-bottom opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,transparent,rgba(18,15,23,0.9))]" />
          <div className="relative flex flex-col items-center">
            <Image src={app.icon} alt="" width={80} height={80} className="rounded-2xl shadow-lg" />
            <h2 className="font-display mt-6 max-w-2xl text-4xl leading-tight font-bold sm:text-5xl">{copy.closingTitle}</h2>
            <p className="text-slate mt-4 max-w-xl text-lg leading-relaxed">{copy.closingBody}</p>
            <div className="mt-8">
              <Availability copy={copy} statusNote={loc.statusNote} dict={dict} dark />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
