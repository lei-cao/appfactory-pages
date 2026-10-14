"use client";

import { useEffect, useState } from "react";

export interface Print {
  /** Whole store posters shown side by side (two). */
  posters: string[];
  icon: string;
  alt: string;
  name: string;
  subtitle: string;
}

const HOLD_MS = 5600;

/**
 * The hero's two lit prints: a pair of whole store posters large (never
 * cropped, so their captions and screens read in full), the app icon small
 * and dimmed. They change together on a slow crossfade, like light shifting in
 * a room. Pauses while the tab is hidden; under reduced motion the first
 * print simply stays.
 */
export function HeroPrints({ prints, intro }: { prints: Print[]; intro: string }) {
  const [on, setOn] = useState(0);

  useEffect(() => {
    if (prints.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const tick = () => {
      timer = window.setTimeout(() => {
        if (!document.hidden) setOn((i) => (i + 1) % prints.length);
        tick();
      }, HOLD_MS);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [prints.length]);

  const current = prints[on];

  return (
    <>
      <figure className="print print--large" data-rise style={{ "--i": 1 } as React.CSSProperties}>
        {prints.map((p, i) => (
          <div key={p.posters[0]} className="print__set" data-on={i === on} aria-hidden={i !== on}>
            {p.posters.map((src, n) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={i === on && n === 0 ? p.alt : ""}
                width={860}
                height={1864}
                fetchPriority={i === 0 ? "high" : "low"}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>
        ))}
      </figure>
      <figure className="print print--small" aria-hidden data-rise style={{ "--i": 3 } as React.CSSProperties}>
        {prints.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p.icon}
            src={p.icon}
            alt=""
            data-on={i === on}
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
        ))}
      </figure>
      <div className="hero__side" data-rise style={{ "--i": 2 } as React.CSSProperties}>
        <p className="hero__caption" aria-live="polite">
          <b>{current.name}</b>
          <br />
          {current.subtitle}
        </p>
        <p>{intro}</p>
      </div>
    </>
  );
}
