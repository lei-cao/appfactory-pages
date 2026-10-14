"use client";

import { useEffect } from "react";

/**
 * Entrance for the parts of each hub section: elements marked data-reveal
 * rise in once as they enter the viewport. The hidden state only applies
 * under `.js` (set inline before paint), and a timer shows anything the
 * observer missed, so content never stays hidden.
 */
export function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".hub [data-reveal]");
    const show = (el: Element) => el.classList.add("is-in");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          show(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    targets.forEach((el) => io.observe(el));
    const safety = window.setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) show(el);
      });
    }, 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
  return null;
}
