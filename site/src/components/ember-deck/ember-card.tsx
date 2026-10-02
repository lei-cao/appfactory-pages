// A playing card drawn the way the game draws it: painted art behind the
// transparent window of a forged frame, cost gem top-left, name on the
// ribbon, rules text on the slate box. Frame windows (800×1120 source):
// gem centre (11%, 8.5%), ribbon x 26–92% y 3–17%, art x 4–96% y 18–62%,
// text x 9–91% y 64–94%. Plain markup, so both the server page and the
// client Heat demo can render it.

import type { ReactNode } from "react";

export const CARD_IMG = "/apps/ember-deck/v2";

export type CardFrame =
  | "attack-common"
  | "attack-uncommon"
  | "attack-rare"
  | "skill-common"
  | "skill-uncommon"
  | "skill-rare"
  | "starter";

export function EmberCard({
  frame,
  art,
  name,
  cost,
  text,
  blaze,
  lit = false,
  className = "",
}: {
  frame: CardFrame;
  /** File stem under v2/art/. */
  art: string;
  name: string;
  cost: number;
  text: ReactNode;
  /** Blaze threshold, drawn as a pip on the right edge of the ribbon. */
  blaze?: number;
  /** Heat has reached the Blaze number: the pip glows. */
  lit?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`ed-card relative aspect-[5/7] select-none ${className}`}
      data-lit={lit || undefined}
      style={{ containerType: "inline-size" }}
    >
      {/* art sits behind the frame's transparent window */}
      <div className="absolute top-[18%] right-[4%] bottom-[38%] left-[4%] overflow-hidden bg-[#120f17]">
        <img
          src={`${CARD_IMG}/art/${art}.webp`}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[50%_35%]"
        />
      </div>
      <img
        src={`${CARD_IMG}/cards/frame-${frame}.webp`}
        alt=""
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <span
        className="ed-gem absolute top-[2.2%] left-[2.6%] flex aspect-square w-[17%] items-center justify-center rounded-full font-black text-[#fff4d6]"
        style={{ fontSize: "max(11cqw, 11px)" }}
      >
        {cost}
      </span>
      <span
        className="absolute top-[3%] right-[8%] left-[27%] flex h-[14%] items-center justify-center overflow-hidden px-[2%] text-center leading-[1.05] font-extrabold text-[#fff4d6] [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]"
        style={{ fontSize: "max(8.4cqw, 10px)" }}
      >
        {name}
      </span>
      {blaze !== undefined && (
        <span
          className="ed-pip absolute top-[11%] right-[2%] flex aspect-square w-[15%] items-center justify-center rounded-full font-black"
          style={{ fontSize: "max(8.5cqw, 9px)" }}
          aria-hidden
        >
          {blaze}
        </span>
      )}
      <span
        className="absolute top-[65%] right-[10%] bottom-[7%] left-[10%] flex items-center justify-center text-center leading-[1.2] font-bold text-[#e8dcc8]"
        style={{ fontSize: "7.6cqw" }}
      >
        <span>{text}</span>
      </span>
    </div>
  );
}
