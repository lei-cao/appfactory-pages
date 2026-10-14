import { SushiSortLandingPage } from "@/components/sushi-sort/landing";
import { sushiSortFontClass } from "@/components/sushi-sort/fonts";
import { DefaultShell } from "../shared/default-shell";
import type { SiteModule } from "../types";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <SushiSortLandingPage locale={locale} />,
  Shell: (props) => <DefaultShell {...props} className={sushiSortFontClass} />,
};
