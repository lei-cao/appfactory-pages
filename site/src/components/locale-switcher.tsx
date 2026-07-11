"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABEL,
  isLocale,
  localePrefix,
  type Locale,
} from "@/lib/i18n";

/** Swap the locale prefix on the current (browser-visible) path. */
function pathFor(pathname: string, target: Locale): string {
  const seg = pathname.split("/")[1];
  const rest = isLocale(seg) ? pathname.slice(seg.length + 1) || "/" : pathname;
  const prefixed = `${localePrefix(target)}${rest === "/" ? "/" : rest}`;
  return prefixed || "/";
}

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";

  return (
    <span className="spec-label flex items-center gap-2" aria-label="Language">
      {LOCALES.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden>/</span>}
          {locale === current ? (
            <span className="text-paper">{LOCALE_LABEL[locale]}</span>
          ) : (
            <Link
              href={pathFor(pathname, locale)}
              className="transition-colors hover:text-indigo-soft"
            >
              {LOCALE_LABEL[locale]}
            </Link>
          )}
        </span>
      ))}
    </span>
  );
}
