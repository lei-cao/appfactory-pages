// Contract between the app-site routes and each app's own site module.
// Every app subdomain (<slug>.appfactory.sg) is one folder under
// src/components/sites/<slug>/ exporting `site: SiteModule`. The [slug]
// layout wraps every page (landing, support, privacy, terms, guide) in the
// app's Shell; the [slug] page renders its Landing.

import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

export interface SiteShellProps {
  locale: Locale;
  slug: string;
  children: ReactNode;
}

export interface SiteModule {
  /** The app's home page at <slug>.appfactory.sg (all three locales). */
  Landing: (props: { locale: Locale }) => ReactNode | Promise<ReactNode>;
  /**
   * Header + footer around every page of the site. Must render the wrapper
   * `<div data-app={slug}>` (support/privacy/terms are themed through it)
   * and a <StudioLink> in both the header and the footer.
   */
  Shell: (props: SiteShellProps) => ReactNode | Promise<ReactNode>;
}
