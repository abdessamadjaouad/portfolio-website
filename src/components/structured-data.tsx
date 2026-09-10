import { portfolioContent } from "@/content/registry";
import type { Project } from "@/content/schemas";
import { serializeJsonLd } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export function StructuredData({ project }: { project?: Project }) {
  const { profile, links } = portfolioContent;
  const person = {
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: profile.name,
    jobTitle: [profile.roles.primary, profile.roles.secondary],
    url: absoluteUrl("/"),
    address: profile.location,
    sameAs: profile.socialLinkIds.map(
      (id) => links.find((link) => link.id === id)?.href,
    ),
  };
  const data = project
    ? {
        "@type": "CreativeWork",
        name: project.title,
        description: project.contributions[0],
        url: absoluteUrl(`/projects/${project.slug}`),
        [project.category === "personal-project" ? "creator" : "contributor"]:
          person,
        keywords: project.technologies,
      }
    : person;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd({ "@context": "https://schema.org", ...data }),
      }}
    />
  );
}
