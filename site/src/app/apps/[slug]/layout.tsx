import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/content/apps";
import { APEX_DOMAIN, CONTACT_EMAIL, hubOrigin } from "@/lib/site";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export const dynamicParams = false;

export default async function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  // On the live subdomain these resolve to /privacy, /support; on the apex
  // path or preview deployments they resolve under /apps/<slug>/.
  const base = `/apps/${slug}`;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-6 sm:px-10">
      <header className="flex items-center justify-between gap-4 pt-8">
        <Link
          href={base}
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
        >
          <Image
            src={app.icon}
            alt=""
            width={36}
            height={36}
            className="border-line rounded-lg border"
          />
          <span
            className="font-display text-lg font-semibold"
          >
            {app.name}
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href={`${base}/support`}
            className="text-slate text-sm transition-colors hover:text-paper"
          >
            Support
          </Link>
          <Link
            href={`${base}/privacy`}
            className="text-slate text-sm transition-colors hover:text-paper"
          >
            Privacy
          </Link>
        </nav>
      </header>

      {children}

      <footer className="border-line mt-auto border-t py-10">
        <div className="text-slate flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="spec-label">
            {app.name} · build {String(app.buildNumber).padStart(3, "0")} from{" "}
            <a
              href={hubOrigin()}
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
              support
            </Link>
            <Link
              href={`${base}/privacy`}
              className="spec-label transition-colors hover:text-indigo-soft"
            >
              privacy
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="spec-label transition-colors hover:text-indigo-soft"
            >
              contact
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
