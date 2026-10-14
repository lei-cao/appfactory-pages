import { localePrefix, type Locale } from "@/lib/i18n";
import { hubOrigin, SITE_NAME } from "@/lib/site";

const LABEL: Record<Locale, { short: string; long: string }> = {
  en: { short: "App Factory", long: "More apps by App Factory" },
  "zh-cn": { short: "App Factory", long: "App Factory 的更多作品" },
  "zh-tw": { short: "App Factory", long: "App Factory 的更多作品" },
};

/** The App Factory mark; takes `currentColor` so each site can tint it. */
export function StudioMark({ className }: { className?: string }) {
  return (
    <svg viewBox="5 12 56 42" aria-hidden className={className} fill="currentColor">
      <path d="M9 45 24 19Q26 15 30 15H34Q37 15 39 19L44 28Q46 32 41 32H32L21 49Q19 52 15 52H12Q6 52 9 45Z" />
      <path d="M40 15H53Q58 15 58 20V23Q58 28 53 28H45Q42 28 41 25L37 19Q35 15 40 15Z" />
      <path d="M47 32H52Q57 32 57 37V39Q57 44 52 44H48Q45 44 44 41L42 36Q40 32 47 32Z" />
      <path d="M32 35H37Q40 35 42 39L47 47Q50 52 44 52H38Q35 52 33 48L29 40Q27 35 32 35Z" />
    </svg>
  );
}

/**
 * The way back to appfactory.sg from any app site. Every Shell renders one
 * in its header (variant "short") and one in its footer (variant "long").
 * Same tab: the hub opens app sites in a new tab, so this is the way home
 * for visitors who arrived from search instead.
 */
export function StudioLink({
  locale,
  variant = "short",
  className,
  markClassName,
}: {
  locale: Locale;
  variant?: "short" | "long";
  className?: string;
  markClassName?: string;
}) {
  const label = LABEL[locale][variant];
  return (
    <a
      href={`${hubOrigin()}${localePrefix(locale)}`}
      className={className}
      data-studio-link
      aria-label={variant === "short" ? `${SITE_NAME} — ${LABEL[locale].long}` : undefined}
    >
      <StudioMark className={markClassName ?? "inline-block h-[0.9em] w-auto align-[-0.1em]"} />{" "}
      <span>{label}</span>
    </a>
  );
}
