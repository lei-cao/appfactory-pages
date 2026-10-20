"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LOCALES,
  LOCALE_LABEL,
  localesForPage,
  pagePathOf,
  switchHref,
  type Locale,
} from "@/lib/i18n";
import { isCleanAppHost } from "@/lib/site";

/**
 * Offers only the locales the current page exists in (the same rule that
 * drives its hreflang set). `slug` is set on app pages. The server render uses
 * path-style hrefs (/zh-cn/apps/<slug>/...) that work on every host; once
 * mounted on <slug>.appfactory.sg they become the canonical clean paths.
 * The class props let each site style it; the defaults are the spec-label
 * look with slashes between labels.
 */
export function LocaleSwitcher({
  current,
  slug,
  className = "spec-label flex items-center gap-2",
  linkClassName = "transition-colors hover:text-indigo-soft",
  currentClassName = "text-paper",
  separator = true,
}: {
  current: Locale;
  slug?: string;
  className?: string;
  linkClassName?: string;
  currentClassName?: string;
  /** Draw a slash between labels (the spec-label style). */
  separator?: boolean;
}) {
  const pathname = usePathname() ?? "/";
  const [clean, setClean] = useState(false);
  useEffect(() => {
    setClean(!!slug && isCleanAppHost(location.hostname));
  }, [slug]);

  const available = localesForPage(pagePathOf(pathname, slug));
  const shown = LOCALES.filter((l) => available.includes(l));

  return (
    <span className={className} aria-label="Language">
      {shown.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && separator && <span aria-hidden>/</span>}
          {locale === current ? (
            <span className={currentClassName} aria-current="true">
              {LOCALE_LABEL[locale]}
            </span>
          ) : (
            <Link
              href={switchHref(pathname, locale, slug, clean)}
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
