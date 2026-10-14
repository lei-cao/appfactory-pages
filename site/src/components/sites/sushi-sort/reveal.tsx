"use client";

import { useEffect } from "react";

/**
 * Entrances for the landing's sections: marks the site root with .ss-js
 * (the CSS only hides [data-rise] parts behind that class, so nothing stays
 * hidden without script), then reveals each part once as it arrives.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.querySelector('.ss-root[data-app="sushi-sort"]');
    if (!root || !("IntersectionObserver" in window)) return;
    const parts = root.querySelectorAll<HTMLElement>("[data-rise]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    // Parts already on screen are shown at once, without a flash.
    const vh = window.innerHeight;
    parts.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add("is-in");
    });
    root.classList.add("ss-js");
    parts.forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
