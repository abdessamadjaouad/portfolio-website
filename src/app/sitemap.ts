import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/project-pages";
import { siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin) return [];
  return [
    "/",
    "/projects",
    "/about",
    "/research",
    ...caseStudies.map(({ slug }) => `/projects/${slug}`),
  ].map((path) => ({ url: new URL(path, siteOrigin).href }));
}
