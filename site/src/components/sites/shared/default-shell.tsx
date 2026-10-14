import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { AppIcon } from "@/components/app-icon";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDict } from "@/lib/dictionaries";
import { isGuideLocale } from "@/lib/guide";
import { localePrefix } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import type { SiteShellProps } from "../types";
import { StudioLink } from "./studio-link";

/**
 * The plain shell every app site starts from: app name and pages in the
 * header, App Factory back-link on both ends. Sites with their own look
 * replace it with a Shell in their folder.
 */
export function DefaultShell({
  locale,
  slug,
  children,
  className,
}: SiteShellProps & { className?: string }) {
  const app = getApp(slug)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);

  // On the live subdomain these resolve to /privacy, /support (the middleware
  // strips the redundant prefix); on the apex path or preview deployments
  // they resolve under /apps/<slug>/.
  const base = `${localePrefix(locale)}/apps/${slug}`;

  // The home-game guide only exists for Poker Night, and only in the two
  // locales its content pack has been written for (see lib/guide.ts).
  const hasGuide = slug === "poker-night" && isGuideLocale(locale);

  return (
    <div data-app={slug} className={className}>
      <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-6 sm:px-10">
        <header className="relative z-10 flex items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-5">
            <Link
              href={base}
              className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
            >
              <AppIcon
                icon={app.icon}
                name={loc.name}
                size={36}
                className="border-line rounded-lg border"
              />
              <span className="font-display text-lg font-semibold">{loc.name}</span>
            </Link>
            <StudioLink
              locale={locale}
              className="text-slate hidden text-sm transition-colors hover:text-paper md:inline"
            />
          </div>
          <nav className="flex items-center gap-6">
            <Link href={`${base}/support`} className="text-slate text-sm transition-colors hover:text-paper">
              {dict.app.navSupport}
            </Link>
            <Link href={`${base}/privacy`} className="text-slate text-sm transition-colors hover:text-paper">
              {dict.app.navPrivacy}
            </Link>
            {loc.terms && (
              <Link
                href={`${base}/terms`}
                className="text-slate hidden text-sm transition-colors hover:text-paper sm:inline"
              >
                {dict.app.navTerms}
              </Link>
            )}
            {hasGuide && (
              <Link
                href={`${base}/guide`}
                className="text-slate hidden text-sm transition-colors hover:text-paper sm:inline"
              >
                {dict.app.navGuide}
              </Link>
            )}
            <LocaleSwitcher current={locale} slug={slug} />
          </nav>
        </header>

        {children}

        <footer className="border-line mt-auto border-t py-10">
          <div className="text-slate flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <StudioLink
              locale={locale}
              variant="long"
              className="text-sm underline decoration-line underline-offset-4 transition-colors hover:text-indigo-soft"
            />
            <span className="flex gap-5">
              <Link href={`${base}/support`} className="spec-label transition-colors hover:text-indigo-soft">
                {dict.app.footSupport}
              </Link>
              <Link href={`${base}/privacy`} className="spec-label transition-colors hover:text-indigo-soft">
                {dict.app.footPrivacy}
              </Link>
              {loc.terms && (
                <Link href={`${base}/terms`} className="spec-label transition-colors hover:text-indigo-soft">
                  {dict.app.footTerms}
                </Link>
              )}
              {hasGuide && (
                <Link href={`${base}/guide`} className="spec-label transition-colors hover:text-indigo-soft">
                  {dict.app.footGuide}
                </Link>
              )}
              <a
                href={`mailto:${app.contactEmail ?? CONTACT_EMAIL}`}
                className="spec-label transition-colors hover:text-indigo-soft"
              >
                {dict.app.footContact}
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
