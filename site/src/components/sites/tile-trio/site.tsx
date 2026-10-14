import type { SiteModule } from "../types";
import { TileTrioLanding } from "./landing";
import { TileTrioShell } from "./shell";
import "./site.css";

export const site: SiteModule = {
  Landing: ({ locale }) => <TileTrioLanding locale={locale} />,
  Shell: (props) => <TileTrioShell {...props} />,
};
