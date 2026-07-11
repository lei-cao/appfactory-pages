import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApp } from "@/content/apps";
import { appOrigin } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: { absolute: `${app.name} — Privacy Policy` },
    description: `Privacy policy for ${app.storeName}.`,
    alternates: { canonical: `${appOrigin(slug)}/privacy` },
    icons: { icon: app.icon },
  };
}

export default async function Privacy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl pt-16 pb-24">
      <span className="spec-label">
        last updated {app.privacy.updated}
      </span>
      <h1
        className="font-display mt-3 text-4xl font-bold"
      >
        Privacy Policy
      </h1>
      <p className="text-slate mt-4 leading-relaxed">
        {app.name} is developed by lei cao (&quot;we&quot;). This policy
        explains what data the app handles and why.
      </p>

      {app.privacy.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2
            className="font-display text-xl font-semibold"
          >
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
