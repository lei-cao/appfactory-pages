import * as mod from "@/components/sites/shared/pages/guide-article";
import { bindPage } from "@/components/sites/shared/routes";

const page = bindPage("poker-night", mod);

export function generateStaticParams() {
  return mod.generateStaticParams().map(({ locale, articleId }) => ({ locale, articleId }));
}
export const dynamicParams = false;
export const generateMetadata = page.generateMetadata;
export default page.Page;
