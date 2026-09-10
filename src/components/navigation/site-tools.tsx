import { homepageContent } from "@/components/portfolio/home-content";
import { caseStudies } from "@/content/project-pages";
import { CommandPalette } from "./command-palette";

export function SiteTools() {
  return (
    <CommandPalette
      actions={[
        { label: "Home", href: "/", keywords: "overview profile" },
        {
          label: "All projects",
          href: "/projects",
          keywords: "work case studies",
        },
        ...caseStudies.map((project) => ({
          label: project.title,
          href: `/projects/${project.slug}`,
          keywords: project.technologies.join(" "),
        })),
        ...homepageContent.resumeDownloads.map((resume) => ({
          label: `${resume.role} resume`,
          href: resume.href,
          keywords: "cv pdf download",
        })),
        {
          label: "Skills",
          href: "/#skills",
          keywords: "technologies capabilities",
        },
        {
          label: "Experience",
          href: "/#experience",
          keywords: "career internship education",
        },
        { label: "About", href: "/about", keywords: "background profile" },
        {
          label: "Research",
          href: "/research",
          keywords: "paper ieee pqc iot",
        },
        {
          label: "Contact",
          href: "/#contact",
          keywords: "email linkedin whatsapp availability",
        },
      ]}
    />
  );
}
