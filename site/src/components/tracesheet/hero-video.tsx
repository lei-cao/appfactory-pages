"use client";

// The landing hero video: autoplay, muted, looping, inline. Wide screens get
// the 16:9 cut, screens under 640px the 1:1 cut (chosen by <source media>
// at load). The poster sits in a <picture> underneath so it can switch with
// the same breakpoint; a <video> without a poster paints nothing until its
// first frame, so the picture shows through until then — and stays the
// frame for anyone with reduced motion, where the video never starts.

import { useEffect, useRef } from "react";
import type { TracesheetHeroVideo } from "@/content/tracesheet";

const NARROW = "(max-width: 639px)";

export function HeroVideo({
  video,
  label,
}: {
  video: TracesheetHeroVideo;
  label: string;
}) {
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
    <div className="border-line bg-panel relative aspect-square w-full overflow-hidden rounded-2xl border sm:aspect-video">
      <picture>
        <source media={NARROW} srcSet={video.square.poster} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.wide.poster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain"
          fetchPriority="high"
        />
      </picture>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
      >
        <source media={NARROW} src={video.square.webm} type="video/webm" />
        <source media={NARROW} src={video.square.mp4} type="video/mp4" />
        <source src={video.wide.webm} type="video/webm" />
        <source src={video.wide.mp4} type="video/mp4" />
      </video>
    </div>
  );
}
