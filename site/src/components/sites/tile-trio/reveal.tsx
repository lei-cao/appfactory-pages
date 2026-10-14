"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Entrances for the parts of each section. Marks the site wrapper with
 * `tt-js` (the CSS only hides anything under that class, so a page without
 * script shows everything), then adds `is-in` to each `[data-reveal]`
 * block once as it enters the viewport.
 */
export function Reveal() {
  // The Shell stays mounted across client navigations: re-scan per page.
  const pathname = usePathname();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-app="tile-trio"]');
    if (!root) return;
    // Reduced motion: no autoplaying loop; the poster frame stays.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach((v) => v.pause());
    }
    const blocks = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"),
    );
    if (!("IntersectionObserver" in window)) return;
    root.classList.add("tt-js");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
