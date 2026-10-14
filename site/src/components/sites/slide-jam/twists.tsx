"use client";

// The twists index: the names on the left are buttons, the stage on the right
// shows the real store screenshot for the selected one. Without script the
// first screenshot shows and every name and sentence is still readable.

import Image from "next/image";
import { useState } from "react";

export interface TwistItem {
  key: string;
  name: string;
  text: string;
  src: string;
  alt: string;
}

export function Twists({ title, items }: { title: string; items: TwistItem[] }) {
  const [on, setOn] = useState(0);
  return (
    <>
      <div className="sj-twists__index">
        <h2 className="sj-rise">{title}</h2>
        <ul className="sj-twists__list sj-rise" style={{ ["--i" as string]: 1 }}>
          {items.map((it, i) => (
            <li key={it.key}>
              <button type="button" aria-pressed={i === on} aria-controls="sj-twist-stage" onClick={() => setOn(i)}>
                {it.name}
              </button>
            </li>
          ))}
        </ul>
        <p className="sj-twists__text sj-rise" style={{ ["--i" as string]: 2 }} aria-live="polite">
          {items[on].text}
        </p>
      </div>
      <div className="sj-twists__stage" id="sj-twist-stage">
        {items.map((it, i) => (
          <figure key={it.key} data-on={i === on ? "" : undefined} aria-hidden={i !== on}>
            <Image src={it.src} alt={it.alt} width={720} height={1522} sizes="(min-width: 1024px) 420px, 340px" loading="lazy" />
          </figure>
        ))}
      </div>
    </>
  );
}
