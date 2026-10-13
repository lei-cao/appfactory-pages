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
import { APEX_DOMAIN } from "@/lib/site";

/**
 * Offers only the locales the current page exists in (the same rule that
 * drives its hreflang set). `slug` is set on app pages. The server render uses
 * path-style hrefs (/zh-cn/apps/<slug>/...) that work on every host; once
 * mounted on <slug>.appfactory.sg they become the canonical clean paths.
 */
export function LocaleSwitcher({
  current,
  slug,
}: {
  current: Locale;
  slug?: string;
}) {
  const pathname = usePathname() ?? "/";
  const [clean, setClean] = useState(false);
  useEffect(() => {
    const h = location.hostname;
    setClean(!!slug && h.endsWith(`.${APEX_DOMAIN}`) && h !== `www.${APEX_DOMAIN}`);
  }, [slug]);

  const available = localesForPage(pagePathOf(pathname, slug));
  const shown = LOCALES.filter((l) => available.includes(l));

  return (
    <span className="spec-label flex items-center gap-2" aria-label="Language">
      {shown.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden>/</span>}
          {locale === current ? (
            <span className="text-paper">{LOCALE_LABEL[locale]}</span>
          ) : (
            <Link
              href={switchHref(pathname, locale, slug, clean)}
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
