"use client";

import { useEffect, useRef, useState } from "react";

export interface GameEntry {
  slug: string;
  name: string;
  subtitle: string;
  oneLiner: string;
  href: string;
  appStoreUrl?: string;
  /** Whole store posters, in listing order (up to three). */
  posters: string[];
  alt: string;
  /** A muted gameplay loop shown first in the gallery. */
  loop?: { src: string; poster: string };
}

/**
 * Games as a big-name index. On wide screens the active name lights its
 * store gallery (whole posters, never cropped) in a sticky frame and opens
 * its note; hover, focus and tap
 * all move the state. On phones every game shows its poster and note in turn.
 * Every name and note is in the HTML, so search engines read them all.
 */
export function GamesIndex({
  games,
  labels,
}: {
  games: GameEntry[];
  labels: { visit: string; appStore: string; storeSoon: string };
}) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  // Reduced motion: the gameplay loop stays on its poster frame.
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.current?.querySelectorAll("video").forEach((v) => v.pause());
  }, []);

  return (
    <div className="index" ref={root}>
      <ul className="index__list">
        {games.map((g, i) => {
          const on = i === active;
          return (
            <li
              key={g.slug}
              className="index__row"
              data-active={on}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              onMouseEnter={() => setActive(i)}
            >
              <div className="index__thumbs">
                {g.posters.slice(0, 2).map((src, n) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={n === 0 ? g.alt : ""}
                    width={860}
                    height={1864}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <h3>
                <button
                  type="button"
                  className="index__name"
                  aria-expanded={on}
                  aria-controls={`game-${g.slug}`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="index__title">{g.name}</span>
                  <small>{g.subtitle}</small>
                </button>
              </h3>
              <div className="index__more" id={`game-${g.slug}`}>
                <div>
                  <div className="index__more-inner">
                    <p>{g.oneLiner}</p>
                    <div className="index__links">
                      <a href={g.href} className="go link" target="_blank" rel="noopener noreferrer">
                        {labels.visit} <span className="arrow" aria-hidden>→</span>
                      </a>
                      {g.appStoreUrl ? (
                        <a
                          href={g.appStoreUrl}
                          data-app={g.slug}
                          className="go link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {labels.appStore} <span className="arrow" aria-hidden>↗</span>
                        </a>
                      ) : (
                        <span className="go go--off">{labels.storeSoon}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="index__frame" aria-hidden data-reveal>
        {games.map((g, i) => (
          <div key={g.slug} className="index__set" data-on={i === active}>
            {g.loop && (
              <video
                poster={g.loop.poster}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                width={432}
                height={936}
              >
                <source src={g.loop.src} type="video/mp4" />
              </video>
            )}
            {g.posters.slice(0, g.loop ? 2 : 3).map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" width={860} height={1864} loading="lazy" decoding="async" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
