"use client";

// The live thing: one real turn of Ember Deck, playable with a thumb. Real
// cards with their shipped numbers (app repo assets/content/cards.json) and
// the engine's rule: every card played adds 1 Heat, and Blaze and "per Heat"
// read the Heat *before* the card's own +1. The Ogre's HP equals the best
// possible turn, so only a perfect sequence finishes it. Heat changes are
// broadcast as an `ember:heat` window event so the page's Heat bands follow.
//
// Without script the table still renders the whole hand, the Ogre and the
// hint; only the tapping needs JavaScript.

import { useEffect, useMemo, useState } from "react";
import type { TurnCardId, TurnCopy } from "@/content/ember-deck";

const V2 = "/apps/ember-deck/v2";

type Frame = "attack-common" | "attack-rare" | "starter";

interface TurnCard {
  id: TurnCardId;
  frame: Frame;
  art: string;
  cost: number;
  dmg: number;
  perHeat?: number;
  blaze?: { n: number; dmg: number };
}

// Hand order puts the finisher first on purpose: the tempting wrong play.
const HAND: TurnCard[] = [
  { id: "hammer", frame: "attack-rare", art: "hammerfall", cost: 2, dmg: 10, perHeat: 2 },
  { id: "slice", frame: "attack-common", art: "slice", cost: 0, dmg: 4, blaze: { n: 2, dmg: 4 } },
  { id: "strike", frame: "starter", art: "strike", cost: 1, dmg: 6 },
  { id: "jab", frame: "attack-common", art: "quick-jab", cost: 0, dmg: 5 },
  { id: "blade", frame: "attack-common", art: "heated-blade", cost: 1, dmg: 6, blaze: { n: 3, dmg: 4 } },
];

const ENERGY = 3;

function hit(card: TurnCard, heatBefore: number) {
  const blazed = !!card.blaze && heatBefore >= card.blaze.n;
  const amount = card.dmg + (card.perHeat ?? 0) * heatBefore + (blazed ? card.blaze!.dmg : 0);
  return { amount, blazed };
}

/** Best total over every affordable ordering of every subset of the hand. */
function solve(): { best: number; order: TurnCardId[] } {
  let best = 0;
  let order: TurnCardId[] = [];
  const walk = (left: TurnCard[], energy: number, heat: number, total: number, seq: TurnCardId[]) => {
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

function fill(t: string, v: Record<string, string | number>) {
  return t.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ""));
}

function flameFor(heat: number) {
  if (heat >= 5) return "heat-flame-c";
  if (heat >= 3) return "heat-flame-b";
  return "heat-flame-a";
}

export function Turn({ copy }: { copy: TurnCopy }) {
  const { best, order: bestOrder } = useMemo(solve, []);
  const [played, setPlayed] = useState<TurnCardId[]>([]);
  const [hits, setHits] = useState<{ amount: number; blazed: boolean; key: number }[]>([]);

  const heat = played.length;
  const spent = played.reduce((s, id) => s + HAND.find((c) => c.id === id)!.cost, 0);
  const energy = ENERGY - spent;
  const dealt = hits.reduce((s, h) => s + h.amount, 0);
  const hp = Math.max(0, best - dealt);
  const inHand = HAND.filter((c) => !played.includes(c.id));
  const over = inHand.every((c) => c.cost > energy);
  const last = hits[hits.length - 1];

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("ember:heat", { detail: heat }));
  }, [heat]);

  function play(card: TurnCard) {
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
    <div className="ed-turn" data-ui role="group" aria-label={copy.label} data-heat={Math.min(heat, 5)}>
      <img
        src={`${V2}/acts/act1.webp`}
        alt=""
        width={1170}
        height={2532}
        className="ed-turn-bg"
        fetchPriority="high"
      />

      <div className="ed-turn-foe" data-focus-target="foe">
        <div className="ed-turn-ogre-wrap">
          <img
            key={hits.length}
            src={`${V2}/enemies/e10.webp`}
            alt={copy.enemy}
            width={240}
            height={240}
            className={`ed-turn-ogre ${hits.length ? "is-hit" : ""} ${hp === 0 ? "is-down" : ""}`}
          />
          {last && (
            <span key={`n${last.key}`} className={`ed-turn-pop ${last.blazed ? "is-blaze" : ""}`} aria-hidden>
              {last.amount}
            </span>
          )}
          {last?.blazed && (
            <span key={`b${last.key}`} className="ed-turn-stamp" aria-hidden>
              {copy.blaze}
            </span>
          )}
        </div>
        <p className="ed-turn-name">{copy.enemy}</p>
        <div className="ed-turn-hp">
          <span className="ed-turn-hpbar" aria-hidden>
            <span style={{ transform: `scaleX(${hp / best})` }} />
          </span>
          <span className="ed-turn-hpnum">
            {hp}/{best}
          </span>
        </div>
      </div>

      <div className="ed-turn-meters">
        <div className="ed-turn-heat" data-focus-target="heat" aria-label={`${copy.heat} ${heat}`}>
          <img
            src={`${V2}/fx/${flameFor(heat)}.webp`}
            alt=""
            width={220}
            height={330}
            className="ed-turn-flame"
            style={{ transform: `scale(${0.8 + Math.min(heat, 5) * 0.09})` }}
          />
          <span className="ed-turn-heatlabel">{copy.heat}</span>
          <span key={heat} className="ed-turn-heatnum">
            {heat}
          </span>
        </div>
        <div className="ed-turn-energy" aria-label={`${copy.energy} ${energy}/${ENERGY}`}>
          {Array.from({ length: ENERGY }, (_, i) => (
            <img
              key={i}
              src={`${V2}/fx/${i < energy ? "energy-orb-full" : "energy-orb-empty"}.webp`}
              alt=""
              width={96}
              height={96}
              className={i < energy ? "" : "is-spent"}
            />
          ))}
          <span>{copy.energy}</span>
        </div>
      </div>

      <ul className="ed-turn-hand" data-focus-target="hand">
        {HAND.map((card) => {
          const used = played.includes(card.id);
          const affordable = card.cost <= energy;
          const preview = hit(card, heat);
          const c = copy.cards[card.id];
          const lit = !!card.blaze && heat >= card.blaze.n;
          return (
            <li key={card.id} className={used ? "is-used" : ""}>
              <button
                type="button"
                onClick={() => play(card)}
                disabled={used || !affordable}
                aria-label={fill(copy.playLabel, { name: c.name, cost: card.cost, dmg: preview.amount })}
                className="ed-card"
                data-lit={lit || undefined}
              >
                <span className="ed-card-art">
                  <img src={`${V2}/art/${card.art}.webp`} alt="" width={320} height={400} loading="lazy" />
                </span>
                <img
                  src={`${V2}/cards/frame-${card.frame}.webp`}
                  alt=""
                  width={400}
                  height={560}
                  loading="lazy"
                  className="ed-card-frame"
                />
                <span className="ed-card-gem" aria-hidden>
                  {card.cost}
                </span>
                <span className="ed-card-name" aria-hidden>
                  {c.name}
                </span>
                {card.blaze && (
                  <span className="ed-card-pip" data-focus-target="blaze" aria-hidden>
                    {card.blaze.n}
                  </span>
                )}
              </button>
              <span className={`ed-card-dmg ${preview.blazed || (card.perHeat && heat) ? "is-up" : ""}`}>
                {preview.amount}
                {copy.dmgSuffix}
              </span>
              <span className="ed-card-text">{c.text}</span>
            </li>
          );
        })}
      </ul>

      <div className="ed-turn-status" aria-live="polite">
        {result ? (
          <div>
            <p className={dealt >= best ? "is-win" : ""}>{result}</p>
            {dealt < best && (
              <p className="ed-turn-best">
                {copy.bestOrder} {bestOrder.map((id) => copy.cards[id].name).join(" → ")}
              </p>
            )}
          </div>
        ) : (
          <p>{copy.hint}</p>
        )}
        {(played.length > 0 || result) && (
          <button type="button" onClick={reset} className="ed-turn-reset">
            {result ? copy.again : copy.reset}
          </button>
        )}
      </div>
    </div>
  );
}
