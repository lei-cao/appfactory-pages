import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";
import { copyFor } from "./copy";
import { canSwapFontClass } from "./fonts";
import { Rise } from "./motion";

/**
 * Can Swap's frame: the wordmark and three plain links on the bone ground,
 * and a night-black closing field where the name returns at full width.
 */
export function CanSwapShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const t = copyFor(locale);
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;
  const credits = app.credits;

  return (
    <div data-app={slug} className={`cw-root ${canSwapFontClass}`} id="top">
      <header className="cw-head">
        <Link href={base} className="cw-head__mark">
          {loc.name}
        </Link>
        <nav className="cw-head__nav" aria-label={loc.name}>
          <Link href={`${base}/support`}>{t.support}</Link>
          <Link href={`${base}/privacy`}>{t.privacy}</Link>
          {loc.terms && (
            <Link href={`${base}/terms`} className="cw-head__extra">
              {t.terms}
            </Link>
          )}
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="cw-locales"
            linkClassName="cw-locales__link"
            currentClassName="cw-locales__current"
            separator={false}
          />
          <StudioLink locale={locale} className="cw-head__studio" markClassName="cw-studio-mark" />
        </nav>
      </header>

      {children}

      <footer className="cw-foot">
        <p className="cw-foot__name" aria-hidden>
          {loc.name}
        </p>
        <div className="cw-foot__row">
          <ul className="cw-foot__places">
            <li>
              <a href={`mailto:${contact}`}>{contact}</a>
            </li>
            <li>
              <Link href={`${base}/support`}>{t.support}</Link>
            </li>
          </ul>
          <div className="cw-foot__cols">
            <div>
              <p className="cw-foot__label">{t.footPages}</p>
              <ul>
                <li>
                  <Link href={base}>{loc.name}</Link>
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
                  <a href={`mailto:${contact}`}>{t.contact}</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="cw-foot__label">{t.footStudio}</p>
              <ul>
                <li>
                  <StudioLink locale={locale} variant="long" markClassName="cw-studio-mark" />
                </li>
                <li>
                  <LocaleSwitcher
                    current={locale}
                    slug={slug}
                    className="cw-locales"
                    linkClassName="cw-locales__link"
                    currentClassName="cw-locales__current"
                    separator={false}
                  />
                </li>
              </ul>
            </div>
            {credits && (
              <div id="credits">
                <p className="cw-foot__label">{t.footCredits}</p>
                <ul>
                  <li>
                    Music: もみじば (Momijiba) —{" "}
                    <a href={credits.musicUrl}>MOMIZizm MUSiC</a>
                  </li>
                  <li>
                    <a href={credits.sfx.url}>{credits.sfx.line}</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="cw-foot__legal">
          <p>{t.rights}</p>
          <a href="#top">{t.backToTop}</a>
        </div>
      </footer>
      <Rise scope={slug} />
    </div>
  );
}
