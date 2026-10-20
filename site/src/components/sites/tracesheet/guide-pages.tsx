// LingoWonders guides: the index at /guide and one article per id at
// /guide/<id>, all three locales. Content: content/tracesheet-guides*.ts.
// Structured data is a BreadcrumbList only (no HowTo / FAQPage).

import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LW_SCREEN_SIZE, lwScreenSrc } from "@/content/tracesheet";
import { lwGuideSet, TRACESHEET_GUIDE_IDS, tracesheetGuideUpdated, type LwGuideId } from "@/content/tracesheet-guides";
import { fmt, LANG_TAG, localePrefix, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { breadcrumbLd, JsonLd } from "@/lib/seo";
import { GuideList } from "./guide-list";
import { AppStoreBadge, RichText, TianCell } from "./marks";

function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(LANG_TAG[locale], { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}

function GetApp({ locale }: { locale: Locale }) {
  const app = getApp("tracesheet")!;
  const chrome = lwGuideSet(locale).chrome;
  return (
    <aside className="lw-getapp" aria-labelledby="lw-getapp-h">
      <TianCell glyph="語" className="lw-getapp-cell" />
      <div>
        <h2 id="lw-getapp-h" className="lw-h4">
          {chrome.getApp}
        </h2>
        <p>{chrome.getAppBody}</p>
      </div>
      {app.appStoreUrl && <AppStoreBadge locale={locale} href={app.appStoreUrl} height={44} />}
    </aside>
  );
}

export function LwGuideIndex({ locale }: { locale: Locale }) {
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  const chrome = lwGuideSet(locale).chrome;
  return (
    <main className="lw-page lw-wrap lw-narrow">
      <JsonLd data={[breadcrumbLd(app, loc, locale, [{ name: chrome.guides, path: "/guide" }])]} />
      <nav className="lw-crumbs" aria-label="Breadcrumb">
        <Link href={`${localePrefix(locale)}/apps/tracesheet`}>{loc.name}</Link>
        <span aria-hidden>›</span>
        <span aria-current="page">{chrome.guides}</span>
      </nav>
      <h1 className="lw-h1 lw-page-h1">{chrome.indexTitle}</h1>
      <p className="lw-lead">{chrome.indexIntro}</p>
      <GuideList locale={locale} headingLevel="h2" />
      <GetApp locale={locale} />
    </main>
  );
}

export function LwGuideArticle({ locale, id }: { locale: Locale; id: LwGuideId }) {
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  const set = lwGuideSet(locale);
  const { chrome } = set;
  const g = set.guides[id];
  const idx = TRACESHEET_GUIDE_IDS.indexOf(id);
  const prevId = idx > 0 ? TRACESHEET_GUIDE_IDS[idx - 1] : undefined;
  const nextId = idx < TRACESHEET_GUIDE_IDS.length - 1 ? TRACESHEET_GUIDE_IDS[idx + 1] : undefined;
  const base = `${localePrefix(locale)}/apps/tracesheet`;
  const updated = tracesheetGuideUpdated(id);
  const contact = app.contactEmail ?? CONTACT_EMAIL;
  const [helpBefore, helpAfter] = chrome.help.split("{email}");

  return (
    <main className="lw-page lw-wrap lw-article">
      <JsonLd
        data={[
          breadcrumbLd(app, loc, locale, [
            { name: chrome.guides, path: "/guide" },
            { name: g.title, path: `/guide/${id}` },
          ]),
        ]}
      />
      <nav className="lw-crumbs" aria-label="Breadcrumb">
        <Link href={base}>{loc.name}</Link>
        <span aria-hidden>›</span>
        <Link href={`${base}/guide`}>{chrome.guides}</Link>
        <span aria-hidden>›</span>
        <span aria-current="page">{g.title}</span>
      </nav>

      <header className="lw-article-head">
        <p className="lw-kicker">
          {chrome.guides} · {String(idx + 1).padStart(2, "0")} / {String(TRACESHEET_GUIDE_IDS.length).padStart(2, "0")}
        </p>
        <h1 className="lw-h1 lw-page-h1">{g.title}</h1>
        {g.intro.map((p) => (
          <p key={p} className="lw-lead">
            <RichText text={p} />
          </p>
        ))}
        <p className="lw-updated">
          <time dateTime={updated}>{fmt(chrome.updated, { date: formatDate(updated, locale) })}</time>
        </p>
      </header>

      <ol className="lw-steps">
        {g.steps.map((s, i) => (
          <li key={s.title} className={`lw-step${s.figure ? " has-figure" : ""}`}>
            <span className="lw-step-num">
              <TianCell />
              <span aria-hidden>{i + 1}</span>
            </span>
            <div className="lw-step-text">
              <h2 className="lw-h3">
                <span className="lw-sr">{fmt(chrome.step, { n: i + 1 })}: </span>
                {s.title}
              </h2>
              {s.body.map((b, j) =>
                Array.isArray(b) ? (
                  <ul key={j} className="lw-dashes">
                    {b.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={j} className="lw-body-text">
                    <RichText text={b} />
                  </p>
                ),
              )}
            </div>
            {s.figure && (
              <figure className={`lw-figure is-${s.figure.device ?? "phone"}`}>
                <Image
                  src={lwScreenSrc(s.figure.screen, locale, s.figure.device)}
                  alt={s.figure.alt}
                  width={LW_SCREEN_SIZE[s.figure.device ?? "phone"].width}
                  height={LW_SCREEN_SIZE[s.figure.device ?? "phone"].height}
                  sizes="(max-width: 767px) 78vw, 300px"
                  className="lw-screen"
                  priority={i === 0}
                />
                <figcaption>{s.figure.caption}</figcaption>
              </figure>
            )}
          </li>
        ))}
      </ol>

      {g.tips.length > 0 && (
        <aside className="lw-tips" aria-labelledby="lw-tips-h">
          <h2 id="lw-tips-h" className="lw-h4">
            {chrome.tipsTitle}
          </h2>
          <ul className="lw-dashes">
            {g.tips.map((t) => (
              <li key={t}>
                <RichText text={t} />
              </li>
            ))}
          </ul>
        </aside>
      )}

      {g.related && (
        <p className="lw-related">
          {g.related.map((r) => (
            <Link key={r.guide} href={`${base}/guide/${r.guide}`} className="lw-arrow-link">
              {r.label}
            </Link>
          ))}
        </p>
      )}

      <GetApp locale={locale} />

      <p className="lw-note lw-help">
        {helpBefore}
        <a href={`mailto:${contact}`}>{contact}</a>
        {helpAfter}
      </p>

      <nav className="lw-pager" aria-label={chrome.guides}>
        {prevId ? (
          <Link href={`${base}/guide/${prevId}`} rel="prev" className="lw-pager-link is-prev">
            <span className="lw-pager-dir">{chrome.previous}</span>
            <span className="lw-pager-title">{set.guides[prevId].title}</span>
          </Link>
        ) : (
          <span />
        )}
        {nextId ? (
          <Link href={`${base}/guide/${nextId}`} rel="next" className="lw-pager-link is-next">
            <span className="lw-pager-dir">{chrome.next}</span>
            <span className="lw-pager-title">{set.guides[nextId].title}</span>
          </Link>
        ) : (
          <Link href={`${base}/guide`} className="lw-pager-link is-next">
            <span className="lw-pager-dir">{chrome.allGuides}</span>
            <span className="lw-pager-title">{chrome.indexTitle}</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
