// Small shared pieces of the LingoWonders site: the 田字格 cell from the
// app icon, in-app label chips, and the [[Label]] markup used in guide text.

import { Fragment, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * A 田字格 cell: a vermilion square with its dashed guide cross. `glyph` is
 * written inside in the trace colour, the way the icon's 語 is half traced.
 * Always decorative.
 */
export function TianCell({
  glyph,
  className = "",
  stretch = false,
}: {
  glyph?: string;
  className?: string;
  /** Fill a non-square box (the hero frame on phones). */
  stretch?: boolean;
}) {
  return (
    <span className={`lw-cell ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" focusable="false" preserveAspectRatio={stretch ? "none" : undefined}>
        <rect x="1.5" y="1.5" width="97" height="97" className="lw-cell-frame" />
        <path d="M50 4V96M4 50H96" className="lw-cell-cross" />
      </svg>
      {glyph && <span className="lw-cell-glyph">{glyph}</span>}
    </span>
  );
}

/** One in-app label, styled like the app's own button. */
export function UiLabel({ children }: { children: ReactNode }) {
  return <span className="lw-ui">{children}</span>;
}

/** Render guide text: [[Label]] becomes a UiLabel, everything else is text. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\[\[(.+?)\]\]/g);
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <UiLabel key={i}>{p}</UiLabel> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}

/** Official "Download on the App Store" artwork (Apple Marketing Tools),
 * black badge, one file per locale, shown exactly as delivered. */
const BADGE: Record<Locale, { src: string; width: number; alt: string }> = {
  en: { src: "/apps/tracesheet/app-store-badge-en.svg", width: 119.66407, alt: "Download on the App Store" },
  "zh-cn": { src: "/apps/tracesheet/app-store-badge-zh-cn.svg", width: 108.85157, alt: "在 App Store 下载" },
  "zh-tw": { src: "/apps/tracesheet/app-store-badge-zh-tw.svg", width: 108.85157, alt: "在 App Store 下載" },
};

export function AppStoreBadge({ locale, href, height = 52 }: { locale: Locale; href: string; height?: number }) {
  const b = BADGE[locale];
  return (
    <a href={href} data-app="tracesheet" className="lw-badge">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={b.src} alt={b.alt} width={Math.round((b.width / 40) * height)} height={height} />
    </a>
  );
}
