// sushi-sort.appfactory.sg — the page is the game's own stationery. The
// Chef's Order slip that opens every level is the hero (with a playable
// tray printed on it); the rules are a receipt, the order is a menu card,
// the thirty cities are the house's printed list, the promises a card
// pinned up in the restaurant. Every picture is the game's own art or a
// real store screenshot (public/apps/sushi-sort/).

import type React from "react";
import Image from "next/image";
import { getApp, localized } from "@/content/apps";
import {
  SUSHI_SETS,
  sushiSortCopy,
  sushiSortMusicCredits,
  sushiSortSfxCredits,
  type CreditSource,
} from "@/content/sushi-sort";
import type { Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { Reveal } from "./reveal";
import { MysteryTray } from "./tray";

/** Store screenshot crops (the phone screen only): 640 × 1327. */
const SHOT = { w: 640, h: 1327 };

/** Apple's "Download on the App Store" badge, one file per locale. */
const BADGE: Record<Locale, { src: string; w: number; alt: string }> = {
  en: { src: "/apps/sushi-sort/app-store-badge-en.svg", w: 120, alt: "Download on the App Store" },
  "zh-cn": { src: "/apps/sushi-sort/app-store-badge-zh-cn.svg", w: 109, alt: "在 App Store 下载" },
  "zh-tw": { src: "/apps/sushi-sort/app-store-badge-zh-tw.svg", w: 109, alt: "在 App Store 下載" },
};

function Leader({ name, value, note }: { name: string; value: string; note?: string }) {
  return (
    <li className="ss-row">
      <span className="ss-row-line">
        <span className="ss-row-name">{name}</span>
        <span className="ss-row-dots" aria-hidden />
        <span className="ss-row-value">{value}</span>
      </span>
      {note && <span className="ss-row-note">{note}</span>}
    </li>
  );
}

function CreditList({ sources, by, locale }: { sources: CreditSource[]; by: string; locale: Locale }) {
  return (
    <>
      {sources.map((s) => (
        <div key={s.name} className="ss-credit">
          <p className="ss-credit-src">
            <a href={s.url}>{s.name}</a> · {by} {s.by}
            {s.requiredCredit && <> · {s.requiredCredit}</>} · {s.licence[locale]}
          </p>
          <ul>
            {s.tracks.map((tr) => (
              <li key={tr.url}>
                <a href={tr.url}>{tr.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export function SushiSortLanding({ locale }: { locale: Locale }) {
  const app = getApp("sushi-sort")!;
  const loc = localized(app, locale);
  const c = sushiSortCopy[locale];
  const shot = (n: number) => loc.screenshots[n - 1];
  const badge = BADGE[locale];
  const store = app.appStoreUrl;

  return (
    <main className="ss-landing">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />
      <Reveal />

      {/* The order slip */}
      <section className="ss-hero">
        <div className="ss-slip">
          <h1 className="ss-title">
            <span>
              <span>{c.titleLines[0]}</span>
            </span>
            <span>
              <span>{c.titleLines[1]}</span>
            </span>
          </h1>
          <p className="ss-lead">{c.lead}</p>
          <ul className="ss-details">
            {c.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          {store && (
            <a href={store} data-app="sushi-sort" className="ss-badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={badge.src} alt={badge.alt} width={badge.w * 1.2} height={48} />
            </a>
          )}
          <div className="ss-try">
            <h2>{c.tray.title}</h2>
            <p>{c.tray.note}</p>
            <MysteryTray t={c.tray} />
            <p className="ss-try-foot">{c.tray.foot}</p>
          </div>
        </div>
      </section>

      {/* The receipt: how a pour works */}
      <section className="ss-how">
        <div className="ss-how-text">
          <h2 className="ss-h2" data-rise>{c.how.title}</h2>
          <p className="ss-body" data-rise style={{ "--i": 1 } as React.CSSProperties}>
            {c.how.body}
          </p>
          <div className="ss-how-shots" data-rise style={{ "--i": 2 } as React.CSSProperties}>
            {[1, 3].map((n, i) => (
              <figure key={n}>
                <Image
                  src={shot(n).src}
                  alt={shot(n).alt}
                  width={SHOT.w}
                  height={SHOT.h}
                  sizes="(min-width: 900px) 260px, 45vw"
                />
                <figcaption>{c.how.captions[i]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="ss-receipt" data-rise style={{ "--i": 1 } as React.CSSProperties}>
          <h3>{c.how.slipTitle}</h3>
          {c.how.groups.map((g) => (
            <div key={g.name} className="ss-receipt-group">
              <h4>{g.name}</h4>
              <ul>
                {g.rows.map((r) => (
                  <Leader key={r.name} {...r} />
                ))}
              </ul>
            </div>
          ))}
          <p className="ss-receipt-total">
            <span>{c.how.result.name}</span>
            <span>{c.how.result.value}</span>
          </p>
        </div>
      </section>

      {/* The restaurant */}
      <section className="ss-rest">
        <div className="ss-rest-pic" data-rise>
          <span className="ss-frame">
            <Image
            src="/apps/sushi-sort/restaurant/counter-6.webp"
            alt={c.restaurant.alt}
            width={720}
            height={1563}
            sizes="(min-width: 900px) 46vw, 100vw"
            />
          </span>
        </div>
        <div className="ss-rest-text">
          <div data-rise>
            <h2 className="ss-h2">{c.restaurant.title}</h2>
            <p className="ss-body">{c.restaurant.body}</p>
            <ul className="ss-areas">
              {c.restaurant.areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="ss-cells" data-rise style={{ "--i": 2 } as React.CSSProperties}>
            {store && (
              <a href={store} data-app="sushi-sort" className="ss-cell ss-cell-ink">
                {c.restaurant.cta}
              </a>
            )}
            <a href="#sushi" className="ss-cell">
              {c.restaurant.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* The Chef's Order, as a menu card */}
      <section className="ss-order">
        <div className="ss-menu" data-rise>
          <h2 className="ss-h2">{c.order.title}</h2>
          <p className="ss-menu-note">{c.order.note}</p>
          {c.order.groups.map((g) => (
            <div key={g.name} className="ss-menu-group">
              <h3>{g.name}</h3>
              <ul>
                {g.rows.map((r) => (
                  <Leader key={r.name} {...r} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ss-order-shots" data-rise style={{ "--i": 2 } as React.CSSProperties}>
          {[4, 8].map((n, i) => (
            <figure key={n}>
              <Image
                src={shot(n).src}
                alt={shot(n).alt}
                width={SHOT.w}
                height={SHOT.h}
                sizes="(min-width: 900px) 300px, 70vw"
              />
              <figcaption>{c.order.captions[i]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* The Sushi Encyclopedia */}
      <section className="ss-album" id="sushi">
        <div className="ss-album-head">
          <h2 className="ss-h2" data-rise>
            {c.album.title}
          </h2>
          <p className="ss-body" data-rise style={{ "--i": 1 } as React.CSSProperties}>
            {c.album.body}
          </p>
        </div>
        <ul className="ss-tiles">
          {SUSHI_SETS.flatMap((set) =>
            set.pieces.map((p) => (
              <li key={p} className="ss-tile" data-rise style={{ "--i": SUSHI_SETS.indexOf(set) } as React.CSSProperties}>
                <span className="ss-tile-pic">
                  <Image src={`/apps/sushi-sort/sushi/${p}.webp`} alt={c.album.sushi[p]} width={256} height={256} sizes="160px" />
                </span>
                <span className="ss-tile-strip">
                  <span className="ss-tile-name">{c.album.sushi[p]}</span>
                  <span className="ss-tile-meta">
                    <span>{c.album.sets[set.id]}</span>
                    <span>{c.album.grades}</span>
                  </span>
                </span>
              </li>
            )),
          )}
        </ul>
      </section>

      {/* The thirty cities, as the house's printed list */}
      <section className="ss-cities">
        <div className="ss-list" data-rise>
          <h2 className="ss-h2">{c.cities.title}</h2>
          <p className="ss-list-note">{c.cities.note}</p>
          <div className="ss-list-groups">
            {c.cities.groups.map((g, gi) => (
              <div key={g} className="ss-list-group">
                <h3>{g}</h3>
                <ul>
                  {c.cities.names.slice(gi * 10, gi * 10 + 10).map(([name, line], i) => {
                    const w = gi * 10 + i;
                    return (
                      <li key={name}>
                        <span className="ss-city">
                          <span>{name}</span>
                          <span className="ss-city-lv">
                            {w * 15 + 1}–{w * 15 + 15}
                          </span>
                        </span>
                        <span className="ss-city-line">{line}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <p className="ss-list-close">
            {c.cities.close[0]}
            <br />
            {c.cities.close[1]}
          </p>
        </div>
      </section>

      {/* The promises card */}
      <section className="ss-promise">
        <div className="ss-card" data-rise>
          <h2 className="ss-h3">{c.promises.title}</h2>
          <span className="ss-frame ss-card-pic">
            <Image
              src="/apps/sushi-sort/restaurant/garden-6.webp"
            alt={c.promises.alt}
            width={720}
            height={1518}
              sizes="(min-width: 900px) 640px, 90vw"
            />
          </span>
          <p className="ss-names">
            {c.promises.items.map((item, i) => (
              <span key={item}>
                {item}
                {i < c.promises.items.length - 1 && <span aria-hidden>{" · "}</span>}{" "}
              </span>
            ))}
          </p>
          <p className="ss-card-foot">{c.promises.caption}</p>
        </div>
      </section>

      {/* Questions, set as reading text */}
      <section className="ss-faq">
        <h2 className="ss-h2" data-rise>
          {c.faqTitle}
        </h2>
        <div className="ss-faq-text" data-rise style={{ "--i": 1 } as React.CSSProperties}>
          {loc.faqs.map((f) => (
            <p key={f.q}>
              <strong>{f.q}</strong> {f.a}
            </p>
          ))}
        </div>
      </section>

      {/* Music and sound credits (a licence condition: keep visible) */}
      <section className="ss-credits" id="credits">
        <div className="ss-programme" data-rise>
          <h2 className="ss-h3">{c.credits.title}</h2>
          <p className="ss-programme-note">{c.credits.intro}</p>
          <div className="ss-programme-cols">
            <div>
              <h3>{c.credits.music}</h3>
              <CreditList sources={sushiSortMusicCredits} by={c.credits.by} locale={locale} />
            </div>
            <div>
              <h3>{c.credits.sfx}</h3>
              <CreditList sources={sushiSortSfxCredits} by={c.credits.by} locale={locale} />
              <p className="ss-programme-note">{c.credits.original}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
