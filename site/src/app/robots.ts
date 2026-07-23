import type { MetadataRoute } from "next";
import { hubOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${hubOrigin()}/sitemap.xml`,
  };
}
