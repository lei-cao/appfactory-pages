import { apps, localized } from "@/content/apps";
import { canonicalUrl } from "@/lib/i18n";
import { appOrigin, hubOrigin, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt (https://llmstxt.org): a short English map of the site for LLMs. */
export function GET() {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is a small Singapore studio that builds and ships mobile apps and games, one at a time. Every app has its own page with features, FAQs, support and a privacy policy. Pages are available in English, Simplified Chinese (/zh-cn) and Traditional Chinese (/zh-tw).`,
    "",
    "## Apps and games",
    "",
  ];
  for (const app of apps) {
    const en = localized(app, "en");
    const url = app.externalUrls?.en?.split("?")[0] ?? canonicalUrl(appOrigin(app), "en");
    lines.push(`- [${en.storeName}](${url}): ${en.oneLiner}`);
  }
  lines.push(
    "",
    "## Studio",
    "",
    `- [${SITE_NAME} home](${canonicalUrl(hubOrigin(), "en")}): the full list of apps and their status`,
    `- [Sitemap](${hubOrigin()}/sitemap.xml)`,
    "",
  );
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
