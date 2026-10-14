import type { SiteModule } from "../types";
import { TracesheetLanding } from "./landing";
import { TracesheetShell } from "./shell";
import "./site.css";

// tracesheet.appfactory.sg: its own Shell (header, cell-wordmark footer) and
// Landing. The landing emits the app and Organization JSON-LD itself.
export const site: SiteModule = {
  Landing: ({ locale }) => <TracesheetLanding locale={locale} />,
  Shell: (props) => <TracesheetShell {...props} />,
};
