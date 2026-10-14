import type { SiteModule } from "../types";
import { CrowdSiegeLanding } from "./landing";
import { CrowdSiegeShell } from "./shell";
import "./site.css";

// Crowd Siege: the sentence is the layout. The name runs as one poster line
// with the six heroes standing in its gap, and the campaign reads as a
// series of statements with their proof.
export const site: SiteModule = {
  Landing: ({ locale }) => <CrowdSiegeLanding locale={locale} />,
  Shell: (props) => <CrowdSiegeShell {...props} />,
};
