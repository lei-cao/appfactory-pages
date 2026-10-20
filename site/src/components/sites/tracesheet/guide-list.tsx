import Link from "next/link";
import { lwGuideSet, TRACESHEET_GUIDE_IDS } from "@/content/tracesheet-guides";
import { fmt, localePrefix, type Locale } from "@/lib/i18n";

/** The guides as a textbook contents page: number, title, summary, steps. */
export function GuideList({
  locale,
  headingLevel = "h3",
}: {
  locale: Locale;
  headingLevel?: "h2" | "h3";
}) {
  const set = lwGuideSet(locale);
  const base = `${localePrefix(locale)}/apps/tracesheet/guide`;
  const H = headingLevel;
  return (
    <ol className="lw-contents">
      {TRACESHEET_GUIDE_IDS.map((id, i) => {
        const g = set.guides[id];
        return (
          <li key={id} className="lw-contents-row">
            <span className="lw-contents-num" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="lw-contents-text">
              <H className="lw-contents-title">
                <Link href={`${base}/${id}`}>{g.title}</Link>
              </H>
              <p className="lw-contents-sum">{g.summary}</p>
            </div>
            <span className="lw-contents-steps">{fmt(set.chrome.steps, { n: g.steps.length })}</span>
          </li>
        );
      })}
    </ol>
  );
}
