import type { SiteModule } from "../types";
import { CanSwapLanding } from "./landing";
import { CanSwapShell } from "./shell";
import "./site.css";

// Can Swap: colour chapters. Every section is one can's flat colour, and the
// row of cans in the cabinet is the thing the visitor plays with.
export const site: SiteModule = {
  Landing: ({ locale }) => <CanSwapLanding locale={locale} />,
  Shell: (props) => <CanSwapShell {...props} />,
};
