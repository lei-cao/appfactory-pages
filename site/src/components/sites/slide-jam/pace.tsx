"use client";

// "How many levels a day?" The figure is the visitor's own: the 600 campaign
// levels plus the 120-level Master track, divided by their pace, rounded up.

import { useId, useState } from "react";

const TOTAL = 600 + 120;

export function Pace({ label, unit }: { label: string; unit: string }) {
  const [n, setN] = useState(5);
  const id = useId();
  return (
    <>
      <div className="sj-slider sj-rise" style={{ ["--i" as string]: 1 }} data-ui>
        <label htmlFor={id}>
          <span>{label}</span>
          <output htmlFor={id}>{n}</output>
        </label>
        <input id={id} type="range" min={1} max={30} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} />
      </div>
      <p className="sj-pace__figure sj-rise" style={{ ["--i" as string]: 2 }} aria-live="polite">
        {Math.ceil(TOTAL / n)}
        <span>{unit}</span>
      </p>
    </>
  );
}
