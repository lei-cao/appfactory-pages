import type { SiteModule } from "../types";
import { HaystackLanding } from "./landing";
import { HaystackShell } from "./shell";
import "./site.css";

// Haystack Hollow: the page is the object. The town's Order Board supplies
// the stationery: an order card, a slip, a printed menu, all on the meadow.
export const site: SiteModule = {
  Landing: ({ locale }) => <HaystackLanding locale={locale} />,
  Shell: (props) => <HaystackShell {...props} />,
};
