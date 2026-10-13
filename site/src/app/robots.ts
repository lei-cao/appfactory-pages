import type { MetadataRoute } from "next";
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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${hubOrigin()}/sitemap.xml`,
  };
}
