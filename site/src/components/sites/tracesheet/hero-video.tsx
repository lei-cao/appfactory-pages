"use client";

// The hero's moving picture: the 1:1 promo cut, muted and looping, inside
// one pane of the giant 田 cell. The poster is a plain <img> underneath, so
// the pane is never empty before the first frame, and it stays the picture
// for anyone with reduced motion (the video never starts).

import { useEffect, useRef } from "react";
import type { TracesheetHeroVideo } from "@/content/tracesheet";

export function HeroVideo({ video, label }: { video: TracesheetHeroVideo; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.pause();
      el.removeAttribute("autoplay");
      el.style.visibility = "hidden";
      return;
    }
    // Some browsers skip `autoplay` on hydration-inserted media; nudge it.
    el.play().catch(() => {});
  }, []);

  return (
    <div className="ts-hero-media">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={video.square.poster}
        alt=""
        aria-hidden
        width={720}
        height={720}
        fetchPriority="high"
        decoding="async"
      />
      <video ref={ref} autoPlay muted loop playsInline preload="auto" aria-label={label} width={720} height={720}>
        <source src={video.square.webm} type="video/webm" />
        <source src={video.square.mp4} type="video/mp4" />
      </video>
    </div>
  );
}
