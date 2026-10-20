import type { SiteModule } from "../types";
import { TracesheetLanding } from "./landing";
import { TracesheetShell } from "./shell";
import "./site.css";

// lingowonders.com (slug "tracesheet"): its own Shell (header,
// copybook footer) and Landing. The landing emits the app and Organization
// JSON-LD itself; guides and support are routes in
// src/app/[locale]/apps/tracesheet/.
export const site: SiteModule = {
  Landing: ({ locale }) => <TracesheetLanding locale={locale} />,
  Shell: (props) => <TracesheetShell {...props} />,
};
