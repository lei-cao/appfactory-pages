"use client";

// Three heroes, one stage. All three panels are in the HTML (crawlable, and
// readable with JS off); the medallion tabs only choose which one shows.

import { useState } from "react";
import { CARD_IMG, EmberCard, type CardFrame } from "./ember-card";

export interface HeroCopy {
  name: string;
  line: string;
  style: string;
  unlock: string;
  hp: string;
  relic: string;
  relicBody: string;
  cards: { name: string; text: string }[];
}

export interface HeroLabels {
  hp: string;
  relic: string;
  signature: string;
  unlock: string;
}

// Accents from ux-v2 §1.5; signature cards are each hero's Heat payoffs.
const STAGE = [
  {
    key: "emberknight",
    accent: "#f0a030",
    glow: "rgba(240,160,48,0.42)",
    backdrop: "act1",
    cards: [
      { art: "heated-blade", frame: "attack-common", cost: 1, blaze: 3 },
      { art: "whirlwind", frame: "attack-uncommon", cost: 2, blaze: 3 },
      { art: "hammerfall", frame: "attack-rare", cost: 2 },
    ],
  },
  {
    key: "venomblade",
    accent: "#6fbf5e",
    glow: "rgba(111,191,94,0.36)",
    backdrop: "act2",
    cards: [
      { art: "fan-of-needles", frame: "skill-common", cost: 1 },
      { art: "venom-cascade", frame: "skill-uncommon", cost: 1 },
      { art: "venom-surge", frame: "skill-rare", cost: 1, blaze: 4 },
    ],
  },
  {
    key: "ashen_seer",
    accent: "#9fd8d6",
    glow: "rgba(159,216,214,0.34)",
    backdrop: "act3",
    cards: [
      { art: "starfall", frame: "attack-rare", cost: 3, blaze: 5 },
      { art: "pillar-of-ash", frame: "attack-rare", cost: 2, blaze: 5 },
      { art: "supernova", frame: "attack-rare", cost: 3 },
    ],
  },
] as const satisfies readonly {
  key: string;
  accent: string;
  glow: string;
  backdrop: string;
  cards: readonly { art: string; frame: CardFrame; cost: number; blaze?: number }[];
}[];

export function HeroShowcase({ heroes, labels }: { heroes: HeroCopy[]; labels: HeroLabels }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" aria-label={labels.signature} className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-5">
        {heroes.map((h, i) => {
          const s = STAGE[i];
          const on = i === active;
          return (
            <button
              key={s.key}
              type="button"
              role="tab"
              id={`hero-tab-${s.key}`}
              aria-selected={on}
              aria-controls={`hero-panel-${s.key}`}
              onClick={() => setActive(i)}
              className={`group flex flex-col items-center gap-1.5 rounded-xl border px-1 py-2 transition-colors sm:flex-row sm:gap-3 sm:rounded-full sm:py-1.5 sm:pr-5 sm:pl-1.5 ${
                on ? "bg-[#241e2a]" : "border-transparent hover:bg-[#1a1620]"
              }`}
              style={{ borderColor: on ? s.accent : undefined }}
            >
              <img
                src={`${CARD_IMG}/heroes/${s.key}-bust.webp`}
                alt=""
                className={`h-12 w-12 rounded-full border-2 object-cover transition ${on ? "" : "opacity-60 grayscale-[0.6] group-hover:opacity-90"}`}
                style={{ borderColor: on ? s.accent : "#3a3240" }}
              />
              <span
                className="font-display text-base leading-tight font-bold sm:text-2xl"
                style={{ color: on ? s.accent : "#b9ab95" }}
              >
                {h.name}
              </span>
            </button>
          );
        })}
      </div>

      {heroes.map((h, i) => {
        const s = STAGE[i];
        return (
          <div
            key={s.key}
            role="tabpanel"
            id={`hero-panel-${s.key}`}
            aria-labelledby={`hero-tab-${s.key}`}
            hidden={i !== active}
            className="ed-hero-panel mt-8 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
          >
            {/* Stage: painted hero over their act, lit in their colour */}
            <div className="ed-frame relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[5/5] lg:aspect-[4/5]">
              <img
                src={`${CARD_IMG}/acts/${s.backdrop}.webp`}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[50%_45%] opacity-50"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(55% 45% at 50% 58%, ${s.glow}, transparent 70%), linear-gradient(180deg, rgba(18,15,23,0.2), rgba(18,15,23,0.1) 60%, #120f17 98%)`,
                }}
              />
              <img
                src={`${CARD_IMG}/heroes/${s.key}.webp`}
                alt={h.name}
                loading="lazy"
                className="ed-hero-art absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto max-w-none drop-shadow-[0_18px_30px_rgba(0,0,0,0.85)]"
              />
            </div>

            <div>
              <p className="font-display text-3xl leading-snug font-bold sm:text-4xl" style={{ color: s.accent }}>
                {h.line}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#e8dcc8]/90">{h.style}</p>

              <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 border-y border-[#3a3240] py-5 text-base">
                <dt className="text-xs font-extrabold tracking-[0.12em] text-[#e3b04b] uppercase">{labels.hp}</dt>
                <dd className="font-bold">{h.hp}</dd>
                <dt className="text-xs font-extrabold tracking-[0.12em] text-[#e3b04b] uppercase">{labels.relic}</dt>
                <dd>
                  <span className="font-bold">{h.relic}</span>
                  <span className="text-[#b9ab95]"> · {h.relicBody}</span>
                </dd>
                <dt className="text-xs font-extrabold tracking-[0.12em] text-[#e3b04b] uppercase">{labels.unlock}</dt>
                <dd className="font-bold">{h.unlock}</dd>
              </dl>

              <p className="mt-6 text-xs font-extrabold tracking-[0.12em] text-[#e3b04b] uppercase">{labels.signature}</p>
              <ul className="mt-3 grid max-w-md grid-cols-3 gap-3">
                {s.cards.map((c, j) => (
                  <li key={c.art} className={j === 1 ? "sm:-translate-y-2" : ""}>
                    <EmberCard
                      frame={c.frame}
                      art={c.art}
                      cost={c.cost}
                      name={h.cards[j].name}
                      text={h.cards[j].text}
                      blaze={"blaze" in c ? c.blaze : undefined}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
