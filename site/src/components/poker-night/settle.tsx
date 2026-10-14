"use client";

// The landing page's live thing: type the night's results as one line and
// read who pays whom in the fewest transfers, the way Poker Night's
// settle-up does at the table. Server-rendered with the first example, so
// the answer is on the page without script; typing updates it.

import { useId, useMemo, useState } from "react";
import type { PnLanding } from "@/content/poker-night-landing";
import { offBy, parseResults, settle } from "./settle-math";

function fill(t: string, vars: Record<string, string | number>) {
  return t.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

export function PnSettle({ copy }: { copy: PnLanding["live"] }) {
  const [line, setLine] = useState(copy.examples[0].line);
  const id = useId();
  const { prefix, decimals, chipsPerUnit, chips } = copy.money;

  const money = (cents: number) =>
    `${prefix}${(Math.abs(cents) / 100).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: 2,
    })}`;
  const chipCount = (cents: number) => Math.round((cents / 100) * chipsPerUnit);

  const { results, unreadable, transfers, off } = useMemo(() => {
    const p = parseResults(line);
    return { ...p, transfers: settle(p.results), off: offBy(p.results) };
  }, [line]);

  const active = results.filter((r) => r.cents !== 0).length;
  let status: string;
  if (unreadable.length) status = fill(copy.unreadable, { text: unreadable[0] });
  else if (active < 2) status = copy.tooFew;
  else if (off !== 0) status = fill(copy.offBy, { amount: money(off) });
  else status = copy.balanced;
  const ok = !unreadable.length && active >= 2 && off === 0;

  return (
    <div className="pn-settle">
      <label htmlFor={id} className="pn-sr">
        {copy.inputLabel}
      </label>
      <div className="pn-settle__line" data-ui>
        <input
          id={id}
          className="pn-settle__input"
          value={line}
          onChange={(e) => setLine(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="words"
          enterKeyHint="done"
        />
      </div>

      <div className="pn-settle__answer" data-ui aria-live="polite">
        <p className="pn-settle__status" data-ok={ok}>
          <span>{results.length === 1 ? copy.playersOne : fill(copy.players, { n: results.length })}</span>
          {ok && <span>{transfers.length === 1 ? copy.transfersOne : fill(copy.transfers, { n: transfers.length })}</span>}
          <span className="pn-settle__flag">{status}</span>
        </p>
        {ok && (
          <ol className="pn-settle__rows">
            {transfers.map((t, i) => (
              <li key={`${t.from}-${t.to}-${i}`}>
                <span className="pn-settle__who">
                  {t.from} <span aria-hidden>→</span>
                  <span className="pn-sr">{copy.pays}</span> {t.to}
                </span>
                <span className="pn-settle__amt">
                  {money(t.cents)}
                  <small>
                    {chipCount(t.cents).toLocaleString("en-US")} {chips}
                  </small>
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="pn-settle__examples">
        <p>{copy.examplesLabel}</p>
        <div>
          {copy.examples.map((ex) => (
            <button
              key={ex.label}
              type="button"
              className="pn-chipbtn"
              aria-pressed={line === ex.line}
              onClick={() => setLine(ex.line)}
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>
      <p className="pn-settle__note">{copy.note}</p>
    </div>
  );
}
