import { pageMetadata } from "@/lib/metadata";
import { ProjectIndex } from "@/components/projects/project-index";

export const metadata = pageMetadata(
  "Projects",
  "Data pipelines, cloud platforms, geospatial systems, and production software by Abdessamad Jaouad.",
  "/projects",
);

export default function ProjectsPage() {
  return <ProjectIndex />;
}
