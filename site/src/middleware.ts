import { NextRequest, NextResponse } from "next/server";
import { APEX_DOMAIN } from "@/lib/site";
import { DEFAULT_LOCALE, isLocale, localePrefix, type Locale } from "@/lib/i18n";

// Hosts whose subdomains map to per-app sites. `localhost` makes
// poker-night.localhost:3000 work in `next dev` with zero config.
const ROOT_HOSTS = [APEX_DOMAIN, "localhost"];

function subdomainOf(host: string): string | null {
  for (const root of ROOT_HOSTS) {
    if (host !== root && host.endsWith(`.${root}`)) {
      const sub = host.slice(0, -(root.length + 1));
      // Only single-label subdomains route to apps; anything deeper
      // (e.g. Vercel preview URLs matched against "localhost") is ignored.
      if (sub && !sub.includes(".")) return sub;
    }
  }
  return null;
}

/** Split "/zh-cn/support" into locale + locale-less rest ("/support"). */
function splitLocale(pathname: string): { locale: Locale | null; rest: string } {
  const seg = pathname.split("/")[1];
  if (isLocale(seg)) {
    return { locale: seg, rest: pathname.slice(seg.length + 1) || "/" };
  }
  return { locale: null, rest: pathname };
}

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const url = req.nextUrl;

  if (host === `www.${APEX_DOMAIN}`) {
    return NextResponse.redirect(
      `https://${APEX_DOMAIN}${url.pathname}${url.search}`,
      308,
    );
  }

  const { locale, rest } = splitLocale(url.pathname);

  // English is canonical without a prefix — strip an explicit /en.
  if (locale === DEFAULT_LOCALE) {
    const clean = url.clone();
    clean.pathname = rest;
    return NextResponse.redirect(clean, 308);
  }

  const effective: Locale = locale ?? DEFAULT_LOCALE;
  const slug = subdomainOf(host);

  if (slug) {
    // In-app links are path-style (/apps/<slug>/support) so they work on the
    // apex and on previews; on the app's own subdomain that prefix is
    // redundant — redirect to the clean canonical URL instead of 404ing.
    const appPrefix = `/apps/${slug}`;
    if (rest === appPrefix || rest.startsWith(`${appPrefix}/`)) {
      const clean = url.clone();
      clean.pathname =
        localePrefix(effective) + (rest.slice(appPrefix.length) || "/");
      return NextResponse.redirect(clean, 308);
    }
    const rewritten = url.clone();
    rewritten.pathname = `/${effective}${appPrefix}${rest === "/" ? "" : rest}`;
    return NextResponse.rewrite(rewritten);
  }

  // Hub host: ensure the internal path always carries a locale segment.
  const rewritten = url.clone();
  rewritten.pathname = `/${effective}${rest === "/" ? "" : rest}`;
  return NextResponse.rewrite(rewritten);
}

export const config = {
  // Skip static assets (anything with a file extension) and Next internals;
  // those are host-independent.
  matcher: ["/((?!_next/|_vercel|.*\\..*).*)"],
};
