import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { SushiSortLandingPage } from "@/components/sushi-sort/landing";
import { TracesheetLandingPage } from "@/components/tracesheet/landing";
import { EmberDeckLandingPage } from "@/components/ember-deck/landing";
import { JsonLd } from "@/components/json-ld";
import { StatusBadge } from "@/components/status";
import { StoreBadges } from "@/components/store-badges";
import { getDict } from "@/lib/dictionaries";
import {
  LANG_TAG,
  LOCALES,
  OG_LOCALE,
  isLocale,
  languageAlternates,
  localePrefix,
} from "@/lib/i18n";
import { absUrl, appLd, breadcrumbLd, ogImagePath } from "@/lib/seo";
import { appOrigin, hubOrigin, SITE_NAME } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApp(slug);
  if (!app || !isLocale(locale)) return {};
  const loc = localized(app, locale);
  const title = loc.metaTitle ?? loc.storeName;
  const description = loc.metaDescription ?? loc.oneLiner;
  const image = absUrl(appOrigin(slug), ogImagePath(app));
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${appOrigin(slug)}${localePrefix(locale)}`,
      languages: languageAlternates(appOrigin(slug), "/"),
    },
    icons: { icon: app.icon, apple: app.icon },
    ...(app.appStoreId && { itunes: { appId: app.appStoreId } }),
    openGraph: {
      title,
      description,
      url: `${appOrigin(slug)}${localePrefix(locale)}`,
      siteName: loc.name,
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l],
      ),
      images: [{ url: image, width: 1200, height: 630, alt: loc.storeName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function AppLanding({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const app = getApp(slug);
  if (!app) notFound();

  const loc = localized(app, locale);
  const dict = getDict(locale);
  const origin = appOrigin(slug);
  const url = `${origin}${localePrefix(locale)}`;

  // Bespoke landings emit their own, richer app entity (and FAQ); adding the
  // generic one too would declare the same app twice on the page.
  const bespoke = ["sushi-sort", "tracesheet", "ember-deck"].includes(slug);
  const ld = (
    <>
      {!bespoke && (
        <JsonLd
          data={appLd({
            app,
            loc,
            langTag: LANG_TAG[locale],
            origin,
            url,
            hubOrigin: hubOrigin(),
          })}
        />
      )}
      <JsonLd
        data={breadcrumbLd([
          { name: SITE_NAME, url: `${hubOrigin()}${localePrefix(locale)}` },
          { name: loc.name, url },
        ])}
      />
    </>
  );

  // Apps with a bespoke landing page render it instead of the template.
  if (slug === "sushi-sort")
    return (
      <>
        {ld}
        <SushiSortLandingPage locale={locale} />
      </>
    );
  if (slug === "tracesheet")
    return (
      <>
        {ld}
        <TracesheetLandingPage locale={locale} />
      </>
    );
  if (slug === "ember-deck")
    return (
      <>
        {ld}
        <EmberDeckLandingPage locale={locale} />
      </>
    );

  return (
    <>
    {ld}
    <main>
      {/* Hero */}
      <section className="grid items-center gap-12 pt-20 pb-16 sm:grid-cols-[3fr_2fr] sm:pt-28 sm:pb-24">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <StatusBadge status={app.status} label={dict.status[app.status]} />
            <span className="spec-label">v{app.version}</span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            {loc.tagline}
          </h1>
          <p className="text-slate mt-6 max-w-lg text-lg leading-relaxed">
            {loc.oneLiner}
          </p>
          <div className="mt-9">
            <StoreBadges app={app} dict={dict} />
          </div>
          <p className="spec-label mt-4">{loc.statusNote}</p>
        </div>
        {loc.screenshots[0] && (
          <div className="relative mx-auto w-full max-w-70">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-indigo opacity-15 blur-3xl"
            />
            <Image
              src={loc.screenshots[0].src}
              alt={loc.screenshots[0].alt}
              width={640}
              height={1391}
              priority
              className="border-line relative rounded-2xl border shadow-2xl"
            />
          </div>
        )}
      </section>

      {/* Features */}
      <section aria-label={dict.app.whatItDoes} className="pb-20">
        <h2 className="spec-label border-line border-b pb-3">
          {dict.app.whatItDoes}
        </h2>
        <div className="grid gap-x-10 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {loc.features.map((f) => (
            <div key={f.title}>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens */}
      {loc.screenshots.length > 1 && (
        <section aria-label={dict.app.screens} className="pb-20">
          <h2 className="spec-label border-line border-b pb-3">
            {dict.app.screens}
          </h2>
          <div className="flex gap-6 overflow-x-auto pt-10 pb-2">
            {loc.screenshots.slice(1).map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={480}
                height={1043}
                className="border-line w-56 shrink-0 rounded-2xl border sm:w-64"
              />
            ))}
          </div>
        </section>
      )}

      {/* Trust block */}
      {loc.trust && (
        <section className="pb-24">
          <div className="border-line bg-panel rounded-2xl border p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold">
              {loc.trust.title}
            </h2>
            <p className="text-slate mt-3 max-w-2xl leading-relaxed">
              {loc.trust.body}
            </p>
          </div>
        </section>
      )}
    </main>
    </>
  );
}
