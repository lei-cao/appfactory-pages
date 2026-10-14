import * as mod from "@/components/sites/shared/pages/guide-index";
import { bindPage } from "@/components/sites/shared/routes";

const page = bindPage("poker-night", mod);
export const generateMetadata = page.generateMetadata;
export default page.Page;
