// TraceSheet's home page at tracesheet.appfactory.sg.
//
// One motif runs it: the 田字格 cell from the app icon — a square cut into
// four by its guide cross. It is the giant shape in the hero (with the promo
// film playing in one pane), the mask on the class-sheet picture, the bullet,
// and the footer's letter cells. The live thing is the try-it sheet: type a
// word and see its copybook row. Copy lives in content/tracesheet.ts.

import Image from "next/image";
import { getApp, localized } from "@/content/apps";
import { tracesheetLanding, type TracesheetPlan, type TracesheetPlanRow } from "@/content/tracesheet";
import type { Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { HeroVideo } from "./hero-video";
import { Stages } from "./stages";
import { TrySheet } from "./try-sheet";

const ASSETS = "/apps/tracesheet";

/** Official "Download on the App Store" artwork (Apple Marketing Tools),
 * black badge, one file per locale, shown exactly as delivered. */
const BADGE: Record<Locale, { src: string; width: number; alt: string }> = {
  en: { src: `${ASSETS}/app-store-badge-en.svg`, width: 119.66407, alt: "Download on the App Store" },
  "zh-cn": { src: `${ASSETS}/app-store-badge-zh-cn.svg`, width: 108.85157, alt: "在 App Store 下载" },
  "zh-tw": { src: `${ASSETS}/app-store-badge-zh-tw.svg`, width: 108.85157, alt: "在 App Store 下載" },
};
const BADGE_H = 52;

function rise(d: number) {
  return { ["--d" as string]: d };
}

function PlanCell({ value, yes, no }: { value: TracesheetPlanRow["free"]; yes: string; no: string }) {
  if (value === true)
    return (
      <span className="ts-yes" role="img" aria-label={yes}>
        <i />
        <i />
        <i />
        <i />
      </span>
    );
  if (value === false) return <span aria-label={no}>—</span>;
  return <>{value}</>;
}

function PlanField({
  plan,
  tone,
  href,
}: {
  plan: TracesheetPlan;
  tone: "free" | "pro";
  href?: string;
}) {
  return (
    <div className={`ts-plan ts-plan-${tone}`}>
      <div className="ts-plan-top">
        <h3 className="ts-plan-name ts-rise">{plan.name}</h3>
        <p className="ts-lead ts-rise" style={rise(1)}>
          {plan.forWhom}
        </p>
        <p className="ts-plan-body ts-rise" style={rise(2)}>
          {plan.body}
        </p>
      </div>
      <div className="ts-plan-foot">
        <p className="ts-price">
          <span className="ts-price-num">{plan.price}</span>
          <span className="ts-price-unit">{plan.unit}</span>
        </p>
        {href && (
          <a href={href} data-app="tracesheet" className="ts-btn">
            {plan.cta}
          </a>
        )}
      </div>
    </div>
  );
}

export function TracesheetLanding({ locale }: { locale: Locale }) {
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  const copy = tracesheetLanding[locale];
  const badge = BADGE[locale];
  const store = app.appStoreUrl;
  const ui = (name: string) => `${ASSETS}/ui/${locale}/${name}.webp`;

  return (
    <main className="ts-landing">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />

      {/* Hero: the giant 田 cell, cropped by the edges, film in one pane. */}
      <section className="ts-hero">
        <div className="ts-hero-text">
          <h1 className="ts-h1">
            <span>{copy.heroTitle[0]}</span> <span>{copy.heroTitle[1]}</span>
          </h1>
          <p className="ts-lead ts-hero-sub">{copy.heroSub}</p>
          <div className="ts-hero-act">
            {store && (
              <a href={store} data-app="tracesheet" className="ts-badge">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={badge.src}
                  alt={badge.alt}
                  width={Math.round((badge.width / 40) * BADGE_H)}
                  height={BADGE_H}
                />
              </a>
            )}
            <p className="ts-small">{copy.heroNote}</p>
          </div>
        </div>
        <div className="ts-giant">
          <div className="ts-pane ts-pane-film">
            <HeroVideo video={copy.video} label={copy.videoLabel} />
          </div>
          <div className="ts-pane" />
          <div className="ts-pane" />
          <div className="ts-pane" />
        </div>
      </section>

      {/* The live thing: type a word, see its copybook row. */}
      <TrySheet
        title={copy.tryTitle}
        body={copy.tryBody}
        label={copy.tryLabel}
        presetsLabel={copy.tryPresetsLabel}
        presets={copy.tryPresets}
        sheetNames={copy.trySheet}
        printLabel={copy.tryPrint}
        note={copy.tryNote}
      />

      {/* Learn: four stages on one slider. */}
      <Stages
        title={copy.stagesTitle}
        label={copy.stagesLabel}
        stages={copy.stages.map((s) => ({ ...s, src: ui(s.ui) }))}
      />

      {/* Sheets: specimens on colour tiles. */}
      <section className="ts-sheets" aria-labelledby="ts-sheets-h">
        <div className="ts-sheets-head">
          <h2 id="ts-sheets-h" className="ts-h2 ts-rise">
            {copy.sheetsTitle}
          </h2>
          <p className="ts-body-text ts-rise" style={rise(1)}>
            {copy.sheetsBody}
          </p>
        </div>
        <ul className="ts-tiles">
          {copy.tiles.map((t, i) => {
            const wide = t.ui === "ipad-tian-sheet";
            return (
              <li key={t.ui} className={`ts-tile-item ts-rise${wide ? " is-wide" : ""}`} style={rise(i)}>
                <div className={`ts-tile ts-tile-${i % 3}`}>
                  <Image
                    src={ui(t.ui)}
                    alt={t.alt}
                    width={wide ? 1000 : 640}
                    height={800}
                    sizes={wide ? "(max-width: 767px) 92vw, 50vw" : "(max-width: 767px) 46vw, 25vw"}
                  />
                </div>
                <h3 className="ts-tile-name">{t.name}</h3>
                <p className="ts-tile-fact">{t.fact}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Free and Pro: two fields on a hard edge, then the full table. */}
      <section className="ts-plans" aria-labelledby="ts-plans-h">
        <h2 id="ts-plans-h" className="ts-sr">
          {copy.plansTitle}
        </h2>
        <div className="ts-plan-fields">
          <PlanField plan={copy.free} tone="free" href={store} />
          <PlanField plan={copy.pro} tone="pro" href={store} />
        </div>
        <div className="ts-compare">
          <h3 className="ts-h3 ts-rise">{copy.compareTitle}</h3>
          <div className="ts-table-wrap ts-rise" style={rise(1)}>
            <table className="ts-table">
              <thead>
                <tr>
                  <th scope="col">{copy.planFeatureHeader}</th>
                  <th scope="col">{copy.free.name}</th>
                  <th scope="col">{copy.pro.name}</th>
                </tr>
              </thead>
              <tbody>
                {copy.planRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>
                      <PlanCell value={row.free} yes={copy.planYes} no={copy.planNo} />
                    </td>
                    <td>
                      <PlanCell value={row.pro} yes={copy.planYes} no={copy.planNo} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ts-small">{copy.planFootnote}</p>
        </div>
      </section>

      {/* For the class: the blackboard panel, picture in the 田 mask. */}
      <section className="ts-board" aria-labelledby="ts-board-h">
        <div className="ts-board-left">
          <h2 id="ts-board-h" className="ts-h2 ts-rise">
            {copy.shareTitle}
          </h2>
          <div className="ts-board-pic ts-rise" style={rise(1)}>
            <Image
              src={ui("10-offline")}
              alt={copy.shareAlt}
              width={640}
              height={800}
              sizes="(max-width: 767px) 86vw, 38vw"
            />
          </div>
        </div>
        <div className="ts-board-right">
          <div className="ts-rise">
            <h3 className="ts-h3">{copy.shareHead}</h3>
            <p className="ts-body-text">{copy.shareBody}</p>
          </div>
          {loc.trust && (
            <div className="ts-rise" style={rise(1)}>
              <h3 className="ts-h3">{loc.trust.title}</h3>
              <p className="ts-body-text">{loc.trust.body}</p>
            </div>
          )}
          {store && (
            <a href={store} data-app="tracesheet" className="ts-btn ts-rise" style={rise(2)}>
              {copy.shareCta}
            </a>
          )}
        </div>
      </section>

      {/* FAQ: filled tiles, one open at a time. */}
      <section className="ts-faq" aria-labelledby="ts-faq-h">
        <h2 id="ts-faq-h" className="ts-h2 ts-faq-h">
          {copy.faqTitle}
        </h2>
        <div className="ts-faq-list">
          {loc.faqs.map((f, i) => (
            <details key={f.q} name="ts-faq" className="ts-q ts-rise" style={rise(Math.min(i, 4))}>
              <summary>
                <span>{f.q}</span>
                <span className="ts-plus" aria-hidden>
                  <i />
                  <i />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
