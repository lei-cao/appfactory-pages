import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApp } from "@/content/apps";
import { appOrigin, CONTACT_EMAIL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: { absolute: `${app.name} — Support` },
    description: `Get help with ${app.storeName}: FAQs and contact.`,
    alternates: { canonical: `${appOrigin(slug)}/support` },
    icons: { icon: app.icon },
  };
}

export default async function Support({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const subject = encodeURIComponent(`${app.name} support (v${app.version})`);

  return (
    <main className="mx-auto w-full max-w-2xl pt-16 pb-24">
      <span className="spec-label">support</span>
      <h1
        className="font-display mt-3 text-4xl font-bold"
      >
        Get help with {app.name}
      </h1>
      <p className="text-slate mt-4 leading-relaxed">
        Email is the fastest way to reach us — a real person reads every
        message, usually within two days.
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}
        className="border-line bg-panel mt-6 inline-block rounded-xl border px-6 py-3 font-medium transition-colors hover:border-indigo"
      >
        {CONTACT_EMAIL}
      </a>
      <p className="text-slate mt-4 text-sm leading-relaxed">
        Include your device model and what you tapped right before the problem
        — it usually cuts a round-trip.
      </p>

      <section className="mt-14">
        <h2 className="spec-label border-line border-b pb-3">
          common questions
        </h2>
        <dl className="space-y-8 pt-8">
          {app.faqs.map((faq) => (
            <div key={faq.q}>
              <dt
                className="font-display text-lg font-semibold"
              >
                {faq.q}
              </dt>
              <dd className="text-slate mt-2 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
