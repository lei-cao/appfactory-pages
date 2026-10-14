import Image from "next/image";
import type { CSSProperties } from "react";
import { getApp, localized } from "@/content/apps";
import type { Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { COPY, FOUND_PICTURES } from "./copy";
import { TrayGame } from "./tray-game";

const SLUG = "tile-trio";
const A = (f: string) => `/apps/tile-trio/${f}`;

/** Store-screen order on the page; files are the live App Store set (v4). */
const STORE_FILES = [
  "store-01-hook.webp",
  "store-02-countdown.webp",
  "store-03-big-board.webp",
  "store-04-tea-house.webp",
  "store-05-master-rush.webp",
  "store-06-daily.webp",
  "store-07-revive.webp",
];

/** The four twist sheets: content feature index → the picture that shows it. */
const TWISTS: { feature: number; src: string; w: number; h: number; pos: string }[] = [
  { feature: 1, src: A("store-03-big-board.webp"), w: 860, h: 1869, pos: "50% 62%" },
  { feature: 3, src: A("shot-countdown.webp"), w: 640, h: 1385, pos: "50% 40%" },
  { feature: 4, src: A("shot-cracked.webp"), w: 640, h: 1385, pos: "50% 88%" },
  { feature: 5, src: A("store-05-master-rush.webp"), w: 860, h: 1869, pos: "50% 55%" },
];

/** Porcelain Trio's home page: the page is a stack of porcelain-white folders. */
export function TileTrioLanding({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const c = COPY[locale];
  const credits = app.credits;
  const [metBowl, aicBowl] = FOUND_PICTURES;
  const contact = app.contactEmail ?? CONTACT_EMAIL;

  return (
    <main className="tt-main">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />

      {/* Hero: the name, one sentence, and the folder stack */}
      <section className="tt-hero" aria-labelledby="tt-title">
        <div className="tt-hero__words">
          <h1 id="tt-title" className="tt-display">
            {loc.name}
          </h1>
          <p className="tt-hero__line">{c.hero}</p>
        </div>
        <nav className="tt-folders" aria-label={loc.name}>
          <a href="#inside" className="tt-folder tt-folder--inside">
            <span className="tt-tab">{c.tabs.inside}</span>
          </a>
          <a href="#screens" className="tt-folder tt-folder--screens">
            <span className="tt-tab">{c.tabs.screens}</span>
          </a>
          <a href="#twists" className="tt-folder tt-folder--twists">
            <span className="tt-tab">{c.tabs.twists}</span>
          </a>
          <a href="#tea-house" className="tt-folder tt-folder--house">
            <span className="tt-tab">{c.tabs.house}</span>
          </a>
        </nav>
      </section>

      {/* The front folder: the action, then the playable tray */}
      <section id="play" className="tt-front" aria-labelledby="play-title">
        <div className="tt-front__sheet">
          <span className="tt-tab tt-tab--front" aria-hidden>
            {c.tabs.play}
          </span>
          <div className="tt-front__top">
            {app.appStoreUrl && (
              <a
                href={app.appStoreUrl}
                data-app={SLUG}
                className="tt-btn"
                aria-label={c.appStoreLabel}
              >
                {c.appStore}
              </a>
            )}
            <p className="tt-front__note">{loc.statusNote}</p>
          </div>
          <TrayGame
            copy={c.play}
            appStoreUrl={app.appStoreUrl}
            appStoreLabel={c.appStoreLabel}
            appStoreText={c.appStore}
          />
        </div>
      </section>

      {/* The tea house: index of rooms, each brings up its picture */}
      <section id="tea-house" className="tt-house" aria-labelledby="house-title">
        <div className="tt-house__head" data-reveal>
          <h2 id="house-title" className="tt-head tt-r">
            {c.house.title}
          </h2>
          <p className="tt-lead tt-r" style={{ "--i": 1 } as CSSProperties}>
            {c.house.intro}
          </p>
        </div>
        <ul className="tt-index" data-reveal>
          {c.house.rooms.map((room, i) => (
            <li key={room.key} className="tt-index__row">
              {/* The reveal moves the words only: a transform on the row
                  would make it the frame its picture is placed in. */}
              <div className="tt-index__words tt-r" style={{ "--i": i } as CSSProperties}>
                <h3 className="tt-index__name">{room.name}</h3>
                <p className="tt-index__line">{room.line}</p>
              </div>
              <Image
                src={A(`room-${room.key}-6.webp`)}
                alt={room.alt}
                width={900}
                height={1350}
                sizes="(min-width: 900px) 34vw, 100vw"
                className="tt-index__img"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Twists: stacking colour sheets */}
      <section id="twists" className="tt-twists" aria-labelledby="twists-title">
        <h2 id="twists-title" className="tt-head tt-twists__title" data-reveal>
          <span className="tt-r">{c.twists.title}</span>
        </h2>
        <div className="tt-sheets">
          {TWISTS.map((t, i) => {
            const f = loc.features[t.feature];
            return (
              <article
                key={t.src}
                className="tt-sheet"
                style={{ "--n": i } as CSSProperties}
                data-reveal
              >
                <h3 className="tt-sheet__name tt-r">{f.title}</h3>
                <p className="tt-sheet__body tt-r" style={{ "--i": 1 } as CSSProperties}>
                  {f.body}
                </p>
                <div className="tt-sheet__pic tt-r" style={{ "--i": 2 } as CSSProperties}>
                  <Image
                    src={t.src}
                    alt={c.twists.alts[i]}
                    width={t.w}
                    height={t.h}
                    sizes="(min-width: 900px) 50vw, 100vw"
                    style={{ objectPosition: t.pos }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Screens: the App Store preview and the seven store screens */}
      <section id="screens" className="tt-screens" aria-labelledby="screens-title">
        <h2 id="screens-title" className="tt-head" data-reveal>
          <span className="tt-r">{c.screens.title}</span>
        </h2>
        <ul className="tt-gallery" data-reveal>
          <li className="tt-print tt-r" style={{ "--i": 0 } as CSSProperties}>
            <div className="tt-print__pic">
              <video
                className="tt-loop"
                src={A("preview.mp4")}
                poster={A("preview-poster.webp")}
                width={540}
                height={1170}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                aria-label={c.screens.video.label}
              />
            </div>
            <Strip values={c.screens.video.values} caption={c.screens.video.caption} />
          </li>
          {STORE_FILES.map((file, i) => (
            <li key={file} className="tt-print tt-r" style={{ "--i": i + 1 } as CSSProperties}>
              <div className="tt-print__pic">
                <Image
                  src={A(file)}
                  alt={loc.screenshots[i]?.alt ?? ""}
                  width={860}
                  height={1869}
                  sizes="(min-width: 900px) 24vw, 48vw"
                />
              </div>
              <Strip values={c.screens.strips[i].values} caption={c.screens.strips[i].caption} />
            </li>
          ))}
        </ul>
      </section>

      {/* What's inside: the tea house menu, on real blue-and-white porcelain */}
      <section id="inside" className="tt-inside" aria-labelledby="inside-title">
        <Image
          src={metBowl.src}
          alt={c.inside.photoAlt}
          width={metBowl.width}
          height={metBowl.height}
          sizes="100vw"
          className="tt-inside__photo"
        />
        <div className="tt-menu" data-reveal>
          <h2 id="inside-title" className="tt-menu__title tt-r">
            {c.inside.title}
          </h2>
          <p className="tt-menu__note tt-r" style={{ "--i": 1 } as CSSProperties}>
            {c.inside.note}
          </p>
          {c.inside.groups.map((g, gi) => (
            <div key={g.name} className="tt-menu__group tt-r" style={{ "--i": gi + 1 } as CSSProperties}>
              <h3 className="tt-menu__group-name">{g.name}</h3>
              <dl>
                {g.items.map((item) => (
                  <div key={item.name} className="tt-menu__item">
                    <dt>{item.name}</dt>
                    <dd className="tt-menu__value">{item.value}</dd>
                    {item.note && <dd className="tt-menu__desc">{item.note}</dd>}
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <p className="tt-menu__closing">
            {c.inside.closing[0]}
            <br />
            {c.inside.closing[1]}
          </p>
        </div>
      </section>

      {/* Questions: answers as reading text */}
      <section id="questions" className="tt-faq" aria-labelledby="faq-title">
        <div className="tt-faq__side" data-reveal>
          <h2 id="faq-title" className="tt-head tt-r">
            {c.faqTitle}
          </h2>
          <Image
            src={aicBowl.src}
            alt={c.faqPhotoAlt}
            width={aicBowl.width}
            height={aicBowl.height}
            sizes="(min-width: 900px) 22vw, 100vw"
            className="tt-faq__plate tt-r"
            style={{ "--i": 1 } as CSSProperties}
          />
        </div>
        <div className="tt-faq__text">
          {loc.faqs.map((f) => (
            <p key={f.q}>
              <strong>{f.q}</strong> {f.a}
            </p>
          ))}
        </div>
      </section>

      {/* Music and sound credits (licence condition) and picture credits */}
      {credits && (
        <section id="credits" className="tt-credits" aria-labelledby="credits-title">
          <h2 id="credits-title" className="tt-head">
            {c.credits.title}
          </h2>
          <div className="tt-credits__text">
            <p>{c.credits.intro}</p>
            <h3>{c.credits.music}</h3>
            <p>
              Music: もみじば (Momijiba) —{" "}
              <a href={credits.musicUrl}>MOMIZizm MUSiC</a>{" "}
              <a href={credits.musicUrl} className="tt-break">
                {credits.musicUrl}
              </a>
            </p>
            {credits.tracks.length > 0 && (
              <>
                <h3>{c.credits.tracks}</h3>
                <ul className="tt-credits__tracks">
                  {credits.tracks.map((t) => (
                    <li key={t.url}>
                      <a href={t.url}>“{t.title}”</a> {t.style}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h3>{c.credits.sfx}</h3>
            <p>
              <a href={credits.sfx.url}>{credits.sfx.line}</a>
            </p>
            <h3>{c.credits.pictures}</h3>
            <p>{c.credits.picturesIntro}</p>
            <ul className="tt-credits__tracks">
              {FOUND_PICTURES.map((p) => (
                <li key={p.url}>
                  <a href={p.url}>“{p.title}”</a> {p.maker}, {p.source}, {p.licence}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Honest about ads: a letter on a porcelain sheet, with a tear-off strip */}
      {loc.trust && (
        <section id="ads" className="tt-letter-ground" aria-labelledby="ads-title">
          <div className="tt-letter" data-reveal>
            <Image src={app.icon!} alt="" width={44} height={44} className="tt-letter__icon tt-r" />
            <h2 id="ads-title" className="tt-letter__title tt-r" style={{ "--i": 1 } as CSSProperties}>
              {loc.trust.title}
            </h2>
            {c.letter.paragraphs.map((p, i) => (
              <p key={i} className="tt-r" style={{ "--i": i + 2 } as CSSProperties}>
                {p}
              </p>
            ))}
            <p className="tt-letter__sign">{c.letter.signoff}</p>
            <p className="tt-letter__role">{c.letter.role}</p>
          </div>
          <div className="tt-stub">
            <a href={`mailto:${contact}`} className="tt-stub__mail">
              {contact}
            </a>
            <a href={`mailto:${contact}`} className="tt-btn tt-btn--ink">
              {c.letter.write}
            </a>
          </div>
        </section>
      )}
    </main>
  );
}

function Strip({ values, caption }: { values: string[]; caption: string }) {
  return (
    <div className="tt-print__strip">
      <p className="tt-print__values">
        {values.map((v) => (
          <span key={v}>{v}</span>
        ))}
      </p>
      <p className="tt-print__caption">{caption}</p>
    </div>
  );
}
