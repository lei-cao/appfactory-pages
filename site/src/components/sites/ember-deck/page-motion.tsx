"use client";

// The page's small amount of script, all progressive: without it every part
// of the page is visible and the stages simply show their first state.
//  - entrances: [data-reveal] parts rise in once as their section arrives;
//  - the rule nearest the middle of the screen marks the part of the turn it
//    talks about (data-focus on the turn stage);
//  - the act nearest the middle of the screen picks the painting on the acts
//    stage (data-act), which crossfades;
//  - the Heat bands light one bar per card played in the turn.

import { useEffect } from "react";

export function PageMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-app="ember-deck"]');
    if (!root) return;

    // Entrances. Parts already on screen are marked before the class that
    // hides the rest is added, so nothing visible blinks out.
    const parts = [...root.querySelectorAll<HTMLElement>("[data-reveal]")];
    const vh = window.innerHeight;
    for (const el of parts) {
      if (el.getBoundingClientRect().top < vh * 0.95) el.classList.add("is-in");
    }
    root.classList.add("ed-js");
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    for (const el of parts) if (!el.classList.contains("is-in")) reveal.observe(el);

    // Steps read against the middle band of the screen.
    const turnStage = root.querySelector<HTMLElement>("[data-turn-stage]");
    const actStage = root.querySelector<HTMLElement>("[data-act-stage]");
    const steps = [...root.querySelectorAll<HTMLElement>("[data-rule], [data-act-step]")];
    const middle = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.dataset.rule && turnStage) {
            turnStage.dataset.focus = el.dataset.rule;
            for (const r of root.querySelectorAll("[data-rule]")) r.classList.toggle("is-active", r === el);
          }
          if (el.dataset.actStep && actStage) actStage.dataset.act = el.dataset.actStep;
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const el of steps) middle.observe(el);

    // Heat bands follow the playable turn.
    const bars = [...root.querySelectorAll<HTMLElement>("[data-heat-band]")].map((band) => [
      ...band.children,
    ]);
    const onHeat = (e: Event) => {
      const heat = Number((e as CustomEvent<number>).detail) || 0;
      for (const set of bars) set.forEach((b, i) => b.classList.toggle("is-lit", i < heat));
    };
    window.addEventListener("ember:heat", onHeat);

    return () => {
      reveal.disconnect();
      middle.disconnect();
      window.removeEventListener("ember:heat", onHeat);
    };
  }, []);

  return null;
}
