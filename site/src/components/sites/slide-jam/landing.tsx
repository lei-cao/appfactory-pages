import Image from "next/image";
import type { CSSProperties } from "react";
import { getApp, localized } from "@/content/apps";
import type { Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { COPY } from "./copy";
import { LEVEL, type Block, type Colour } from "./level";
import { Pace } from "./pace";
import { PlayTray } from "./play-tray";
import { Mark, Tray } from "./tray";
import { Twists } from "./twists";

const SLUG = "slide-jam";
const pic = (p: string) => `/apps/${SLUG}/${p}`;
const i = (n: number) => ({ "--i": n }) as CSSProperties;

/** Chapter grounds: each section is one block colour. */
const G = {
  sky: "#bfe3f7",
  yellow: "#ffd84a",
  pink: "#f487b6",
  sand: "#f6e6c2",
  navy: "#1e2860",
  mint: "#9fe3c3",
  orange: "#ffae5e",
} as const;

/** The four "how it plays" trays: the same level, further along each time. */
const without = (...ids: string[]): Block[] => LEVEL.blocks.filter((b) => !ids.includes(b.id));
const STAGES: Block[][] = [
  LEVEL.blocks,
  without("navy", "red"),
  without("navy", "red", "mint", "pink"),
  [],
];
const HOW_FIELDS: { ground: string; dark?: boolean }[] = [
  { ground: G.yellow },
  { ground: G.pink },
  { ground: G.sand },
  { ground: G.navy, dark: true },
];

export function SlideJamLanding({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const c = COPY[locale];
  const f = loc.features;
  const shots = Object.fromEntries(loc.screenshots.map((s) => [s.src.split("/").pop()!.replace(".webp", ""), s]));

  const swatches: { href: string; label: string; ground: string; colour: Colour; dark?: boolean }[] = [
    { href: "#how", label: c.nav.how, ground: G.yellow, colour: "yellow" },
    { href: "#twists", label: c.nav.twists, ground: G.mint, colour: "mint" },
    { href: "#rules", label: c.nav.rules, ground: G.sand, colour: "orange" },
    { href: "#workshop", label: c.nav.workshop, ground: G.orange, colour: "red" },
    { href: "#faq", label: c.nav.faq, ground: G.navy, colour: "navy", dark: true },
  ];

  return (
    <main className="sj-landing">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />

      {/* Hero: the name, the one action and a tray you can play. */}
      <section className="sj-hero" data-ground={G.sky} data-ink="dark" aria-labelledby="sj-title">
        <div className="sj-hero__panel">
          <div className="sj-hero__text">
            <div className="grid gap-5">
              <h1 id="sj-title" className="sj-h1 sj-rise">
                <span>Glossy</span> <span>Blocks</span>
              </h1>
              <p className="sj-lead sj-rise" style={i(1)}>
                {loc.tagline}
              </p>
              <p className="sj-rise" style={i(2)}>
                {loc.oneLiner}
              </p>
            </div>
            <div className="sj-hero__cta sj-rise" style={i(3)}>
              {app.appStoreUrl && (
                <a className="sj-btn" href={app.appStoreUrl} data-app={SLUG}>
                  {c.hero.cta}
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                    <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              <p className="sj-small">{loc.statusNote}</p>
            </div>
          </div>
          <PlayTray t={c.tray} label={c.hero.trayLabel} />
        </div>
        <nav className="sj-swatches" aria-label={loc.name}>
          {swatches.map((s) => (
            <a key={s.href} href={s.href} style={{ background: s.ground }} data-dark={s.dark ? "" : undefined}>
              <svg viewBox="-22 -22 44 44" width="30" height="30" aria-hidden>
                <Mark colour={s.colour} x={0} y={0} fill="currentColor" />
              </svg>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>
      </section>

      {/* How it plays: one tray, four fields, further along each time. */}
      <section id="how" className="sj-how" aria-labelledby="sj-how">
        {HOW_FIELDS.map((field, n) => (
          <div
            key={n}
            className="sj-how__field"
            style={{ background: field.ground }}
            data-ground={field.ground}
            data-ink={field.dark ? "light" : "dark"}
            data-dark={field.dark ? "" : undefined}
          >
            {n === 0 ? (
              <h2 id="sj-how" className="sj-rise">
                {c.how.title}
              </h2>
            ) : (
              <span aria-hidden />
            )}
            <div className="sj-how__card sj-pop" style={i(n)}>
              <Tray level={LEVEL} blocks={STAGES[n]} label={c.how.trayLabels[n]} />
              {n === 3 && (
                <span className="sj-how__stars" aria-hidden>
                  <span>{c.how.cleared}</span>
                  <svg viewBox="-70 -20 140 40" width="96" height="28">
                    {[-44, 0, 44].map((x) => (
                      <Mark key={x} colour="orange" x={x} y={0} scale={1.2} fill="#ffb21f" />
                    ))}
                  </svg>
                </span>
              )}
            </div>
            <p className="sj-rise" style={i(n + 1)}>
              {c.how.steps[n]}
            </p>
          </div>
        ))}
      </section>

      {/* Twists: an index of names beside the real store screenshot. */}
      <section id="twists" className="sj-twists" data-ground={G.mint} data-ink="dark">
        <Twists
          title={c.twists.title}
          items={c.twists.items.map((it) => ({ ...it, src: shots[it.key].src, alt: shots[it.key].alt }))}
        />
      </section>

      {/* Fair rules: close-ups of the real interface on a tile board. */}
      <section id="rules" className="sj-rules" data-ground={G.sand} data-ink="dark" aria-labelledby="sj-rules">
        <div className="sj-board">
          <div className="sj-tile sj-tile--head sj-rise" style={{ background: G.yellow }}>
            <h2 id="sj-rules" className="sj-head">
              {c.rules.title}
            </h2>
          </div>
          <Tile cls="sj-tile--wide" ground={G.sky} src="close/goal.webp" alt={c.rules.alts.goal} w={773} h={220} title={f[1].title} body={f[1].body} n={1} pos="center" fit="contain" />
          <Tile cls="sj-tile--big" ground={G.navy} dark src="close/undo.webp" alt={c.rules.alts.undo} w={547} h={320} title={f[0].title} body={f[0].body} n={0} pos="right bottom" />
          <Tile cls="sj-tile--tall" ground={G.pink} src="close/bomb.webp" alt={c.rules.alts.bomb} w={440} h={560} title={f[5].title} body={f[5].body} n={1} pos="center top" />
          <Tile cls="sj-tile--tall" ground={G.mint} src="close/key.webp" alt={c.rules.alts.key} w={420} h={530} title={f[4].title} body={f[4].body} n={2} pos="left center" />
          <Tile cls="sj-tile--wide" ground={G.orange} src="close/shapes.webp" alt={c.rules.alts.shapes} w={780} h={460} title={f[3].title} body={f[3].body} n={0} pos="center" />
          <Tile ground={G.yellow} src="close/boosters.webp" alt={c.rules.alts.boosters} w={640} h={260} title={c.rules.boosters.name} body={c.rules.boosters.text} n={1} pos="left center" />
          <div className="sj-tile sj-rise" style={{ ...i(2), background: G.sky }}>
            <div className="sj-tile__marks" aria-hidden>
              {(["navy", "sky", "red", "mint", "pink", "yellow"] as Colour[]).map((col) => (
                <svg key={col} viewBox="-22 -22 44 44">
                  <Mark colour={col} x={0} y={0} />
                </svg>
              ))}
            </div>
            <div className="sj-tile__cap">
              <h3>{c.rules.symbols.name}</h3>
              <p>{c.rules.symbols.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Toy Workshop: the game's own room art, each with its label strip. */}
      <section id="workshop" className="sj-workshop" data-ground={G.orange} data-ink="dark" aria-labelledby="sj-workshop">
        <div className="sj-workshop__intro">
          <h2 id="sj-workshop" className="sj-rise">
            {c.workshop.title}
          </h2>
          <p className="sj-rise" style={i(1)}>
            {c.workshop.text}
          </p>
        </div>
        <ul className="sj-rooms">
          {c.workshop.rooms.map((room, n) => {
            const strip = [G.yellow, G.sky, G.mint, G.pink, G.navy][n];
            return (
              <li key={room.key} className="sj-rise" style={i(n)}>
                <figure className="sj-room">
                  <div className="sj-room__pic">
                    <Image
                      src={pic(`workshop/${room.key}.webp`)}
                      alt={room.alt}
                      width={800}
                      height={1000}
                      sizes="(min-width: 900px) 20vw, (min-width: 500px) 50vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                  <figcaption style={{ background: strip }} data-dark={n === 4 ? "" : undefined}>
                    {room.name}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Pace: how long 720 levels last at your speed. */}
      <section id="pace" className="sj-pace" data-ground={G.yellow} data-ink="dark" aria-labelledby="sj-pace">
        <h2 id="sj-pace" className="sj-rise">
          {c.pace.question}
        </h2>
        <Pace label={c.pace.label} unit={c.pace.unit} />
        <p className="sj-pace__working sj-rise" style={i(3)}>
          {c.pace.working}
        </p>
      </section>

      {/* Questions, with the ads promise beside them. */}
      <section id="faq" className="sj-faq" data-ground={G.navy} data-ink="light" aria-labelledby="sj-faq">
        <div className="sj-faq__side">
          <h2 id="sj-faq" className="sj-rise">
            {c.faq.title}
          </h2>
          {loc.trust && (
            <div className="sj-trust sj-rise" style={i(1)}>
              <h3>{loc.trust.title}</h3>
              <p>{loc.trust.body}</p>
            </div>
          )}
        </div>
        <div className="sj-faq__list">
          {loc.faqs.map((q, n) => (
            <details key={q.q} className="sj-q sj-rise" name="sj-faq" style={i(Math.min(n, 6))}>
              <summary>
                <span>{q.q}</span>
                <span className="sj-q__plus" aria-hidden />
              </summary>
              <p>{q.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Music and sound credits: a licence condition, always on the page. */}
      {app.credits && (
        <section id="credits" className="sj-credits" data-ground={G.navy} data-ink="light" aria-labelledby="sj-credits">
          <div className="sj-credits__tile">
            <div>
              <h2 id="sj-credits">{c.credits.title}</h2>
              <p className="mt-3">{c.credits.intro}</p>
            </div>
            <h3>{c.credits.music}</h3>
            <p>
              Music: もみじば (Momijiba) — <a href={app.credits.musicUrl}>MOMIZizm MUSiC</a>{" "}
              <a href={app.credits.musicUrl}>{app.credits.musicUrl}</a>
            </p>
            {app.credits.tracks.length > 0 && (
              <>
                <h3>{c.credits.tracks}</h3>
                <ul>
                  {app.credits.tracks.map((t) => (
                    <li key={t.url}>
                      {t.style} <a href={t.url}>“{t.title}”</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h3>{c.credits.sfx}</h3>
            <p>
              <a href={app.credits.sfx.url}>{app.credits.sfx.line}</a>
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

function Tile({
  cls = "",
  ground,
  dark,
  src,
  alt,
  w,
  h,
  title,
  body,
  n,
  pos,
  fit,
}: {
  cls?: string;
  ground: string;
  dark?: boolean;
  src: string;
  alt: string;
  w: number;
  h: number;
  title: string;
  body: string;
  n: number;
  pos: string;
  fit?: "contain";
}) {
  return (
    <div className={`sj-tile sj-rise ${cls}`} style={{ ...i(n), background: ground }} data-dark={dark ? "" : undefined}>
      <div className="sj-tile__pic" data-fit={fit}>
        <Image
          src={pic(src)}
          alt={alt}
          width={w}
          height={h}
          sizes="(min-width: 900px) 50vw, 100vw"
          loading="lazy"
          style={{ objectPosition: pos }}
        />
      </div>
      <div className="sj-tile__cap">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
