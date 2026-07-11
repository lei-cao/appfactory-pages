import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getApp } from "@/content/apps";
import { StatusBadge } from "@/components/status";
import { StoreBadges } from "@/components/store-badges";
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
    title: { absolute: `${app.storeName}` },
    description: app.oneLiner,
    alternates: { canonical: appOrigin(slug) },
    icons: { icon: app.icon },
    openGraph: {
      title: app.storeName,
      description: app.oneLiner,
      url: appOrigin(slug),
      images: [app.screenshots[0]?.src ?? app.icon],
    },
  };
}

export default async function AppLanding({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="grid items-center gap-12 pt-20 pb-16 sm:grid-cols-[3fr_2fr] sm:pt-28 sm:pb-24">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <StatusBadge status={app.status} />
            <span className="spec-label">v{app.version}</span>
          </div>
          <h1
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl"
          >
            {app.tagline}
          </h1>
          <p className="text-slate mt-6 max-w-lg text-lg leading-relaxed">
            {app.oneLiner}
          </p>
          <div className="mt-9">
            <StoreBadges app={app} />
          </div>
          <p className="spec-label mt-4">{app.statusNote}</p>
        </div>
        {app.screenshots[0] && (
          <div className="relative mx-auto w-full max-w-70">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-indigo opacity-15 blur-3xl"
            />
            <Image
              src={app.screenshots[0].src}
              alt={app.screenshots[0].alt}
              width={640}
              height={1391}
              priority
              className="border-line relative rounded-2xl border shadow-2xl"
            />
          </div>
        )}
      </section>

      {/* Features */}
      <section aria-label="Features" className="pb-20">
        <h2 className="spec-label border-line border-b pb-3">
          what it does
        </h2>
        <div className="grid gap-x-10 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {app.features.map((f) => (
            <div key={f.title}>
              <h3
                className="font-display text-lg font-semibold"
              >
                {f.title}
              </h3>
              <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens */}
      {app.screenshots.length > 1 && (
        <section aria-label="Screenshots" className="pb-20">
          <h2 className="spec-label border-line border-b pb-3">screens</h2>
          <div className="flex gap-6 overflow-x-auto pt-10 pb-2">
            {app.screenshots.slice(1).map((shot) => (
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
      {app.trust && (
        <section className="pb-24">
          <div className="border-line bg-panel rounded-2xl border p-8 sm:p-10">
            <h2
              className="font-display text-2xl font-semibold"
            >
              {app.trust.title}
            </h2>
            <p className="text-slate mt-3 max-w-2xl leading-relaxed">
              {app.trust.body}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
