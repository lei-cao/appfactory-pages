// Landing page for poker-night.appfactory.sg (site redesign 2026-10-15).
//
// Direction: the sentence is the layout. The h1 is one sentence with the
// app's own results card set inside it where a word would be ("Poker Night,
// [Alex +$25.00 · Settled] settled."), across two fields (cream above, the
// app's midnight navy below). Every later section repeats that grammar at a
// smaller scale: a short statement with its proof (screens, footage, the live
// settle-up). Each section is one full-bleed field; the fixed header takes
// the colour of the field under it (components/poker-night/motion.tsx).
//
// Kept from v2.0 (owner decisions, 2026-10-11): the lead story video in the
// hero; every approved video once, nothing downloaded until play; the Study
// section; VideoObject JSON-LD for each video and the FAQPage block.
// Copy: content/poker-night-landing.ts (+ FAQ and trust in poker-night.ts).
// Styles: components/sites/poker-night/site.css.

import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { pokerNightLanding, pnVideoFiles, type PnShot, type PnVideoCopy } from "@/content/poker-night-landing";
import { PnVideo } from "@/components/poker-night/video";
import { PnSettle } from "@/components/poker-night/settle";
import { isGuideLocale } from "@/lib/guide";
import type { Locale } from "@/lib/i18n";
import { localePrefix } from "@/lib/i18n";
import { faqPageLd, JsonLd, organizationLd, softwareApplicationLd, videoObjectLd } from "@/lib/seo";

const UPLOAD_DATE = "2026-10-11";
const SLUG = "poker-night";
const SHOT = { width: 720, height: 1564 };
const THINKING: Record<Locale, string> = { en: "/en", "zh-cn": "/zh-CN", "zh-tw": "/zh-TW" };
const UTM = "utm_source=poker-night.appfactory.sg&utm_medium=referral&utm_campaign=crosspromo";

function clock(s: number) {
  const t = Math.round(s);
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
}

function Shot({ shot, className, sizes }: { shot: PnShot; className?: string; sizes: string }) {
  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={SHOT.width}
      height={SHOT.height}
      sizes={sizes}
      loading="lazy"
      className={`pn-shot ${className ?? ""}`}
    />
  );
}

function Film({
  item,
  locale,
  playLabel,
  layout = "auto",
  className = "",
  level = 3,
}: {
  level?: 3 | 4;
  item: PnVideoCopy;
  locale: Locale;
  playLabel: string;
  layout?: "auto" | "tall";
  className?: string;
}) {
  const f = pnVideoFiles(item.id, locale);
  const dur = (f.h ?? f.v)!.duration;
  const H = level === 3 ? "h3" : "h4";
  return (
    <figure className={`pn-film ${className}`}>
      <PnVideo v={f.v} h={layout === "tall" ? undefined : f.h} label={item.title} playLabel={playLabel} />
      <figcaption>
        <H className="pn-film__title">{item.title}</H>
        <p>
          <span className="pn-film__time">{clock(dur)}</span> {item.body}
        </p>
      </figcaption>
    </figure>
  );
}

export function PokerNightLandingPage({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const c = pokerNightLanding[locale];
  const hero = pnVideoFiles("pn1-settle", locale).v!;
  const base = `${localePrefix(locale)}/apps/${SLUG}`;
  const hasGuide = isGuideLocale(locale);
  const store = app.appStoreUrl;
  const tiltfree = app.studioLink?.urls[locale] ?? app.studioLink?.urls.en ?? "https://www.pokertools.ai";

  // Every video on the page, once, for VideoObject JSON-LD.
  const heroItem: PnVideoCopy = { id: "pn1-settle", title: c.hero.videoTitle, body: c.hero.videoBody };
  const allVideos: PnVideoCopy[] = [heroItem, c.study.video, ...c.previews.items, ...c.watch.cuts, ...c.watch.stories];
  const videoLd = allVideos.map((it) => {
    const f = pnVideoFiles(it.id, locale);
    const main = (f.h ?? f.v)!;
    return videoObjectLd(SLUG, locale, {
      name: it.title,
      description: it.body,
      src: main.src,
      poster: main.poster,
      duration: main.duration,
      uploadDate: UPLOAD_DATE,
    });
  });

  const [lead, ...cuts] = c.watch.cuts;
  const [walkthrough, ...shortStories] = c.watch.stories;

  return (
    <main className="pn-landing">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd(), faqPageLd(loc, locale), ...videoLd]} />

      {/* Hero: one sentence across two fields, the results card inside it */}
      <section className="pn-hero" data-field="paper" aria-labelledby="pn-h1">
        <h1 id="pn-h1" className="pn-hero__h1">
          <span className="pn-hero__line">{c.hero.lead}</span>{" "}
          <span className="pn-hero__line pn-hero__line--2" data-field="night">
            <Image
              src={c.hero.slot.src}
              alt=""
              width={900}
              height={345}
              priority
              sizes="(max-width: 640px) 40vw, 30vw"
              className="pn-hero__slot"
            />{" "}
            {c.hero.tail}
          </span>
        </h1>
      </section>
      <section className="pn-herofoot" data-field="night" aria-label={c.hero.videoTitle}>
        <div className="pn-herofoot__text">
          <p className="pn-lead">{c.hero.body}</p>
          {store && (
            <a href={store} data-app={SLUG} className="pn-button">
              {c.hero.cta}
            </a>
          )}
          <p className="pn-small">{c.hero.note}</p>
        </div>
        <div className="pn-herofoot__video">
          <PnVideo
            v={hero}
            mode="hero"
            label={c.hero.videoLabel}
            soundOn={c.hero.soundOn}
            soundOff={c.hero.soundOff}
            playLabel={c.play}
          />
          <p className="pn-small">
            {c.hero.videoTitle} · {clock(hero.duration)}
          </p>
        </div>
      </section>

      {/* The night as one bar: each stage as wide as it really takes */}
      <section id="night" className="pn-night" data-field="night" aria-labelledby="pn-night">
        <h2 id="pn-night" className="pn-head">
          {c.night.title}
        </h2>
        <ol className="pn-bar" data-ui data-reveal>
          {c.night.stages.map((st, i) => (
            <li key={st.name} className={`pn-bar__seg pn-bar__seg--${i + 1}`} style={{ flexGrow: st.grow }}>
              <div className="pn-bar__block">
                <span className="pn-bar__time">{st.time}</span>
                <span className="pn-bar__name">{st.name}</span>
              </div>
              <p className="pn-bar__clause">{st.clause}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* The live thing: type the night, read the settle-up */}
      <section id="settle" className="pn-live" data-field="paper" aria-labelledby="pn-live">
        <div className="pn-live__head" data-reveal>
          <h2 id="pn-live" className="pn-head">
            {c.live.title}
          </h2>
          <p className="pn-lead">{c.live.intro}</p>
        </div>
        <PnSettle copy={c.live} />
      </section>

      {/* Host: rows hung from one axis, the real screens in the margin */}
      <section id="host" className="pn-host" data-field="night" aria-labelledby="pn-host">
        <div className="pn-host__intro" data-reveal>
          <h2 id="pn-host" className="pn-head">
            {c.host.title}
          </h2>
          <p className="pn-lead">{c.host.intro}</p>
        </div>
        <div className="pn-host__rows">
          {c.host.items.map((it, i) => (
            <article key={it.title} className={`pn-row pn-row--${(i % 3) + 1}`} data-reveal>
              <div className="pn-row__text">
                <h3 className="pn-title">{it.title}</h3>
                <p>{it.body}</p>
              </div>
              <div className={`pn-row__shots pn-row__shots--${it.shots.length}`}>
                {it.shots.map((s) => (
                  <Shot key={s.src} shot={s} sizes="(max-width: 640px) 70vw, 320px" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trust: money stays between friends, with the Pay sheet as proof */}
      {loc.trust && (
        <section className="pn-trust" data-field="paper-2" aria-labelledby="pn-trust">
          <div className="pn-trust__text" data-reveal>
            <h2 id="pn-trust" className="pn-head">
              {loc.trust.title}
            </h2>
            <p className="pn-text">{loc.trust.body}</p>
          </div>
          <div className="pn-pay" data-ui aria-label={c.pay.title}>
            <p className="pn-pay__line">
              <span>{c.pay.line}</span>
              <small>{c.pay.chips}</small>
            </p>
            <p className="pn-pay__copy">{c.pay.copyLine}</p>
            <p className="pn-pay__label">{c.pay.detailsLabel}</p>
            <dl className="pn-pay__details">
              {c.pay.details.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
            <p className="pn-pay__all">{c.pay.copyAll}</p>
            <p className="pn-pay__foot">{c.pay.footnote}</p>
          </div>
        </section>
      )}

      {/* Study */}
      <section id="study" className="pn-study" data-field="paper" aria-labelledby="pn-study">
        <div className="pn-study__text">
          <div data-reveal>
            <h2 id="pn-study" className="pn-head">
              {c.study.title}
            </h2>
            <p className="pn-lead">{c.study.intro}</p>
          </div>
          <div className="pn-study__items" data-reveal>
            {c.study.items.map((f) => (
              <div key={f.title}>
                <h3 className="pn-title">{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
          {hasGuide && (
            <Link href={`${base}/guide`} className="pn-textlink">
              {c.study.guideLink}
            </Link>
          )}
        </div>
        <div className="pn-study__shots">
          {c.study.shots.map((s) => (
            <Shot key={s.src} shot={s} sizes="(max-width: 640px) 46vw, 300px" />
          ))}
        </div>
        <Film item={c.study.video} locale={locale} playLabel={c.play} className="pn-study__film" />
      </section>

      {/* App Store previews: prints dropped on the headline */}
      <section id="watch" className="pn-prints" data-field="night-2" aria-labelledby="pn-prints">
        <h2 id="pn-prints" className="pn-prints__head">
          <span>{c.previews.title[0]}</span> <span>{c.previews.title[1]}</span>
        </h2>
        {c.previews.items.map((it, i) => {
          const f = pnVideoFiles(it.id, locale);
          return (
            <figure key={it.id} className={`pn-print pn-print--${i + 1}`}>
              <PnVideo v={f.v} label={it.title} playLabel={c.play} />
              <figcaption className="pn-sr">
                {it.title}. {it.body}
              </figcaption>
            </figure>
          );
        })}
        <div className="pn-prints__note">
          <p>{c.previews.note}</p>
          <ul>
            {c.previews.items.map((it) => {
              const f = pnVideoFiles(it.id, locale).v!;
              return (
                <li key={it.id}>
                  {it.title} <span className="pn-film__time">{clock(f.duration)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Footage: the feature cuts and the narrated stories */}
      <section className="pn-watch" data-field="paper" aria-labelledby="pn-watch">
        <div className="pn-watch__intro" data-reveal>
          <h2 id="pn-watch" className="pn-head">
            {c.watch.title}
          </h2>
          <p className="pn-lead">{c.watch.intro}</p>
        </div>
        <div className="pn-watch__grid">
          <Film item={lead} locale={locale} playLabel={c.play} className="pn-watch__lead" />
          {cuts.map((it, i) => (
            <Film key={it.id} item={it} locale={locale} playLabel={c.play} className={`pn-watch__cut pn-watch__cut--${i + 1}`} />
          ))}
        </div>
        <div className="pn-watch__stories">
          <div className="pn-watch__storyhead" data-reveal>
            <h3 className="pn-title pn-title--big">{c.watch.storiesTitle}</h3>
            <p>{c.watch.storiesIntro}</p>
          </div>
          <Film item={walkthrough} locale={locale} playLabel={c.play} className="pn-watch__walk" level={4} />
          {shortStories.map((it, i) => (
            <Film
              key={it.id}
              item={it}
              locale={locale}
              playLabel={c.play}
              layout="tall"
              className={`pn-watch__story pn-watch__story--${i + 1}`}
              level={4}
            />
          ))}
        </div>
      </section>

      {/* Price: the offer as one sentence */}
      <section id="price" className="pn-price" data-field="night" aria-labelledby="pn-price">
        <h2 id="pn-price" className="pn-price__sentence">
          <span className="pn-price__line">{c.price.lead}</span>{" "}
          <span className="pn-price__line">
            {c.price.before} <span className="pn-price__amount">{c.price.amount}</span> {c.price.after}
          </span>
        </h2>
        <div className="pn-price__foot" data-reveal>
          <p className="pn-lead">{c.price.includes}</p>
          {store && (
            <a href={store} data-app={SLUG} className="pn-button">
              {c.price.cta}
            </a>
          )}
        </div>
        <div className="pn-price__lists" data-reveal>
          <div>
            <h3 className="pn-title">{c.price.free.title}</h3>
            <ul>
              {c.price.free.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pn-title">{c.price.pro.title}</h3>
            <ul>
              {c.price.pro.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="pn-small pn-price__note">{c.price.note}</p>
      </section>

      {/* FAQ: wide heading, indented questions */}
      <section id="faq" className="pn-faq" data-field="paper" aria-labelledby="pn-faq">
        <h2 id="pn-faq" className="pn-head">
          {c.faqTitle}
        </h2>
        <div className="pn-faq__list">
          {loc.faqs.map((f) => (
            <details key={f.q} className="pn-faq__item">
              <summary>
                <h3 className="pn-faq__q">{f.q}</h3>
                <span aria-hidden className="pn-faq__chev" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sister projects and the guide */}
      <section className="pn-more" data-field="paper-2" aria-labelledby="pn-more">
        <div data-reveal>
          <h2 id="pn-more" className="pn-head">
            {c.more.title}
          </h2>
          <p className="pn-lead">{c.more.intro}</p>
        </div>
        <ul className="pn-more__links" data-reveal>
          <li>
            <a href={tiltfree} target="_blank" rel="noopener" className="pn-textlink">
              {c.more.tiltfree}
            </a>
          </li>
          <li>
            <a href={`https://thinking.poker${THINKING[locale]}?${UTM}`} target="_blank" rel="noopener" className="pn-textlink">
              {c.more.thinking}
            </a>
          </li>
          {hasGuide && (
            <li>
              <Link href={`${base}/guide`} className="pn-textlink">
                {c.more.guide}
              </Link>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}
