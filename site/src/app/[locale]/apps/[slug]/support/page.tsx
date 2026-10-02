import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { JsonLd } from "@/components/json-ld";
import { getDict } from "@/lib/dictionaries";
import { fmt, isLocale, languageAlternates, localePrefix } from "@/lib/i18n";
import { absUrl, breadcrumbLd, faqLd, ogImagePath } from "@/lib/seo";
import { appOrigin, CONTACT_EMAIL, hubOrigin, SITE_NAME } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApp(slug);
  if (!app || !isLocale(locale)) return {};
  const loc = localized(app, locale);
  const dict = getDict(locale);
  return {
    title: { absolute: `${loc.name} — ${dict.app.navSupport}` },
    description: fmt(dict.support.title, { name: loc.storeName }),
    alternates: {
      canonical: `${appOrigin(slug)}${localePrefix(locale)}/support`,
      languages: languageAlternates(appOrigin(slug), "/support"),
    },
    icons: { icon: app.icon, apple: app.icon },
    openGraph: {
      type: "website",
      title: `${loc.name} — ${dict.app.navSupport}`,
      description: fmt(dict.support.title, { name: loc.storeName }),
      url: `${appOrigin(slug)}${localePrefix(locale)}/support`,
      siteName: loc.name,
      images: [
        {
          url: absUrl(appOrigin(slug), ogImagePath(app)),
          width: 1200,
          height: 630,
          alt: loc.storeName,
        },
      ],
    },
  };
}

export default async function Support({
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

  const subject = encodeURIComponent(
    fmt(dict.support.mailSubject, { name: loc.name, version: app.version }),
  );

  const origin = appOrigin(slug);
  const prefix = localePrefix(locale);

  return (
    <main className="mx-auto w-full max-w-2xl pt-16 pb-24">
      <JsonLd data={faqLd(loc.faqs)} />
      <JsonLd
        data={breadcrumbLd([
          { name: SITE_NAME, url: `${hubOrigin()}${prefix}` },
          { name: loc.name, url: `${origin}${prefix}` },
          { name: dict.app.navSupport, url: `${origin}${prefix}/support` },
        ])}
      />
      <span className="spec-label">{dict.support.eyebrow}</span>
      <h1 className="font-display mt-3 text-4xl font-bold">
        {fmt(dict.support.title, { name: loc.name })}
      </h1>
      <p className="text-slate mt-4 leading-relaxed">{dict.support.intro}</p>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}
        className="border-line bg-panel mt-6 inline-block rounded-xl border px-6 py-3 font-medium transition-colors hover:border-indigo"
      >
        {CONTACT_EMAIL}
      </a>
      <p className="text-slate mt-4 text-sm leading-relaxed">
        {dict.support.hint}
      </p>

      <section className="mt-14">
        <h2 className="spec-label border-line border-b pb-3">
          {dict.support.faqTitle}
        </h2>
        <dl className="space-y-8 pt-8">
          {loc.faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-display text-lg font-semibold">{faq.q}</dt>
              <dd className="text-slate mt-2 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
