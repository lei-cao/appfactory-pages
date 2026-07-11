import { NextRequest, NextResponse } from "next/server";
import { APEX_DOMAIN } from "@/lib/site";

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

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const url = req.nextUrl;

  if (host === `www.${APEX_DOMAIN}`) {
    return NextResponse.redirect(
      `https://${APEX_DOMAIN}${url.pathname}${url.search}`,
      308,
    );
  }

  const slug = subdomainOf(host);
  if (slug) {
    // In-app links are path-style (/apps/<slug>/support) so they work on the
    // apex and on previews; on the app's own subdomain that prefix is
    // redundant — redirect to the clean canonical URL instead of 404ing.
    const prefix = `/apps/${slug}`;
    if (url.pathname === prefix || url.pathname.startsWith(`${prefix}/`)) {
      const clean = url.clone();
      clean.pathname = url.pathname.slice(prefix.length) || "/";
      return NextResponse.redirect(clean, 308);
    }
    const rewritten = url.clone();
    rewritten.pathname = `${prefix}${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(rewritten);
  }

  return NextResponse.next();
}

export const config = {
  // Skip static assets (anything with a file extension) and Next internals;
  // those are host-independent.
  matcher: ["/((?!_next/|_vercel|.*\\..*).*)"],
};
