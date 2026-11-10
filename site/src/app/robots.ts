import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { apps } from "@/content/apps";
import { hubOrigin } from "@/lib/site";

// Decision (HQ search hub): allow every AI crawler, search and training alike.
// They'd be covered by the "*" group anyway; listing them makes the intent
// explicit and survives anyone later adding a Disallow to "*". Served
// identically on the apex and every subdomain; the sitemap is the apex one,
// valid because all hosts sit in one Search Console Domain property.
export const AI_BOTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google / Apple / Microsoft / Meta / Amazon / others
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  // An app with its own domain points at its own sitemap, not the apex one.
  const host = ((await headers()).get("host") ?? "").split(":")[0].toLowerCase();
  const own = apps.find((a) => a.domain && (host === a.domain || host === `www.${a.domain}`));
  const origin = own ? `https://${own.domain}` : hubOrigin();
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${origin}/sitemap.xml`,
  };
}
