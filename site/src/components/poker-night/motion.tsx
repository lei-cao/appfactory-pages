"use client";

// Poker Night's motion layer, mounted once by the Shell.
// 1. Colour by chapter: every section carries data-field (paper, paper-2,
//    night, night-2); the fixed header takes the field under its bottom edge.
// 2. Entrances: children of [data-reveal] that start below the fold rise in,
//    staggered, the first time their section enters. Anything already on
//    screen, and everything when script or motion is off, is simply shown.

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PnMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".pn-header");
    const fields = Array.from(document.querySelectorAll<HTMLElement>("[data-app] [data-field]"));
    if (!header || !fields.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = header.getBoundingClientRect().bottom - 1;
      let current = fields[0].dataset.field;
      for (const f of fields) {
        const r = f.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) current = f.dataset.field;
      }
      if (header.dataset.ink !== current) header.dataset.ink = current;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const fold = window.innerHeight;
    const pending: HTMLElement[] = [];
    for (const g of groups) {
      if (g.getBoundingClientRect().top < fold * 0.92) continue;
      Array.from(g.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.setProperty("--pn-delay", `${Math.min(i, 6) * 75}ms`);
        el.classList.add("pn-pre");
      });
      pending.push(g);
    }
    if (!pending.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          for (const child of Array.from(e.target.children)) child.classList.add("pn-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    pending.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
