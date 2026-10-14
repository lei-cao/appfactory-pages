import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { emberDeckLanding } from "@/content/ember-deck";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDict } from "@/lib/dictionaries";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";

const V2 = "/apps/ember-deck/v2";

/**
 * Ember Deck's frame around every page (landing, support, privacy, terms):
 * a plain ash bar on top, and a footer that is half painting, half menu.
 * Support/privacy/terms pick up the ash-and-soot look through the token
 * remap in site.css.
 */
export function EmberDeckShell({
  locale,
  slug,
  children,
  className = "",
}: SiteShellProps & { className?: string }) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const copy = emberDeckLanding[locale];
  const email = app.contactEmail ?? CONTACT_EMAIL;

  // On the live subdomain these resolve to /privacy, /support (the
  // middleware strips the redundant prefix).
  const base = `${localePrefix(locale)}/apps/${slug}`;

  const menu = [
    { href: `${base}#turn`, label: copy.nav.turn },
    { href: `${base}#heroes`, label: copy.nav.heroes },
    { href: `${base}#acts`, label: copy.nav.acts },
    { href: `${base}#between-runs`, label: copy.nav.progress },
    { href: `${base}#questions`, label: copy.nav.faq },
    { href: `${base}#press`, label: copy.nav.press },
  ];

  return (
    <div data-app={slug} className={`ed-root ${className}`}>
      <header className="ed-bar">
        <Link href={base} className="ed-bar-name">
          <img src={app.icon} alt="" width={32} height={32} />
          <span>{loc.name}</span>
        </Link>
        <StudioLink locale={locale} className="ed-bar-studio" markClassName="ed-studio-mark" />
        <nav className="ed-bar-nav" aria-label={dict.app.navSupport}>
          <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
          <Link href={`${base}/privacy`} className="ed-wide">
            {dict.app.navPrivacy}
          </Link>
          {loc.terms && (
            <Link href={`${base}/terms`} className="ed-wide">
              {dict.app.navTerms}
            </Link>
          )}
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="ed-locales"
            linkClassName="ed-locale"
            currentClassName="ed-locale is-current"
            separator={false}
          />
          <Link href={`${base}#turn`} className="ed-button ed-bar-cta">
            {copy.nav.turn}
          </Link>
        </nav>
      </header>

      {children}

      <footer className="ed-foot">
        <div className="ed-foot-art">
          <img src={`${V2}/misc/keyart.webp`} alt="" width={1170} height={2532} loading="lazy" decoding="async" />
        </div>
        <div className="ed-foot-menu">
          <div className="ed-band ed-band-thin" data-heat-band aria-hidden>
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
          <p className="ed-foot-name">{loc.name}</p>
          <ul className="ed-foot-links">
            {menu.map((m) => (
              <li key={m.href}>
                <Link href={m.href}>{m.label}</Link>
              </li>
            ))}
          </ul>
          <div className="ed-foot-blocks">
            <div>
              <p className="ed-foot-h">{copy.nav.write}</p>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div>
              <p className="ed-foot-h">{copy.nav.pages}</p>
              <p className="ed-foot-pages">
                <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
                <Link href={`${base}/privacy`}>{dict.app.navPrivacy}</Link>
                {loc.terms && <Link href={`${base}/terms`}>{dict.app.navTerms}</Link>}
              </p>
              <LocaleSwitcher
                current={locale}
                slug={slug}
                className="ed-locales"
                linkClassName="ed-locale"
                currentClassName="ed-locale is-current"
                separator={false}
              />
            </div>
          </div>
          <p className="ed-foot-legal">
            <StudioLink locale={locale} variant="long" className="ed-foot-studio" markClassName="ed-studio-mark" />
            <span>© 2026 App Factory</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
