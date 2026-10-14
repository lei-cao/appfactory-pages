import Image from "next/image";
import { getApp, localized } from "@/content/apps";
import type { Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { PlayBoard } from "./board";
import { AREAS, BOARD_SIZES, BOARD_SIZES_PHONE, COPY, fill, type AreaId } from "./copy";
import { Faq } from "./faq";
import { HowItPlays } from "./how-it-plays";
import { Reveal } from "./reveal";

const SLUG = "arrow-out";

// Where each margin note's control sits on the gameplay clip (percent of the
// 480×866 crop): left, top, width, height.
const MARKS: [number, number, number, number][] = [
  [4, 0, 24, 6.5], // Arrows
  [28, 0, 23, 6.5], // Hearts
  [51, 0, 20, 6.5], // Fuse
  [70, 0, 26, 6.5], // Par clock
  [2, 7.5, 96, 77], // the board (chains)
  [3, 86.5, 94, 13], // boosters
];
// Note order on the page: left column, then right column.
const LEFT = [0, 4, 5];
const RIGHT = [1, 2, 3];
const NOTE_TOP = [0, 0, 17, 34, 36, 85]; // percent, by note index

const STRIPS = ["ao-strip--jade", "ao-strip--ink", "ao-strip--stone", "ao-strip--wood"];

/** Twelve courtyard pictures: four corners before and after, then the Moon Gate in steps. */
const TILES: { area: AreaId; step: number }[] = [
  { area: "stone-path", step: 0 },
  { area: "stone-path", step: 6 },
  { area: "koi-pond", step: 0 },
  { area: "koi-pond", step: 6 },
  { area: "bamboo-grove", step: 0 },
  { area: "bamboo-grove", step: 6 },
  { area: "tea-pavilion", step: 0 },
  { area: "tea-pavilion", step: 6 },
  { area: "moon-gate", step: 0 },
  { area: "moon-gate", step: 2 },
  { area: "moon-gate", step: 4 },
  { area: "moon-gate", step: 6 },
];

const LABELLED = new Set([0, 7, 12]); // bars that print their value

export function ArrowOutLanding({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const t = COPY[locale];
  const maxBar = Math.max(...BOARD_SIZES.map((b) => b.arrows));
  const credits = app.credits;

  return (
    <main className="ao-landing">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />
      <Reveal />

      {/* Hero: the claim upper left, level 9 playable on the jade stage. */}
      <section className="ao-hero" aria-labelledby="ao-h1">
        <div className="ao-hero__words">
          <h1 id="ao-h1" className="ao-hero__h1">
            {loc.tagline}
          </h1>
          <p className="ao-hero__lead">{t.hero.lead}</p>
          <div className="ao-hero__act">
            <a href="#board" className="ao-button">
              {t.hero.action}
            </a>
            <p className="ao-hero__status">{loc.statusNote}</p>
          </div>
        </div>
        <div className="ao-stage" aria-label={t.hero.stageLabel} role="region">
          <PlayBoard t={t.board} gateSizes="(max-width: 760px) 92vw, 300px" />
          <p className="ao-stage__note">{t.board.note}</p>
        </div>
      </section>

      <HowItPlays t={t.how} />

      {/* The play screen as a plate, with margin notes. */}
      <section className="ao-panel" aria-labelledby="ao-panel-h2">
        <div className="ao-panel__head" data-reveal>
          <h2 id="ao-panel-h2" className="ao-h2">
            {t.panel.h2}
          </h2>
          <p className="ao-panel__lead">{t.panel.lead}</p>
        </div>
        <div className="ao-panel__plate">
          <div className="ao-panel__media">
            <video
              className="ao-panel__video"
              src="/apps/arrow-out/screens/gameplay.mp4"
              poster="/apps/arrow-out/screens/gameplay-poster.webp"
              width={480}
              height={866}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={t.panel.videoLabel}
            />
            {MARKS.map(([l, top, w, h], i) => (
              <span
                key={i}
                className="ao-mark"
                data-i={i}
                aria-hidden
                style={{ left: `${l}%`, top: `${top}%`, width: `${w}%`, height: `${h}%` }}
              />
            ))}
          </div>
          {[LEFT, RIGHT].map((col, c) => (
            <ul key={c} className={`ao-notes ao-notes--${c ? "right" : "left"}`}>
              {col.map((i) => (
                <li
                  key={i}
                  className="ao-note"
                  data-i={i}
                  data-reveal
                  style={{ ["--top" as string]: `${NOTE_TOP[i]}%`, ["--i" as string]: String(i + 1) }}
                >
                  <h3 className="ao-note__name">{t.panel.notes[i].name}</h3>
                  <p className="ao-note__body">{t.panel.notes[i].body}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* The courtyard: pictures from the game with their renovation tags. */}
      <section className="ao-yard" id="courtyard" aria-labelledby="ao-yard-h2">
        <div className="ao-yard__head" data-reveal>
          <h2 id="ao-yard-h2" className="ao-h2">
            {t.courtyard.h2}
          </h2>
          <p className="ao-yard__lead">{t.courtyard.lead}</p>
        </div>
        <ul className="ao-yard__grid">
          {TILES.map(({ area, step }, i) => {
            const costs = AREAS.find((a) => a.id === area)!.costs;
            const name = t.courtyard.areas[area];
            const total = costs.reduce((s, c) => s + c, 0);
            const done = step === costs.length;
            return (
              <li key={`${area}-${step}`} className="ao-tile" data-reveal>
                <Image
                  src={`/apps/arrow-out/courtyard/${area}-${step}.webp`}
                  alt={
                    done
                      ? fill(t.courtyard.altRestored, { area: name })
                      : fill(t.courtyard.alt, { area: name, n: step })
                  }
                  width={640}
                  height={960}
                  sizes="(max-width: 760px) 46vw, 24vw"
                  className="ao-tile__img"
                />
                <div className={`ao-strip ${STRIPS[(i + Math.floor(i / 4)) % 4]}`}>
                  <p className="ao-strip__row">
                    <span>{name}</span>
                    <span>{done ? t.courtyard.restored : fill(t.courtyard.step, { n: step })}</span>
                  </p>
                  <p className="ao-strip__row">
                    <span>{done ? fill(t.courtyard.total, { n: total }) : fill(t.courtyard.next, { n: costs[step] })}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="ao-yard__note">{t.courtyard.note}</p>
      </section>

      {/* How big the boards get: the game's own level pack, measured. */}
      <section className="ao-stats" aria-labelledby="ao-stats-h2">
        <div className="ao-stats__words" data-reveal>
          <h2 id="ao-stats-h2" className="ao-stats__h2">
            <span className="ao-stats__figure">{t.stats.figure}</span>
            <span className="ao-stats__claim">{t.stats.claim}</span>
          </h2>
          <p className="ao-stats__body">{t.stats.body}</p>
        </div>
        <div className="ao-bars" data-ui role="img" aria-label={t.stats.chartLabel}>
          {BOARD_SIZES.map((b, i) => (
            <div
              key={i}
              className="ao-bar"
              data-master={b.master || undefined}
              tabIndex={0}
              title={b.master ? fill(t.stats.master, { n: b.arrows }) : fill(t.stats.bar, { from: b.from, to: b.to, n: b.arrows })}
              style={{ ["--h" as string]: String(b.arrows / maxBar) }}
            >
              <span className="ao-bar__value" data-always={LABELLED.has(i) || undefined}>
                {b.master ? `${t.stats.masterShort} ${b.arrows}` : b.arrows}
              </span>
            </div>
          ))}
        </div>
        <ul className="ao-rows" data-ui role="img" aria-label={t.stats.chartLabel}>
          {BOARD_SIZES_PHONE.map((b, i) => (
            <li
              key={i}
              className="ao-row"
              data-master={b.master || undefined}
              style={{ ["--w" as string]: String(b.arrows / maxBar) }}
            >
              <span>{b.master ? t.stats.masterShort : `${b.from}–${b.to}`}</span>
              <span>{b.arrows}</span>
            </li>
          ))}
        </ul>
        <div className="ao-stats__more" data-reveal>
          <p>{t.stats.twists}</p>
          <p>{t.stats.daily}</p>
        </div>
      </section>

      {/* Ads, stated as promises. */}
      <section className="ao-ads" aria-labelledby="ao-ads-h2">
        <div className="ao-ads__lead" data-reveal>
          <h2 id="ao-ads-h2" className="ao-ads__h2">
            {loc.trust?.title ?? t.ads.h2}
          </h2>
          {loc.trust && <p className="ao-ads__body">{loc.trust.body}</p>}
        </div>
        {t.ads.tiles.map((tile) => (
          <p key={tile} className="ao-ads__tile" data-reveal>
            {tile}
          </p>
        ))}
      </section>

      <Faq title={t.faq.h2} faqs={loc.faqs} />

      {/* Music & sound credits (licence condition: keep visible). */}
      {credits && (
        <section className="ao-credits" id="credits" aria-labelledby="ao-credits-h2">
          <div className="ao-credits__head" data-reveal>
            <h2 id="ao-credits-h2" className="ao-h2">
              {t.credits.h2}
            </h2>
            <p>{t.credits.intro}</p>
            <h3 className="ao-credits__h3">{t.credits.music}</h3>
            <p>
              Music: もみじば (Momijiba) —{" "}
              <a href={credits.musicUrl} className="ao-link">
                MOMIZizm MUSiC
              </a>{" "}
              <a href={credits.musicUrl} className="ao-link ao-credits__url">
                {credits.musicUrl}
              </a>
            </p>
            <h3 className="ao-credits__h3">{t.credits.sfx}</h3>
            <p>
              <a href={credits.sfx.url} className="ao-link">
                {credits.sfx.line}
              </a>
            </p>
          </div>
          <div className="ao-credits__tracks" data-reveal>
            <h3 className="ao-credits__h3">{t.credits.tracks}</h3>
            <ul>
              {credits.tracks.map((tr) => (
                <li key={tr.url}>
                  <a href={tr.url} className="ao-link">
                    “{tr.title}”
                  </a>{" "}
                  <span className="ao-credits__style">{tr.style}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
