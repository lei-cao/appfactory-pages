"use client";

import { useEffect } from "react";

/**
 * Entrance for the parts of every section below the first screen: each
 * `[data-rise]` element that starts out of view waits (`data-wait`) until
 * it scrolls in, then rises into place, staggered by its `--i`. Elements
 * already on screen are never hidden, and without script nothing is.
 */
export function Rise({ scope }: { scope: string }) {
  useEffect(() => {
    const root = document.querySelector(`[data-app="${scope}"]`);
    if (!root || !("IntersectionObserver" in window)) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-rise]")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).removeAttribute("data-wait");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of els) {
      el.setAttribute("data-wait", "");
      io.observe(el);
    }
    return () => io.disconnect();
  }, [scope]);
  return null;
}
