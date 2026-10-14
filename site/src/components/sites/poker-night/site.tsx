import { PokerNightLandingPage } from "@/components/poker-night/landing";
import { pokerNightFontClass } from "@/components/poker-night/fonts";
import { DefaultShell } from "../shared/default-shell";
import type { SiteModule } from "../types";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <PokerNightLandingPage locale={locale} />,
  Shell: (props) => <DefaultShell {...props} className={pokerNightFontClass} />,
};
