import type { SiteModule } from "../types";
import { SlideJamLanding } from "./landing";
import { SlideJamShell } from "./shell";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <SlideJamLanding locale={locale} />,
  Shell: (props) => <SlideJamShell {...props} />,
};
