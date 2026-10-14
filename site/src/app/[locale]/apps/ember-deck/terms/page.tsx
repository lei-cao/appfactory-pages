import * as mod from "@/components/sites/shared/pages/terms";
import { bindPage } from "@/components/sites/shared/routes";

const page = bindPage("ember-deck", mod);
export const generateMetadata = page.generateMetadata;
export default page.Page;
