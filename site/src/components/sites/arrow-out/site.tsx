import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDict } from "@/lib/dictionaries";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteModule, SiteShellProps } from "../types";
import { COPY } from "./copy";
import { arrowOutFontClass } from "./fonts";
import { ArrowOutLanding } from "./landing";
import "./site.css";

const SLUG = "arrow-out";

/** Plaster wall, a plain bar on top and one quiet line at the foot. */
function Shell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const t = COPY[locale];
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;
  const year = new Date().getFullYear();

  return (
    <div data-app={slug} className={`ao-root ${arrowOutFontClass}`}>
      <header className="ao-bar-top">
        <div className="ao-brand">
          <Link href={base} className="ao-brand__home">
            <Image src={app.icon!} alt="" width={36} height={36} className="ao-brand__icon" />
            <span className="ao-brand__name">{loc.name}</span>
          </Link>
          <StudioLink locale={locale} className="ao-studio" markClassName="ao-studio__mark" />
        </div>
        <nav className="ao-nav" aria-label={t.nav.menu}>
          <Link href={`${base}#play`} className="ao-nav__link ao-nav__link--page">
            {t.nav.play}
          </Link>
          <Link href={`${base}#courtyard`} className="ao-nav__link ao-nav__link--page">
            {t.nav.courtyard}
          </Link>
          <Link href={`${base}/support`} className="ao-nav__link">
            {dict.app.navSupport}
          </Link>
          <Link href={`${base}/privacy`} className="ao-nav__link">
            {dict.app.navPrivacy}
          </Link>
          {loc.terms && (
            <Link href={`${base}/terms`} className="ao-nav__link">
              {dict.app.navTerms}
            </Link>
          )}
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="ao-locales"
            linkClassName="ao-locales__link"
            currentClassName="ao-locales__current"
            separator={false}
          />
        </nav>
      </header>

      <div className="ao-body">{children}</div>

      <footer className="ao-foot">
        <p className="ao-foot__what">
          {loc.name} · {t.footer.what}
          <br />
          <StudioLink locale={locale} variant="long" className="ao-foot__studio" markClassName="ao-studio__mark" />
        </p>
        <p className="ao-foot__links">
          <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
          <Link href={`${base}/privacy`}>{dict.app.navPrivacy}</Link>
          {loc.terms && <Link href={`${base}/terms`}>{dict.app.navTerms}</Link>}
          <a href={`mailto:${contact}`}>{t.footer.contact}</a>
        </p>
        <p className="ao-foot__end">
          <span>© {year} App Factory</span>
          <a href={`mailto:${contact}`} className="ao-foot__mail">
            {contact}
          </a>
        </p>
      </footer>
    </div>
  );
}

export const site: SiteModule = {
  Landing: ({ locale }) => <ArrowOutLanding locale={locale} />,
  Shell,
};
