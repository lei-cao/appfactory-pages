import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { apps, localized, type AppContent } from "@/content/apps";
import {
  APP_ORDER,
  APP_STORE_DEVELOPER_URL,
  HERO_SLUGS,
  LOOPS,
  poster,
  POSTER_COUNT,
  POSTER_SIZE,
  THINKING_POKER,
} from "@/content/hub";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { GamesIndex, type GameEntry } from "@/components/hub/games-index";
import { HeroPrints, type Print } from "@/components/hub/hero-prints";
import { Reveal } from "@/components/hub/reveal";
import { getDict } from "@/lib/dictionaries";
import {
  fmt,
  isLocale,
  LANG_TAG,
  canonicalUrl,
  languageAlternates,
  localePrefix,
  type Locale,
} from "@/lib/i18n";
import { appOrigin, CONTACT_EMAIL, hubOrigin, SITE_NAME } from "@/lib/site";
import { JsonLd, OG_LOCALE, organizationLd } from "@/lib/seo";
import "./hub.css";

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
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
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

/** Where an app's links point: its own subdomain site, or its external home. */
function appLink(app: AppContent, locale: Locale) {
  if (app.externalUrls) {
    return {
      href: app.externalUrls[locale] ?? app.externalUrls.en ?? "#",
      domain: app.externalDomain ?? "",
      external: true,
    };
  }
  return { href: `${appOrigin(app.slug)}${localePrefix(locale)}`, domain: "", external: false };
}

/** App sites open in a new tab from the hub; each has a link back here. */
function externalProps(external: boolean) {
  return external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/** The studio mark, drawn so it can take the accent on the dark ground. */
function Mark() {
  return (
    <svg viewBox="5 12 56 42" aria-hidden>
      <path d="M9 45 24 19Q26 15 30 15H34Q37 15 39 19L44 28Q46 32 41 32H32L21 49Q19 52 15 52H12Q6 52 9 45Z" />
      <path d="M40 15H53Q58 15 58 20V23Q58 28 53 28H45Q42 28 41 25L37 19Q35 15 40 15Z" />
      <path d="M47 32H52Q57 32 57 37V39Q57 44 52 44H48Q45 44 44 41L42 36Q40 32 47 32Z" />
      <path d="M32 35H37Q40 35 42 39L47 47Q50 52 44 52H38Q35 52 33 48L29 40Q27 35 32 35Z" />
    </svg>
  );
}

const reveal = (i: number) => ({ "data-reveal": true, style: { "--i": i } as React.CSSProperties });

export default async function Hub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const h = dict.hub;
  const home = localePrefix(locale) || "/";
  const mail = `mailto:${CONTACT_EMAIL}`;
  const tpUrl = THINKING_POKER.url[locale];

  const records = [...apps].sort((a, b) => a.buildNumber - b.buildNumber);
  const live = records.filter((a) => a.status === "live");
  const liveGames = live.filter((a) => a.category === "game");
  const liveApps = APP_ORDER.map((s) => live.find((a) => a.slug === s)).filter(
    (a): a is AppContent => !!a,
  );
  const next = records.filter((a) => a.status !== "live");
  const bySlug = (slug: string) => records.find((a) => a.slug === slug);
  const posterAlt = (app: AppContent) => {
    const loc = localized(app, locale);
    return fmt(h.posterAlt, { name: loc.storeName, subtitle: loc.subtitle });
  };

  const postersOf = (slug: string) =>
    Array.from({ length: POSTER_COUNT }, (_, n) => poster(slug, n + 1, locale)).filter(
      (src): src is string => !!src,
    );

  const prints: Print[] = HERO_SLUGS.flatMap((slug) => {
    const app = bySlug(slug);
    const posters = postersOf(slug).slice(0, 2);
    if (!app || posters.length < 2 || !app.icon) return [];
    const loc = localized(app, locale);
    return [{ posters, icon: app.icon, alt: posterAlt(app), name: loc.name, subtitle: loc.subtitle }];
  });

  const games: GameEntry[] = liveGames.map((app) => {
    const loc = localized(app, locale);
    const loop = LOOPS[app.slug];
    return {
      slug: app.slug,
      name: loc.name,
      subtitle: loc.subtitle,
      oneLiner: loc.oneLiner,
      href: appLink(app, locale).href,
      appStoreUrl: app.appStoreUrl,
      posters: postersOf(app.slug).length
        ? postersOf(app.slug)
        : loc.screenshots.slice(0, 3).map((s) => s.src),
      alt: posterAlt(app),
      loop: loop ? { src: loop.src[locale] ?? loop.src.en!, poster: loop.poster } : undefined,
    };
  });

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
      itemListElement: [
        ...live.map((app) => ({
          name: localized(app, locale).storeName,
          url: appLink(app, locale).href.split("?")[0],
        })),
        { name: "thinking.poker", url: tpUrl },
      ].map((item, i) => ({ "@type": "ListItem", position: i + 1, ...item })),
    },
  ];

  const nav = [
    { href: "#games", label: h.nav.games },
    { href: "#apps", label: h.nav.apps },
    { href: "#thinking-poker", label: h.nav.poker },
    { href: "#studio", label: h.nav.studio },
  ];

  const catalogueRow = (app: AppContent) => {
    const loc = localized(app, locale);
    const link = appLink(app, locale);
    return (
      <tr key={app.slug}>
        <td>
          <a href={link.href} {...externalProps(true)} className="link">
            {loc.name}
          </a>
        </td>
        <td>{loc.subtitle}</td>
        <td>{app.platforms.join(" · ")}</td>
        <td>{dict.status[app.status]}</td>
      </tr>
    );
  };

  return (
    <main className="hub" id="top">
      <script
        // Entrance states apply only once script is known to run.
        dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
      />
      <JsonLd data={jsonLd} />
      <Reveal />

      {/* Hero: two lit prints in a dark room */}
      <section className="hero" aria-labelledby="hero-heading">
        <header className="bar">
          <div className="bar__left">
            <a href={home} className="mark">
              <Mark />
              {SITE_NAME}
            </a>
            <nav aria-label="Sections" className="bar__nav">
              <ul>
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href}>{n.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="bar__right">
            <LocaleSwitcher
              current={locale}
              separator={false}
              className="langs"
              linkClassName=""
              currentClassName=""
            />
            <a href={APP_STORE_DEVELOPER_URL} className="btn" target="_blank" rel="noopener noreferrer">
              <span className="label-long">{h.storeAction}</span>
              <span className="label-short">{h.appStoreShort}</span>
              <span className="arrow" aria-hidden>
                ↗
              </span>
            </a>
          </div>
        </header>

        <h1 id="hero-heading" data-rise>
          <span>{h.headline[0]}</span> <span>{h.headline[1]}</span>
        </h1>
        <HeroPrints prints={prints} intro={h.intro} />
      </section>

      {/* Games: big names, the active one lit */}
      <section id="games" className="sect" aria-labelledby="games-heading">
        <div className="sect__head" {...reveal(0)}>
          <h2 id="games-heading">{h.gamesTitle}</h2>
          <p>{h.gamesIntro}</p>
        </div>
        <GamesIndex
          games={games}
          labels={{ visit: h.visit, appStore: h.appStore, storeSoon: h.storeSoon }}
        />
      </section>

      {/* Apps: an oversized row of store posters, a small cluster of facts */}
      <section id="apps" className="sect apps" aria-labelledby="apps-heading">
        <div className="sect__head" {...reveal(0)}>
          <h2 id="apps-heading">{h.appsTitle}</h2>
          <p>{h.appsIntro}</p>
        </div>
        {liveApps.map((app) => {
          const loc = localized(app, locale);
          const link = appLink(app, locale);
          return (
            <article key={app.slug} className="feature" aria-labelledby={`${app.slug}-name`}>
              <div className="feature__visual">
                {postersOf(app.slug).map((src, n) => (
                    <Image
                      key={src}
                      src={src}
                      alt={n === 0 ? posterAlt(app) : ""}
                      width={POSTER_SIZE.width}
                      height={POSTER_SIZE.height}
                      sizes="(min-width: 900px) 18vw, 46vw"
                      {...reveal(n)}
                    />
                  ))}
              </div>
              <div className="feature__cluster">
                {app.icon && (
                  <Image src={app.icon} alt="" width={128} height={128} className="feature__icon" {...reveal(0)} />
                )}
                <h3 id={`${app.slug}-name`} {...reveal(1)}>
                  {loc.name}
                </h3>
                <p className="t-lead" {...reveal(2)}>
                  {loc.subtitle}
                </p>
                <p {...reveal(3)}>{loc.oneLiner}</p>
                <ul {...reveal(4)}>
                  {loc.features.slice(0, 3).map((f) => (
                    <li key={f.title}>{f.title}</li>
                  ))}
                </ul>
                <div className="index__links" {...reveal(5)}>
                  <a href={link.href} {...externalProps(true)} className="go link">
                    {link.external ? link.domain : h.visit}{" "}
                    <span className="arrow" aria-hidden>
                      {link.external ? "↗" : "→"}
                    </span>
                  </a>
                  {app.appStoreUrl && (
                    <a href={app.appStoreUrl} data-app={app.slug} {...externalProps(true)} className="go link">
                      {h.appStore} <span className="arrow" aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* thinking.poker: the poker study site, as a band of its own screens */}
      <section id="thinking-poker" className="sect" style={{ paddingInline: 0 }} aria-labelledby="tp-heading">
        <div className="tp__head" {...reveal(0)}>
          <h2 id="tp-heading">{h.tpTitle}</h2>
        </div>
        <div className="band" {...reveal(1)}>
          {THINKING_POKER.shots.map((name, i) => (
            <figure
              key={name}
              className="band__panel"
              style={{ "--grow": [5, 2, 3, 2][i] } as React.CSSProperties}
            >
              <a href={tpUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                <Image
                  src={THINKING_POKER.shot(name, locale)}
                  alt={h.tpShots[name]}
                  width={1200}
                  height={833}
                  sizes="(min-width: 900px) 50vw, 64vw"
                />
              </a>
            </figure>
          ))}
        </div>
        <p className="tp__caption">{h.tpCaption}</p>
        <div className="tp__body">
          <p {...reveal(0)}>
            {h.tpBody}
          </p>
          <div className="tp__side" {...reveal(1)}>
            <p className="muted">{h.tpPairs}</p>
            <a href={tpUrl} target="_blank" rel="noopener noreferrer" className="link tp__go">
              {h.tpAction} <span className="arrow" aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Everything, in one table */}
      <section id="catalogue" className="sect cat" aria-labelledby="cat-heading">
        <div className="sect__head" {...reveal(0)}>
          <h2 id="cat-heading">{h.catTitle}</h2>
        </div>
        <table {...reveal(1)}>
          <colgroup>
            <col className="c-name" />
            <col className="c-what" />
            <col className="c-plat" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">{h.catCols.name}</th>
              <th scope="col">{h.catCols.what}</th>
              <th scope="col">{h.catCols.platforms}</th>
              <th scope="col">{h.catCols.status}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup" colSpan={4}>
                {h.catOut}
              </th>
            </tr>
            {[...liveGames, ...liveApps].map(catalogueRow)}
            <tr>
              <td>
                <a href={tpUrl} target="_blank" rel="noopener noreferrer" className="link">
                  thinking.poker
                </a>
              </td>
              <td>{h.catWebWhat}</td>
              <td>{h.catWeb}</td>
              <td>{dict.status.live}</td>
            </tr>
          </tbody>
          {next.length > 0 && (
            <tbody>
              <tr>
                <th scope="rowgroup" colSpan={4}>
                  {h.catNext}
                </th>
              </tr>
              {next.map(catalogueRow)}
            </tbody>
          )}
        </table>
      </section>

      {/* The studio */}
      <section id="studio" className="sect studio" aria-labelledby="studio-heading">
        <h2 id="studio-heading" className="sr-only">
          {h.studioTitle}
        </h2>
        <dl className="studio__facts" {...reveal(0)}>
          {h.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="studio__para" {...reveal(1)}>
          {h.studioBody}
        </p>
      </section>

      {/* Contact: the address is the whole section */}
      <section className="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">
          {h.contactTitle}
        </h2>
        <p className="contact__line" {...reveal(0)}>
          {h.contactLine}
        </p>
        <a href={mail} className="contact__mail" {...reveal(1)}>
          <span>{CONTACT_EMAIL.split("@")[0]}@</span>
          <span>{CONTACT_EMAIL.split("@")[1]}</span>
        </a>
        <div className="contact__foot">
          <p>
            {h.city} · {h.contactReply}
          </p>
          <ul>
            <li>
              <a href={tpUrl} className="link" target="_blank" rel="noopener noreferrer">
                thinking.poker
              </a>
            </li>
            <li>
              <a href={APP_STORE_DEVELOPER_URL} className="link" target="_blank" rel="noopener noreferrer">
                {h.appStore}
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer: columns above, the name across the bottom */}
      <footer className="foot">
        <div className="foot__cols">
          {[
            { title: h.footGames, items: liveGames },
            { title: h.footApps, items: liveApps },
          ].map((col) => (
            <div key={col.title}>
              <p className="foot__h">{col.title}</p>
              <ul>
                {col.items.map((app) => {
                  const link = appLink(app, locale);
                  return (
                    <li key={app.slug}>
                      <a href={link.href} {...externalProps(true)}>
                        {localized(app, locale).name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div>
            <p className="foot__h">{h.footSites}</p>
            <ul>
              <li>
                <a href={tpUrl} target="_blank" rel="noopener noreferrer">
                  thinking.poker
                </a>
              </li>
              {liveApps
                .filter((a) => a.externalDomain)
                .map((a) => (
                  <li key={a.slug}>
                    <a href={appLink(a, locale).href} target="_blank" rel="noopener noreferrer">
                      {a.externalDomain}
                    </a>
                  </li>
                ))}
              <li>
                <a href={APP_STORE_DEVELOPER_URL} target="_blank" rel="noopener noreferrer">
                  {h.appStore}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="foot__h">{h.footStudio}</p>
            <ul>
              <li>
                <a href={mail}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <LocaleSwitcher
                  current={locale}
                  separator={false}
                  className="langs"
                  linkClassName=""
                  currentClassName=""
                />
              </li>
              <li>
                <a href="#top">{h.top} ↑</a>
              </li>
            </ul>
          </div>
        </div>
        <svg className="foot__word" viewBox="0 0 1000 178" role="img" aria-label={SITE_NAME}>
          <text
            x="0"
            y="146"
            fontSize="200"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            style={{ fontFamily: "var(--font-archivo)", letterSpacing: "-0.045em" }}
          >
            {SITE_NAME}
          </text>
        </svg>
        <p className="foot__legal">
          <span>{fmt(h.copyright, { year: new Date().getFullYear() })}</span>
          <a href="#top" className="link">
            {h.top} <span aria-hidden>↑</span>
          </a>
        </p>
      </footer>
    </main>
  );
}
