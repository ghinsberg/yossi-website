import type { MetadataRoute } from "next";
import { keynotes } from "@/data/keynotes";
import { posts } from "@/data/posts";
import { speakerLocations } from "@/data/locations";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/keynotes",
    "/book-yossi",
    "/story",
    "/videos",
    "/endorsements",
    "/media",
    "/faq",
    "/blog",
    "/laws",
    "/yossi",
    "/power-to-survive",
    "/the-two-techniques",
    "/survival-skills-for-business",
    "/survival-keynote-speaker",
    "/resilience-keynote-speaker",
    "/adventure-keynote-speaker",
    "/adaptability-keynote-speaker",
    "/amazon-survival-speaker",
    "/leadership-keynote-speaker",
    "/motivational-keynote-speaker",
    "/stress-management-speaker",
    "/keynote-speaker-financial-services",
    "/keynote-speaker-insurance",
    "/keynote-speaker-mdrt",
    "/keynote-speaker-overcoming-adversity",
    "/keynote-speaker-technology",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/book-yossi" ? 0.9 : 0.7,
  }));

  const keynoteRoutes = keynotes.map((k) => ({
    url: `${BASE_URL}/keynotes/${k.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const cityRoutes = speakerLocations.map((loc) => ({
    url: `${BASE_URL}/keynote-speaker/${loc.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...keynoteRoutes, ...postRoutes, ...cityRoutes];
}
