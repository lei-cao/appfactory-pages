"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { copyFor, flavoursFor } from "./copy";

// The live thing: the game's rule on four cans. A secret order is dealt on
// every visit; tap a can to lift it, tap another to swap (as in the game),
// ring the bell, and the lamps count how many are in place, never which.
// The server render shows the starting row; play starts once hydrated.

const N = 4;

function shuffle(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const inPlace = (row: number[], secret: number[]) =>
  row.reduce((s, v, i) => s + (v === secret[i] ? 1 : 0), 0);

/** A secret and a start row that is at most one can right (the game deals fresh rows too). */
function deal() {
  const secret = shuffle(N);
  let row = shuffle(N);
  while (inPlace(row, secret) > 1) row = shuffle(N);
  return { secret, row };
}

// The first render (server and client) uses a fixed row so hydration
// matches; the secret is dealt after mount.
const START = [0, 1, 2, 3];

export function Puzzle({
  locale,
  rowAside,
  bellAside,
}: {
  locale: Locale;
  /** Server-rendered picture under the row (the game's own rack). */
  rowAside?: ReactNode;
  /** Server-rendered picture under the log (the game's history drawer). */
  bellAside?: ReactNode;
}) {
  const t = copyFor(locale);
  const flavours = flavoursFor(locale);
  const [secret, setSecret] = useState<number[] | null>(null);
  const [row, setRow] = useState<number[]>(START);
  const [lifted, setLifted] = useState<number | null>(null);
  const [log, setLog] = useState<{ row: number[]; count: number }[]>([]);
  const [lamps, setLamps] = useState(0);
  const solved = log.length > 0 && log[0].count === N;

  const fresh = () => {
    const d = deal();
    setSecret(d.secret);
    setRow(d.row);
    setLifted(null);
    setLog([]);
    setLamps(0);
  };

  useEffect(fresh, []);

  const tap = (i: number) => {
    if (!secret || solved) return;
    if (lifted === null) return setLifted(i);
    if (lifted === i) return setLifted(null);
    const next = [...row];
    [next[lifted], next[i]] = [next[i], next[lifted]];
    setRow(next);
    setLifted(null);
  };

  const ring = () => {
    if (!secret || solved) return;
    const count = inPlace(row, secret);
    setLamps(count);
    setLog((l) => [{ row: [...row], count }, ...l]);
    setLifted(null);
  };

  return (
    <div className="cw-play">
      <h2 className="cw-play__title">
        <span>{t.rowTitle}</span> <span>{t.bellTitle}</span>
      </h2>

      <div className="cw-play__row-field" data-ui>
        <ol className="cw-play__row" aria-label={t.rowTitle}>
          {row.map((f, i) => (
            <li key={i}>
              <button
                type="button"
                className="cw-can cw-can--big"
                data-flavour={flavours[f].id}
                data-lifted={lifted === i || undefined}
                aria-pressed={lifted === i}
                aria-label={t.canLabel(flavours[f].name, i + 1, lifted === i)}
                onClick={() => tap(i)}
                disabled={!secret || solved}
              >
                <span className="cw-can__label">{flavours[f].code}</span>
              </button>
              <span className="cw-play__slot" aria-hidden>
                {i + 1}
              </span>
            </li>
          ))}
        </ol>
        <p className="cw-play__hint">{t.rowHint}</p>
        <noscript>
          <p className="cw-play__hint">{t.noScript}</p>
        </noscript>
        {rowAside}
      </div>

      <div className="cw-play__bell-field" data-ui>
        <div className="cw-bell" aria-live="polite">
          <div className="cw-lamps" aria-hidden>
            {Array.from({ length: N }, (_, i) => (
              <span key={i} data-on={i < lamps || undefined} />
            ))}
          </div>
          <p className="cw-bell__count">
            <span className="cw-bell__num">
              {log.length === 0 ? "?" : log[0].count} / {N}
            </span>{" "}
            {solved ? t.allInPlace : t.inPlace}
          </p>
          {solved ? (
            <>
              <p className="cw-bell__note">{t.solvedIn(log.length)}</p>
              <button type="button" className="cw-button" onClick={fresh}>
                {t.again}
              </button>
            </>
          ) : (
            <button type="button" className="cw-button" onClick={ring} disabled={!secret}>
              {t.ring}
            </button>
          )}
        </div>

        <div className="cw-log">
          <p className="cw-log__title">
            {t.checks}: {log.length}
          </p>
          {log.length === 0 ? (
            <p className="cw-log__empty">{t.noChecks}</p>
          ) : (
            <ol className="cw-log__list" reversed>
              {log.slice(0, 5).map((entry, k) => (
                <li key={log.length - k}>
                  <span className="cw-log__strip" aria-label={entry.row.map((f) => flavours[f].name).join(", ")}>
                    {entry.row.map((f, i) => (
                      <span key={i} className="cw-can cw-can--mini" data-flavour={flavours[f].id}>
                        <span className="cw-can__label">{flavours[f].code}</span>
                      </span>
                    ))}
                  </span>
                  <span className="cw-log__count">{entry.count}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
        {bellAside}
      </div>

    </div>
  );
}
