"use client";

// A muted promo clip that plays only while it is on screen. Below the fold
// nothing but the poster loads (preload="none") until it scrolls into view.
// With reduced motion it never starts by itself: the poster stays and the
// native controls let the visitor play it.

import { useEffect, useRef, useState } from "react";
import type { LwClip } from "@/content/tracesheet";

export function Clip({
  clip,
  label,
  eager = false,
  poster,
  className = "",
}: {
  clip: LwClip;
  label: string;
  /** The hero clip: fetch it straight away. */
  eager?: boolean;
  /** Poster override, when the clip's own first frame is a bare title card. */
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    if (!("IntersectionObserver" in window)) {
      el.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`lw-clip ${className}`}
      muted
      loop
      playsInline
      controls={still}
      preload={eager ? "auto" : "none"}
      poster={poster ?? clip.poster}
      width={clip.width}
      height={clip.height}
      aria-label={label}
    >
      <source src={clip.webm} type="video/webm" />
      <source src={clip.mp4} type="video/mp4" />
    </video>
  );
}
