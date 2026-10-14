import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDict } from "@/lib/dictionaries";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { StudioLink } from "../shared/studio-link";
import type { SiteShellProps } from "../types";
import { tracesheetFontClass } from "./fonts";
import { Motion } from "./motion";

/** The footer's wordmark, written the way a copybook row is: one letter per
 * 田 cell, the first in ink and the rest in trace red. */
function CellWordmark({ name }: { name: string }) {
  const letters = Array.from(name);
  return (
    <div className="ts-foot-mark" aria-hidden style={{ ["--n" as string]: letters.length }}>
      {letters.map((ch, i) => (
        <svg key={i} viewBox="0 0 100 100" className={`ts-foot-cell${i === 0 ? " is-model" : ""}`}>
          <rect x="0" y="0" width="48" height="48" />
          <rect x="52" y="0" width="48" height="48" />
          <rect x="0" y="52" width="48" height="48" />
          <rect x="52" y="52" width="48" height="48" />
          <text x="50" y="54" textAnchor="middle" dominantBaseline="middle">
            {ch}
          </text>
        </svg>
      ))}
    </div>
  );
}

/**
 * Header and footer around every TraceSheet page (landing, support, privacy,
 * terms). The wrapper carries data-app="tracesheet", which site.css uses to
 * remap the shared colour and font tokens, so the shared legal pages come out
 * in TraceSheet's paper, ink and seal red.
 */
export function TracesheetShell({ locale, slug, children }: SiteShellProps) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const base = `${localePrefix(locale)}/apps/${slug}`;
  const contact = app.contactEmail ?? CONTACT_EMAIL;

  return (
    <div data-app={slug} className={`ts-site ${tracesheetFontClass}`}>
      <Motion />
      <header className="ts-bar">
        <Link href={base} className="ts-wordmark">
          <Image src={app.icon!} alt="" width={36} height={36} className="ts-wordmark-icon" />
          <span>{loc.name}</span>
        </Link>
        <nav className="ts-nav" aria-label={loc.name}>
          <Link href={`${base}/support`} className="ts-link">
            {dict.app.navSupport}
          </Link>
          <Link href={`${base}/privacy`} className="ts-link">
            {dict.app.navPrivacy}
          </Link>
          {loc.terms && (
            <Link href={`${base}/terms`} className="ts-link">
              {dict.app.navTerms}
            </Link>
          )}
          <StudioLink locale={locale} className="ts-link ts-studio" markClassName="ts-studio-mark" />
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="ts-locales"
            linkClassName="ts-link"
            currentClassName="ts-locale-current"
            separator={false}
          />
        </nav>
      </header>

      <div className="ts-body">{children}</div>

      <footer className="ts-foot">
        <CellWordmark name={loc.name} />
        <div className="ts-foot-cols">
          <ul className="ts-foot-links">
            <li>
              <Link href={`${base}/support`} className="ts-link">
                {dict.app.footSupport}
              </Link>
            </li>
            <li>
              <Link href={`${base}/privacy`} className="ts-link">
                {dict.app.footPrivacy}
              </Link>
            </li>
            {loc.terms && (
              <li>
                <Link href={`${base}/terms`} className="ts-link">
                  {dict.app.footTerms}
                </Link>
              </li>
            )}
          </ul>
          <ul className="ts-foot-links">
            <li>
              <a href={`mailto:${contact}`} className="ts-link">
                {contact}
              </a>
            </li>
            <li>
              <StudioLink
                locale={locale}
                variant="long"
                className="ts-link ts-studio"
                markClassName="ts-studio-mark"
              />
            </li>
          </ul>
          <LocaleSwitcher
            current={locale}
            slug={slug}
            className="ts-locales ts-foot-locales"
            linkClassName="ts-link"
            currentClassName="ts-locale-current"
            separator={false}
          />
        </div>
        <div className="ts-foot-last">
          <span>
            © {new Date().getFullYear()} App Factory · {loc.storeName}
          </span>
          {app.appStoreUrl && (
            <a href={app.appStoreUrl} data-app={slug} className="ts-btn ts-btn-small">
              App Store
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}
