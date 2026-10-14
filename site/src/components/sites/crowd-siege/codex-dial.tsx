"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { ageOf, CODEX } from "./codex";
import { copyFor } from "./copy";

// The live thing: the headline is a battle number you can type. The answer
// is that battle's age, the age's boss and its Codex card, the real history
// fact the game gives for winning it. Without script the line still shows
// battle 1's card.

const clamp = (n: number) => Math.min(50, Math.max(1, n));

export function CodexDial({ locale, start = 1 }: { locale: Locale; start?: number }) {
  const t = copyFor(locale);
  const [n, setN] = useState(start);
  const [draft, setDraft] = useState(String(start));
  const card = CODEX[n - 1];
  const age = ageOf(n);

  const go = (v: number) => {
    const c = clamp(v);
    setN(c);
    setDraft(String(c));
  };

  return (
    <div className="sg-dial">
      <label className="sg-dial__line" data-ui>
        <span className="sg-dial__word">{t.battle}</span>
        <input
          className="sg-dial__input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={2}
          aria-label={t.inputLabel}
          value={draft}
          size={2}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "").slice(0, 2);
            setDraft(v);
            const num = Number(v);
            if (v && num >= 1 && num <= 50) setN(num);
          }}
          onBlur={() => go(Number(draft) || n)}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp") {
              e.preventDefault();
              go(n + 1);
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              go(n - 1);
            }
          }}
        />
        {t.battleSuffix && <span className="sg-dial__word">{t.battleSuffix}</span>}
      </label>

      <div className="sg-dial__answer" aria-live="polite">
        <div className="sg-card" data-ui data-relic={card.relic || undefined}>
          <p className="sg-card__age">
            <span>{age.name[locale]}</span>
            <span>{t.battles(age.first, age.last)}</span>
          </p>
          <p className="sg-card__title">
            {t.codexNote} {card.n} · {card.title[locale]}
          </p>
          <p className="sg-card__fact">{card.fact[locale]}</p>
          <p className="sg-card__boss">
            {card.relic ? t.relic : `${t.bossLabel}: ${age.boss[locale]}`}
          </p>
        </div>
        <div className="sg-dial__steps">
          <button type="button" className="sg-step" onClick={() => go(n - 1)} disabled={n <= 1} aria-label={t.prev}>
            −
          </button>
          <button type="button" className="sg-step" onClick={() => go(n + 1)} disabled={n >= 50} aria-label={t.next}>
            +
          </button>
        </div>
      </div>

      <ul className="sg-dial__examples">
        {t.examples.map((ex) => (
          <li key={ex}>
            <button type="button" onClick={() => go(ex)} aria-pressed={n === ex}>
              {t.exampleLabel(ex, CODEX[ex - 1].title[locale])}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
