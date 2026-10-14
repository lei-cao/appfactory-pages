import { site } from "@/components/sites/ember-deck/site";
import * as meta from "@/components/sites/shared/pages/landing-meta";
import { bindPage, siteLanding } from "@/components/sites/shared/routes";

export const generateMetadata = bindPage("ember-deck", {
  default: () => null,
  generateMetadata: meta.generateMetadata,
}).generateMetadata;

export default siteLanding(site);
