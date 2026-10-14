"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { fill, type Copy } from "./copy";

// Level 9 of the game, verbatim from apps/arrow-out/assets/levels/pack.json
// (5×7, eight arrows, the first level with bent arrows). Paths run tail →
// head; an arrow leaves when every cell from its head to the edge, in the
// direction its head points, is empty (ArrowRules.scan). Colours are engine
// colours 0–2 of ArrowBoardStyle.defaultArrowColors.
const W = 5;
const H = 7;
const LEVEL: { id: number; color: number; path: [number, number][] }[] = [
  { id: 0, color: 1, path: [[4, 0], [4, 1], [3, 1]] },
  { id: 1, color: 1, path: [[0, 6], [0, 5]] },
  { id: 2, color: 0, path: [[3, 0], [2, 0], [2, 1]] },
  { id: 3, color: 0, path: [[3, 2], [4, 2]] },
  { id: 4, color: 2, path: [[0, 4], [0, 3], [0, 2], [0, 1]] },
  { id: 5, color: 1, path: [[1, 2], [1, 1], [1, 0], [0, 0]] },
  { id: 6, color: 0, path: [[2, 3], [1, 3]] },
  { id: 7, color: 2, path: [[2, 4], [2, 5], [2, 6], [3, 6]] },
];
const COLORS = ["#e8343a", "#2470e0", "#2fb24c"];
const LIGHT = ["#f49a9d", "#92b8f0", "#97d9a6"];
const HEARTS = 3;
const U = 100; // one cell in SVG units
const STAGES = 6; // Moon Gate renovation steps

type Pt = [number, number];
type DirName = "up" | "right" | "down" | "left";

function headingOf(path: [number, number][]): { dx: number; dy: number; name: DirName } {
  const [ax, ay] = path[path.length - 2];
  const [bx, by] = path[path.length - 1];
  const dx = bx - ax;
  const dy = by - ay;
  const name: DirName = dy < 0 ? "up" : dx > 0 ? "right" : dy > 0 ? "down" : "left";
  return { dx, dy, name };
}

const centre = ([x, y]: [number, number]): Pt => [x * U + U / 2, y * U + U / 2];

/** First blocker on the head's ray, or null when the way out is clear. */
function blockerOf(id: number, left: Set<number>): number | null {
  const a = LEVEL[id];
  const h = headingOf(a.path);
  let [x, y] = a.path[a.path.length - 1];
  for (;;) {
    x += h.dx;
    y += h.dy;
    if (x < 0 || y < 0 || x >= W || y >= H) return null;
    for (const o of LEVEL) {
      if (left.has(o.id) && o.path.some(([px, py]) => px === x && py === y)) return o.id;
    }
  }
}

/** The arrow's body with an exit run long enough to leave the board. */
function flightPath(id: number): { pts: Pt[]; body: number; total: number } {
  const a = LEVEL[id];
  const pts = a.path.map(centre);
  const h = headingOf(a.path);
  const body = (a.path.length - 1) * U;
  const run = (Math.max(W, H) + a.path.length + 1) * U;
  const [hx, hy] = pts[pts.length - 1];
  pts.push([hx + h.dx * run, hy + h.dy * run]);
  return { pts, body, total: body + run };
}

/** Points of the polyline between arc lengths [from, to]. */
function slice(pts: Pt[], from: number, to: number): Pt[] {
  const out: Pt[] = [];
  let acc = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i];
    const [bx, by] = pts[i + 1];
    const len = Math.hypot(bx - ax, by - ay);
    const s0 = acc;
    const s1 = acc + len;
    const at = (s: number): Pt => [ax + ((bx - ax) * (s - s0)) / len, ay + ((by - ay) * (s - s0)) / len];
    if (s1 >= from && s0 <= to) {
      if (out.length === 0) out.push(at(Math.max(from, s0)));
      out.push(at(Math.min(to, s1)));
    }
    acc = s1;
  }
  return out;
}

function d(pts: Pt[]): string {
  return pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
}

/** Arrowhead triangle at `tip`'s base point, pointing along (dx, dy). */
function head([x, y]: Pt, dx: number, dy: number): string {
  const len = U * 0.42;
  const half = U * 0.4;
  const back = U * 0.06;
  const tip: Pt = [x + dx * len, y + dy * len];
  const bx = x - dx * back;
  const by = y - dy * back;
  const l: Pt = [bx - dy * half, by + dx * half];
  const r: Pt = [bx + dy * half, by - dx * half];
  return `${tip.join(" ")} ${l.join(" ")} ${r.join(" ")}`;
}

function Arrow({
  id,
  progress,
  shaking,
  flashing,
  label,
  onTap,
}: {
  id: number;
  progress: number | null;
  shaking: boolean;
  flashing: boolean;
  label: string;
  onTap: (id: number) => void;
}) {
  const a = LEVEL[id];
  const h = headingOf(a.path);
  let pts: Pt[];
  let dir = { dx: h.dx, dy: h.dy };
  if (progress === null) {
    pts = a.path.map(centre);
  } else {
    const f = flightPath(id);
    const s = progress * (f.total - f.body);
    pts = slice(f.pts, s, s + f.body);
    const [px, py] = pts[pts.length - 2] ?? pts[0];
    const [qx, qy] = pts[pts.length - 1];
    const len = Math.hypot(qx - px, qy - py) || 1;
    dir = { dx: (qx - px) / len, dy: (qy - py) / len };
  }
  const tip = pts[pts.length - 1];
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onTap(id);
    }
  };
  return (
    <g
      role="button"
      tabIndex={progress === null ? 0 : -1}
      aria-label={label}
      className="ao-arrow"
      data-shake={shaking || undefined}
      data-flash={flashing || undefined}
      style={{ ["--sx" as string]: `${h.dx * 14}px`, ["--sy" as string]: `${h.dy * 14}px` }}
      onClick={() => onTap(id)}
      onKeyDown={onKey}
    >
      {/* Wide invisible stroke: a thumb-sized hit area along the body. */}
      <path d={d(pts)} stroke="transparent" strokeWidth={U} strokeLinecap="round" fill="none" />
      <path className="ao-arrow__rim" d={d(pts)} stroke="#2b1408" strokeWidth={U * 0.62 + 10} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d={d(pts)} stroke={COLORS[a.color]} strokeWidth={U * 0.62} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d={d(pts)} stroke={LIGHT[a.color]} strokeWidth={U * 0.14} strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={0.85} />
      <polygon points={head(tip, dir.dx, dir.dy)} fill={COLORS[a.color]} stroke="#2b1408" strokeWidth={6} strokeLinejoin="round" />
    </g>
  );
}

export function PlayBoard({ t, gateSizes }: { t: Copy["board"]; gateSizes: string }) {
  const [left, setLeft] = useState<Set<number>>(() => new Set(LEVEL.map((a) => a.id)));
  const [hearts, setHearts] = useState(HEARTS);
  const [flying, setFlying] = useState<{ id: number; p: number } | null>(null);
  const [shake, setShake] = useState<{ id: number; blocker: number } | null>(null);
  const [message, setMessage] = useState(t.hint);
  const raf = useRef<number | null>(null);

  const cleared = LEVEL.length - left.size;
  const stage = Math.round((cleared * STAGES) / LEVEL.length);
  const lost = hearts === 0;
  const won = left.size === 0;

  useEffect(() => () => {
    if (raf.current !== null) cancelAnimationFrame(raf.current);
  }, []);

  const finish = useCallback(
    (id: number) => {
      setFlying(null);
      setLeft((prev) => {
        const next = new Set(prev);
        next.delete(id);
        setMessage(next.size === 0 ? t.won : fill(t.cleared, { n: next.size }));
        return next;
      });
    },
    [t],
  );

  const tap = useCallback(
    (id: number) => {
      if (flying || lost || won || !left.has(id)) return;
      const blocker = blockerOf(id, left);
      if (blocker !== null) {
        const h = hearts - 1;
        setHearts(h);
        setShake({ id, blocker });
        setMessage(h === 0 ? t.lost : t.blocked);
        window.setTimeout(() => setShake(null), 420);
        return;
      }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        finish(id);
        return;
      }
      const f = flightPath(id);
      const duration = 380 + (f.total - f.body) / 6;
      const start = performance.now();
      const step = (now: number) => {
        const x = Math.min(1, (now - start) / duration);
        const eased = x * x; // accelerates out, like the game's launch
        setFlying({ id, p: eased });
        if (x < 1) raf.current = requestAnimationFrame(step);
        else finish(id);
      };
      setFlying({ id, p: 0 });
      raf.current = requestAnimationFrame(step);
    },
    [flying, lost, won, left, hearts, t, finish],
  );

  const reset = () => {
    setLeft(new Set(LEVEL.map((a) => a.id)));
    setHearts(HEARTS);
    setShake(null);
    setMessage(t.hint);
  };

  // Pictures up to the current step, plus the next one (preloaded unseen).
  const shown = Array.from({ length: Math.min(stage + 2, STAGES + 1) }, (_, i) => i);

  return (
    <div className="ao-play" id="board">
      <div className="ao-play__panel" data-ui>
        <div className="ao-hud">
          <span className="ao-hud__chip ao-hud__chip--level">
            <small>{t.level}</small>9
          </span>
          <span className="ao-hud__chip">
            <small>{t.arrows}</small>
            {left.size}
          </span>
          <span className="ao-hud__chip">
            <small>{t.hearts}</small>
            {hearts}/{HEARTS}
          </span>
        </div>
        <svg
          className="ao-tray"
          viewBox={`-24 -24 ${W * U + 48} ${H * U + 48}`}
          role="group"
          aria-label={t.boardLabel}
        >
          <defs>
            <clipPath id="ao-tray-clip">
              <rect x={-24} y={-24} width={W * U + 48} height={H * U + 48} rx={34} />
            </clipPath>
          </defs>
          <rect x={-24} y={-24} width={W * U + 48} height={H * U + 48} rx={34} fill="#3a1c0e" />
          {Array.from({ length: W * H }, (_, i) => (
            <rect
              key={i}
              x={(i % W) * U + 5}
              y={Math.floor(i / W) * U + 5}
              width={U - 10}
              height={U - 10}
              rx={14}
              fill={(i + Math.floor(i / W)) % 2 ? "#6c3a20" : "#7a4326"}
            />
          ))}
          <g clipPath="url(#ao-tray-clip)">
            {LEVEL.filter((a) => left.has(a.id)).map((a) => {
              const h = headingOf(a.path);
              return (
                <Arrow
                  key={a.id}
                  id={a.id}
                  progress={flying?.id === a.id ? flying.p : null}
                  shaking={shake?.id === a.id}
                  flashing={shake?.blocker === a.id}
                  label={fill(t.arrowLabel, { colour: t.colours[a.color], dir: t.dirs[h.name] })}
                  onTap={tap}
                />
              );
            })}
          </g>
        </svg>
        <p className="ao-play__status" aria-live="polite">
          {message}
        </p>
        {(won || lost) && (
          <button type="button" className="ao-button ao-button--ink" onClick={reset}>
            {t.again}
          </button>
        )}
      </div>
      <figure className="ao-play__gate">
        <div className="ao-gate">
          {shown.map((i) => (
            <Image
              key={i}
              src={`/apps/arrow-out/courtyard/moon-gate-${i}.webp`}
              alt={i === stage ? fill(t.gateAlt, { n: i }) : ""}
              aria-hidden={i === stage ? undefined : true}
              width={640}
              height={960}
              sizes={gateSizes}
              priority={i === 0}
              className="ao-gate__img"
              data-on={i <= stage || undefined}
            />
          ))}
        </div>
        <figcaption className="ao-play__caption">{fill(t.gate, { n: stage })}</figcaption>
      </figure>
    </div>
  );
}
