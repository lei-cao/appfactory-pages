import { site } from "@/components/sites/crowd-siege/site";
import * as meta from "@/components/sites/shared/pages/landing-meta";
import { bindPage, siteLanding } from "@/components/sites/shared/routes";

export const generateMetadata = bindPage("crowd-siege", {
  default: () => null,
  generateMetadata: meta.generateMetadata,
}).generateMetadata;

export default siteLanding(site);
