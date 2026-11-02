import { DefaultShell } from "../shared/default-shell";
import type { SiteModule } from "../types";
import { PoplineLanding } from "./landing";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <PoplineLanding locale={locale} />,
  Shell: (props) => <DefaultShell {...props} />,
};
