"use client";

import Image from "next/image";
import { useState } from "react";
import type { Copy } from "./copy";

/** The rules in four stops: one range input drives the clause and the screen. */
export function HowItPlays({ t }: { t: Copy["how"] }) {
  const [at, setAt] = useState(0);
  const last = t.stages.length - 1;
  return (
    <section className="ao-how" id="play" aria-labelledby="ao-how-h2">
      <h2 id="ao-how-h2" className="ao-sr">
        {t.h2}
      </h2>
      <div className="ao-how__screen" data-reveal>
        {t.stages.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={828}
            height={1797}
            sizes="(max-width: 760px) 70vw, 340px"
            className="ao-how__img"
            data-on={i === at || undefined}
            aria-hidden={i === at ? undefined : true}
          />
        ))}
      </div>
      <div className="ao-how__words">
        {t.stages.map((s, i) => (
          <div key={s.name} className="ao-how__stage" data-on={i === at || undefined} aria-hidden={i === at ? undefined : true}>
            <h3 className="ao-how__clause">{s.clause}</h3>
            <p className="ao-how__body">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="ao-how__control" data-reveal>
        <div className="ao-range-wrap" style={{ ["--ao-fill" as string]: String(at / last) }}>
          <span className="ao-range-wrap__fill" aria-hidden />
          <input
            type="range"
            min={0}
            max={last}
            step={1}
            value={at}
            onChange={(e) => setAt(Number(e.target.value))}
            aria-label={t.slider}
            aria-valuetext={t.stages[at].name}
            className="ao-range"
          />
        </div>
        <ol className="ao-how__names">
          {t.stages.map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                onClick={() => setAt(i)}
                aria-pressed={i === at}
                className="ao-how__name"
              >
                {s.name}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
