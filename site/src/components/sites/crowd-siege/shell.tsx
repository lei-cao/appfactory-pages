import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";
import { copyFor } from "./copy";
import { crowdSiegeFontClass } from "./fonts";
import { Rise } from "./motion";

/**
 * Crowd Siege's frame: a small line of navigation on the orange, and a
 * closing field where the way to write to us is the headline.
 */
export function CrowdSiegeShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const t = copyFor(locale);
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;
  const [user, domain] = contact.split("@");
  const credits = app.credits;

  return (
    <div data-app={slug} className={`sg-root ${crowdSiegeFontClass}`} id="top">
      <header className="sg-head">
        <Link href={base} className="sg-head__mark">
          {loc.name}
        </Link>
        <nav className="sg-head__nav" aria-label={loc.name}>
          <Link href={`${base}/support`}>{t.support}</Link>
          <Link href={`${base}/privacy`}>{t.privacy}</Link>
          {loc.terms && (
            <Link href={`${base}/terms`} className="sg-head__extra">
              {t.terms}
            </Link>
          )}
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="sg-locales"
            linkClassName="sg-locales__link"
            currentClassName="sg-locales__current"
            separator={false}
          />
          <StudioLink locale={locale} markClassName="sg-studio-mark" />
        </nav>
      </header>

      {children}

      <footer className="sg-foot">
        <div className="sg-foot__top">
          <p>
            <strong>{loc.name}.</strong> {t.notes} {loc.statusNote}
          </p>
          <a href="#top">{t.backToTop}</a>
        </div>
        <a className="sg-foot__mail" href={`mailto:${contact}`} aria-label={`${t.write}: ${contact}`}>
          <span>{user}</span>
          <span>@{domain}</span>
        </a>
        <div className="sg-foot__meta">
          <ul>
            <li>
              <Link href={`${base}/support`}>{t.support}</Link>
            </li>
            <li>
              <Link href={`${base}/privacy`}>{t.privacy}</Link>
            </li>
            {loc.terms && (
              <li>
                <Link href={`${base}/terms`}>{t.terms}</Link>
              </li>
            )}
            <li>
              <LocaleSwitcher
                current={locale}
                slug={slug}
                className="sg-locales"
                linkClassName="sg-locales__link"
                currentClassName="sg-locales__current"
                separator={false}
              />
            </li>
          </ul>
          {credits && (
            <p id="credits" className="sg-foot__credits">
              <span>{t.credits}: </span>
              Music: もみじば (Momijiba) — <a href={credits.musicUrl}>MOMIZizm MUSiC</a> ·{" "}
              <a href={credits.sfx.url}>{credits.sfx.line}</a>
            </p>
          )}
          <p className="sg-foot__place">
            <StudioLink locale={locale} variant="long" markClassName="sg-studio-mark" />
            <br />
            {t.place}
          </p>
        </div>
      </footer>
      <Rise scope={slug} />
    </div>
  );
}
