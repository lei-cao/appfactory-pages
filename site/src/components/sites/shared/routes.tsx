import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale } from "@/lib/i18n";
import type { SiteModule } from "../types";

// Each app site lives in its own static route folder,
// src/app/[locale]/apps/<slug>/, so its components, CSS and fonts ship only
// on its own pages. The shared page modules in ./pages read `slug` from
// params; these helpers add it, since a static folder has no [slug] param.

type Params<P> = { params: Promise<P> };
type WithSlug<P> = P & { slug: string };

function withSlug<P extends object>(params: Promise<P>, slug: string): Promise<WithSlug<P>> {
  return params.then((p) => ({ ...p, slug }));
}

/** Bind a shared page module ({default, generateMetadata}) to one app. */
export function bindPage<P extends { locale: string }>(
  slug: string,
  mod: {
    default: (props: Params<WithSlug<P>>) => Promise<ReactNode> | ReactNode;
    generateMetadata?: (props: Params<WithSlug<P>>) => Promise<unknown>;
  },
) {
  return {
    Page: (props: Params<P>) => mod.default({ params: withSlug(props.params, slug) }),
    generateMetadata: mod.generateMetadata
      ? (props: Params<P>) => mod.generateMetadata!({ params: withSlug(props.params, slug) })
      : undefined,
  };
}

/** The layout for one app site: its Shell around every page. */
export function siteLayout(site: SiteModule, slug: string) {
  return async function SiteLayout({
    children,
    params,
  }: {
    children: ReactNode;
    // Next types layout params as unknown; the [locale] segment supplies it.
    params: Promise<unknown>;
  }) {
    const { locale } = (await params) as { locale: string };
    if (!isLocale(locale)) notFound();
    return (
      <site.Shell locale={locale} slug={slug}>
        {children}
      </site.Shell>
    );
  };
}

/** The home page for one app site: shared metadata, the site's Landing. */
export function siteLanding(site: SiteModule) {
  return async function SiteLanding({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return <site.Landing locale={locale} />;
  };
}
