import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { readSiteEnv } from "@/lib/site";
import { robotsFor, siteForRequest } from "@/lib/seo";

// Shared path, host-aware like sitemap.ts. Replaces public/robots.txt.
export default async function robots(): Promise<MetadataRoute.Robots> {
  const env = readSiteEnv();
  const host = (await headers()).get("host") ?? "";
  const { site, base } = siteForRequest(host, env);
  return robotsFor(site, base, env.heLive === "1");
}
