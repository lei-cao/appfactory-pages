import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { apps, localized, type AppContent } from "@/content/apps";
import { AppIcon } from "@/components/app-icon";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { StatusBadge } from "@/components/status";
import { getDict, type Dict } from "@/lib/dictionaries";
import {
  fmt,
  isLocale,
  LANG_TAG,
  canonicalUrl,
  languageAlternates,
  LOCALES,
  localePrefix,
  type Locale,
} from "@/lib/i18n";
import {
  APEX_DOMAIN,
  appOrigin,
  CONTACT_EMAIL,
  hubOrigin,
  SITE_NAME,
} from "@/lib/site";
import { JsonLd, OG_LOCALE, organizationLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  const url = canonicalUrl(hubOrigin(), locale);
  return {
    alternates: {
      canonical: url,
      languages: languageAlternates(hubOrigin(), "/"),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALE[locale],
      images: [
        {
          url: "/brand/og.png",
          width: 1200,
          height: 630,
          alt: "App Factory — Small apps. Big possibilities.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/brand/og.png"],
    },
  };
}

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo";

/** Where an app's card points: its own subdomain site, or its external home. */
function appLink(app: AppContent, locale: Locale) {
  if (app.externalUrls) {
    return {
      href: app.externalUrls[locale] ?? app.externalUrls.en ?? "#",
      domain: app.externalDomain ?? "",
      external: true,
    };
  }
  return {
    href: `${appOrigin(app.slug)}${localePrefix(locale)}`,
    domain: `${app.slug}.${APEX_DOMAIN}`,
    external: false,
  };
}

function Arrow({ external }: { external: boolean }) {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      {external ? "↗" : "→"}
    </span>
  );
}

/** A released app: copy and links on one side, a phone peeking up on the other. */
function FeatureCard({
  app,
  locale,
  dict,
  wide,
}: {
  app: AppContent;
  locale: Locale;
  dict: Dict;
  wide: boolean;
}) {
  const loc = localized(app, locale);
  const link = appLink(app, locale);
  const shot = loc.screenshots[0];

  return (
    <article
      className={`border-line bg-panel group/card relative grid overflow-hidden rounded-[2rem] border ${
        wide ? "lg:col-span-2 lg:grid-cols-[1fr_22rem]" : "grid-rows-[1fr_auto]"
      }`}
    >
      <div className="flex flex-col p-7 sm:p-9">
        <div className="flex items-center gap-4">
          <AppIcon
            icon={app.icon}
            name={loc.name}
            size={64}
            className="border-line bg-panel-2 rounded-2xl border"
          />
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
              {loc.name}
            </h3>
            <p className="spec-label mt-1">
              {app.platforms.join(" · ")} · v{app.version}
            </p>
          </div>
        </div>
        <p className="font-display mt-7 text-xl font-medium leading-snug sm:text-2xl">
          {loc.subtitle}
        </p>
        <p className="text-slate mt-3 max-w-lg leading-relaxed">
          {loc.oneLiner}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`group bg-paper text-ink hover:bg-indigo hover:text-paper inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${FOCUS}`}
          >
            {link.external ? link.domain : dict.hub.visit}
            <Arrow external={link.external} />
          </a>
          {app.appStoreUrl && (
            <a
              href={app.appStoreUrl}
              data-app={app.slug}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border-line hover:border-paper inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${FOCUS}`}
            >
              <AppleMark />
              {dict.hub.appStore}
            </a>
          )}
        </div>
      </div>

      {shot && (
        <div
          className={`bg-panel-2 relative flex justify-center overflow-hidden px-8 pt-8 ${
            wide ? "h-72 lg:h-auto lg:min-h-[26rem]" : "h-72"
          }`}
        >
          <div className="bg-paper absolute top-8 w-52 rounded-[2.2rem] p-2 shadow-[0_24px_60px_-20px_rgba(23,26,34,0.45)] transition-transform duration-500 group-hover/card:-translate-y-2 sm:w-56">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={585}
              height={1272}
              sizes="224px"
              className="h-auto w-full rounded-[1.8rem]"
            />
          </div>
        </div>
      )}
    </article>
  );
}

function AppleMark() {
  return (
    <svg aria-hidden viewBox="0 0 17 20" className="h-4 w-4 fill-current">
      <path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9C3.6 4.8 2 5.8 1.1 7.4c-1.8 3.2-.5 7.9 1.3 10.4.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.4ZM11.6 3c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 1.9-1.1 3.1 1.2.1 2.3-.6 3.1-1.5Z" />
    </svg>
  );
}

/** A section heading: big title on the left, a short line of context under it. */
function SectionHead({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="spec-label mb-4">{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {title}
        <span className="text-indigo">.</span>
      </h2>
      <p className="text-slate mt-4 text-lg leading-relaxed">{intro}</p>
    </div>
  );
}

export default async function Hub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  const records = [...apps].sort((a, b) => a.buildNumber - b.buildNumber);
  const live = records.filter((a) => a.status === "live");
  const liveApps = live.filter((a) => a.category === "app");
  const liveGames = live.filter((a) => a.category === "game");
  const soon = records.filter((a) => a.status !== "live");
  const shelf = records.filter((a) => a.icon).slice(0, 9);
  const home = localePrefix(locale) || "/";

  const hubUrl = canonicalUrl(hubOrigin(), locale);
  const jsonLd = [
    organizationLd(),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${hubOrigin()}/#website`,
      name: SITE_NAME,
      url: hubOrigin(),
      inLanguage: LANG_TAG[locale],
      publisher: { "@id": `${hubOrigin()}/#org` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: dict.meta.title,
      url: hubUrl,
      itemListElement: records.map((app, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: localized(app, locale).storeName,
        url: appLink(app, locale).href.split("?")[0],
      })),
    },
  ];

  const nav = [
    { href: "#apps", label: dict.hub.nav.apps },
    { href: "#games", label: dict.hub.nav.games },
    { href: "#soon", label: dict.hub.nav.soon },
    { href: "#studio", label: dict.hub.nav.studio },
  ];

  return (
    <main className="brand-hub min-h-dvh">
      <JsonLd data={jsonLd} />

      {/* Masthead */}
      <header className="border-line bg-ink/95 sticky top-0 z-30 border-b backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
          <a href={home} className={`shrink-0 rounded ${FOCUS}`}>
            <Image
              src="/brand/logo-horizontal.png"
              alt={SITE_NAME}
              width={2172}
              height={724}
              priority
              sizes="208px"
              className="h-auto w-36 sm:w-44"
            />
          </a>
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm font-medium">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className={`text-slate hover:text-paper rounded transition-colors ${FOCUS}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher current={locale} />
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* Hero */}
        <section className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_26rem]">
          <div>
            <p className="spec-label mb-6">{dict.hub.location}</p>
            <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-7xl">
              {dict.hub.headline[0]}
              <br />
              {dict.hub.headline[1]}
              <span className="text-indigo">{dict.hub.period}</span>
            </h1>
            <p className="text-slate mt-7 max-w-xl text-lg leading-relaxed">
              {dict.hub.intro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#apps"
                className={`bg-indigo text-paper hover:bg-paper hover:text-ink rounded-full px-6 py-3 text-sm font-semibold transition-colors ${FOCUS}`}
              >
                {dict.hub.explore}
                <span aria-hidden className="ml-3">
                  ↓
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`decoration-line hover:decoration-indigo text-sm font-semibold underline underline-offset-4 ${FOCUS}`}
              >
                {dict.hub.contact}
              </a>
            </div>
            <dl className="border-line mt-12 grid max-w-md grid-cols-3 gap-6 border-t pt-6">
              {[
                { n: live.length, label: dict.hub.statLive },
                { n: soon.length, label: dict.hub.statSoon },
                { n: LOCALES.length, label: dict.hub.statLangs },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-4xl font-bold">{s.n}</dd>
                  <dd className="text-slate mt-1 text-sm leading-snug">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* The shelf: every app with artwork, staggered like bricks off the line */}
          <div
            aria-hidden
            className="bg-paper relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              {shelf.map((app, i) => (
                <div
                  key={app.slug}
                  className={i % 3 === 1 ? "translate-y-6" : ""}
                >
                  <Image
                    src={app.icon!}
                    alt=""
                    width={112}
                    height={112}
                    sizes="112px"
                    className="h-auto w-full rounded-[22%] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]"
                  />
                </div>
              ))}
              {/* Round the shelf out to full rows with the studio mark */}
              {Array.from({ length: (3 - (shelf.length % 3)) % 3 }, (_, i) => (
                <div
                  key={`mark-${i}`}
                  className={(shelf.length + i) % 3 === 1 ? "translate-y-6" : ""}
                >
                  <div className="bg-indigo grid aspect-square w-full place-items-center rounded-[22%]">
                    <svg viewBox="5 12 56 42" className="fill-paper w-3/5">
                      <path d="M9 45 24 19Q26 15 30 15H34Q37 15 39 19L44 28Q46 32 41 32H32L21 49Q19 52 15 52H12Q6 52 9 45Z" />
                      <path d="M40 15H53Q58 15 58 20V23Q58 28 53 28H45Q42 28 41 25L37 19Q35 15 40 15Z" />
                      <path d="M47 32H52Q57 32 57 37V39Q57 44 52 44H48Q45 44 44 41L42 36Q40 32 47 32Z" />
                      <path d="M32 35H37Q40 35 42 39L47 47Q50 52 44 52H38Q35 52 33 48L29 40Q27 35 32 35Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <p className="spec-label !text-ink/60 mt-12 text-right">
              {dict.hub.est}
            </p>
          </div>
        </section>

        {/* Useful apps */}
        {liveApps.length > 0 && (
          <section
            id="apps"
            aria-labelledby="apps-heading"
            className="scroll-mt-24 py-16 sm:py-20"
          >
            <SectionHead
              id="apps-heading"
              eyebrow={`01 · ${dict.hub.nav.apps}`}
              title={dict.hub.appsTitle}
              intro={dict.hub.appsIntro}
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {liveApps.map((app, i) => (
                <FeatureCard
                  key={app.slug}
                  app={app}
                  locale={locale}
                  dict={dict}
                  wide={i === 0 && liveApps.length % 2 === 1}
                />
              ))}
            </div>
          </section>
        )}

        {/* Playful games */}
        {liveGames.length > 0 && (
          <section
            id="games"
            aria-labelledby="games-heading"
            className="scroll-mt-24 py-16 sm:py-20"
          >
            <SectionHead
              id="games-heading"
              eyebrow={`02 · ${dict.hub.nav.games}`}
              title={dict.hub.gamesTitle}
              intro={dict.hub.gamesIntro}
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {liveGames.map((app, i) => (
                <FeatureCard
                  key={app.slug}
                  app={app}
                  locale={locale}
                  dict={dict}
                  wide={i === 0 && liveGames.length % 2 === 1}
                />
              ))}
            </div>
          </section>
        )}

        {/* Coming soon */}
        {soon.length > 0 && (
          <section
            id="soon"
            aria-labelledby="soon-heading"
            className="scroll-mt-24 py-16 sm:py-20"
          >
            <SectionHead
              id="soon-heading"
              eyebrow={`03 · ${dict.hub.nav.soon}`}
              title={dict.hub.soonTitle}
              intro={dict.hub.soonIntro}
            />
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {soon.map((app) => {
                const loc = localized(app, locale);
                const link = appLink(app, locale);
                return (
                  <li key={app.slug}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`group border-line bg-panel hover:border-paper flex h-full flex-col rounded-3xl border p-5 transition-colors ${FOCUS}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <AppIcon
                          icon={app.icon}
                          name={loc.name}
                          size={52}
                          className="border-line bg-panel-2 rounded-xl border"
                        />
                        <span className="spec-label">
                          {dict.hub.kind[app.category]}
                        </span>
                      </div>
                      <h3 className="font-display mt-5 text-lg font-semibold leading-tight">
                        {loc.name}
                      </h3>
                      <p className="text-slate mt-1 mb-5 flex-1 text-sm leading-relaxed">
                        {loc.subtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <StatusBadge
                          status={app.status}
                          label={dict.status[app.status]}
                        />
                        <span className="text-slate group-hover:text-paper">
                          <Arrow external={link.external} />
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>

      {/* Studio */}
      <section
        id="studio"
        aria-labelledby="studio-heading"
        className="bg-paper text-ink scroll-mt-16"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[18rem_1fr]">
          <Image
            src="/brand/avatar.png"
            alt=""
            width={1254}
            height={1254}
            sizes="288px"
            className="hidden h-auto w-full rounded-[2.5rem] lg:block"
          />
          <div>
            <p className="spec-label !text-ink/60 mb-5">
              04 · {dict.hub.studioEyebrow}
            </p>
            <h2
              id="studio-heading"
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {dict.hub.studioTitle}
            </h2>
            <p className="text-ink/75 mt-6 max-w-2xl text-lg leading-relaxed">
              {dict.hub.studioBody}
            </p>
            <ol className="mt-12 grid gap-8 sm:grid-cols-3">
              {dict.hub.principles.map((p, i) => (
                <li key={p.title} className="border-t border-white/15 pt-5">
                  <span className="font-mono text-indigo text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-ink/70 mt-2 leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <div className="bg-indigo text-paper flex flex-col items-start justify-between gap-8 rounded-[2.5rem] p-9 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.hub.contactTitle}
            </h2>
            <p className="mt-3 text-lg">{dict.hub.contactBody}</p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-paper text-ink hover:bg-ink hover:text-paper shrink-0 rounded-full px-7 py-3.5 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <footer className="border-line border-t">
        <div className="text-slate mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/avatar.png"
              alt=""
              width={1254}
              height={1254}
              sizes="32px"
              className="h-8 w-8 rounded-lg"
            />
            <span className="spec-label">
              {fmt(dict.hub.copyright, { year: new Date().getFullYear() })}
            </span>
          </div>
          <LocaleSwitcher current={locale} />
        </div>
      </footer>
    </main>
  );
}
