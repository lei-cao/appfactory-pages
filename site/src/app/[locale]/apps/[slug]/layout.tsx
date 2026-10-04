import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp, localized } from "@/content/apps";
import { AppIcon } from "@/components/app-icon";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { emberDeckFontClass } from "@/components/ember-deck/fonts";
import { sushiSortFontClass } from "@/components/sushi-sort/fonts";
import { getDict } from "@/lib/dictionaries";
import { fmt, isLocale, localePrefix, LOCALES } from "@/lib/i18n";
import { APEX_DOMAIN, CONTACT_EMAIL, hubOrigin } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    apps.map((app) => ({ locale, slug: app.slug })),
  );
}

export const dynamicParams = false;

export default async function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const app = getApp(slug);
  if (!app) notFound();
  const loc = localized(app, locale);
  const dict = getDict(locale);

  // On the live subdomain these resolve to /privacy, /support (the middleware
  // strips the redundant prefix); on the apex path or preview deployments
  // they resolve under /apps/<slug>/.
  const base = `${localePrefix(locale)}/apps/${slug}`;

  // Apps with their own typefaces (bespoke themes in globals.css).
  const fontClass =
    slug === "ember-deck"
      ? emberDeckFontClass
      : slug === "sushi-sort"
        ? sushiSortFontClass
        : undefined;

  return (
    <div data-app={slug} className={fontClass}>
      <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-6 sm:px-10">
      <header className="relative z-10 flex items-center justify-between gap-4 pt-8">
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
          <span className="font-display text-lg font-semibold">
            {loc.name}
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href={`${base}/support`}
            className="text-slate text-sm transition-colors hover:text-paper"
          >
            {dict.app.navSupport}
          </Link>
          <Link
            href={`${base}/privacy`}
            className="text-slate text-sm transition-colors hover:text-paper"
          >
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
          <LocaleSwitcher current={locale} />
        </nav>
      </header>

      {children}

      <footer className="border-line mt-auto border-t py-10">
        <div className="text-slate flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="spec-label">
            {fmt(dict.app.footerFrom, {
              name: loc.name,
              n: String(app.buildNumber).padStart(3, "0"),
            })}{" "}
            <a
              href={`${hubOrigin()}${localePrefix(locale)}`}
              className="underline decoration-line underline-offset-4 transition-colors hover:text-indigo-soft"
            >
              {APEX_DOMAIN}
            </a>
          </span>
          <span className="flex gap-5">
            <Link
              href={`${base}/support`}
              className="spec-label transition-colors hover:text-indigo-soft"
            >
              {dict.app.footSupport}
            </Link>
            <Link
              href={`${base}/privacy`}
              className="spec-label transition-colors hover:text-indigo-soft"
            >
              {dict.app.footPrivacy}
            </Link>
            {loc.terms && (
              <Link
                href={`${base}/terms`}
                className="spec-label transition-colors hover:text-indigo-soft"
              >
                {dict.app.footTerms}
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
