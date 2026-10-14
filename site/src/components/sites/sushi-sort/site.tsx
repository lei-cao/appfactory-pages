import type { SiteModule } from "../types";
import { SushiSortLanding } from "./landing";
import { SushiSortShell } from "./shell";
import "./site.css";

export const site: SiteModule = {
  Landing: SushiSortLanding,
  Shell: SushiSortShell,
};
