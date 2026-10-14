"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Section entrances. Elements marked .ts-rise start visible in the server
 * HTML; once this runs it switches the site to data-motion="on", which
 * holds each one down until it scrolls into view and then lets it rise in
 * (CSS staggers siblings through --d). Without script, or with reduced
 * motion, everything simply stays put.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ts-site");
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".ts-rise:not(.is-in)"));
    root.dataset.motion = "on";
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
