import type { Metadata } from "next";
import { profile } from "@/content/records/profile";
import { absoluteUrl } from "./site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | ${profile.name}`;
  const url = absoluteUrl(path);
  const image = absoluteUrl("/opengraph-image");
  return {
    title: fullTitle,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: profile.name,
      title: fullTitle,
      description,
      url,
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: `${profile.name} — ${profile.roles.primary}`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
