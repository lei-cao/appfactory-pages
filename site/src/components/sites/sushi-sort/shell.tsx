import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { sushiSortCopy } from "@/content/sushi-sort";
import { sushiSortFontClass } from "@/components/sushi-sort/fonts";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDict } from "@/lib/dictionaries";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";

/**
 * Sushi Sort's own frame: a plain bar on the vermilion field (mark, the three
 * pages, the store button) and a footer that is the back of the stationery:
 * Festival Street at dusk beside the menu. Every page of the site
 * (landing, support, privacy, terms) sits between them.
 */
export function SushiSortShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const copy = sushiSortCopy[locale];
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const email = app.contactEmail ?? CONTACT_EMAIL;

  return (
    <div data-app={slug} className={`${sushiSortFontClass} ss-root`}>
      <div className="ss-sheet">
        <header className="ss-top">
          <Link href={base} className="ss-mark">
            <Image src={app.icon!} alt="" width={40} height={40} priority />
            <span>{loc.name}</span>
          </Link>
          <nav className="ss-nav" aria-label={loc.name}>
            <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
            <Link href={`${base}/privacy`}>{dict.app.navPrivacy}</Link>
            {loc.terms && <Link href={`${base}/terms`}>{dict.app.navTerms}</Link>}
            <StudioLink locale={locale} className="ss-studio" />
          </nav>
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="ss-locales"
            linkClassName="ss-locale"
            currentClassName="ss-locale-on"
            separator={false}
          />
          {app.appStoreUrl && (
            <a href={app.appStoreUrl} data-app={slug} className="ss-btn ss-top-btn">
              App Store
            </a>
          )}
        </header>

        {children}
      </div>

      <footer className="ss-foot">
        <div className="ss-foot-pic">
          <Image
            src="/apps/sushi-sort/restaurant/festival-6.webp"
            alt={copy.footer.alt}
            width={720}
            height={1563}
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="ss-foot-menu">
          <p className="ss-foot-word">{copy.footer.menu}</p>
          <nav className="ss-foot-links" aria-label={copy.footer.menu}>
            <Link href={`${base}/support`}>{dict.app.navSupport}</Link>
            <Link href={`${base}/privacy`}>{dict.app.navPrivacy}</Link>
            {loc.terms && <Link href={`${base}/terms`}>{dict.app.navTerms}</Link>}
            <Link href={`${base}#credits`}>{copy.footer.credits}</Link>
            {app.appStoreUrl && (
              <a href={app.appStoreUrl} data-app={slug}>
                App Store
              </a>
            )}
          </nav>
          <div className="ss-foot-blocks">
            <div>
              <p>{copy.footer.contact}</p>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div>
              <p>{copy.footer.languages}</p>
              <LocaleSwitcher
                current={locale}
                slug={slug}
                className="ss-locales"
                linkClassName="ss-locale"
                currentClassName="ss-locale-on"
                separator={false}
              />
            </div>
          </div>
          <StudioLink locale={locale} variant="long" className="ss-foot-studio" />
          <p className="ss-foot-legal">{copy.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
