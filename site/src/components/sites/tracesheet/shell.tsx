import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LW_YOUTUBE, tracesheetLanding } from "@/content/tracesheet";
import { getDict } from "@/lib/dictionaries";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";
import { tracesheetFontClass } from "./fonts";
import { LocaleSwitch } from "./locale-switch";

/**
 * Header and footer around every LingoWonders page (landing, guides,
 * support, privacy, terms). The wrapper carries data-app="tracesheet" (the
 * slug), which site.css uses to remap the shared colour and font tokens, so
 * the shared legal pages come out on LingoWonders' paper, in its ink.
 */
export function TracesheetShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const nav = tracesheetLanding[locale].nav;
  const foot = tracesheetLanding[locale].footLine;
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;

  return (
    <div data-app={slug} className={`lw-site ${tracesheetFontClass}`}>
      <header className="lw-bar">
        <div className="lw-bar-in">
          <Link href={base} className="lw-brand">
            <Image src={app.icon!} alt="" width={36} height={36} className="lw-brand-icon" priority />
            <span>{loc.name}</span>
          </Link>
          <nav className="lw-nav" aria-label={loc.name}>
            <Link href={`${base}/guide`} className="lw-nav-link">
              {nav.guides}
            </Link>
            <Link href={`${base}/support`} className="lw-nav-link">
              {dict.app.navSupport}
            </Link>
            <a href={LW_YOUTUBE} className="lw-nav-link" rel="noopener" target="_blank">
              {nav.live}
            </a>
            <LocaleSwitch current={locale} slug={slug} />
            <StudioLink locale={locale} className="lw-nav-link lw-studio" markClassName="lw-studio-mark" />
          </nav>
        </div>
      </header>

      <div className="lw-body">{children}</div>

      <footer className="lw-foot">
        <div className="lw-foot-in">
          <div className="lw-foot-brand">
            <Image src={app.icon!} alt="" width={56} height={56} className="lw-brand-icon" />
            <p className="lw-foot-name">{loc.name}</p>
            <p className="lw-foot-line">{foot}</p>
          </div>
          <nav className="lw-foot-cols" aria-label={nav.menu}>
            <ul>
              <li>
                <Link href={`${base}/guide`}>{nav.guides}</Link>
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
            <ul>
              {app.appStoreUrl && (
                <li>
                  <a href={app.appStoreUrl} data-app={slug}>
                    {nav.appStore}
                  </a>
                </li>
              )}
              <li>
                <a href={LW_YOUTUBE} rel="noopener" target="_blank">
                  {nav.youtube}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact}`}>{contact}</a>
              </li>
              <li>
                <StudioLink locale={locale} variant="long" className="lw-studio" markClassName="lw-studio-mark" />
              </li>
            </ul>
          </nav>
          <div className="lw-foot-last">
            <span>
              © {new Date().getFullYear()} App Factory · {loc.storeName}
            </span>
            <LocaleSwitch current={locale} slug={slug} />
          </div>
        </div>
      </footer>
    </div>
  );
}
