// Bespoke landing page for ember-deck.appfactory.sg (v2 remake). Rendered by
// app/[locale]/apps/[slug]/page.tsx in place of the generic template. Theme
// tokens come from [data-app="ember-deck"] in globals.css, fonts from
// ./fonts.ts via the [slug] layout.
//
// Every image is the game's own art, copied from the app repo
// (assets/images/**, marketing/store_shots/raw, marketing/video/out) into
// public/apps/ember-deck/v2/ as WebP. The page is built from the game's
// materials rather than generic web furniture: a playable turn instead of a
// feature grid, painted heroes on their acts, the climb as stacked act bands,
// and a parchment pact for the fair-play promises. Design rules carried over
// from the app's ux-v2: no neon, no glassmorphism, no emoji, no Cinzel.

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
import { HeatDemo } from "./heat-demo";
import { HeroShowcase } from "./hero-showcase";

const V2 = "/apps/ember-deck/v2";

// Act identity via light (ux-v2 §1.2 DO #8), plus who you meet there.
const ACTS = [
  {
    bg: `${V2}/acts/act1.webp`,
    accent: "#e08a3a",
    tint: "rgba(240,160,48,0.10)",
    bosses: ["b01", "b02"],
    foes: ["e05", "e07", "e08", "e10"],
  },
  {
    bg: `${V2}/acts/act2.webp`,
    accent: "#6fe0d0",
    tint: "rgba(63,163,168,0.16)",
    bosses: ["b04", "b05"],
    foes: ["e13", "e18", "e19", "e20"],
  },
  {
    bg: `${V2}/acts/act3.webp`,
    accent: "#ff6a1f",
    tint: "rgba(232,69,44,0.14)",
    bosses: ["b06", "b07"],
    foes: ["e22", "e25", "e26", "e29"],
  },
];

const ROMAN = ["I", "II", "III", "IV", "V"];

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

function Embers({ spots }: { spots: number[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {spots.map((left, i) => (
        <span
          key={i}
          className="ed-ember"
          style={{
            left: `${left}%`,
            bottom: `${10 + (i % 4) * 5}%`,
            animationDelay: `${i * 0.9}s`,
            animationDuration: `${7 + (i % 4) * 1.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="spec-label">{eyebrow}</span>
      <h2 id={id} className="font-display mt-2 text-4xl leading-[1.05] font-bold sm:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-[#e8dcc8]/80">{intro}</p>}
    </div>
  );
}

function Availability({
  copy,
  statusNote,
  dict,
}: {
  copy: EmberDeckLanding;
  statusNote: string;
  dict: Dict;
}) {
  const app = getApp("ember-deck")!;
  if (emberDeckReleased) {
    return (
      <div>
        <StoreBadges app={app} dict={dict} />
        <p className="mt-3 text-base text-[#b9ab95]">{copy.priceNote}</p>
      </div>
    );
  }
  // Pre-release: a plain statement, no store badges or links (release rule).
  return (
    <div>
      <p className="ed-plate inline-flex items-center gap-3 rounded-md px-5 py-3 text-lg font-extrabold text-[#fff4d6]">
        <Flame className="ed-breathe h-6 w-5 shrink-0" color="var(--ed-heat3)" />
        {statusNote}
      </p>
      <p className="mt-3 text-base text-[#b9ab95]">{copy.priceNote}</p>
    </div>
  );
}

/** Phone bezel around the real gameplay capture. */
function GameplayPhone({ locale, label }: { locale: Locale; label: string }) {
  const lang = locale === "en" ? "en" : "zh";
  return (
    <div className="ed-phone relative mx-auto w-[15.5rem] sm:w-[17.5rem]">
      <div className="ed-phone-glow absolute -inset-10 -z-10" aria-hidden />
      <div className="overflow-hidden rounded-[2.1rem] bg-black">
        <video
          className="block aspect-[432/936] w-full"
          src={`${V2}/video/gameplay-${lang}.mp4`}
          poster={`${V2}/video/gameplay-${lang}.webp`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
        />
      </div>
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
  const en = locale === "en";

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
    publisher: { "@type": "Organization", name: "appfactory", url: "https://appfactory.sg" },
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

      {/* ── Hero: key art, the promise, and the game itself running ── */}
      <section className="ed-bleed -mt-[4.25rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${V2}/misc/keyart.webp`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_42%] opacity-80"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(18,15,23,0.92) 0%, rgba(18,15,23,0.45) 18%, rgba(18,15,23,0.35) 55%, rgba(18,15,23,0.8) 85%, #120f17 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 60% at 22% 55%, rgba(18,15,23,0.85), transparent 75%)",
            }}
          />
          <Embers spots={[8, 15, 22, 30, 41, 55, 63, 72, 80, 88, 94, 48]} />
        </div>

        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-14 px-6 pt-32 pb-20 sm:px-10 sm:pt-40 lg:min-h-[860px] lg:grid-cols-[1.2fr_0.8fr] lg:pb-28">
          <div>
            <span className="spec-label">{copy.kicker}</span>
            <h1
              className={`font-display mt-5 font-black tracking-tight [text-shadow:0_4px_30px_rgba(0,0,0,0.6)] ${
                en
                  ? "text-[3.9rem] leading-[0.92] sm:text-[6.4rem]"
                  : "text-[2.6rem] leading-[1.15] sm:text-[4.1rem]"
              }`}
            >
              {copy.heroLines[0]}
              <br />
              {copy.heroLines[1]}
              {en ? " " : ""}
              <span className="ed-fire-text whitespace-nowrap">{copy.heroLines[2]}</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#e8dcc8]/90 sm:text-xl">
              {copy.heroSub}
            </p>
            <div className="mt-9">
              <Availability copy={copy} statusNote={loc.statusNote} dict={dict} />
            </div>
            <dl className="mt-10 flex max-w-lg divide-x divide-[#5a4c44]/70 border-y border-[#5a4c44]/70 py-4">
              {copy.heroStats.map((s) => (
                <div key={s.label} className="flex-1 px-3 first:pl-0 last:pr-0 sm:px-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="font-display block text-3xl leading-none font-black text-[#ffd36b] sm:text-4xl">
                      {s.n}
                    </span>
                    <span className="mt-1.5 block text-sm font-bold text-[#b9ab95]">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <GameplayPhone locale={locale} label={copy.videoLabel} />
          </div>
        </div>
      </section>

      {/* ── Heat: the rule, then a turn you can play ── */}
      <section id="heat" aria-labelledby="heat-title" className="scroll-mt-8 py-24 sm:py-32">
        <SectionHead id="heat-title" eyebrow={copy.heatEyebrow} title={copy.heatTitle} intro={copy.heatIntro} />
        <ol className="mt-9 grid gap-5 sm:grid-cols-3">
          {copy.heatRules.map((r, i) => (
            <li key={r.k} className="flex items-start gap-4">
              <span
                className="flex h-12 min-w-14 shrink-0 items-center justify-center rounded-md border px-2 text-lg font-black"
                style={{
                  borderColor: ["#b0501e", "#e0701e", "#ff9a2e"][i],
                  color: ["#e0701e", "#ff9a2e", "#ffd36b"][i],
                  background: "rgba(42,26,22,0.6)",
                }}
              >
                {r.k}
              </span>
              <p className="leading-snug text-[#e8dcc8]/90">{r.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <HeatDemo copy={copy.demo} />
        </div>
      </section>

      {/* ── Heroes ── */}
      <section aria-labelledby="heroes-title" className="pb-24 sm:pb-32">
        <SectionHead id="heroes-title" eyebrow={copy.heroesEyebrow} title={copy.heroesTitle} intro={copy.heroesIntro} />
        <div className="mt-10">
          <HeroShowcase heroes={copy.heroes} labels={copy.heroLabels} />
        </div>
      </section>

      {/* ── The climb: one band per act, then the throne ── */}
      <section aria-labelledby="acts-title">
        <SectionHead id="acts-title" eyebrow={copy.actsEyebrow} title={copy.actsTitle} intro={copy.actsIntro} />
        <div className="ed-bleed mt-12">
          {copy.acts.map((act, i) => {
            const a = ACTS[i];
            const flip = i % 2 === 1;
            return (
              <article
                key={act.name}
                className="relative overflow-hidden border-t border-[#3a3240]"
                aria-labelledby={`act-${i}`}
              >
                <Image src={a.bg} alt="" fill sizes="100vw" className="object-cover object-[50%_45%]" />
                <div className="absolute inset-0" style={{ background: a.tint, mixBlendMode: "color" }} />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(${flip ? "270deg" : "90deg"}, rgba(18,15,23,0.94) 0%, rgba(18,15,23,0.72) 45%, rgba(18,15,23,0.35) 100%), linear-gradient(180deg, rgba(18,15,23,0.5), transparent 25%, transparent 75%, rgba(18,15,23,0.7))`,
                  }}
                />
                <div
                  className={`relative mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 ${
                    flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span
                        className="text-7xl leading-none font-black tracking-tight sm:text-8xl"
                        style={{ color: a.accent }}
                        aria-hidden
                      >
                        {ROMAN[i]}
                      </span>
                      <span className="text-sm font-extrabold tracking-[0.14em] uppercase" style={{ color: a.accent }}>
                        {act.label} · {act.minutes}
                      </span>
                    </div>
                    <h3 id={`act-${i}`} className="font-display mt-3 text-4xl font-bold sm:text-5xl">
                      {act.name}
                    </h3>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-[#e8dcc8]/90">{act.body}</p>
                    <p className="mt-8 text-xs font-extrabold tracking-[0.14em] text-[#b9ab95] uppercase">
                      {copy.foesLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-4">
                      {a.foes.map((f, j) => (
                        <li key={f} className="w-[4.5rem] text-center">
                          <span className="block aspect-square overflow-hidden rounded-full border border-[#5a4c44] bg-[#120f17]/80">
                            <img
                              src={`${V2}/enemies/${f}.webp`}
                              alt=""
                              loading="lazy"
                              className="h-full w-full scale-110 object-contain"
                            />
                          </span>
                          <span className="mt-1.5 block text-xs leading-tight font-bold text-[#e8dcc8]/85">
                            {act.foes[j]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold tracking-[0.14em] uppercase lg:text-center" style={{ color: a.accent }}>
                      {copy.bossesLabel}
                    </p>
                    <ul className="mt-2 grid grid-cols-2 gap-2">
                      {a.bosses.map((b, j) => (
                        <li key={b} className="flex flex-col items-center">
                          <img
                            src={`${V2}/bosses/${b}.webp`}
                            alt={act.bosses[j]}
                            loading="lazy"
                            className="aspect-square w-full max-w-64 object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.85)]"
                          />
                          <span className="font-display -mt-3 text-center text-xl font-bold sm:text-2xl">
                            {act.bosses[j]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}

          {/* The throne */}
          <article className="relative overflow-hidden border-t border-[#5a2a1a]" aria-labelledby="final-title">
            <Image
              src={`${V2}/acts/act3-boss.webp`}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[50%_55%]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 55% at 50% 45%, rgba(255,106,31,0.22), transparent 70%), linear-gradient(180deg, #120f17 0%, rgba(18,15,23,0.35) 22%, rgba(18,15,23,0.4) 60%, #120f17 100%)",
              }}
            />
            <Embers spots={[12, 24, 35, 47, 58, 66, 77, 86]} />
            <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-24 text-center sm:px-10">
              <span className="spec-label">{copy.finalEyebrow}</span>
              <Image
                src={`${V2}/bosses/b03.webp`}
                alt={copy.finalName}
                width={560}
                height={560}
                sizes="(min-width: 640px) 440px, 300px"
                className="mt-2 w-[19rem] drop-shadow-[0_24px_40px_rgba(0,0,0,0.9)] sm:w-[27rem]"
              />
              <h3
                id="final-title"
                className="font-display -mt-6 text-5xl font-black text-[#ffd36b] [text-shadow:0_4px_24px_rgba(0,0,0,0.9)] sm:text-7xl"
              >
                {copy.finalName}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#e8dcc8]/90">{copy.finalBody}</p>
            </div>
          </article>
        </div>
      </section>

      {/* ── Death is progress ── */}
      <section aria-labelledby="progress-title" className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead
              id="progress-title"
              eyebrow={copy.progressEyebrow}
              title={copy.progressTitle}
              intro={copy.progressBody}
            />
            <div className="ed-frame relative mt-9 hidden aspect-[16/10] overflow-hidden rounded-xl lg:block">
              <Image src={`${V2}/misc/death.webp`} alt="" fill sizes="440px" className="object-cover object-[50%_40%] opacity-80" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(18,15,23,0.85))]" />
              <Image
                src={`${V2}/misc/phoenix-brew.webp`}
                alt=""
                width={128}
                height={128}
                className="absolute right-6 bottom-5 w-16 drop-shadow-[0_6px_10px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
          <ol className="divide-y divide-[#3a3240] border-y border-[#3a3240]">
            {copy.progress.map((p) => (
              <li key={p.title} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-5 py-6 sm:grid-cols-[8rem_1fr]">
                <span className="font-display text-4xl leading-none font-black text-[#ff9a2e] sm:text-5xl">{p.n}</span>
                <div>
                  <h3 className="text-xl font-extrabold">{p.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-[#b9ab95]">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <ul className="mt-16 grid grid-cols-4 gap-y-8 border-t border-[#3a3240] pt-10 sm:grid-cols-7">
          {copy.counts.map((c) => (
            <li key={c.label} className="text-center">
              <span className="font-display block text-3xl leading-none font-black text-[#e8dcc8] sm:text-4xl">{c.n}</span>
              <span className="mt-2 block text-sm font-bold text-[#b9ab95]">{c.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Screens ── */}
      <section aria-labelledby="screens-title" className="pb-24 sm:pb-32">
        <SectionHead id="screens-title" eyebrow={copy.screensEyebrow} title={copy.screensTitle} />
        <div className="ed-bleed">
          <ul className="ed-rail mx-auto flex max-w-5xl snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pt-10 pb-5 sm:scroll-px-10 sm:px-10">
            {loc.screenshots.map((shot, i) => (
              <li key={shot.src} className="w-44 shrink-0 snap-start sm:w-52">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={520}
                  height={1130}
                  sizes="(min-width: 640px) 208px, 176px"
                  className="ed-frame w-full rounded-[1.4rem]"
                />
                <p className="mt-3 text-sm leading-snug font-bold text-[#e8dcc8]/85">{copy.screenCaptions[i]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── The pact + what's for sale ── */}
      <section aria-labelledby="pact-title" className="pb-24 sm:pb-32">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="ed-parchment ed-frame relative rounded-xl px-6 py-9 sm:px-10 sm:py-12">
            <span className="text-sm font-extrabold tracking-[0.12em] text-[#7a3a12] uppercase">{copy.pactEyebrow}</span>
            <h2 id="pact-title" className="font-display mt-1 text-5xl font-black text-[#221a14] sm:text-6xl">
              {copy.pactTitle}
            </h2>
            <ol className="mt-8 space-y-6">
              {copy.pact.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[2.75rem_1fr] gap-3">
                  <span className="text-3xl leading-none font-black text-[#9c3a12]" aria-hidden>
                    {ROMAN[i]}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#221a14]">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-[#3a2c22]">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <span className="ed-seal absolute top-7 right-7 hidden h-20 w-20 items-center justify-center rounded-full sm:flex" aria-hidden>
              <Flame className="h-9 w-7" color="#ffd36b" />
            </span>
          </div>

          <div className="ed-frame flex flex-col rounded-xl bg-[#1a1620] px-6 py-8 sm:px-8">
            <div className="flex items-center gap-4">
              <Image
                src={`${V2}/misc/shopkeeper.webp`}
                alt=""
                width={420}
                height={420}
                sizes="96px"
                className="h-24 w-24 shrink-0 rounded-full border border-[#5a4c44] object-cover object-top"
              />
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{copy.shopTitle}</h2>
            </div>
            <ul className="mt-6 flex-1 space-y-5">
              {copy.shop.map((s) => (
                <li key={s.name}>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg font-extrabold">{s.name}</span>
                    <span className="mb-1 flex-1 border-b border-dotted border-[#5a4c44]" aria-hidden />
                    <span className="font-display text-2xl font-bold text-[#ffd36b]">{s.price}</span>
                  </div>
                  <p className="mt-1 text-[#b9ab95]">{s.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-[#3a3240] pt-4 text-sm text-[#b9ab95]">{copy.shopNote}</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-title" className="pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead id="faq-title" eyebrow={copy.faqEyebrow} title={copy.faqTitle} />
            <Link
              href={support}
              className="mt-7 inline-block font-bold text-[#e3b04b] underline decoration-[#9c6b3a] underline-offset-4 transition-colors hover:text-[#e8dcc8]"
            >
              {copy.supportLink} →
            </Link>
          </div>
          <div className="divide-y divide-[#3a3240] border-y border-[#3a3240]">
            {copy.faqs.map((faq, i) => (
              <details key={faq.q} className="ed-faq group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-extrabold">
                  {faq.q}
                  <span
                    className="font-display text-2xl text-[#e0701e] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="-mt-1 pb-6 leading-relaxed text-[#b9ab95]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press kit + credits ── */}
      <section aria-labelledby="press-title" className="pb-24 sm:pb-28">
        <SectionHead id="press-title" eyebrow={copy.pressEyebrow} title={copy.pressTitle} intro={copy.pressBody} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <dl className="ed-frame grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-3 rounded-xl bg-[#1a1620] p-6 sm:p-8">
            {copy.pressFacts.map((f) => (
              <div key={f.label} className="contents">
                <dt className="pt-0.5 text-xs font-extrabold tracking-[0.12em] text-[#e3b04b] uppercase">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="ed-frame rounded-xl bg-[#1a1620] p-6 sm:p-8">
            <ul className="divide-y divide-[#3a3240]">
              {copy.pressItems.map((item) => (
                <li key={item.file}>
                  <a
                    href={item.file}
                    download
                    className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-[#f0a030]"
                  >
                    <span className="font-bold">{item.label}</span>
                    <span className="text-sm text-[#b9ab95]">{item.meta}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/apps/ember-deck/press/ember-deck-press-kit.zip"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#9c6b3a] bg-[#2a1a16] px-5 py-3 font-extrabold text-[#ffd36b] transition-colors hover:border-[#f0a030]"
            >
              {copy.pressZip}
            </a>
          </div>
        </div>

        <div id="credits" className="mt-14 scroll-mt-8 border-t border-[#3a3240] pt-8">
          <h2 className="text-xs font-extrabold tracking-[0.14em] text-[#e3b04b] uppercase">{copy.creditsTitle}</h2>
          <dl className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-extrabold">{copy.creditsMusicLabel}</dt>
              <dd className="mt-1 text-[#b9ab95]">
                <a
                  href={copy.creditsMusicUrl}
                  rel="noopener"
                  className="font-bold text-[#e3b04b] underline decoration-[#9c6b3a] underline-offset-4 transition-colors hover:text-[#e8dcc8]"
                >
                  {copy.creditsMusicBy}
                </a>
                <br />
                {copy.creditsMusicNote}
              </dd>
            </div>
            <div>
              <dt className="font-extrabold">{copy.creditsSfxLabel}</dt>
              <dd className="mt-1 text-[#b9ab95]">{copy.creditsSfxBody}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="ed-bleed overflow-hidden border-t border-[#3a3240]">
        <Image src={`${V2}/misc/hub.webp`} alt="" fill sizes="100vw" className="object-cover object-[50%_40%]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 60%, rgba(18,15,23,0.55), rgba(18,15,23,0.92) 80%), linear-gradient(180deg, #120f17, transparent 30%, transparent 70%, #120f17)",
          }}
        />
        <Embers spots={[20, 33, 45, 52, 61, 74, 83]} />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
          <div className="flex items-end" aria-hidden>
            <Image
              src={`${V2}/misc/cardback-ember.webp`}
              alt=""
              width={320}
              height={448}
              className="w-20 translate-x-3 -rotate-12 rounded-md shadow-xl"
            />
            <Image
              src={app.icon!}
              alt=""
              width={112}
              height={112}
              className="relative z-10 w-24 rounded-[1.6rem] border border-[#5a4c44] shadow-[0_10px_40px_rgba(240,160,48,0.35)]"
            />
            <Image
              src={`${V2}/misc/cardback-founder.webp`}
              alt=""
              width={320}
              height={448}
              className="w-20 -translate-x-3 rotate-12 rounded-md shadow-xl"
            />
          </div>
          <h2 className="font-display mt-9 text-5xl leading-tight font-black sm:text-6xl">{copy.closingTitle}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#e8dcc8]/85">{copy.closingBody}</p>
          <div className="mt-9">
            <Availability copy={copy} statusNote={loc.statusNote} dict={dict} />
          </div>
        </div>
      </section>
    </main>
  );
}
