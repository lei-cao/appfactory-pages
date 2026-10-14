import { EmberDeckLandingPage } from "@/components/ember-deck/landing";
import { emberDeckFontClass } from "@/components/ember-deck/fonts";
import { DefaultShell } from "../shared/default-shell";
import type { SiteModule } from "../types";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <EmberDeckLandingPage locale={locale} />,
  Shell: (props) => <DefaultShell {...props} className={emberDeckFontClass} />,
};
