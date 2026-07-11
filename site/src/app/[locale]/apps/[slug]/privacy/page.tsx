import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApp, localized } from "@/content/apps";
import { getDict } from "@/lib/dictionaries";
import { fmt, isLocale, languageAlternates, localePrefix } from "@/lib/i18n";
import { appOrigin } from "@/lib/site";

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
    title: { absolute: `${loc.name} — ${dict.privacy.title}` },
    description: `${loc.storeName} · ${dict.privacy.title}`,
    alternates: {
      canonical: `${appOrigin(slug)}${localePrefix(locale)}/privacy`,
      languages: languageAlternates(appOrigin(slug), "/privacy"),
    },
    icons: { icon: app.icon },
  };
}

export default async function Privacy({
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

  return (
    <main className="mx-auto w-full max-w-2xl pt-16 pb-24">
      <span className="spec-label">
        {fmt(dict.privacy.updated, { date: loc.privacy.updated })}
      </span>
      <h1 className="font-display mt-3 text-4xl font-bold">
        {dict.privacy.title}
      </h1>
      <p className="text-slate mt-4 leading-relaxed">
        {fmt(dict.privacy.intro, { name: loc.name })}
      </p>

      {loc.privacy.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="font-display text-xl font-semibold">
            {section.heading}
          </h2>
          {section.body.map((item, i) =>
            Array.isArray(item) ? (
              <ul
                key={i}
                className="text-slate mt-3 list-disc space-y-2 pl-5 leading-relaxed"
              >
                {item.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            ) : (
              <p key={i} className="text-slate mt-3 leading-relaxed">
                {item}
              </p>
            ),
          )}
        </section>
      ))}
    </main>
  );
}
