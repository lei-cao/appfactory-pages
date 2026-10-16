"use client";
// GA4 loader, off by default: renders nothing and loads nothing unless
// NEXT_PUBLIC_GA_ID is set (build-time env on Vercel). Never loads when the
// browser sends Global Privacy Control. Consent Mode v2 defaults are set before
// config (same pattern as thinking.poker). One property covers every
// *.appfactory.sg host, so the cookie is scoped to the apex.
// Also reports store_click {app, store} for App Store / Google Play links.
import { useEffect } from "react";
import {
  analyticsDisabledFor,
  appSlugFor,
  consentDefaults,
  parseGaId,
  storeOf,
} from "@/lib/analytics";

const GA_ID = parseGaId(process.env.NEXT_PUBLIC_GA_ID);

let started = false;

export function Analytics() {
  useEffect(() => {
    if (!GA_ID || started) return;
    // D11: the shared-list page's URL fragment is the list; never send it.
    if (analyticsDisabledFor(location.pathname)) return;
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl;
    if (gpc) return;
    started = true;

    const w = window as Window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    if (!w.gtag) {
      w.gtag = function gtag() {
        // gtag.js requires the Arguments object, not an array.
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
    }
    const gtag = w.gtag;
    for (const defaults of consentDefaults())
      gtag("consent", "default", defaults);
    gtag("js", new Date());
    const onApex = /(^|\.)appfactory\.sg$/.test(location.hostname);
    gtag("config", GA_ID, onApex ? { cookie_domain: "appfactory.sg" } : {});

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const store = storeOf((a as HTMLAnchorElement).href);
      if (!store) return;
      gtag("event", "store_click", {
        app: appSlugFor(
          location.hostname,
          location.pathname,
          a.getAttribute("data-app"),
        ),
        store,
      });
    };
    document.addEventListener("click", onClick, true);
  }, []);
  return null;
}
