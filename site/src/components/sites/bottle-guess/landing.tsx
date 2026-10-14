import Image from "next/image";
import type { CSSProperties } from "react";
import { getApp, localized } from "@/content/apps";
import type { Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { copyFor, flavoursFor, type Flavour } from "./copy";
import { Puzzle } from "./puzzle";

const SLUG = "bottle-guess";
const IMG = "/apps/bottle-guess";

const HERO_ALT: Record<Locale, string> = {
  en: "Three Can Swap cans, Grape, Cola and Lemon, on a table; the Cola can is lifted mid-swap",
  "zh-cn": "Can Swap 的三个罐子：葡萄、可乐和柠檬放在桌上，可乐罐正被拿起交换",
  "zh-tw": "Can Swap 的三個罐子：葡萄、可樂和檸檬放在桌上，可樂罐正被拿起交換",
};

function Stars() {
  return (
    <svg viewBox="0 0 66 20" width="66" height="20" aria-hidden>
      {[0, 22, 44].map((x) => (
        <path
          key={x}
          transform={`translate(${x} 0)`}
          fill="currentColor"
          d="M10 1l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 14.5 4.6 17.5l1.2-6L1.3 7.3l6.1-.7z"
        />
      ))}
    </svg>
  );
}

const rise = (i: number) => ({ "data-rise": "", style: { "--i": i } as CSSProperties });

/** One can, drawn flat in the game's colours with its strip label. */
function Can({ f, size = "card", lifted }: { f: Flavour; size?: "card" | "tile"; lifted?: boolean }) {
  return (
    <span className={`cw-can cw-can--${size}`} data-flavour={f.id} data-lifted={lifted || undefined}>
      <span className="cw-can__label">{f.code}</span>
    </span>
  );
}

/** The same cabinet card, one step further along in each field. */
function StepCard({
  order,
  lit,
  count,
  lifted,
  flavours,
}: {
  order: number[];
  lit: number;
  count: string;
  lifted?: number[];
  flavours: Flavour[];
}) {
  return (
    <div className="cw-card" data-ui>
      <div className="cw-lamps cw-lamps--card" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} data-on={i < lit || undefined} />
        ))}
      </div>
      <p className="cw-card__count">{count}</p>
      <div className="cw-card__row">
        {order.map((f, i) => (
          <Can key={i} f={flavours[f]} lifted={lifted?.includes(i)} />
        ))}
      </div>
    </div>
  );
}

export function CanSwapLanding({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const t = copyFor(locale);
  const flavours = flavoursFor(locale);
  const pic = (name: string) => {
    const s = loc.screenshots.find((x) => x.src === `${IMG}/${name}.webp`)!;
    return s;
  };
  const feature = (i: number) => loc.features[i];

  // The secret in the strip is Lemon, Cola, Peach, Silver (1, 0, 3, 2).
  const steps = [
    { order: [0, 1, 2, 3], lit: 0, lifted: [] },
    { order: [1, 0, 2, 3], lit: 0, lifted: [0, 1] },
    { order: [1, 0, 2, 3], lit: 2, lifted: [] },
    { order: [1, 0, 3, 2], lit: 4, lifted: [] },
  ];
  const fields = ["cola", "lemon", "night", "peach"];

  const tiles: {
    key: string;
    feature: number;
    kind: "img" | "ui";
    img?: { name: string; w: number; h: number };
    ui?: "challenge" | "free" | "tools";
    field: string;
  }[] = [
    { key: "journey", feature: 0, kind: "img", img: { name: "home", w: 430, h: 765 }, field: "lemon" },
    { key: "challenge", feature: 1, kind: "ui", ui: "challenge", field: "cola" },
    { key: "free", feature: 2, kind: "ui", ui: "free", field: "silver" },
    { key: "party", feature: 3, kind: "img", img: { name: "party", w: 430, h: 360 }, field: "berry" },
    { key: "daily", feature: 4, kind: "img", img: { name: "daily", w: 430, h: 490 }, field: "peach" },
    { key: "coach", feature: 5, kind: "img", img: { name: "coach", w: 430, h: 440 }, field: "bone" },
    { key: "tools", feature: 6, kind: "ui", ui: "tools", field: "night" },
  ];

  return (
    <main className="cw-main">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />

      {/* Hero: the name on the bone ground, the cans inside a giant lid. */}
      <section className="cw-hero">
        <div className="cw-hero__text">
          <h1 className="cw-hero__title">{loc.name}</h1>
          <p className="cw-hero__tagline">{loc.tagline}</p>
          <p className="cw-hero__lede">{loc.oneLiner}</p>
          <div className="cw-hero__act">
            <a href="#play" className="cw-button">
              {t.play}
            </a>
            <p className="cw-hero__status">{t.status}</p>
          </div>
        </div>
        <div className="cw-hero__disc">
          <Image
            src={`${IMG}/icon.webp`}
            alt={HERO_ALT[locale]}
            width={1024}
            height={1024}
            priority
            sizes="(min-width: 768px) 70vw, 130vw"
          />
        </div>
      </section>

      {/* How it plays: one cabinet card, further along in each field. */}
      <section className="cw-how" aria-labelledby="cw-how-title">
        {steps.map((s, i) => (
          <div key={i} className="cw-how__field" data-field={fields[i]}>
            {i === 0 && (
              <h2 id="cw-how-title" className="cw-how__title" {...rise(0)}>
                {t.howTitle}
              </h2>
            )}
            <div className="cw-how__card" {...rise(i + 1)}>
              <StepCard
                order={s.order}
                lit={s.lit}
                count={t.stepCount[i]}
                lifted={s.lifted}
                flavours={flavours}
              />
            </div>
            <p className="cw-how__clause" {...rise(i + 2)}>
              {t.steps[i]}
            </p>
          </div>
        ))}
      </section>

      {/* The live puzzle: your row on the dark field, the bell's answer on the light. */}
      <section id="play" className="cw-showcase">
        <Puzzle
          locale={locale}
          rowAside={
            <figure className="cw-play__figure" {...rise(1)}>
              <Image
                src={pic("cabinet").src}
                alt={pic("cabinet").alt}
                width={430}
                height={404}
                loading="lazy"
                sizes="(min-width: 768px) 360px, 80vw"
              />
              <figcaption>{t.gameRow}</figcaption>
            </figure>
          }
          bellAside={
            <figure className="cw-play__figure" {...rise(2)}>
              <Image
                src={pic("history").src}
                alt={pic("history").alt}
                width={430}
                height={345}
                loading="lazy"
                sizes="(min-width: 768px) 360px, 80vw"
              />
              <figcaption>{t.historyCaption}</figcaption>
            </figure>
          }
        />
      </section>

      {/* Modes: close-ups on a board. */}
      <section className="cw-modes" aria-labelledby="cw-modes-title">
        <div className="cw-board">
          <div className="cw-tile cw-tile--head" data-field="cola">
            <h2 id="cw-modes-title" className="cw-modes__title" {...rise(0)}>
              {t.modesTitle}
            </h2>
          </div>
          {tiles.map((tile, i) => {
            const f = feature(tile.feature);
            return (
              <article
                key={tile.key}
                className={`cw-tile cw-tile--${tile.key}`}
                data-field={tile.field}
                {...rise(i + 1)}
              >
                {tile.kind === "img" && tile.img && (
                  <div className="cw-tile__pic">
                    <Image
                      src={pic(tile.img.name).src}
                      alt={pic(tile.img.name).alt}
                      width={tile.img.w}
                      height={tile.img.h}
                      loading="lazy"
                      sizes="(min-width: 768px) 30vw, 60vw"
                    />
                  </div>
                )}
                {tile.ui === "challenge" && (
                  <div className="cw-ui cw-ui--level" data-ui aria-hidden>
                    <span className="cw-ui__num">15</span>
                    <span className="cw-ui__sub">5 cans</span>
                    <span className="cw-ui__stars">
                      <Stars />
                    </span>
                    <span className="cw-ui__flag">CHALLENGE</span>
                  </div>
                )}
                {tile.ui === "free" && (
                  <div className="cw-ui cw-ui--stepper" data-ui aria-hidden>
                    <span className="cw-ui__step">−</span>
                    <span className="cw-ui__value">
                      6 <Can f={flavours[3]} size="tile" />
                    </span>
                    <span className="cw-ui__step">+</span>
                  </div>
                )}
                {tile.ui === "tools" && (
                  <div className="cw-ui cw-ui--tools" data-ui aria-hidden>
                    <span>
                      <b>Hint</b> 4 free
                    </span>
                    <span>
                      <b>Peek</b> 2 free
                    </span>
                    <span>
                      <b>Lock</b> 1 free
                    </span>
                  </div>
                )}
                <div className="cw-tile__text">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Questions: a band per question, every answer open. */}
      <section className="cw-faq" aria-labelledby="cw-faq-title">
        <div className="cw-faq__head">
          <h2 id="cw-faq-title" {...rise(0)}>
            {t.faqTitle}
          </h2>
        </div>
        {loc.trust && (
          <div className="cw-faq__band">
            <h3 {...rise(0)}>{loc.trust.title}</h3>
            <p {...rise(1)}>{loc.trust.body}</p>
          </div>
        )}
        {loc.faqs.map((f) => (
          <div key={f.q} className="cw-faq__band">
            <h3 {...rise(0)}>{f.q}</h3>
            <p {...rise(1)}>{f.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
