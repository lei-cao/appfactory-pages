"use client";

// The live thing on the order slip: a five-rack mystery tray played with
// the game's own rules. Only the front piece of a rack is face up; a pour
// moves the matching face-up run onto the same kind or an empty rack, stops
// at the first lid, and lifts the next lid. Undo and restart are free and
// restart never reshuffles. The deal is fixed and solver-checked: 10 moves
// is the best line (BFS over every pour), so the order is 14.
//
// Without script the server render still shows the dealt board.

import { useEffect, useRef, useState } from "react";
import type { SushiSortCopy } from "@/content/sushi-sort";

type Kind = "S" | "T" | "C";
interface Piece {
  id: number;
  kind: Kind;
  up: boolean;
}
type Board = Piece[][];

const CAP = 4;
const BEST = 10;
const ORDER = 14;
// Back of the rack first; the last piece is the front one.
const DEAL: Kind[][] = [
  ["T", "C", "S", "C"],
  ["T", "S", "C", "S"],
  ["C", "T", "S", "T"],
  [],
  [],
];
const SPRITE: Record<Kind, string> = {
  S: "/apps/sushi-sort/sushi/salmon_nigiri.webp",
  T: "/apps/sushi-sort/sushi/tamago_nigiri.webp",
  C: "/apps/sushi-sort/sushi/cucumber_maki.webp",
};

function deal(): Board {
  let id = 0;
  return DEAL.map((rack) =>
    rack.map((kind, i) => ({ id: id++, kind, up: i === rack.length - 1 })),
  );
}

function fill(s: string, vars: Record<string, string | number>) {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

/** The face-up run at the front of a rack that one pour can carry. */
function frontRun(rack: Piece[]): number {
  const front = rack[rack.length - 1];
  if (!front) return 0;
  let n = 0;
  for (let i = rack.length - 1; i >= 0; i--) {
    if (!rack[i].up || rack[i].kind !== front.kind) break;
    n++;
  }
  return n;
}

function pour(board: Board, from: number, to: number): Board | null {
  const a = board[from];
  const b = board[to];
  if (from === to || a.length === 0 || b.length >= CAP) return null;
  const kind = a[a.length - 1].kind;
  if (b.length > 0 && b[b.length - 1].kind !== kind) return null;
  const m = Math.min(frontRun(a), CAP - b.length);
  const moved = a.slice(a.length - m);
  const rest = a.slice(0, a.length - m);
  const last = rest[rest.length - 1];
  const next = board.map((r) => r.slice());
  next[from] = last && !last.up ? [...rest.slice(0, -1), { ...last, up: true }] : rest;
  next[to] = [...b, ...moved];
  return next;
}

function solved(board: Board): boolean {
  return board.every(
    (r) => r.length === 0 || (r.length === CAP && r.every((p) => p.kind === r[0].kind)),
  );
}

export function MysteryTray({ t }: { t: SushiSortCopy["tray"] }) {
  const [history, setHistory] = useState<Board[]>(() => [deal()]);
  const [picked, setPicked] = useState<number | null>(null);
  const [peek, setPeek] = useState(false);
  const [peekUsed, setPeekUsed] = useState(false);
  const [say, setSay] = useState("");
  const [nudge, setNudge] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const board = history[history.length - 1];
  const moves = history.length - 1;
  const done = solved(board);
  const stars = moves <= BEST + 1 ? 3 : moves <= BEST + 3 ? 2 : 1;

  useEffect(() => () => clearTimeout(timer.current), []);

  function tap(i: number) {
    if (done) return;
    if (picked === null) {
      if (board[i].length === 0) return;
      setPicked(i);
      const front = board[i][board[i].length - 1];
      setSay(fill(t.picked, { piece: t.pieces[front.kind], n: i + 1 }));
      return;
    }
    if (picked === i) {
      setPicked(null);
      return;
    }
    const next = pour(board, picked, i);
    if (!next) {
      setNudge(i);
      setSay(t.blocked);
      setTimeout(() => setNudge(null), 420);
      // Tapping a rack that cannot take the piece picks that rack instead,
      // the way the game does, so a mis-tap never costs a second tap.
      if (board[i].length > 0) setPicked(i);
      else setPicked(null);
      return;
    }
    setHistory((h) => [...h, next]);
    setPicked(null);
    setSay(solved(next) ? fill(t.served, { n: moves + 1 }) : "");
  }

  function undo() {
    if (history.length < 2) return;
    setHistory((h) => h.slice(0, -1));
    setPicked(null);
  }

  function restart() {
    setHistory([deal()]);
    setPicked(null);
    setPeekUsed(false);
    setSay("");
  }

  function lift() {
    if (peekUsed || done) return;
    setPeek(true);
    setPeekUsed(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPeek(false), 1600);
  }

  return (
    <div className="ss-tray" data-done={done || undefined}>
      <div className="ss-tray-head">
        <span>{fill(t.order, { n: ORDER })}</span>
        <span className="ss-tray-count">
          {t.moves} <strong>{moves}</strong>
        </span>
      </div>

      <div className="ss-board" role="group" aria-label={t.title}>
        {board.map((rack, i) => {
          const lidded = rack.filter((p) => !p.up).length;
          const front = rack[rack.length - 1];
          const label = [
            fill(t.rack, { n: i + 1 }),
            front ? t.pieces[front.kind] : t.empty,
            lidded ? fill(t.lidded, { n: lidded }) : "",
          ]
            .filter(Boolean)
            .join(", ");
          return (
            <button
              key={i}
              type="button"
              className="ss-rack"
              aria-label={label}
              aria-pressed={picked === i}
              data-picked={picked === i || undefined}
              data-nudge={nudge === i || undefined}
              onClick={() => tap(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/apps/sushi-sort/board/rack.webp"
                alt=""
                width={187}
                height={512}
                className="ss-rack-wood"
                fetchPriority="high"
              />
              {rack.map((p, slot) => {
                const isFront = slot === rack.length - 1;
                const show = p.up || peek;
                return (
                  <span
                    key={p.id}
                    className="ss-slot"
                    data-slot={slot}
                    data-front={(isFront && picked === i) || undefined}
                  >
                    {show ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key="piece"
                        src={SPRITE[p.kind]}
                        alt=""
                        width={256}
                        height={256}
                        className="ss-piece"
                        data-peek={(!p.up && peek) || undefined}
                      />
                    ) : (
                      <span key="lid" className="ss-lid">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/apps/sushi-sort/board/lid.webp" alt="" width={256} height={156} />
                        <span aria-hidden>?</span>
                      </span>
                    )}
                  </span>
                );
              })}
            </button>
          );
        })}
      </div>

      <div className="ss-tray-bar">
        <button type="button" onClick={undo} disabled={moves === 0}>
          {t.undo}
        </button>
        <button type="button" onClick={lift} disabled={peekUsed || done}>
          {t.lift}
        </button>
        <button type="button" onClick={restart} disabled={moves === 0 && !peekUsed}>
          {t.restart}
        </button>
      </div>

      <p className="ss-tray-state" aria-live="polite">
        {done ? (
          <>
            <strong>{fill(t.served, { n: moves })}</strong> {t.stars[stars - 1]}
          </>
        ) : moves > ORDER ? (
          t.over
        ) : (
          say
        )}
      </p>
    </div>
  );
}
