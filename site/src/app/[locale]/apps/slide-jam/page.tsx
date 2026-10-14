import { site } from "@/components/sites/slide-jam/site";
import * as meta from "@/components/sites/shared/pages/landing-meta";
import { bindPage, siteLanding } from "@/components/sites/shared/routes";

export const generateMetadata = bindPage("slide-jam", {
  default: () => null,
  generateMetadata: meta.generateMetadata,
}).generateMetadata;

export default siteLanding(site);
