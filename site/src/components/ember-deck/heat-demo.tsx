"use client";

// "Try a turn": the Heat rule as a playable hand. Real cards with their
// shipped numbers (app repo assets/content/cards.json) and the engine's
// exact rule (design-v2 §2.1): every card played adds 1 Heat, and Blaze and
// "per Heat" read the Heat *before* the card's own +1. The Ogre's HP equals
// the best possible turn, so only a perfect sequence finishes it.

import { useMemo, useState } from "react";
import { CARD_IMG, EmberCard, type CardFrame } from "./ember-card";

type CardId = "hammer" | "slice" | "strike" | "jab" | "blade";

interface DemoCard {
  id: CardId;
  frame: CardFrame;
  art: string;
  cost: number;
  dmg: number;
  perHeat?: number;
  blaze?: { n: number; dmg: number };
}

// Hand order puts the finisher first on purpose: the tempting wrong play.
const HAND: DemoCard[] = [
  { id: "hammer", frame: "attack-rare", art: "hammerfall", cost: 2, dmg: 10, perHeat: 2 },
  { id: "slice", frame: "attack-common", art: "slice", cost: 0, dmg: 4, blaze: { n: 2, dmg: 4 } },
  { id: "strike", frame: "starter", art: "strike", cost: 1, dmg: 6 },
  { id: "jab", frame: "attack-common", art: "quick-jab", cost: 0, dmg: 5 },
  { id: "blade", frame: "attack-common", art: "heated-blade", cost: 1, dmg: 6, blaze: { n: 3, dmg: 4 } },
];

const ENERGY = 3;
const OGRE_MAX_HP = 160;

function hit(card: DemoCard, heatBefore: number) {
  const blazed = !!card.blaze && heatBefore >= card.blaze.n;
  const amount =
    card.dmg + (card.perHeat ?? 0) * heatBefore + (blazed ? card.blaze!.dmg : 0);
  return { amount, blazed };
}

/** Best total over every affordable ordering of every subset of the hand. */
function solve(): { best: number; order: CardId[] } {
  let best = 0;
  let order: CardId[] = [];
  const walk = (left: DemoCard[], energy: number, heat: number, total: number, seq: CardId[]) => {
    if (total > best) {
      best = total;
      order = seq;
    }
    left.forEach((c, i) => {
      if (c.cost > energy) return;
      walk(
        left.filter((_, j) => j !== i),
        energy - c.cost,
        heat + 1,
        total + hit(c, heat).amount,
        [...seq, c.id],
      );
    });
  };
  walk(HAND, ENERGY, 0, 0, []);
  return { best, order };
}

export interface HeatDemoCopy {
  enemy: string;
  heat: string;
  energy: string;
  hint: string;
  blaze: string;
  dmgSuffix: string;
  playLabel: string;
  reset: string;
  again: string;
  perfect: string;
  short: string;
  bestOrder: string;
  cards: Record<CardId, { name: string; text: string }>;
}

function fill(t: string, v: Record<string, string | number>) {
  return t.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ""));
}

function flameFor(heat: number) {
  if (heat >= 5) return "heat-flame-c";
  if (heat >= 3) return "heat-flame-b";
  return "heat-flame-a";
}

export function HeatDemo({ copy }: { copy: HeatDemoCopy }) {
  const { best, order: bestOrder } = useMemo(solve, []);
  const [played, setPlayed] = useState<CardId[]>([]);
  const [hits, setHits] = useState<{ amount: number; blazed: boolean; key: number }[]>([]);

  const heat = played.length;
  const spent = played.reduce((s, id) => s + HAND.find((c) => c.id === id)!.cost, 0);
  const energy = ENERGY - spent;
  const dealt = hits.reduce((s, h) => s + h.amount, 0);
  const hp = Math.max(0, best - dealt);
  const inHand = HAND.filter((c) => !played.includes(c.id));
  const over = inHand.every((c) => c.cost > energy);
  const last = hits[hits.length - 1];

  function play(card: DemoCard) {
    if (card.cost > energy || played.includes(card.id)) return;
    const h = hit(card, heat);
    setHits((xs) => [...xs, { ...h, key: xs.length }]);
    setPlayed((xs) => [...xs, card.id]);
  }

  function reset() {
    setPlayed([]);
    setHits([]);
  }

  const result = !over
    ? null
    : dealt >= best
      ? fill(copy.perfect, { dmg: dealt })
      : fill(copy.short, { dmg: dealt, best });

  return (
    <div className="ed-demo ed-frame relative overflow-hidden rounded-xl">
      <img
        src={`${CARD_IMG}/acts/act1.webp`}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[50%_40%] opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,15,23,0.35),rgba(18,15,23,0.2)_40%,rgba(18,15,23,0.92)_72%)]" />

      <div className="relative px-4 pt-6 pb-5 sm:px-8 sm:pt-8 sm:pb-8">
        {/* Enemy */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              key={hits.length}
              src={`${CARD_IMG}/enemies/e10.webp`}
              alt=""
              className={`h-36 w-36 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.8)] sm:h-56 sm:w-56 ${
                hits.length ? "ed-shake" : ""
              } ${hp === 0 ? "ed-fall" : ""}`}
            />
            {last && (
              <span
                key={`n${last.key}`}
                className={`ed-pop font-display pointer-events-none absolute top-6 left-1/2 text-5xl font-black ${
                  last.blazed ? "text-[#ffd36b]" : "text-[#fff4d6]"
                }`}
                aria-hidden
              >
                {last.amount}
              </span>
            )}
            {last?.blazed && (
              <span
                key={`b${last.key}`}
                className="ed-stamp font-display pointer-events-none absolute -top-2 left-1/2 rounded-sm border-2 border-[#ff7a1a] bg-[#2a1a16]/90 px-3 py-0.5 text-xl font-black tracking-wide text-[#ff9a2e]"
                aria-hidden
              >
                {copy.blaze}
              </span>
            )}
          </div>
          <p className="mt-1 text-base font-extrabold">{copy.enemy}</p>
          <div className="mt-1.5 flex w-48 items-center gap-2">
            <div className="h-2.5 flex-1 overflow-hidden rounded-full border border-[#5a4c44] bg-[#120f17]">
              <div
                className="h-full bg-[linear-gradient(90deg,#8a1c1c,#d2412a)] transition-[width] duration-500"
                style={{ width: `${(hp / OGRE_MAX_HP) * 100}%` }}
              />
            </div>
            <span className="text-sm font-bold tabular-nums text-[#e8dcc8]">
              {hp}/{OGRE_MAX_HP}
            </span>
          </div>
        </div>

        {/* Heat + energy */}
        <div className="mx-auto mt-5 flex max-w-3xl items-end justify-between gap-4">
          <div className="flex items-end gap-2" aria-label={`${copy.heat} ${heat}`}>
            <img
              src={`${CARD_IMG}/fx/${flameFor(heat)}.webp`}
              alt=""
              className="ed-breathe w-12 origin-bottom transition-all duration-300 sm:w-14"
              style={{
                filter: heat === 0 ? "grayscale(0.8) brightness(0.55)" : undefined,
                transform: `scale(${1 + Math.min(heat, 5) * 0.09})`,
              }}
            />
            <div className="leading-none">
              <span className="block text-xs font-extrabold tracking-[0.12em] text-[#e3b04b] uppercase">
                {copy.heat}
              </span>
              <span
                key={heat}
                className="ed-tick font-display block text-5xl font-black tabular-nums"
                style={{ color: heat >= 5 ? "#ffd36b" : heat >= 3 ? "#ff9a2e" : heat ? "#e0701e" : "#8a7a6c" }}
              >
                {heat}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5" aria-label={`${copy.energy} ${energy}/${ENERGY}`}>
            {Array.from({ length: ENERGY }, (_, i) => (
              <img
                key={i}
                src={`${CARD_IMG}/fx/${i < energy ? "energy-orb-full" : "energy-orb-empty"}.webp`}
                alt=""
                className={`h-9 w-9 transition-opacity sm:h-10 sm:w-10 ${i < energy ? "" : "opacity-35 grayscale"}`}
              />
            ))}
            <span className="ml-1 text-xs font-extrabold tracking-[0.12em] text-[#9fd8d6] uppercase">
              {copy.energy}
            </span>
          </div>
        </div>

        {/* Hand */}
        <ul className="mx-auto mt-4 grid max-w-3xl grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-5 sm:gap-4">
          {HAND.map((card) => {
            const used = played.includes(card.id);
            const affordable = card.cost <= energy;
            const preview = hit(card, heat);
            const c = copy.cards[card.id];
            return (
              <li key={card.id} className="relative">
                <button
                  type="button"
                  onClick={() => play(card)}
                  disabled={used || !affordable}
                  aria-label={fill(copy.playLabel, { name: c.name, cost: card.cost, dmg: preview.amount })}
                  className={`ed-hand-card block w-full rounded-md text-left transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd36b] ${
                    used
                      ? "pointer-events-none -translate-y-6 scale-90 opacity-0"
                      : affordable
                        ? "cursor-pointer hover:-translate-y-2"
                        : "cursor-not-allowed opacity-45 saturate-50"
                  }`}
                >
                  <EmberCard
                    frame={card.frame}
                    art={card.art}
                    name={c.name}
                    cost={card.cost}
                    text={c.text}
                    blaze={card.blaze?.n}
                    lit={!!card.blaze && heat >= card.blaze.n}
                  />
                </button>
                {!used && (
                  <span
                    className={`mt-1.5 block text-center text-xs font-extrabold tabular-nums sm:text-sm ${
                      preview.blazed || (card.perHeat && heat) ? "text-[#ffd36b]" : "text-[#b9ab95]"
                    }`}
                  >
                    {preview.amount}
                    {copy.dmgSuffix}
                  </span>
                )}
                {!used && (
                  <span className="mt-0.5 block text-center text-[11px] leading-tight text-[#b9ab95] sm:hidden">{c.text}</span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Status line */}
        <div className="mx-auto mt-4 flex min-h-12 max-w-3xl flex-wrap items-center justify-between gap-3" aria-live="polite">
          {result ? (
            <div>
              <p className={`text-lg font-extrabold ${dealt >= best ? "text-[#ffd36b]" : "text-[#e8dcc8]"}`}>
                {result}
              </p>
              {dealt < best && (
                <p className="text-sm text-[#b9ab95]">
                  {copy.bestOrder} {bestOrder.map((id) => copy.cards[id].name).join(" → ")}
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-[#b9ab95] sm:text-base">{copy.hint}</p>
          )}
          {(played.length > 0 || result) && (
            <button
              type="button"
              onClick={reset}
              className="rounded-md border border-[#9c6b3a] bg-[#2a1a16] px-4 py-2 text-sm font-extrabold text-[#ffd36b] transition-colors hover:border-[#f0a030]"
            >
              {result ? copy.again : copy.reset}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
