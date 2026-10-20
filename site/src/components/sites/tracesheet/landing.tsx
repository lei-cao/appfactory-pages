// LingoWonders' home page at lingowonders.appfactory.sg.
//
// It reads like a bilingual copybook: warm paper, ink type, the vermilion
// 田字格 cell of the app icon as the one motif. The page tells the 2.1 week
// loop in order (read → say → week pack → write → dictation → print), then
// the languages, Free and Pro, privacy, the guides, the live streams and the
// FAQ. Copy lives in content/tracesheet.ts; nothing here is a product fact.

import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import {
  LW_SCREEN_SIZE,
  LW_YOUTUBE,
  lwClip,
  lwScreenSrc,
  tracesheetLanding,
} from "@/content/tracesheet";
import { localePrefix, type Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { Clip } from "./clip";
import { GuideList } from "./guide-list";
import { AppStoreBadge, TianCell, UiLabel } from "./marks";

export function TracesheetLanding({ locale }: { locale: Locale }) {
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  const copy = tracesheetLanding[locale];
  const store = app.appStoreUrl;
  const base = `${localePrefix(locale)}/apps/tracesheet`;
  const hero = lwClip("read", locale);

  // The app was TraceSheet until 2.1; keep the old name findable.
  const appLd = { ...softwareApplicationLd(app, loc, locale), alternateName: [loc.name, "TraceSheet"] };

  return (
    <main className="lw-landing">
      <JsonLd data={[appLd, organizationLd()]} />

      {/* Hero: the claim on the left, the "Read" clip inside a 田 cell. */}
      <section className="lw-hero" aria-labelledby="lw-hero-h">
        <div className="lw-wrap lw-hero-grid">
          <div className="lw-hero-text">
            <h1 id="lw-hero-h" className="lw-h1">
              {copy.heroTitle.map((line, i) => (
                <span key={i} className={i === copy.heroTitle.length - 1 ? "is-traced" : undefined}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="lw-lead">{copy.heroSub}</p>
            <div className="lw-hero-act">
              {store && <AppStoreBadge locale={locale} href={store} />}
              <p className="lw-hero-note">{copy.heroNote}</p>
            </div>
            <p className="lw-rename">
              <TianCell glyph="語" className="lw-rename-cell" />
              <span>{copy.renameNote}</span>
            </p>
          </div>
          <div className="lw-hero-media">
            <div className="lw-frame">
              <TianCell className="lw-frame-cell" stretch />
              <Clip clip={hero} label={copy.heroClipLabel} eager className="lw-hero-clip" />
            </div>
          </div>
        </div>
      </section>

      {/* The week loop, one copybook row per step. */}
      <section className="lw-section lw-loop" aria-labelledby="lw-loop-h">
        <div className="lw-wrap">
          <header className="lw-head">
            <p className="lw-kicker">{copy.loopKicker}</p>
            <h2 id="lw-loop-h" className="lw-h2">
              {copy.loopTitle}
            </h2>
            <p className="lw-head-body">{copy.loopIntro}</p>
          </header>
          <ol className="lw-chapters">
            {copy.chapters.map((c, i) => (
              <li key={c.guide} className="lw-chapter">
                <div className="lw-chapter-mark">
                  <span className="lw-chapter-num">{String(i + 1).padStart(2, "0")}</span>
                  <TianCell glyph={c.glyph} className="lw-chapter-cell" />
                </div>
                <div className="lw-chapter-text">
                  <p className="lw-kicker">{c.kicker}</p>
                  <h3 className="lw-h3">{c.title}</h3>
                  <p className="lw-body-text">{c.body}</p>
                  {c.note && <p className="lw-note">{c.note}</p>}
                  <div className="lw-labels">
                    <span className="lw-labels-name">{copy.inApp}</span>
                    {c.labels.map((l) => (
                      <UiLabel key={l}>{l}</UiLabel>
                    ))}
                  </div>
                  <Link href={`${base}/guide/${c.guide}`} className="lw-arrow-link">
                    {c.guideLabel}
                  </Link>
                </div>
                <div className="lw-chapter-media">
                  {c.media.kind === "screen" ? (
                    <Image
                      src={lwScreenSrc(c.media.screen, locale)}
                      alt={c.media.alt}
                      width={LW_SCREEN_SIZE.phone.width}
                      height={LW_SCREEN_SIZE.phone.height}
                      sizes="(max-width: 767px) 78vw, 320px"
                      className="lw-screen"
                    />
                  ) : (
                    <Clip
                      clip={lwClip(c.media.clip, locale)}
                      poster={lwScreenSrc(c.media.poster, locale)}
                      label={c.media.alt}
                      className="lw-screen"
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Languages: a row of specimen cells, then the library facts. */}
      <section className="lw-section lw-langs" aria-labelledby="lw-langs-h">
        <div className="lw-wrap">
          <header className="lw-head">
            <p className="lw-kicker">{copy.langKicker}</p>
            <h2 id="lw-langs-h" className="lw-h2">
              {copy.langTitle}
            </h2>
            <p className="lw-head-body">{copy.langIntro}</p>
          </header>
          <ul className="lw-specimens">
            {copy.specimens.map((s) => (
              <li key={s.label} className="lw-specimen">
                <span className="lw-specimen-reading">{s.reading}</span>
                {s.lang === "en" ? (
                  <span className="lw-specimen-lines" lang={s.lang}>
                    {s.text}
                  </span>
                ) : (
                  <span className="lw-specimen-cells" lang={s.lang}>
                    {Array.from(s.text).map((ch, j) => (
                      <span key={j} className="lw-specimen-cell">
                        <TianCell />
                        <span>{ch}</span>
                      </span>
                    ))}
                  </span>
                )}
                <span className="lw-specimen-label">{s.label}</span>
              </li>
            ))}
          </ul>
          <ul className="lw-facts">
            {copy.langFacts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Free and Pro: two columns on one rule. */}
      <section className="lw-section lw-plans" aria-labelledby="lw-plans-h">
        <div className="lw-wrap">
          <header className="lw-head">
            <p className="lw-kicker">{copy.plansKicker}</p>
            <h2 id="lw-plans-h" className="lw-h2">
              {copy.plansTitle}
            </h2>
          </header>
          <div className="lw-plan-cols">
            <div className="lw-plan">
              <h3 className="lw-h3">{copy.freeTitle}</h3>
              <p className="lw-plan-lead">{copy.freeLead}</p>
              <ul className="lw-ticks">
                {copy.freeItems.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="lw-plan is-pro">
              <h3 className="lw-h3">{copy.proTitle}</h3>
              <p className="lw-plan-lead">{copy.proLead}</p>
              <ul className="lw-ticks">
                {copy.proItems.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="lw-note lw-plans-note">{copy.plansNote}</p>
        </div>
      </section>

      {/* Privacy: what stays, and the honest exceptions. */}
      {loc.trust && (
        <section className="lw-section lw-trust" aria-labelledby="lw-trust-h">
          <div className="lw-wrap">
            <header className="lw-head">
              <p className="lw-kicker">{copy.trustKicker}</p>
              <h2 id="lw-trust-h" className="lw-h2">
                {loc.trust.title}
              </h2>
            </header>
            <div className="lw-trust-cols">
              <div>
                <h3 className="lw-h4">{copy.onDeviceTitle}</h3>
                <ul className="lw-ticks">
                  {copy.onDevice.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="lw-h4">{copy.sentTitle}</h3>
                <ul className="lw-dashes">
                  {copy.sent.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href={`${base}/privacy`} className="lw-arrow-link">
              {copy.trustLink}
            </Link>
          </div>
        </section>
      )}

      {/* Guides: the contents page. */}
      <section className="lw-section lw-guides" aria-labelledby="lw-guides-h">
        <div className="lw-wrap">
          <header className="lw-head">
            <p className="lw-kicker">{copy.guidesKicker}</p>
            <h2 id="lw-guides-h" className="lw-h2">
              <Link href={`${base}/guide`}>{copy.guidesTitle}</Link>
            </h2>
            <p className="lw-head-body">{copy.guidesIntro}</p>
          </header>
          <GuideList locale={locale} />
        </div>
      </section>

      {/* Live: a link out to YouTube, never an embed. */}
      <section className="lw-section lw-live" aria-labelledby="lw-live-h">
        <div className="lw-wrap lw-live-grid">
          <a href={LW_YOUTUBE} className="lw-live-card" rel="noopener" target="_blank" tabIndex={-1} aria-hidden>
            <span className="lw-live-top">
              <span className="lw-live-dot" />
              YouTube
            </span>
            <span className="lw-live-name">Lei Live</span>
            <span className="lw-live-handle">@LeiPlaysBuilds</span>
            <TianCell glyph="語" className="lw-live-cell" />
          </a>
          <div className="lw-live-text">
            <p className="lw-kicker">{copy.liveKicker}</p>
            <h2 id="lw-live-h" className="lw-h2">
              {copy.liveTitle}
            </h2>
            <p className="lw-body-text">{copy.liveBody}</p>
            <a href={LW_YOUTUBE} className="lw-btn" rel="noopener" target="_blank">
              {copy.liveCta}
            </a>
            <p className="lw-note">{copy.liveNote}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lw-section lw-faq" aria-labelledby="lw-faq-h">
        <div className="lw-wrap lw-faq-grid">
          <header className="lw-head">
            <p className="lw-kicker">{copy.faqKicker}</p>
            <h2 id="lw-faq-h" className="lw-h2">
              {copy.faqTitle}
            </h2>
          </header>
          <div className="lw-faq-list">
            {loc.faqs.map((f) => (
              <details key={f.q} className="lw-q">
                <summary>
                  <span>{f.q}</span>
                  <span className="lw-plus" aria-hidden />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
