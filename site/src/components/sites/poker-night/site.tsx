import { PokerNightLandingPage } from "@/components/poker-night/landing";
import { pokerNightFontClass } from "@/components/poker-night/fonts";
import type { SiteModule } from "../types";
import { PokerNightShell } from "./shell";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <PokerNightLandingPage locale={locale} />,
  Shell: (props) => (
    <div className={pokerNightFontClass}>
      <PokerNightShell {...props} />
    </div>
  ),
};
