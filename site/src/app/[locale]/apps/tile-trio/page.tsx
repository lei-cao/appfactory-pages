import { site } from "@/components/sites/tile-trio/site";
import * as meta from "@/components/sites/shared/pages/landing-meta";
import { bindPage, siteLanding } from "@/components/sites/shared/routes";

export const generateMetadata = bindPage("tile-trio", {
  default: () => null,
  generateMetadata: meta.generateMetadata,
}).generateMetadata;

export default siteLanding(site);
