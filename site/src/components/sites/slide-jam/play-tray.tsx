"use client";

// The live thing: one real Glossy Blocks level you can play on the page.
// Drag a block (or focus it and press an arrow key); it slides until
// something stops it and leaves through an arch of its own colour. Undo is
// free, as in the game. Without script the same tray renders as a picture.

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { extent, LEVEL, reach, STEP, type Block, type Side } from "./level";
import { Tray, U } from "./tray";
import type { SlideJamCopy } from "./copy";
import { fill } from "./copy";

interface Drag {
  id: string;
  pointer: number;
  x0: number;
  y0: number;
  axis: "x" | "y" | null;
  /** Current offset in viewBox units along the axis. */
  d: number;
  min: number;
  max: number;
  exitLo: boolean;
  exitHi: boolean;
}

const KEYS: Record<string, Side> = { ArrowUp: "top", ArrowRight: "right", ArrowDown: "bottom", ArrowLeft: "left" };

export function PlayTray({ t, label }: { t: SlideJamCopy["tray"]; label: string }) {
  const [blocks, setBlocks] = useState<Block[]>(LEVEL.blocks);
  const [history, setHistory] = useState<Block[][]>([]);
  const [moves, setMoves] = useState(0);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [leaving, setLeaving] = useState<{ id: string; side: Side } | null>(null);
  const [live, setLive] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => setLive(true), []);

  const unitsPerPx = () => {
    const el = svgRef.current;
    if (!el) return 1;
    const box = el.getBoundingClientRect();
    return el.viewBox.baseVal.width / box.width;
  };

  const commit = useCallback(
    (next: Block[]) => {
      setHistory((h) => [...h, blocks]);
      setBlocks(next);
      setMoves((m) => m + 1);
    },
    [blocks],
  );

  // A block slides out: animate it through the arch, then take it off the tray.
  const leave = useCallback(
    (b: Block, side: Side, steps: number) => {
      const [dr, dc] = STEP[side];
      const moved = { ...b, row: b.row + dr * steps, col: b.col + dc * steps };
      setHistory((h) => [...h, blocks]);
      setMoves((m) => m + 1);
      setBlocks((bs) => bs.map((x) => (x.id === b.id ? moved : x)));
      setLeaving({ id: b.id, side });
      window.setTimeout(() => {
        setBlocks((bs) => bs.filter((x) => x.id !== b.id));
        setLeaving(null);
      }, 260);
    },
    [blocks],
  );

  const onPointerDown = (b: Block) => (e: PointerEvent<SVGGElement>) => {
    if (leaving) return;
    e.preventDefault();
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    setDrag({ id: b.id, pointer: e.pointerId, x0: e.clientX, y0: e.clientY, axis: null, d: 0, min: 0, max: 0, exitLo: false, exitHi: false });
  };

  const onPointerMove = (b: Block) => (e: PointerEvent<SVGGElement>) => {
    if (!drag || drag.id !== b.id || drag.pointer !== e.pointerId) return;
    const k = unitsPerPx();
    const dx = (e.clientX - drag.x0) * k;
    const dy = (e.clientY - drag.y0) * k;
    let { axis, min, max, exitLo, exitHi } = drag;
    if (!axis) {
      if (Math.hypot(dx, dy) < 14) return;
      axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      const lo = reach(LEVEL, b, blocks, axis === "x" ? "left" : "top");
      const hi = reach(LEVEL, b, blocks, axis === "x" ? "right" : "bottom");
      min = -lo.steps * U - (lo.exits ? U * 0.8 : 0);
      max = hi.steps * U + (hi.exits ? U * 0.8 : 0);
      exitLo = lo.exits;
      exitHi = hi.exits;
    }
    const raw = axis === "x" ? dx : dy;
    setDrag({ ...drag, axis, min, max, exitLo, exitHi, d: Math.max(min, Math.min(max, raw)) });
  };

  const onPointerUp = (b: Block) => () => {
    if (!drag || drag.id !== b.id) return;
    const { axis, d } = drag;
    setDrag(null);
    if (!axis) return;
    const lo: Side = axis === "x" ? "left" : "top";
    const hi: Side = axis === "x" ? "right" : "bottom";
    const side = d < 0 ? lo : hi;
    const r = reach(LEVEL, b, blocks, side);
    const cells = Math.abs(d) / U;
    if (r.exits && cells > r.steps + 0.35) {
      leave(b, side, r.steps);
      return;
    }
    const steps = Math.min(r.steps, Math.round(cells));
    if (steps === 0) return;
    const [dr, dc] = STEP[side];
    commit(blocks.map((x) => (x.id === b.id ? { ...x, row: x.row + dr * steps, col: x.col + dc * steps } : x)));
  };

  const onKey = (b: Block) => (e: KeyboardEvent<SVGGElement>) => {
    const side = KEYS[e.key];
    if (!side || leaving) return;
    e.preventDefault();
    const r = reach(LEVEL, b, blocks, side);
    if (r.exits) return leave(b, side, r.steps);
    if (r.steps === 0) return;
    const [dr, dc] = STEP[side];
    commit(blocks.map((x) => (x.id === b.id ? { ...x, row: x.row + dr * r.steps, col: x.col + dc * r.steps } : x)));
  };

  const undo = () => {
    if (!history.length || leaving) return;
    setBlocks(history[history.length - 1]);
    setHistory((h) => h.slice(0, -1));
    // Undo is free and, on this tray, always gives the move back.
    setMoves((m) => Math.max(0, m - 1));
  };

  const reset = () => {
    setBlocks(LEVEL.blocks);
    setHistory([]);
    setMoves(0);
    setLeaving(null);
  };

  const won = blocks.length === 0;

  return (
    <div className="sj-play" data-live={live || undefined}>
      <dl className="sj-play__hud" data-ui>
        <div>
          <dt>{t.moves}</dt>
          <dd>{moves}</dd>
        </div>
        <div>
          <dt>{t.par}</dt>
          <dd>{LEVEL.par}</dd>
        </div>
        <div>
          <dt>{t.left}</dt>
          <dd>
            {blocks.length}/{LEVEL.blocks.length}
          </dd>
        </div>
      </dl>
      <Tray
        ref={svgRef}
        level={LEVEL}
        blocks={blocks}
        label={label}
        className="sj-play__tray"
        blockProps={(b) => {
          const dragging = drag?.id === b.id && drag.axis;
          const out = leaving?.id === b.id ? leaving.side : null;
          let x = 0;
          let y = 0;
          if (dragging) {
            if (drag.axis === "x") x = drag.d;
            else y = drag.d;
          }
          if (out) {
            const [dr, dc] = STEP[out];
            const far = (extent(b, out) + 0.6) * U;
            x = dc * far;
            y = dr * far;
          }
          return {
            role: "button",
            tabIndex: live ? 0 : -1,
            "aria-label": fill(t.blockLabel, { name: t.names[b.colour] ?? b.colour }),
            className: "sj-block",
            "data-dragging": dragging ? "" : undefined,
            "data-leaving": out ? "" : undefined,
            style: { transform: `translate(${b.col * U + x}px, ${b.row * U + y}px)` },
            onPointerDown: onPointerDown(b),
            onPointerMove: onPointerMove(b),
            onPointerUp: onPointerUp(b),
            onPointerCancel: () => setDrag(null),
            onKeyDown: onKey(b),
          };
        }}
      />
      <div className="sj-play__bar">
        <button type="button" className="sj-undo" onClick={undo} disabled={!history.length || won}>
          <svg viewBox="0 0 24 24" aria-hidden width="22" height="22">
            <path d="M9 5 4 10l5 5M4.5 10H14a6 6 0 0 1 0 12h-3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{t.undo}</span>
          <span className="sj-undo__free">{t.free}</span>
        </button>
        <button type="button" className="sj-reset" onClick={reset} disabled={moves === 0 && !history.length}>
          {t.reset}
        </button>
      </div>
      <p className="sj-play__note" aria-live="polite">
        {won ? `${fill(t.won, { n: moves })} ${moves <= LEVEL.par ? t.stars3 : t.starsLess}` : t.hint}
      </p>
    </div>
  );
}
