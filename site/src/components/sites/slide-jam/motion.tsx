"use client";

// Two small behaviours for the whole site: section parts rise in once as they
// enter (content stays visible if this never runs: the hidden state only
// applies once data-motion is set), and the sticky header takes the colour of
// the chapter under it.

import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-app="slide-jam"]');
    if (!root) return;

    // Entrances. Mark what is already on screen first so nothing flickers.
    const parts = Array.from(root.querySelectorAll<HTMLElement>(".sj-rise, .sj-pop"));
    const vh = window.innerHeight;
    for (const el of parts) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.setAttribute("data-in", "");
    }
    root.setAttribute("data-motion", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of parts) if (!el.hasAttribute("data-in")) io.observe(el);

    // Header colour by chapter.
    const bar = root.querySelector<HTMLElement>(".sj-bar");
    const chapters = Array.from(root.querySelectorAll<HTMLElement>("[data-ground]"));
    let raf = 0;
    const paint = () => {
      raf = 0;
      if (!bar || !chapters.length) return;
      const y = bar.getBoundingClientRect().bottom - 1;
      const under = chapters.find((c) => {
        const r = c.getBoundingClientRect();
        return r.top <= y && r.bottom > y && r.left <= 1;
      });
      if (!under) return;
      bar.style.setProperty("--bar-bg", under.dataset.ground!);
      bar.style.setProperty("--bar-ink", under.dataset.ink === "light" ? "#f5f7fc" : "#0d0d10");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
