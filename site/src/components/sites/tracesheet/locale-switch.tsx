"use client";

// LingoWonders' own language switcher. The shared LocaleSwitcher hides 繁體
// on every /guide page (Poker Night's guides exist only in en and zh-cn);
// every LingoWonders page exists in all three locales, so this one always
// offers EN / 简体 / 繁體.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOCALES, LOCALE_LABEL, switchHref, type Locale } from "@/lib/i18n";
import { isCleanAppHost } from "@/lib/site";

export function LocaleSwitch({
  current,
  slug,
  domain,
  className = "",
}: {
  current: Locale;
  slug: string;
  /** The app's own domain (lingowonders.com), also a clean-path host. */
  domain?: string;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  // Server render uses path-style hrefs that work on every host; on the app's
  // own subdomain or domain they become the clean canonical paths once mounted.
  const [clean, setClean] = useState(false);
  useEffect(() => {
    setClean(isCleanAppHost(location.hostname, domain));
  }, [domain]);

  return (
    <span className={`lw-locales ${className}`} aria-label="Language">
      {LOCALES.map((locale) =>
        locale === current ? (
          <span key={locale} className="lw-locale is-current" aria-current="true">
            {LOCALE_LABEL[locale]}
          </span>
        ) : (
          <Link
            key={locale}
            href={switchHref(pathname, locale, slug, clean)}
            hrefLang={locale === "en" ? "en" : locale === "zh-cn" ? "zh-CN" : "zh-TW"}
            className="lw-locale"
          >
            {LOCALE_LABEL[locale]}
          </Link>
        ),
      )}
    </span>
  );
}
