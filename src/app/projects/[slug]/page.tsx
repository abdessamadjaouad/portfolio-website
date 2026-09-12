import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/project-detail";
import { caseStudies, getCaseStudy } from "@/content/project-pages";
import { pageMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/structured-data";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();
  return pageMetadata(
    project.title,
    project.contributions[0],
    `/projects/${project.slug}`,
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();
  return (
    <>
      <StructuredData project={project} />
      <ProjectDetail project={project} />
    </>
  );
}
