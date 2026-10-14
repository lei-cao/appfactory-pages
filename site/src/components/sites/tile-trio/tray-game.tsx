"use client";

// The page's one live thing: a twelve-tile board in the game's own rules.
// Tap a tile nothing covers, it slides into a 7-slot tray, three alike
// vanish, and every cleared set restores the Tea Room behind the board one
// step (the game's own room art, steps 0 → 6). Seven tiles with no match
// ends the round. Without script the board still renders, still and
// readable, next to a line that points to the App Store.

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { MotifKey, SiteCopy } from "./copy";

type Tile = { id: number; motif: MotifKey; x: number; y: number; z: number };

// Positions in half-tile units; a tile covers a 2×2 block of them. Each
// higher layer covers parts of the tiles below, as on the game's boards.
const TILES: Tile[] = [
  { id: 0, motif: "teacup", x: 0, y: 0, z: 0 },
  { id: 1, motif: "cat", x: 2, y: 0, z: 0 },
  { id: 2, motif: "koi", x: 4, y: 0, z: 0 },
  { id: 3, motif: "lantern", x: 6, y: 0, z: 0 },
  { id: 4, motif: "cat", x: 0, y: 2, z: 0 },
  { id: 5, motif: "koi", x: 2, y: 2, z: 0 },
  { id: 6, motif: "lantern", x: 4, y: 2, z: 0 },
  { id: 7, motif: "cat", x: 6, y: 2, z: 0 },
  { id: 8, motif: "koi", x: 1, y: 1, z: 1 },
  { id: 9, motif: "teacup", x: 3, y: 1, z: 1 },
  { id: 10, motif: "lantern", x: 5, y: 1, z: 1 },
  { id: 11, motif: "teacup", x: 2, y: 1, z: 2 },
];

const SETS = 4;
const SLOTS = 7;
/** Tea Room art step shown after 0…4 cleared sets. */
const ROOM_STEPS = [0, 2, 3, 5, 6];

const overlaps = (a: Tile, b: Tile) => Math.abs(a.x - b.x) < 2 && Math.abs(a.y - b.y) < 2;

type Phase = "play" | "won" | "full";

export function TrayGame({
  copy,
  appStoreUrl,
  appStoreLabel,
  appStoreText,
}: {
  copy: SiteCopy["play"];
  appStoreUrl?: string;
  appStoreLabel: string;
  appStoreText: string;
}) {
  const [board, setBoard] = useState<number[]>(() => TILES.map((t) => t.id));
  const [tray, setTray] = useState<number[]>([]);
  const [clearing, setClearing] = useState<number[]>([]);
  const [sets, setSets] = useState(0);
  const [phase, setPhase] = useState<Phase>("play");
  const [status, setStatus] = useState(copy.status.start);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onBoard = new Set(board);
  const isFree = (t: Tile) =>
    !TILES.some((o) => o.id !== t.id && onBoard.has(o.id) && o.z > t.z && overlaps(o, t));

  const pick = useCallback(
    (t: Tile) => {
      if (phase !== "play" || clearing.length > 0) return;
      // Same-motif tiles sit together in the tray, as in the game.
      const last = tray.reduce((at, id, i) => (TILES[id].motif === t.motif ? i : at), -1);
      const next = [...tray];
      next.splice(last === -1 ? next.length : last + 1, 0, t.id);
      const nextBoard = board.filter((id) => id !== t.id);
      setBoard(nextBoard);
      setTray(next);

      const trio = next.filter((id) => TILES[id].motif === t.motif);
      if (trio.length === 3) {
        setClearing(trio);
        timer.current = setTimeout(() => {
          setTray((cur) => cur.filter((id) => !trio.includes(id)));
          setClearing([]);
          // Picks are locked while a set clears, so `sets` is current here.
          const n = sets + 1;
          setSets(n);
          if (n === SETS) {
            setPhase("won");
            setStatus(copy.status.won);
          } else {
            setStatus(copy.status.cleared);
          }
        }, 320);
      } else if (next.length >= SLOTS) {
        setPhase("full");
        setStatus(copy.status.full);
      }
    },
    [board, tray, sets, phase, clearing.length, copy.status],
  );

  const reset = () => {
    if (timer.current) clearTimeout(timer.current);
    setBoard(TILES.map((t) => t.id));
    setTray([]);
    setClearing([]);
    setSets(0);
    setPhase("play");
    setStatus(copy.status.start);
  };

  const label = (t: Tile, free: boolean) =>
    free ? copy.motif[t.motif] : `${copy.motif[t.motif]} (${copy.covered})`;

  return (
    <div className="tt-show" data-phase={phase}>
      <div className="tt-plate" data-ui>
        <p className="tt-readouts" aria-hidden>
          <span>
            {copy.tiles} <b>{board.length}</b>
          </span>
          <span>
            {copy.tray} <b>{tray.length}/{SLOTS}</b>
          </span>
          <span>
            {copy.room} <b>{sets}/{SETS}</b>
          </span>
        </p>
        {ROOM_STEPS.map((step, i) => (
          <Image
            key={step}
            src={`/apps/tile-trio/room-tea-room-${step}.webp`}
            alt={i === sets ? copy.roomAlt.replace("{n}", String(step)) : ""}
            aria-hidden={i === sets ? undefined : true}
            width={900}
            height={1350}
            sizes="(min-width: 900px) 46vw, 100vw"
            priority={i === 0}
            className={`tt-plate__room${i === sets ? " is-on" : ""}`}
          />
        ))}
        <div className="tt-board" role="group" aria-label={copy.title}>
          {TILES.map((t) => {
            if (!onBoard.has(t.id)) return null;
            const free = isFree(t);
            return (
              <button
                key={t.id}
                type="button"
                className={`tt-tile${free ? "" : " is-covered"}`}
                style={{ "--x": t.x, "--y": t.y, "--z": t.z } as CSSProperties}
                aria-label={label(t, free)}
                aria-disabled={!free || phase !== "play" || undefined}
                onClick={() => (free ? pick(t) : setStatus(copy.status.blocked))}
              >
                <Image src={`/apps/tile-trio/motif-${t.motif}.webp`} alt="" width={256} height={256} sizes="96px" />
              </button>
            );
          })}
        </div>
        <ol className="tt-tray" aria-label={`${copy.tray} ${tray.length}/${SLOTS}`}>
          {Array.from({ length: SLOTS }, (_, i) => {
            const id = tray[i];
            return (
              <li key={i} className="tt-slot">
                {id !== undefined && (
                  <span
                    key={id}
                    className={`tt-slot__tile${clearing.includes(id) ? " is-clearing" : ""}`}
                  >
                    <Image
                      src={`/apps/tile-trio/motif-${TILES[id].motif}.webp`}
                      alt={copy.motif[TILES[id].motif]}
                      width={256}
                      height={256}
                      sizes="64px"
                    />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="tt-show__text">
        <div className="tt-show__mid">
          <h2 id="play-title" className="tt-head">
            {copy.title}
          </h2>
          <p className="tt-show__body">{copy.body}</p>
          <p className="tt-show__status" role="status" aria-live="polite">
            {status}
          </p>
          <noscript>
            <p className="tt-show__status">{copy.noscript}</p>
          </noscript>
        </div>
        <div className="tt-cells">
          {appStoreUrl && (
            <a
              href={appStoreUrl}
              data-app="tile-trio"
              aria-label={appStoreLabel}
              className="tt-cell tt-cell--ink"
            >
              {appStoreText}
            </a>
          )}
          <button type="button" className="tt-cell tt-cell--tone" onClick={reset}>
            {copy.again}
          </button>
        </div>
      </div>
    </div>
  );
}
