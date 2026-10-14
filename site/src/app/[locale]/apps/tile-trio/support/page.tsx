import * as mod from "@/components/sites/shared/pages/support";
import { bindPage } from "@/components/sites/shared/routes";

const page = bindPage("tile-trio", mod);
export const generateMetadata = page.generateMetadata;
export default page.Page;
