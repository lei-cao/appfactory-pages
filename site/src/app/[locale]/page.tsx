import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { apps, localized } from "@/content/apps";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { JsonLd } from "@/components/json-ld";
import { StatusBadge } from "@/components/status";
import { getDict } from "@/lib/dictionaries";
import {
  fmt,
  isLocale,
  LANG_TAG,
  languageAlternates,
  localePrefix,
  OG_LOCALE,
} from "@/lib/i18n";
import {
  APEX_DOMAIN,
  appOrigin,
  CONTACT_EMAIL,
  hubOrigin,
  SITE_NAME,
} from "@/lib/site";
import { hubItemListLd, organizationLd, websiteLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  const url = `${hubOrigin()}${localePrefix(locale)}`;
  const image = `${hubOrigin()}/og/hub.png`;
  return {
    alternates: {
      canonical: url,
      languages: languageAlternates(hubOrigin(), "/"),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      locale: OG_LOCALE[locale],
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [image],
    },
  };
}

export default async function Hub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  const records = [...apps].sort((a, b) => a.buildNumber - b.buildNumber);
  const nextBuild = records.length + 1;
  const pad2 = (n: number) => String(n).padStart(2, "0");
  const pad3 = (n: number) => String(n).padStart(3, "0");

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-6 sm:px-10">
      <JsonLd
        data={organizationLd({
          hubOrigin: hubOrigin(),
          name: SITE_NAME,
          email: CONTACT_EMAIL,
        })}
      />
      <JsonLd
        data={websiteLd({
          hubOrigin: hubOrigin(),
          name: SITE_NAME,
          langTag: LANG_TAG[locale],
          description: dict.meta.description,
        })}
      />
      <JsonLd
        data={hubItemListLd(
          records.map((a) => ({
            name: localized(a, locale).storeName,
            url: `${appOrigin(a.slug)}${localePrefix(locale)}`,
          })),
        )}
      />
      {/* Masthead */}
      <header className="flex items-baseline justify-between gap-4 pt-10">
        <span className="spec-label">{dict.hub.location}</span>
        <span className="flex items-baseline gap-6">
          <span className="spec-label hidden sm:inline">{dict.hub.est}</span>
          <LocaleSwitcher current={locale} />
        </span>
      </header>

      {/* Thesis */}
      <section className="pt-24 pb-20 sm:pt-36 sm:pb-28">
        <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-7xl">
          {dict.hub.headline[0]}
          <br />
          {dict.hub.headline[1]}
          <span className="text-indigo">{dict.hub.period}</span>
        </h1>
        <p className="text-slate mt-8 max-w-xl text-lg leading-relaxed">
          {dict.hub.intro}
        </p>
      </section>

      {/* The build ledger */}
      <section aria-label="Apps" className="pb-24">
        <div className="border-line flex items-baseline justify-between border-b pb-3">
          <h2 className="spec-label">{dict.hub.ledger}</h2>
          <span className="spec-label">
            {fmt(dict.hub.counts, { n: pad2(records.length), m: pad2(1) })}
          </span>
        </div>

        <ul>
          {records.map((app) => {
            const loc = localized(app, locale);
            return (
              <li key={app.slug} className="border-line border-b">
                <a
                  href={`${appOrigin(app.slug)}${localePrefix(locale)}`}
                  className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-4 py-8 sm:grid-cols-[7rem_auto_1fr_auto] sm:gap-x-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
                >
                  <span className="spec-label col-span-2 sm:col-span-1">
                    {dict.hub.build} {pad3(app.buildNumber)}
                  </span>
                  <Image
                    src={app.icon}
                    alt=""
                    width={56}
                    height={56}
                    priority
                    className="border-line bg-panel-2 row-span-1 rounded-xl border"
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-2xl font-semibold">
                        {loc.name}
                      </h3>
                      <span className="spec-label">
                        v{app.version} · {app.platforms.join(" / ")}
                      </span>
                    </div>
                    <p className="text-slate mt-1">{loc.subtitle}</p>
                  </div>
                  <div className="col-span-2 flex items-center justify-between gap-6 sm:col-span-1 sm:flex-col sm:items-end sm:justify-center sm:gap-2">
                    <StatusBadge
                      status={app.status}
                      label={dict.status[app.status]}
                    />
                    <span className="spec-label transition-colors group-hover:text-indigo-soft">
                      {app.slug}.{APEX_DOMAIN}{" "}
                      <span
                        aria-hidden
                        className="inline-block transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </a>
              </li>
            );
          })}

          {/* The next slot on the line — kept honest by the factory queue */}
          <li className="border-line border-b py-8">
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 sm:grid-cols-[7rem_auto_1fr] sm:gap-x-8">
              <span className="spec-label">
                {dict.hub.build} {pad3(nextBuild)}
              </span>
              <div
                aria-hidden
                className="border-line h-14 w-14 rounded-xl border border-dashed"
              />
              <p className="text-slate">{dict.hub.nextSlot}</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-line text-slate mt-auto flex flex-col gap-2 border-t py-10 sm:flex-row sm:items-baseline sm:justify-between">
        <span className="spec-label">
          {fmt(dict.hub.copyright, { year: new Date().getFullYear() })}
        </span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="spec-label transition-colors hover:text-indigo-soft"
        >
          {CONTACT_EMAIL}
        </a>
      </footer>
    </main>
  );
}
