import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";
import { copyFor } from "./copy";
import { haystackFontClass } from "./fonts";
import { Rise } from "./motion";

/**
 * Haystack Hollow's frame: a plain bar on the meadow green, and a closing
 * spread with the barn on one half and the site's menu set large on the
 * other: the back of the order slip.
 */
export function HaystackShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const t = copyFor(locale);
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;
  const credits = app.credits;
  const anchors = ["how", "orders", "questions"];

  return (
    <div data-app={slug} className={`hh-root ${haystackFontClass}`} id="top">
      <header className="hh-head">
        <Link href={base} className="hh-head__mark">
          {loc.name}
        </Link>
        <nav className="hh-head__nav" aria-label={loc.name}>
          <Link href={`${base}/support`}>{t.support}</Link>
          <Link href={`${base}/privacy`}>{t.privacy}</Link>
          {loc.terms && (
            <Link href={`${base}/terms`} className="hh-head__extra">
              {t.terms}
            </Link>
          )}
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="hh-locales"
            linkClassName="hh-locales__link"
            currentClassName="hh-locales__current"
            separator={false}
          />
          <StudioLink locale={locale} markClassName="hh-studio-mark" />
        </nav>
      </header>

      {children}

      <footer className="hh-foot">
        <div className="hh-foot__pic">
          <Image
            src="/apps/harvest-town/icon.webp"
            alt={t.heroAlt}
            width={1024}
            height={1024}
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="hh-foot__menu">
          <p className="hh-foot__mark">{loc.name}</p>
          <ul className="hh-foot__links">
            {t.footMenu.map((label, i) => (
              <li key={label}>
                <Link href={`${base}#${anchors[i]}`}>{label}</Link>
              </li>
            ))}
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
          </ul>
          <div className="hh-foot__blocks">
            <div>
              <p className="hh-foot__label">{t.contact}</p>
              <a href={`mailto:${contact}`}>{contact}</a>
              <p className="hh-foot__label">{t.studio}</p>
              <p>
                <StudioLink locale={locale} variant="long" markClassName="hh-studio-mark" />
              </p>
              <LocaleSwitcher
                current={locale}
                slug={slug}
                className="hh-locales hh-foot__locales"
                linkClassName="hh-locales__link"
                currentClassName="hh-locales__current"
                separator={false}
              />
            </div>
            {credits && (
              <div id="credits">
                <p className="hh-foot__label">{t.credits}</p>
                <p>
                  Music: もみじば (Momijiba) — <a href={credits.musicUrl}>MOMIZizm MUSiC</a>
                </p>
                <p>
                  <a href={credits.sfx.url}>{credits.sfx.line}</a>
                </p>
              </div>
            )}
          </div>
          <p className="hh-foot__legal">{t.legal}</p>
        </div>
      </footer>
      <Rise scope={slug} />
    </div>
  );
}
