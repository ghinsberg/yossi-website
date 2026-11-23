import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { readSiteEnv } from "@/lib/site";
import { sitemapFor, siteForRequest } from "@/lib/seo";

// Shared path: the middleware does not rewrite it, so one file answers on
// both hosts and chooses by the request host.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") ?? "";
  const { site, base } = siteForRequest(host, readSiteEnv());
  return sitemapFor(site, base);
}
