// Poker Night's own header and footer around every page of
// poker-night.appfactory.sg (landing, support, privacy, guide).
// The header is a plain fixed bar that takes the colour of the chapter
// under it (PnMotion switches data-field); the footer closes every page
// with the contact address set as the headline.

import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { PnMotion } from "@/components/poker-night/motion";
import { getDict } from "@/lib/dictionaries";
import { isGuideLocale } from "@/lib/guide";
import { localePrefix, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";

const SHELL: Record<Locale, { menu: string; store: string; top: string; about: string; promise: string; write: string; year: string }> = {
  en: {
    menu: "Menu",
    store: "App Store",
    top: "Back to top",
    about: "Poker Night is a home game tracker for iPhone and iPad: ledger, blinds timer, settle-up and odds study.",
    promise: "No ads. No account. Your ledger stays on your device.",
    write: "Questions, ideas or a bug? Write to",
    year: "© 2026 App Factory",
  },
  "zh-cn": {
    menu: "菜单",
    store: "App Store",
    top: "回到顶部",
    about: "扑克之夜是 iPhone 与 iPad 上的德州扑克牌局记账 App：账本、盲注计时、结算与胜率学习。",
    promise: "无广告，无需账号，账本只存在你的设备上。",
    write: "有问题、想法或发现 bug？写信到",
    year: "© 2026 App Factory",
  },
  "zh-tw": {
    menu: "選單",
    store: "App Store",
    top: "回到頂端",
    about: "撲克之夜是 iPhone 與 iPad 上的德州撲克牌局記帳 App：帳本、盲注計時、結算與勝率學習。",
    promise: "無廣告，無需帳號，帳本只存在你的裝置上。",
    write: "有問題、想法或發現 bug？寫信到",
    year: "© 2026 App Factory",
  },
};

export function PokerNightShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const s = SHELL[locale];
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;
  const [user, domain] = contact.split("@");
  const hasGuide = isGuideLocale(locale);

  const pages = [
    ...(hasGuide ? [{ href: `${base}/guide`, label: dict.app.navGuide }] : []),
    { href: `${base}/support`, label: dict.app.navSupport },
    { href: `${base}/privacy`, label: dict.app.navPrivacy },
    ...(loc.terms ? [{ href: `${base}/terms`, label: dict.app.navTerms }] : []),
  ];

  const switcher = (
    <LocaleSwitcher
      current={locale}
      slug={slug}
      className="pn-locales"
      linkClassName="pn-link"
      currentClassName="pn-locales__current"
      separator={false}
    />
  );

  return (
    <div data-app={slug}>
      <PnMotion />
      <header className="pn-header" data-ink="paper" id="pn-top">
        <div className="pn-header__in">
          <Link href={base} className="pn-wordmark pn-link">
            <Image src={app.icon!} alt="" width={30} height={30} className="pn-wordmark__icon" priority />
            <span>{loc.name}</span>
          </Link>
          <StudioLink locale={locale} className="pn-studio pn-link" markClassName="pn-studio__mark" />
          <nav className="pn-header__nav" aria-label={s.menu}>
            {pages.map((p) => (
              <Link key={p.href} href={p.href} className="pn-link">
                {p.label}
              </Link>
            ))}
            {switcher}
          </nav>
          {app.appStoreUrl && (
            <a href={app.appStoreUrl} data-app={slug} className="pn-button pn-button--small">
              {s.store}
            </a>
          )}
          <details className="pn-menu">
            <summary className="pn-link">{s.menu}</summary>
            <div className="pn-menu__panel">
              {pages.map((p) => (
                <Link key={p.href} href={p.href} className="pn-link">
                  {p.label}
                </Link>
              ))}
              {switcher}
              <StudioLink locale={locale} variant="long" className="pn-link" markClassName="pn-studio__mark" />
            </div>
          </details>
        </div>
      </header>

      <div className="pn-body" data-field="paper">
        {children}
      </div>

      <footer className="pn-footer" data-field="night">
        <div className="pn-footer__top">
          <p>{s.about}</p>
          <p>{s.promise}</p>
          <a href="#pn-top" className="pn-link pn-footer__totop">
            {s.top}
          </a>
        </div>
        <div className="pn-footer__contact">
          <p>{s.write}</p>
          <a href={`mailto:${contact}`} className="pn-footer__mail">
            <span>{user}</span>
            <wbr />
            <span>@{domain}</span>
          </a>
        </div>
        <div className="pn-footer__meta">
          <nav className="pn-footer__links" aria-label={loc.name}>
            {pages.map((p) => (
              <Link key={p.href} href={p.href} className="pn-link">
                {p.label}
              </Link>
            ))}
            <a href={`mailto:${contact}`} className="pn-link">
              {dict.app.footContact}
            </a>
          </nav>
          <StudioLink locale={locale} variant="long" className="pn-link pn-footer__studio" markClassName="pn-studio__mark" />
          <div className="pn-footer__end">
            {switcher}
            <span>{s.year}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
