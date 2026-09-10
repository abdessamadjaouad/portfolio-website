import { portfolioContent } from "./registry";

export const caseStudies = portfolioContent.projects.filter(
  (project) => project.publicDepth === "case-study",
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
