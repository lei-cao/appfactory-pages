"use client";

// "How a word is learned": two fields meeting on a hard edge, one slider
// driving both. Left, the stage as a heading; right, the app screen for that
// stage. All four stages are in the HTML (stacked, one shown), so the
// section is complete without script; the slider (or arrow keys) only
// chooses which one is shown.

import Image from "next/image";
import { useId, useState } from "react";

interface Stage {
  name: string;
  clause: string;
  body: string;
  src: string;
  alt: string;
}

export function Stages({ title, label, stages }: { title: string; label: string; stages: Stage[] }) {
  const [at, setAt] = useState(0);
  const id = useId();
  const last = stages.length - 1;

  return (
    <section className="ts-stages" aria-labelledby={`${id}-h`} style={{ ["--at" as string]: at / last }}>
      <h2 id={`${id}-h`} className="ts-sr">
        {title}
      </h2>
      <div className="ts-stages-shot">
        {stages.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={640}
            height={800}
            sizes="(max-width: 767px) 72vw, 440px"
            className={i === at ? "is-on" : undefined}
            aria-hidden={i !== at}
          />
        ))}
      </div>
      <div className="ts-stages-words">
        {stages.map((s, i) => (
          <div key={s.name} className={`ts-stage${i === at ? " is-on" : ""}`} aria-hidden={i !== at}>
            <h3 className="ts-clause">{s.clause}</h3>
            <p className="ts-lead">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="ts-stages-control">
        <label htmlFor={`${id}-r`} className="ts-sr">
          {label}
        </label>
        <div className="ts-track" aria-hidden>
          <span className="ts-track-fill" />
        </div>
        <input
          id={`${id}-r`}
          type="range"
          min={0}
          max={last}
          step={1}
          value={at}
          aria-valuetext={stages[at].name}
          onChange={(e) => setAt(Number(e.target.value))}
        />
        <ol className="ts-stage-names">
          {stages.map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                className={i === at ? "is-on" : undefined}
                aria-pressed={i === at}
                onClick={() => setAt(i)}
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
