import type { Block, MacDoc } from "@/content/popline-mac";
import { MAC_UPDATED } from "@/content/popline-mac";
import { CONTACT_EMAIL } from "@/lib/site";
import { JsonLd } from "@/lib/seo";
import { macBreadcrumbLd } from "./meta";

function BlockView({ block }: { block: Block }) {
  if (typeof block === "string") return <p className="text-slate mt-3 leading-relaxed">{block}</p>;
  if (Array.isArray(block))
    return (
      <ul className="text-slate mt-3 list-disc space-y-2 pl-5 leading-relaxed">
        {block.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="mac-doc-table w-full border-collapse text-left text-sm">
        <thead>
          <tr>
            {block.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Support, terms, refunds and privacy: one plain reading column. */
export function MacDocPage({ doc, path, crumb, eyebrow }: { doc: MacDoc; path: string; crumb: string; eyebrow: string }) {
  return (
    <main className="mx-auto w-full max-w-2xl pt-14 pb-24">
      <JsonLd data={[macBreadcrumbLd(crumb, path)]} />
      <span className="spec-label">
        {eyebrow} · Updated {MAC_UPDATED}
      </span>
      <h1 className="font-display mt-3 text-4xl leading-tight font-bold">{doc.title}</h1>
      <p className="text-slate mt-4 text-lg leading-relaxed">{doc.intro}</p>
      {path === "/support" && (
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Popline for Mac support")}`}
          className="border-line bg-panel mt-6 inline-block rounded-xl border px-6 py-3 font-medium transition-colors hover:border-indigo"
        >
          {CONTACT_EMAIL}
        </a>
      )}
      {doc.sections.map((s) => (
        <section key={s.heading} id={s.id} className="mt-10 scroll-mt-8">
          <h2 className="font-display text-xl font-semibold">{s.heading}</h2>
          {s.body.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </section>
      ))}
    </main>
  );
}
