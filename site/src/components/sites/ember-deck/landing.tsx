// ember-deck.appfactory.sg — the landing page.
//
// Direction: the split stage. One half of the screen holds the game itself
// and stays put while the other half is read. On this page a turn of Ember
// Deck is that fixed half: the visitor plays it (the live thing, ./turn.tsx)
// while the reading column explains the Heat rule it runs on, and further
// down the painting on the stage changes act by act as the climb is read.
// Ground is ash, the fire is in the pictures; one ember accent on actions.
//
// Every picture is the game's own art or store capture, copied from the app
// repo into public/apps/ember-deck/v2/. Server component; the only client
// parts are the turn and the small PageMotion observer.

import { getApp, localized } from "@/content/apps";
import { emberDeckLanding, emberDeckReleased, type EmberDeckLanding } from "@/content/ember-deck";
import { localePrefix, type Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";
import type { CSSProperties } from "react";
import { PageMotion } from "./page-motion";
import { Turn } from "./turn";

const V2 = "/apps/ember-deck/v2";

/** Entrance order inside a section (CSS staggers by --i). */
const d = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * A paper sheet's cut edge as a clip-path: `teeth` shallow zigzags along the
 * bottom, and along the top too when `top` is set.
 */
function cutEdge(teeth: number, tooth: number, top: boolean): CSSProperties {
  const pts: string[] = [];
  for (let k = 0; k <= teeth * 2; k++) {
    const x = `${((k / (teeth * 2)) * 100).toFixed(3)}%`;
    pts.push(top ? `${x} ${k % 2 ? 0 : tooth}px` : `${x} 0`);
    if (!top) break;
  }
  if (!top) pts.push("100% 0");
  for (let k = teeth * 2; k >= 0; k--) {
    const x = `${((k / (teeth * 2)) * 100).toFixed(3)}%`;
    pts.push(`${x} ${k % 2 ? "100%" : `calc(100% - ${tooth}px)`}`);
  }
  return { clipPath: `polygon(${pts.join(", ")})` };
}

const SHEET_EDGE = cutEdge(30, 14, true);
const LETTER_EDGE = cutEdge(26, 12, false);

// Who you meet in each act (art ids under v2/), in the order of the copy.
const ACT_ART = [
  { bg: "acts/act1.webp", bosses: ["b01", "b02"], foes: ["e05", "e07", "e08", "e10"] },
  { bg: "acts/act2.webp", bosses: ["b04", "b05"], foes: ["e13", "e18", "e19", "e20"] },
  { bg: "acts/act3.webp", bosses: ["b06", "b07"], foes: ["e22", "e25", "e26", "e29"] },
];

// The four paintings on the acts stage; the last one is the throne.
const ACT_STAGE = ["acts/act1.webp", "acts/act2.webp", "acts/act3.webp", "acts/act3-boss.webp"];

// Rule → the part of the turn it talks about.
const RULE_FOCUS = ["heat", "blaze", "hand"] as const;

/** Ten bars, lit one per card played in the turn (see PageMotion). */
function HeatBand({ className = "" }: { className?: string }) {
  return (
    <div className={`ed-band ${className}`} data-heat-band aria-hidden>
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

function Hero({ copy, statusNote, appName }: {
  copy: EmberDeckLanding;
  statusNote: string;
  appName: string;
}) {
  const app = getApp("ember-deck")!;
  return (
    <div className="ed-hero">
      <HeatBand />
      <div className="ed-hero-body">
        <h1 id="ed-title" className="ed-display" data-reveal>
          {appName}
        </h1>
        <p className="ed-hero-line" data-reveal style={d(1)}>
          {copy.hero.line}
        </p>
        <p className="ed-hero-sub" data-reveal style={d(2)}>
          {copy.hero.sub}
        </p>
        <div className="ed-hero-act" data-reveal style={d(3)}>
          {emberDeckReleased ? (
            <span className="ed-stores">
              {app.appStoreUrl && (
                <a href={app.appStoreUrl} className="ed-button" data-app="ember-deck">
                  App Store
                </a>
              )}
              {app.playStoreUrl && (
                <a href={app.playStoreUrl} className="ed-button" data-app="ember-deck">
                  Google Play
                </a>
              )}
            </span>
          ) : (
            <a href="#turn" className="ed-button">
              {copy.hero.cta}
            </a>
          )}
          <p className="ed-hero-status">
            <strong>{statusNote}</strong> {copy.hero.price}
          </p>
        </div>
      </div>
      <nav className="ed-hero-links" aria-label={appName}>
        <a href="#heroes">{copy.nav.heroes}</a>
        <a href="#acts">{copy.nav.acts}</a>
        <a href="#questions">{copy.nav.faq}</a>
      </nav>
    </div>
  );
}

function RuleArt({ i, shot, blade }: { i: number; shot: { src: string; alt: string }; blade: string }) {
  if (i === 0)
    return (
      <div className="ed-rule-art ed-rule-flames" data-reveal style={d(2)}>
        {["heat-flame-a", "heat-flame-b", "heat-flame-c"].map((f) => (
          <img key={f} src={`${V2}/fx/${f}.webp`} alt="" width={220} height={330} loading="lazy" decoding="async" />
        ))}
      </div>
    );
  if (i === 1)
    return (
      <div className="ed-rule-art" data-reveal style={d(2)}>
        <div className="ed-card ed-card-still" data-ui data-lit aria-hidden>
          <span className="ed-card-art">
            <img src={`${V2}/art/heated-blade.webp`} alt="" width={320} height={400} loading="lazy" decoding="async" />
          </span>
          <img src={`${V2}/cards/frame-attack-common.webp`} alt="" width={400} height={560} loading="lazy" decoding="async" className="ed-card-frame" />
          {/* drawn with ::before so the card's labels are pictures, not page text */}
          <span className="ed-card-gem" data-v="1" />
          <span className="ed-card-name" data-v={blade} />
          <span className="ed-card-pip" data-v="3" />
        </div>
      </div>
    );
  return (
    <div className="ed-rule-art ed-rule-shot" data-reveal style={d(2)}>
      <img src={shot.src} alt={shot.alt} width={520} height={1130} loading="lazy" decoding="async" />
    </div>
  );
}

function Rules({ copy, shot }: { copy: EmberDeckLanding; shot: { src: string; alt: string } }) {
  return (
    <div className="ed-rules">
      <h2 className="ed-h2" data-reveal>
        {copy.turnTitle}
      </h2>
      {copy.rules.map((r, i) => (
        <div key={r.title} className={`ed-rule ${i === 0 ? "is-active" : ""}`} data-rule={RULE_FOCUS[i]}>
          <RuleArt i={i} shot={shot} blade={copy.turn.cards.blade.name} />
          <h3 className="ed-lead" data-reveal>
            {r.title}
          </h3>
          <p data-reveal style={d(1)}>
            {r.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function Heroes({ copy }: { copy: EmberDeckLanding }) {
  return (
    <section id="heroes" className="ed-heroes" aria-labelledby="ed-heroes-h">
      <div className="ed-heroes-figs">
        {copy.heroes.map((h, i) => (
          <figure key={h.art} data-reveal style={d(i)}>
            <img
              src={`${V2}/heroes/${h.art}.webp`}
              alt={h.name}
              width={768}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
      <div className="ed-sheet" style={SHEET_EDGE}>
        <h2 id="ed-heroes-h" className="ed-h2" data-reveal>
          {copy.heroesTitle}
        </h2>
        <p className="ed-sheet-intro" data-reveal style={d(1)}>
          {copy.heroesIntro}
        </p>
        {copy.heroes.map((h) => (
          <table key={h.art} className="ed-menu" data-reveal>
            <caption>
              <span className="ed-cap">
                <span>{h.name}</span>
                <span>
                  {h.hp} {copy.heroLabels.hp}
                </span>
              </span>
            </caption>
            <colgroup>
              <col className="ed-col-name" />
              <col />
              <col className="ed-col-value" />
            </colgroup>
            <tbody>
              <tr className="ed-menu-style">
                <td colSpan={3}>
                  <em>{h.line}</em> {h.style}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  {h.relic.name}
                  <span>{h.relic.text}</span>
                </th>
                <td className="ed-leader" aria-hidden />
                <td>{copy.heroLabels.relic}</td>
              </tr>
              {h.cards.map((c) => (
                <tr key={c.name}>
                  <th scope="row">
                    {c.name}
                    <span>{c.text}</span>
                  </th>
                  <td className="ed-leader" aria-hidden />
                  <td>{c.cost}</td>
                </tr>
              ))}
              <tr>
                <th scope="row">{copy.heroLabels.unlock}</th>
                <td className="ed-leader" aria-hidden />
                <td>{h.unlock}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </section>
  );
}

function Acts({ copy }: { copy: EmberDeckLanding }) {
  return (
    <section id="acts" className="ed-acts" aria-labelledby="ed-acts-h">
      <div className="ed-acts-stage">
        <div className="ed-acts-sticky" data-act-stage data-act="0">
          {ACT_STAGE.map((src, i) => (
            <img
              key={src}
              src={`${V2}/${src}`}
              alt=""
              width={1170}
              height={2532}
              loading="lazy"
              decoding="async"
              data-step={i}
            />
          ))}
          <img
            src={`${V2}/bosses/b03.webp`}
            alt=""
            width={560}
            height={560}
            loading="lazy"
            decoding="async"
            className="ed-acts-king"
          />
        </div>
      </div>
      <div className="ed-acts-read">
        <h2 id="ed-acts-h" className="ed-h2" data-reveal>
          {copy.actsTitle}
        </h2>
        <p className="ed-acts-intro" data-reveal style={d(1)}>
          {copy.actsIntro}
        </p>
        {copy.acts.map((a, i) => {
          const art = ACT_ART[i];
          return (
            <article key={a.name} className="ed-act" data-act-step={i}>
              <img
                src={`${V2}/${art.bg}`}
                alt=""
                width={1170}
                height={2532}
                loading="lazy"
                decoding="async"
                className="ed-act-band"
              />
              <h3 className="ed-lead" data-reveal>
                {a.name}
              </h3>
              <p data-reveal style={d(1)}>
                <strong>{a.minutes}.</strong> {a.body}
              </p>
              <div className="ed-act-bosses" data-reveal style={d(2)}>
                {art.bosses.map((b) => (
                  <img key={b} src={`${V2}/bosses/${b}.webp`} alt="" width={560} height={560} loading="lazy" decoding="async" />
                ))}
                <p>
                  <span>{copy.bossesLabel}</span> {a.bosses}
                </p>
              </div>
              <ul className="ed-act-foes" aria-label={copy.foesLabel} data-reveal style={d(3)}>
                {a.foes.map((f, j) => (
                  <li key={f}>
                    <img src={`${V2}/enemies/${art.foes[j]}.webp`} alt="" width={240} height={240} loading="lazy" decoding="async" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
        <article className="ed-act ed-king" data-act-step={3}>
          <img
            src={`${V2}/acts/act3-boss.webp`}
            alt=""
            width={1170}
            height={2532}
            loading="lazy"
            decoding="async"
            className="ed-act-band"
          />
          <h3 className="ed-lead" data-reveal>
            {copy.king.name}
          </h3>
          <p className="ed-king-hp ed-display" data-reveal style={d(1)}>
            {copy.king.hp}
          </p>
          <p data-reveal style={d(2)}>
            {copy.king.body}
          </p>
        </article>
      </div>
    </section>
  );
}

function Progress({ copy }: { copy: EmberDeckLanding }) {
  return (
    <section id="between-runs" className="ed-progress" aria-labelledby="ed-progress-h">
      <div className="ed-progress-list">
        <h2 id="ed-progress-h" className="ed-h2" data-reveal>
          {copy.progressTitle}
        </h2>
        <p className="ed-progress-body" data-reveal style={d(1)}>
          {copy.progressBody}
        </p>
        {copy.progressGroups.map((g) => (
          <div key={g.name} className="ed-rows" data-reveal>
            <h3>{g.name}</h3>
            <ul>
              {g.rows.map((r) => (
                <li key={r.name}>
                  <img src={`${V2}/${r.img}`} alt="" width={28} height={28} loading="lazy" decoding="async" />
                  <span>{r.name}</span>
                  <span className="ed-rows-v">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="ed-progress-art">
        <img
          src={`${V2}/misc/hub.webp`}
          alt=""
          width={1170}
          height={2532}
          loading="lazy"
          decoding="async"
          data-reveal
        />
      </div>
    </section>
  );
}

function Gallery({ copy, shots, locale }: {
  copy: EmberDeckLanding;
  shots: { src: string; alt: string }[];
  locale: Locale;
}) {
  const lang = locale === "en" ? "en" : "zh";
  const pairs = [
    ["b04", "b05"],
    ["b06", "b07"],
  ];
  const shot = (s: { src: string; alt: string }) => (
    <figure key={s.src} className="ed-mod ed-mod-tall">
      <img src={s.src} alt={s.alt} width={520} height={1130} loading="lazy" decoding="async" />
    </figure>
  );
  return (
    <section id="screens" className="ed-gallery" aria-labelledby="ed-gallery-h">
      <div className="ed-gallery-head">
        <h2 id="ed-gallery-h" className="ed-h2" data-reveal>
          {copy.galleryTitle}
        </h2>
        <p data-reveal style={d(1)}>
          {copy.galleryCount}
        </p>
      </div>
      <div className="ed-row" tabIndex={0} role="region" aria-labelledby="ed-gallery-h">
        <figure className="ed-mod ed-mod-tall">
          <video
            src={`${V2}/video/gameplay-${lang}.mp4`}
            poster={`${V2}/video/gameplay-${lang}.webp`}
            width={432}
            height={936}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={copy.videoLabel}
          />
        </figure>
        {shots.slice(0, 2).map(shot)}
        <div className="ed-mod ed-mod-pair">
          {pairs[0].map((b) => (
            <img key={b} src={`${V2}/bosses/${b}.webp`} alt="" width={560} height={560} loading="lazy" decoding="async" />
          ))}
        </div>
        {shots.slice(2, 5).map(shot)}
        <div className="ed-mod ed-mod-pair">
          {pairs[1].map((b) => (
            <img key={b} src={`${V2}/bosses/${b}.webp`} alt="" width={560} height={560} loading="lazy" decoding="async" />
          ))}
        </div>
        {shots.slice(5).map(shot)}
      </div>
    </section>
  );
}

function Price({ copy, support }: { copy: EmberDeckLanding; support: string }) {
  const plan = (p: EmberDeckLanding["free"], href: string, id: string, cls: string) => (
    <div className={`ed-plan ${cls}`} aria-labelledby={id}>
      <h2 id={id} className="ed-plan-name" data-reveal>
        {p.name}
      </h2>
      <p className="ed-plan-for" data-reveal style={d(1)}>
        {p.for}
      </p>
      <p className="ed-plan-body" data-reveal style={d(2)}>
        {p.body}
      </p>
      <div className="ed-plan-foot" data-reveal style={d(3)}>
        <p className="ed-plan-price">
          <span className="ed-display">{p.price}</span> <span className="ed-plan-unit">{p.unit}</span>
        </p>
        <a href={href} className="ed-button">
          {p.cta}
        </a>
      </div>
    </div>
  );
  return (
    <section id="price" className="ed-price">
      {plan(copy.bundle, support, "ed-plan-bundle", "ed-plan-bundle")}
      {plan(copy.free, "#turn", "ed-plan-free", "ed-plan-free")}
    </section>
  );
}

function Faq({ copy, support }: { copy: EmberDeckLanding; support: string }) {
  return (
    <section id="questions" className="ed-faq" aria-labelledby="ed-faq-h">
      <div className="ed-faq-head">
        <h2 id="ed-faq-h" className="ed-h2" data-reveal>
          {copy.faqTitle}
        </h2>
        <a href={support} className="ed-link" data-reveal style={d(1)}>
          {copy.supportLink}
        </a>
      </div>
      <div className="ed-faq-text">
        {copy.faqs.map((f) => (
          <p key={f.q} data-reveal>
            <strong>{f.q}</strong> {f.a}
          </p>
        ))}
      </div>
    </section>
  );
}

function Press({ copy, email }: { copy: EmberDeckLanding; email: string }) {
  const zip = "/apps/ember-deck/press/ember-deck-press-kit.zip";
  return (
    <section id="press" className="ed-press" aria-labelledby="ed-press-h">
      <div className="ed-letter" style={LETTER_EDGE} data-reveal>
        <img src="/apps/ember-deck/icon.png" alt="" width={44} height={44} loading="lazy" className="ed-letter-icon" />
        <h2 id="ed-press-h" className="ed-lead">
          {copy.pressTitle}
        </h2>
        {copy.pressBody.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <table className="ed-facts">
          <tbody>
            {copy.pressFacts.map((f) => (
              <tr key={f.label}>
                <th scope="row">{f.label}</th>
                <td>{f.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="ed-files">
          {copy.pressItems.map((it) => (
            <li key={it.file}>
              <a href={it.file} download className="ed-link">
                {it.label}
              </a>{" "}
              <span>{it.meta}</span>
            </li>
          ))}
        </ul>
        <p className="ed-credits">
          {copy.creditsMusic}{" "}
          <a href={copy.creditsMusicUrl} className="ed-link" rel="noopener" target="_blank">
            {copy.creditsMusicBy}
          </a>
          . {copy.creditsSfx}
        </p>
        <p className="ed-signoff">{copy.signoff}</p>
        <div className="ed-tear">
          <a href={`mailto:${email}`} className="ed-tear-mail">
            {email}
          </a>
          <a href={zip} download className="ed-button">
            {copy.pressZip}
          </a>
        </div>
      </div>
    </section>
  );
}

export function EmberDeckPage({ locale }: { locale: Locale }) {
  const app = getApp("ember-deck")!;
  const loc = localized(app, locale);
  const copy = emberDeckLanding[locale];
  const support = `${localePrefix(locale)}/apps/${app.slug}/support`;
  const email = app.contactEmail ?? CONTACT_EMAIL;

  return (
    <main className="ed-main">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />
      <PageMotion />

      <section className="ed-open" aria-labelledby="ed-title">
        <Hero copy={copy} statusNote={loc.statusNote ?? ""} appName={loc.name} />
        <div id="turn" className="ed-stage">
          <div className="ed-stage-sticky" data-turn-stage data-focus="heat">
            <Turn copy={copy.turn} />
          </div>
        </div>
        <Rules copy={copy} shot={loc.screenshots[0]} />
      </section>

      <Heroes copy={copy} />
      <Acts copy={copy} />
      <Progress copy={copy} />
      <Gallery copy={copy} shots={loc.screenshots} locale={locale} />
      <Price copy={copy} support={support} />
      <Faq copy={copy} support={support} />
      <Press copy={copy} email={email} />
      <p className="ed-closing" data-reveal>
        {copy.closing.split(/(?<=[.。])\s*/).filter(Boolean).map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </main>
  );
}
