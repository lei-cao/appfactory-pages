import Image from "next/image";
import Link from "next/link";
import { LANDING, MAC_LINKS } from "@/content/popline-mac";
import { JsonLd, organizationLd } from "@/lib/seo";
import { macAppLd, macHref } from "./meta";

/**
 * A button that is a link once its target exists (MAC_LINKS), and until then a
 * dashed tile with the same label, so nobody clicks into a dead checkout.
 */
function MacButton({
  href,
  label,
  sub,
  primary,
  placeholder,
}: {
  href?: string;
  label: string;
  sub: string;
  primary?: boolean;
  placeholder: string;
}) {
  const inner = (
    <span className="flex flex-col items-start leading-tight">
      <span className="font-display text-lg font-semibold">{label}</span>
      <span className="text-[0.75rem] tracking-wide opacity-80">{href ? sub : placeholder}</span>
    </span>
  );
  if (href)
    return (
      <a
        href={href}
        className={`inline-flex items-center rounded-2xl px-5 py-3 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo ${
          primary ? "pop-store" : "border-line border text-paper"
        }`}
      >
        {inner}
      </a>
    );
  return (
    <span
      data-placeholder="true"
      aria-disabled="true"
      className="border-line text-paper inline-flex items-center rounded-2xl border border-dashed px-5 py-3"
    >
      {inner}
    </span>
  );
}

export function MacLanding() {
  const t = LANDING;
  const [pre, mark, post] = t.headline;
  return (
    <main className="mac-landing">
      <JsonLd data={[macAppLd(t.description), organizationLd()]} />

      <section className="pt-14 pb-12 md:pt-20">
        <p className="spec-label">{t.eyebrow}</p>
        <h1 className="font-display mt-5 max-w-4xl text-[2.5rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {pre}
          <span className="pop-mark">{mark}</span>
          {post}
        </h1>
        <p className="text-slate mt-7 max-w-2xl text-lg leading-relaxed">{t.lede}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <MacButton
            href={MAC_LINKS.download}
            {...t.buttons.download}
            primary
          />
          <MacButton
            href={MAC_LINKS.buy}
            {...t.buttons.buy}
          />
        </div>
        <p className="text-paper mt-6 max-w-xl text-sm leading-relaxed">{t.requires}</p>
        {!MAC_LINKS.buy && <p className="text-slate mt-2 max-w-xl text-sm leading-relaxed">{t.notOpen}</p>}
      </section>

      {/* The real app on a real captioned recording: the first thing after the pitch. */}
      <figure className="pb-20">
        <div className="mac-window">
          <Image
            src={t.shot.src}
            alt={t.shot.alt}
            width={t.shot.width}
            height={t.shot.height}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="block h-auto w-full"
          />
        </div>
        <figcaption className="text-slate mt-4 max-w-2xl text-sm leading-relaxed">{t.shot.caption}</figcaption>
      </figure>

      {t.blocks.map((b) => (
        <section key={b.heading} className="border-line grid grid-cols-1 gap-6 border-t py-14 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <h2 className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">
            {b.heading}
            {"tag" in b && b.tag && <span className="mac-tag ml-3 align-middle">{b.tag}</span>}
          </h2>
          <div className="text-slate space-y-4 text-lg leading-relaxed">
            {b.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section id="agent" className="border-line grid grid-cols-1 gap-8 border-t py-14 md:grid-cols-[1fr_1.1fr] md:gap-14">
        <div>
          <h2 className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">
            {t.agent.heading}
            <span className="mac-tag ml-3 align-middle">{t.agent.tag}</span>
          </h2>
          <p className="text-slate mt-5 text-lg leading-relaxed">{t.agent.body}</p>
        </div>
        <figure className="min-w-0">
          <pre className="mac-log" aria-label="Tool calls from one agent run on a 5-minute narration">
            {t.agent.log.map(([cmd, out]) => (
              <span key={cmd} className="block">
                <b>{cmd.padEnd(11)}</b>
                {out}
              </span>
            ))}
          </pre>
          <figcaption className="text-slate mt-3 text-sm">One agent run on our own 5-minute narration, step by step.</figcaption>
        </figure>
      </section>

      <section id="pricing" aria-labelledby="mac-pricing" className="border-line scroll-mt-8 border-t py-14">
        <h2 id="mac-pricing" className="font-display text-3xl leading-tight font-bold sm:text-4xl">
          {t.plans.heading}
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="mac-plans w-full min-w-[20rem] border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="sr-only">
                  Feature
                </th>
                {[t.plans.free, t.plans.pro].map((p) => (
                  <th key={p.name} scope="col" className="mac-plan-head">
                    <span className="spec-label block">{p.name}</span>
                    <span className="font-display mt-1 block text-3xl font-bold sm:text-4xl">{p.price}</span>
                    <span className="text-slate mt-1 block text-xs leading-snug font-normal sm:text-sm">{p.note}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.plans.rows.map(([label, free, pro]) => (
                <tr key={label}>
                  <th scope="row" className="font-normal">
                    {label}
                  </th>
                  {[free, pro].map((yes, i) => (
                    <td key={i} className={yes ? "mac-yes" : "mac-no"}>
                      {yes ? "Yes" : "No"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate mt-6 max-w-2xl text-sm leading-relaxed">{t.plans.fine}</p>
        <p className="text-slate mt-2 text-sm">
          <Link href={macHref("/terms")} className="underline decoration-line underline-offset-4 hover:text-paper">
            Terms
          </Link>
          {" · "}
          <Link href={macHref("/refunds")} className="underline decoration-line underline-offset-4 hover:text-paper">
            Refund policy
          </Link>
          {" · "}
          <Link href={macHref("/privacy")} className="underline decoration-line underline-offset-4 hover:text-paper">
            Privacy policy
          </Link>
        </p>
      </section>

      <section id="questions" aria-labelledby="mac-faq" className="border-line border-t py-14">
        <h2 id="mac-faq" className="spec-label border-line border-b pb-3">
          Questions
        </h2>
        <dl>
          {t.faqs.map((f) => (
            <div key={f.q} className="border-line grid grid-cols-1 gap-2 border-b py-6 md:grid-cols-[1fr_1.4fr] md:gap-14">
              <dt className="font-display text-lg font-semibold">{f.q}</dt>
              <dd className="text-slate leading-relaxed">
                {f.a}
                {"link" in f && f.link && (
                  <>
                    {" "}
                    <Link
                      href={macHref(f.link.href)}
                      className="text-paper underline decoration-line underline-offset-4 hover:text-indigo-soft"
                    >
                      {f.link.label}
                    </Link>
                    .
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-slate mt-8 text-sm">
          <Link href={macHref("/support")} className="underline decoration-line underline-offset-4 hover:text-paper">
            Mac support
          </Link>
          {" · "}A person reads every message.
        </p>
      </section>
    </main>
  );
}
