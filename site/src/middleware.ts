import { NextRequest, NextResponse } from "next/server";
import { APEX_DOMAIN } from "@/lib/site";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { decideHost } from "@/lib/host-routing";
import { detectPage, isGoPath, isShareListPath, resolveGo } from "@/lib/go-link";
import { apps, getApp } from "@/content/apps";

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const url = req.nextUrl;

  // LingoWonders share links render a page (the list is in the URL fragment and
  // is decoded in the browser) on every host; every other /go path redirects.
  if (isShareListPath(url.pathname)) {
    const page = url.clone();
    page.pathname = `/${DEFAULT_LOCALE}/go/tracesheet/l`;
    const res = NextResponse.rewrite(page);
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  // Short links answer on every host and skip locale handling entirely.
  if (isGoPath(url.pathname)) {
    const go = resolveGo(url.pathname, req.headers.get("user-agent") ?? "", {
      apex: APEX_DOMAIN,
      getApp,
    });
    const res =
      go.kind === "redirect"
        ? NextResponse.redirect(go.url, 302)
        : new NextResponse(detectPage(go.ios, go.other), {
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  // Host decisions (www -> apex, renamed-app redirects, locale handling and the
  // subdomain -> /apps/<slug> rewrite) live in lib/host-routing.ts.
  const decision = decideHost({
    host,
    port: (req.headers.get("host") ?? "").split(":")[1] ?? "",
    pathname: url.pathname,
    search: url.search,
    apex: APEX_DOMAIN,
    apps,
  });
  if (decision.action === "redirect-external") {
    return NextResponse.redirect(decision.location, 308);
  }
  const target = url.clone();
  target.pathname = decision.pathname;
  return decision.action === "redirect-path"
    ? NextResponse.redirect(target, 308)
    : NextResponse.rewrite(target);
}

export const config = {
  // Skip static assets (anything with a file extension) and Next internals;
  // those are host-independent. /go paths always run, dots included, so a
  // bad source (`/go/poker-night/a.b`) still falls back to `go` and an unknown
  // slug (`/go/no.such/qr`) still goes home. Keep this a JSON-style array:
  // scripts/middleware-matcher.mts reads it from this file.
  matcher: ["/((?!_next/|_vercel|.*\\..*).*)", "/go/:path*"],
};
