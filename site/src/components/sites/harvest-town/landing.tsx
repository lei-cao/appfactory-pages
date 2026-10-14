import Image from "next/image";
import type { CSSProperties } from "react";
import { getApp, localized } from "@/content/apps";
import type { Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { copyFor } from "./copy";
import { OrderBoard } from "./order-board";

const SLUG = "harvest-town";
const IMG = "/apps/harvest-town";

const rise = (i: number) => ({ "data-rise": "", style: { "--i": i } as CSSProperties });

/** The red-and-paper stripe of the barn's trim, built from filled bars. */
function Stripe({ bars = 64 }: { bars?: number }) {
  return (
    <div className="hh-stripe" aria-hidden>
      {Array.from({ length: bars }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export function HaystackLanding({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const t = copyFor(locale);
  const pic = (name: string) => loc.screenshots.find((x) => x.src === `${IMG}/${name}.webp`)!;
  const plates = [
    { name: "barn", w: 240, h: 220 },
    { name: "mill", w: 220, h: 220 },
    { name: "fields", w: 215, h: 220 },
  ];

  return (
    <main className="hh-main">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />

      {/* Hero: the order card beside the farm. */}
      <section className="hh-hero">
        <div className="hh-hero__card">
          <Stripe />
          <div className="hh-hero__body">
            <h1 className="hh-hero__name">{loc.name}</h1>
            <p className="hh-hero__tagline">{loc.tagline}</p>
            <p className="hh-hero__lede">{loc.oneLiner}</p>
            <a href="#orders" className="hh-button">
              {t.act}
            </a>
            <p className="hh-hero__status">{t.status}</p>
          </div>
          <nav className="hh-hero__links" aria-label={loc.name}>
            <a href="#how">{t.links[0]}</a>
            <a href="#orders">{t.links[1]}</a>
            <a href="#questions">{t.links[2]}</a>
          </nav>
        </div>
        <div className="hh-hero__room">
          <Image
            className="hh-fade hh-fade--a"
            src={`${IMG}/icon.webp`}
            alt={t.heroAlt}
            width={1024}
            height={1024}
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
          />
          <Image
            className="hh-fade hh-fade--b"
            src={pic("town").src}
            alt={pic("town").alt}
            width={430}
            height={500}
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* How it plays: the loop printed as a slip. */}
      <section id="how" className="hh-how" aria-labelledby="hh-how-title">
        <div className="hh-how__intro">
          <h2 id="hh-how-title" {...rise(0)}>
            {t.slipTitle}
          </h2>
          <p {...rise(1)}>{t.slipBody}</p>
        </div>
        <div className="hh-slip" {...rise(2)}>
          {t.slip.map((g) => (
            <div key={g.title} className="hh-slip__group">
              <h3>{g.title}</h3>
              {g.rows.map(([what, value]) => (
                <p key={what} className="hh-row">
                  <span>{what}</span>
                  <span className="hh-dots" aria-hidden />
                  <span className="hh-row__value">{value}</span>
                </p>
              ))}
            </div>
          ))}
          <p className="hh-slip__total">
            <span>{t.slipTotal[0]}</span>
            <span>{t.slipTotal[1]}</span>
          </p>
        </div>
      </section>

      {/* The Order Board: a square plate of the town, the live slip beside it. */}
      <section id="orders" className="hh-orders" aria-labelledby="hh-orders-title">
        <figure className="hh-orders__plate" {...rise(0)}>
          <Image
            src={pic("town").src}
            alt={pic("town").alt}
            width={430}
            height={500}
            loading="lazy"
            sizes="(min-width: 900px) 46vw, 100vw"
          />
        </figure>
        <div className="hh-orders__side">
          <h2 id="hh-orders-title" {...rise(1)}>
            {t.boardTitle}
          </h2>
          <p className="hh-orders__intro" {...rise(2)}>
            {t.boardIntro}
          </p>
          <OrderBoard locale={locale} />
        </div>
      </section>

      {/* What grows here: the farm set as a printed menu. */}
      <section className="hh-menu" aria-labelledby="hh-menu-title">
        <div className="hh-sheet" {...rise(0)}>
          <h2 id="hh-menu-title">{t.menuTitle}</h2>
          {t.menu.map((g) => (
            <div key={g.title} className="hh-sheet__group">
              <h3>{g.title}</h3>
              {g.items.map((it) => (
                <div key={it.name} className="hh-sheet__item">
                  <p className="hh-row">
                    <span>{it.name}</span>
                    <span className="hh-dots" aria-hidden />
                    <span className="hh-row__value">{it.value}</span>
                  </p>
                  <p className="hh-sheet__note">{it.note}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <ul className="hh-plates">
          {plates.map((p, i) => (
            <li key={p.name} {...rise(i + 1)}>
              <Image
                src={pic(p.name).src}
                alt={pic(p.name).alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                sizes="220px"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Questions as reading text. */}
      <section id="questions" className="hh-faq" aria-labelledby="hh-faq-title">
        <div className="hh-faq__side">
          <h2 id="hh-faq-title" {...rise(0)}>
            {t.faqTitle}
          </h2>
          <figure className="hh-faq__plate" {...rise(1)}>
            <Image
              src={pic("pass").src}
              alt={pic("pass").alt}
              width={900}
              height={669}
              loading="lazy"
              sizes="(min-width: 900px) 22vw, 90vw"
            />
          </figure>
        </div>
        <div className="hh-faq__text">
          {loc.trust && (
            <p {...rise(1)}>
              <strong>{loc.trust.title}.</strong> {loc.trust.body}
            </p>
          )}
          {loc.faqs.map((f, i) => (
            <p key={f.q} {...rise(i + 2)}>
              <strong>{f.q}</strong> {f.a}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
