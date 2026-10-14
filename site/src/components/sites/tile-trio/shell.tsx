import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDict } from "@/lib/dictionaries";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";
import { COPY } from "./copy";
import { tileTrioFontClass } from "./fonts";
import { Reveal } from "./reveal";

/**
 * Porcelain Trio's header and footer around every page of the site. The
 * header is a plain cobalt bar; the footer is the back of the object: the
 * restored Moon Balcony on one half, the site's menu set large on the other.
 */
export function TileTrioShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const c = COPY[locale];
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;

  return (
    <div data-app={slug} className={`tt-site ${tileTrioFontClass}`}>
      <Reveal />
      <header className="tt-bar">
        <StudioLink locale={locale} className="tt-bar__studio" markClassName="tt-bar__mark" />
        <Link href={base} className="tt-bar__name" aria-label={c.home}>
          <Image src={app.icon!} alt="" width={36} height={36} className="tt-bar__icon" priority />
          <span>{loc.name}</span>
        </Link>
        <nav className="tt-bar__nav" aria-label={c.footer.menu}>
          <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
          <Link href={`${base}/privacy`} className="tt-hide-sm">
            {dict.app.navPrivacy}
          </Link>
          {loc.terms && (
            <Link href={`${base}/terms`} className="tt-hide-sm">
              {dict.app.navTerms}
            </Link>
          )}
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="tt-locales"
            linkClassName="tt-locales__link"
            currentClassName="tt-locales__current"
            separator={false}
          />
        </nav>
      </header>

      {children}

      <footer className="tt-foot">
        <div className="tt-foot__photo">
          <Image
            src="/apps/tile-trio/room-moon-balcony-6.webp"
            alt={c.footer.photoAlt}
            width={900}
            height={1350}
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="tt-foot__menu">
          <Link href={base} className="tt-foot__name">
            {loc.storeName}
          </Link>
          <nav aria-label={c.footer.menu}>
            <ul className="tt-foot__links">
              <li>
                <Link href={`${base}#play`}>{c.footer.play}</Link>
              </li>
              <li>
                <Link href={`${base}#tea-house`}>{c.footer.house}</Link>
              </li>
              <li>
                <Link href={`${base}#questions`}>{c.footer.faq}</Link>
              </li>
              <li>
                <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
              </li>
              <li>
                <Link href={`${base}/privacy`}>{dict.app.navPrivacy}</Link>
              </li>
              {loc.terms && (
                <li>
                  <Link href={`${base}/terms`}>{dict.app.navTerms}</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="tt-foot__blocks">
            <div>
              <p className="tt-foot__label">{c.footer.contact}</p>
              <a href={`mailto:${contact}`} className="tt-foot__plain">
                {contact}
              </a>
              <StudioLink
                locale={locale}
                variant="long"
                className="tt-foot__plain tt-foot__studio"
                markClassName="tt-foot__mark"
              />
            </div>
            <div>
              <p className="tt-foot__label">{c.footer.language}</p>
              <LocaleSwitcher
                current={locale}
                slug={slug}
                className="tt-locales tt-locales--foot"
                linkClassName="tt-locales__link"
                currentClassName="tt-locales__current"
                separator={false}
              />
            </div>
          </div>
          <p className="tt-foot__legal">{c.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
