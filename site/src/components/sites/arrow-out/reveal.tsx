"use client";

import { useEffect } from "react";

/**
 * Entrance motion: arms the page (content stays visible if this never runs),
 * then marks each [data-reveal] element once its top edge comes into view, or
 * once it has been scrolled past. Elements inside one section stagger by
 * their order in it (CSS reads --ao-i).
 */
export function Reveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-app="arrow-out"]');
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let pending = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const seen = new Map<Element, number>();
    for (const el of pending) {
      const section = el.closest("section, header, footer") ?? root;
      const i = seen.get(section) ?? 0;
      seen.set(section, i + 1);
      el.style.setProperty("--ao-i", String(Math.min(i, 3)));
    }
    let frame = 0;
    const check = () => {
      frame = 0;
      const edge = window.innerHeight * 0.95;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top > edge) return true;
        el.classList.add("is-in");
        return false;
      });
      if (pending.length === 0) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    root.classList.add("ao-armed");
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return null;
}
