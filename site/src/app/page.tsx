import Image from "next/image";
import { apps } from "@/content/apps";
import { StatusBadge } from "@/components/status";
import { APEX_DOMAIN, appOrigin, CONTACT_EMAIL } from "@/lib/site";

export default function Hub() {
  const records = [...apps].sort((a, b) => a.buildNumber - b.buildNumber);
  const nextBuild = records.length + 1;

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-6 sm:px-10">
      {/* Masthead */}
      <header className="flex items-baseline justify-between pt-10">
        <span className="spec-label">
          {APEX_DOMAIN} · singapore
        </span>
        <span className="spec-label hidden sm:inline">est. 2026</span>
      </header>

      {/* Thesis */}
      <section className="pt-24 pb-20 sm:pt-36 sm:pb-28">
        <h1
          className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
        >
          Small apps,
          <br />
          off the line<span className="text-indigo">.</span>
        </h1>
        <p className="text-slate mt-8 max-w-xl text-lg leading-relaxed">
          appfactory is a one-person studio where AI agents build, test, and
          ship focused mobile apps — each one small enough to be good at one
          thing. This page is the line: every app, its build number, and where
          it is right now.
        </p>
      </section>

      {/* The build ledger */}
      <section aria-label="Apps" className="pb-24">
        <div className="border-line flex items-baseline justify-between border-b pb-3">
          <h2 className="spec-label">build ledger</h2>
          <span className="spec-label">
            {String(records.length).padStart(2, "0")} on the line ·{" "}
            {String(1).padStart(2, "0")} in the works
          </span>
        </div>

        <ul>
          {records.map((app) => (
            <li key={app.slug} className="border-line border-b">
              <a
                href={appOrigin(app.slug)}
                className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-4 py-8 sm:grid-cols-[7rem_auto_1fr_auto] sm:gap-x-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
              >
                <span className="spec-label col-span-2 sm:col-span-1">
                  build {String(app.buildNumber).padStart(3, "0")}
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
                    <h3
                      className="font-display text-2xl font-semibold"
                    >
                      {app.name}
                    </h3>
                    <span className="spec-label">
                      v{app.version} · {app.platforms.join(" / ")}
                    </span>
                  </div>
                  <p className="text-slate mt-1">{app.subtitle}</p>
                </div>
                <div className="col-span-2 flex items-center justify-between gap-6 sm:col-span-1 sm:flex-col sm:items-end sm:justify-center sm:gap-2">
                  <StatusBadge status={app.status} />
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
          ))}

          {/* The next slot on the line — kept honest by the factory queue */}
          <li className="border-line border-b py-8">
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 sm:grid-cols-[7rem_auto_1fr] sm:gap-x-8">
              <span className="spec-label">
                build {String(nextBuild).padStart(3, "0")}
              </span>
              <div
                aria-hidden
                className="border-line h-14 w-14 rounded-xl border border-dashed"
              />
              <p className="text-slate">
                In the works — the next app is on the line.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-line text-slate mt-auto flex flex-col gap-2 border-t py-10 sm:flex-row sm:items-baseline sm:justify-between">
        <span className="spec-label">
          © {new Date().getFullYear()} appfactory · lei cao, singapore
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
