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
import { slideJamFontClass } from "./fonts";
import { SiteMotion } from "./motion";

/**
 * Header and footer around every Glossy Blocks page. The header is a plain
 * bar that takes the colour of the chapter beneath it (motion.tsx); the
 * footer is the last two rows of a tile board in navy, closing on the name
 * and the one pink action.
 */
export function SlideJamShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const c = COPY[locale];
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;

  return (
    <div data-app={slug} className={slideJamFontClass}>
      <header className="sj-bar">
        <div className="sj-bar__in">
          <Link href={base} className="sj-bar__home">
            {app.icon && <Image src={app.icon} alt="" width={34} height={34} />}
            <span>{loc.name}</span>
          </Link>
          <StudioLink
            locale={locale}
            className="sj-bar__studio"
            markClassName="inline-block h-[1.05em] w-auto"
          />
          <nav className="sj-bar__nav" aria-label={loc.name}>
            <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
            <Link href={`${base}/privacy`}>{dict.app.navPrivacy}</Link>
            {loc.terms && <Link href={`${base}/terms`}>{dict.app.navTerms}</Link>}
            <LocaleSwitcher current={locale} slug={slug} className="sj-locale" linkClassName="" currentClassName="" separator={false} />
          </nav>
        </div>
      </header>

      <div className="sj-body">{children}</div>

      <footer className="sj-foot">
        <div className="sj-foot__board">
          <div className="sj-ft sj-ft--state">
            <p>{loc.statusNote}</p>
            <p>{c.footer.legal}</p>
          </div>
          <div className="sj-ft sj-ft--nav">
            <ul>
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
            <LocaleSwitcher current={locale} slug={slug} className="sj-locale" linkClassName="" currentClassName="" separator={false} />
          </div>
          <div className="sj-ft sj-ft--studio">
            <StudioLink locale={locale} variant="long" markClassName="block h-9 w-auto mb-3" />
          </div>
          <div className="sj-ft sj-ft--mail">
            <p>{c.footer.contact}</p>
            <a href={`mailto:${contact}`}>{contact}</a>
          </div>
          <div className="sj-ft sj-ft--mark" aria-hidden>
            <p>{loc.name}</p>
          </div>
          {app.appStoreUrl && (
            <a className="sj-ft sj-ft--go" href={app.appStoreUrl} data-app={slug}>
              <span>{c.footer.cta}</span>
              <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden>
                <path d="M12 36 36 12M16 12h20v20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
      </footer>
      <SiteMotion />
    </div>
  );
}
