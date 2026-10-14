"use client";

// Poker Night's promo videos. Two modes:
// - "hero": autoplay, muted, looping, inline, with a sound toggle; paused and
//   left on its poster for anyone with reduced motion.
// - "card": poster + play button, nothing downloaded until the visitor taps
//   (preload="none"), then plays with sound and native controls.
// When a video has both cuts, screens under 640px get the 9:16 one and wider
// screens the 16:9 one (<source media> for the file, <picture> for the
// poster, and the frame's aspect ratio follows the same breakpoint).

import { useEffect, useRef, useState } from "react";

type File = { src: string; poster: string; width: number; height: number; duration: number };
const NARROW = "(max-width: 639px)";

export function PnVideo({
  v,
  h,
  label,
  mode = "card",
  playLabel = "Play",
  soundOn = "Sound on",
  soundOff = "Mute",
  className = "",
}: {
  v?: File;
  h?: File;
  label: string;
  mode?: "hero" | "card";
  playLabel?: string;
  soundOn?: string;
  soundOff?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(mode === "hero");
  const [muted, setMuted] = useState(true);
  const both = Boolean(v && h);
  const main = (h ?? v)!;

  useEffect(() => {
    if (mode !== "hero") return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.pause();
      el.removeAttribute("autoplay");
      setStarted(false);
      return;
    }
    el.play().catch(() => {});
  }, [mode]);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    setStarted(true);
    el.muted = false;
    setMuted(false);
    el.controls = true;
    el.play().catch(() => {});
  };

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted) el.play().catch(() => {});
  };

  // aspect: one cut → its own ratio; two cuts → 9:16 narrow, 16:9 wide
  const ratioStyle = both ? undefined : { aspectRatio: `${main.width} / ${main.height}` };
  const ratioClass = both ? "aspect-[9/16] sm:aspect-video" : "";

  return (
    <div
      className={`pn-frame relative w-full overflow-hidden ${ratioClass} ${className}`}
      style={ratioStyle}
    >
      {!started && (
        <picture>
          {both && <source media={NARROW} srcSet={v!.poster} />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={main.poster} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </picture>
      )}
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover ${started ? "" : "invisible"}`}
        playsInline
        preload={mode === "hero" ? "auto" : "none"}
        aria-label={label}
        {...(mode === "hero" ? { autoPlay: true, muted: true, loop: true } : {})}
      >
        {both && <source media={NARROW} src={v!.src} type="video/mp4" />}
        <source src={main.src} type="video/mp4" />
      </video>
      {mode === "card" && !started && (
        <button
          type="button"
          onClick={play}
          className="group absolute inset-0 flex items-end justify-start p-4 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-indigo"
          aria-label={`${playLabel}: ${label}`}
        >
          <span className="pn-play flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
      {mode === "hero" && started && (
        <button
          type="button"
          onClick={toggleSound}
          className="pn-chip absolute right-3 bottom-3 rounded-full px-3.5 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-indigo"
          aria-pressed={!muted}
        >
          {muted ? soundOn : soundOff}
        </button>
      )}
    </div>
  );
}
