"use client";
// Carries a /go short link's source onto the arrival app's App Store buttons
// as ct= for the rest of the visit (lib/go-ct.ts has the rules). Renders
// nothing; pages stay static. Runs on every client navigation and once more
// at click time, so buttons rendered later still get the source.
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GO_CT_KEY, goArrival, goStoreHref, parseArrival, type GoArrival } from "@/lib/go-ct";

function currentArrival(): GoArrival | null {
  const fresh = goArrival(location.search);
  try {
    if (fresh) sessionStorage.setItem(GO_CT_KEY, JSON.stringify(fresh));
    else return parseArrival(sessionStorage.getItem(GO_CT_KEY));
  } catch {
    // Storage blocked (private mode, sandbox): the current page still works.
  }
  return fresh;
}

/** `appleIds`: app slug → numeric App Store id, from the registry. */
export function GoCt({ appleIds }: { appleIds: Record<string, string> }) {
  const pathname = usePathname();

  useEffect(() => {
    const arrival = currentArrival();
    const appleId = arrival ? appleIds[arrival.slug] : undefined;
    if (!arrival || !appleId) return;

    const apply = (a: HTMLAnchorElement) => {
      const next = goStoreHref(a.href, arrival.source, appleId);
      if (next) a.href = next;
    };
    document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach(apply);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (a) apply(a as HTMLAnchorElement);
    };
    // pointerdown/contextmenu: long-press, copy link and drag-to-tab read the
    // href before any click fires.
    const events = ["pointerdown", "contextmenu", "click", "auxclick"] as const;
    for (const ev of events) document.addEventListener(ev, onClick, true);
    return () => {
      for (const ev of events) document.removeEventListener(ev, onClick, true);
    };
  }, [pathname, appleIds]);

  return null;
}
