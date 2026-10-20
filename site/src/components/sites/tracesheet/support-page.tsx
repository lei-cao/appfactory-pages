// LingoWonders' support page (/support). Its own page rather than the shared
// one so it can point at the guides and say how to restore Pro. JSON-LD is
// the breadcrumb only.

import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { tracesheetLanding, tracesheetSupport } from "@/content/tracesheet";
import { getDict } from "@/lib/dictionaries";
import { fmt, localePrefix, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { breadcrumbLd, JsonLd } from "@/lib/seo";
import { GuideList } from "./guide-list";

export function LwSupport({ locale }: { locale: Locale }) {
  const app = getApp("tracesheet")!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const copy = tracesheetSupport[locale];
  const contact = app.contactEmail ?? CONTACT_EMAIL;
  const subject = encodeURIComponent(fmt(dict.support.mailSubject, { name: loc.name, version: app.version }));
  const base = `${localePrefix(locale)}/apps/tracesheet`;

  return (
    <main className="lw-page lw-wrap lw-narrow">
      <JsonLd data={[breadcrumbLd(app, loc, locale, [{ name: dict.app.navSupport, path: "/support" }])]} />
      <nav className="lw-crumbs" aria-label="Breadcrumb">
        <Link href={base}>{loc.name}</Link>
        <span aria-hidden>›</span>
        <span aria-current="page">{dict.app.navSupport}</span>
      </nav>
      <h1 className="lw-h1 lw-page-h1">{fmt(dict.support.title, { name: loc.name })}</h1>
      <p className="lw-lead">{dict.support.intro}</p>
      <a href={`mailto:${contact}?subject=${subject}`} className="lw-btn lw-mail">
        {contact}
      </a>
      <p className="lw-note">{dict.support.hint}</p>

      <div className="lw-support-cols">
        <section aria-labelledby="lw-s-restore">
          <h2 id="lw-s-restore" className="lw-h4">
            {copy.restoreTitle}
          </h2>
          <p className="lw-body-text">{copy.restoreBody}</p>
        </section>
        <section aria-labelledby="lw-s-inapp">
          <h2 id="lw-s-inapp" className="lw-h4">
            {copy.inAppTitle}
          </h2>
          <p className="lw-body-text">{copy.inAppBody}</p>
        </section>
        <section aria-labelledby="lw-s-rename">
          <h2 id="lw-s-rename" className="lw-h4">
            {copy.renameTitle}
          </h2>
          <p className="lw-body-text">{copy.renameBody}</p>
        </section>
      </div>

      <section className="lw-support-block" aria-labelledby="lw-s-guides">
        <h2 id="lw-s-guides" className="lw-h2">
          <Link href={`${base}/guide`}>{copy.guidesTitle}</Link>
        </h2>
        <p className="lw-body-text">{copy.guidesBody}</p>
        <GuideList locale={locale} />
      </section>

      <section className="lw-support-block" aria-labelledby="lw-s-faq">
        <h2 id="lw-s-faq" className="lw-h2">
          {tracesheetLanding[locale].faqTitle}
        </h2>
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
      </section>
    </main>
  );
}
