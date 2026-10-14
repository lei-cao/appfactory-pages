import { TracesheetLandingPage } from "@/components/tracesheet/landing";
import { DefaultShell } from "../shared/default-shell";
import type { SiteModule } from "../types";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <TracesheetLandingPage locale={locale} />,
  Shell: (props) => <DefaultShell {...props} />,
};
