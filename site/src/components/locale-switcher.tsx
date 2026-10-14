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

export function LocaleSwitcher({
  current,
  className = "spec-label flex items-center gap-2",
  linkClassName = "transition-colors hover:text-indigo-soft",
  currentClassName = "text-paper",
  separator = true,
}: {
  current: Locale;
  className?: string;
  linkClassName?: string;
  currentClassName?: string;
  /** Draw a slash between labels (the app sites' spec-label style). */
  separator?: boolean;
}) {
  const pathname = usePathname() ?? "/";

  return (
    <span className={className} aria-label="Language">
      {LOCALES.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && separator && <span aria-hidden>/</span>}
          {locale === current ? (
            <span className={currentClassName} aria-current="true">
              {LOCALE_LABEL[locale]}
            </span>
          ) : (
            <Link
              href={pathFor(pathname, locale)}
              className={linkClassName}
              hrefLang={locale}
            >
              {LOCALE_LABEL[locale]}
            </Link>
          )}
        </span>
      ))}
    </span>
  );
}
