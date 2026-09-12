import { certifications, education, languages } from "./records/background";
import { contentGaps } from "./records/content-gaps";
import { experiences } from "./records/experiences";
import { links } from "./records/links";
import { media, resumes } from "./records/media";
import { metrics } from "./records/metrics";
import { profile } from "./records/profile";
import { projects } from "./records/projects";
import { research } from "./records/research";
import { skills } from "./records/skills";
import {
  isTodoReference,
  portfolioContentSchema,
  type PortfolioContent,
} from "./schemas";

const rawPortfolioContent = {
  profile,
  links,
  experiences,
  metrics,
  projects,
  research,
  media,
  resumes,
  contentGaps,
  skills,
  education,
  certifications,
  languages,
} satisfies PortfolioContent;

function findDuplicates(values: readonly string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    }
    seen.add(value);
  }

  return [...duplicates];
}

function isAscending(values: readonly number[]) {
  return values.every(
    (value, index) => index === 0 || value > values[index - 1],
  );
}

const validatedPortfolioContentSchema = portfolioContentSchema.superRefine(
  (content, context) => {
    const addIssue = (path: PropertyKey[], message: string) => {
      context.addIssue({
        code: "custom",
        path,
        message,
      });
    };

    const uniqueCollections: Array<{
      path: keyof PortfolioContent;
      values: string[];
    }> = [
      { path: "links", values: content.links.map(({ id }) => id) },
      {
        path: "experiences",
        values: content.experiences.map(({ id }) => id),
      },
      { path: "metrics", values: content.metrics.map(({ id }) => id) },
      { path: "projects", values: content.projects.map(({ id }) => id) },
      { path: "projects", values: content.projects.map(({ slug }) => slug) },
      { path: "media", values: content.media.map(({ id }) => id) },
      {
        path: "media",
        values: content.media.map(({ publicPath }) => publicPath),
      },
      { path: "resumes", values: content.resumes.map(({ id }) => id) },
      {
        path: "contentGaps",
        values: content.contentGaps.map(({ id }) => id),
      },
      { path: "skills", values: content.skills.map(({ id }) => id) },
      { path: "education", values: content.education.map(({ id }) => id) },
      {
        path: "certifications",
        values: content.certifications.map(({ id }) => id),
      },
      { path: "languages", values: content.languages.map(({ id }) => id) },
    ];

    for (const collection of uniqueCollections) {
      const duplicates = findDuplicates(collection.values);
      if (duplicates.length > 0) {
        addIssue(
          [collection.path],
          `Duplicate identifiers are not allowed: ${duplicates.join(", ")}.`,
        );
      }
    }

    const orderedCollections: Array<{
      path: keyof PortfolioContent;
      values: number[];
    }> = [
      {
        path: "experiences",
        values: content.experiences.map(({ order }) => order),
      },
      { path: "projects", values: content.projects.map(({ order }) => order) },
      { path: "resumes", values: content.resumes.map(({ order }) => order) },
      {
        path: "education",
        values: content.education.map(({ order }) => order),
      },
      {
        path: "certifications",
        values: content.certifications.map(({ order }) => order),
      },
      {
        path: "languages",
        values: content.languages.map(({ order }) => order),
      },
    ];

    for (const collection of orderedCollections) {
      if (!isAscending(collection.values)) {
        addIssue(
          [collection.path],
          "Records must stay in explicit ascending order.",
        );
      }
    }

    const linkIds = new Set(content.links.map(({ id }) => id));
    const experienceIds = new Set(content.experiences.map(({ id }) => id));
    const metricIds = new Set(content.metrics.map(({ id }) => id));
    const projectIds = new Set(content.projects.map(({ id }) => id));
    const mediaIds = new Set(content.media.map(({ id }) => id));
    const gapIds = new Set(content.contentGaps.map(({ id }) => id));

    for (const [field, values] of [
      ["contactLinkIds", content.profile.contactLinkIds],
      ["socialLinkIds", content.profile.socialLinkIds],
    ] as const) {
      const duplicates = findDuplicates(values);
      if (duplicates.length > 0) {
        addIssue(
          ["profile", field],
          `Profile link references must be unique: ${duplicates.join(", ")}.`,
        );
      }
    }

    for (const [index, linkId] of content.profile.contactLinkIds.entries()) {
      if (!linkIds.has(linkId)) {
        addIssue(
          ["profile", "contactLinkIds", index],
          `Unknown contact link: ${linkId}.`,
        );
      }
    }

    for (const [index, linkId] of content.profile.socialLinkIds.entries()) {
      if (!linkIds.has(linkId)) {
        addIssue(
          ["profile", "socialLinkIds", index],
          `Unknown social link: ${linkId}.`,
        );
      }
    }

    for (const [projectIndex, project] of content.projects.entries()) {
      if (project.id !== project.slug) {
        addIssue(
          ["projects", projectIndex, "slug"],
          "Project IDs and slugs must match.",
        );
      }

      if (project.experienceId && !experienceIds.has(project.experienceId)) {
        addIssue(
          ["projects", projectIndex, "experienceId"],
          `Unknown experience: ${project.experienceId}.`,
        );
      }

      for (const [field, values] of [
        ["metricIds", project.metricIds],
        ["linkIds", project.linkIds],
        ["mediaIds", project.mediaIds],
        ["contentGapIds", project.contentGapIds],
      ] as const) {
        const duplicates = findDuplicates(values);
        if (duplicates.length > 0) {
          addIssue(
            ["projects", projectIndex, field],
            `Project references must be unique: ${duplicates.join(", ")}.`,
          );
        }
      }

      for (const [metricIndex, metricId] of project.metricIds.entries()) {
        if (!metricIds.has(metricId)) {
          addIssue(
            ["projects", projectIndex, "metricIds", metricIndex],
            `Unknown metric: ${metricId}.`,
          );
        }
      }

      for (const [linkIndex, linkId] of project.linkIds.entries()) {
        if (!linkIds.has(linkId)) {
          addIssue(
            ["projects", projectIndex, "linkIds", linkIndex],
            `Unknown project link: ${linkId}.`,
          );
        }
      }

      for (const [mediaIndex, mediaId] of project.mediaIds.entries()) {
        if (!mediaIds.has(mediaId)) {
          addIssue(
            ["projects", projectIndex, "mediaIds", mediaIndex],
            `Unknown project media: ${mediaId}.`,
          );
        }
      }

      for (const [gapIndex, gapId] of project.contentGapIds.entries()) {
        if (!gapIds.has(gapId)) {
          addIssue(
            ["projects", projectIndex, "contentGapIds", gapIndex],
            `Unknown content gap: ${gapId}.`,
          );
        }
      }

      if (
        isTodoReference(project.problem) &&
        !project.contentGapIds.includes(project.problem.id)
      ) {
        addIssue(
          ["projects", projectIndex, "problem"],
          "A project TODO reference must be declared in contentGapIds.",
        );
      }

      const nodeIds = project.architecture.nodes.map(({ id }) => id);
      const duplicateNodeIds = findDuplicates(nodeIds);
      if (duplicateNodeIds.length > 0) {
        addIssue(
          ["projects", projectIndex, "architecture", "nodes"],
          `Architecture node IDs must be unique: ${duplicateNodeIds.join(", ")}.`,
        );
      }

      if (
        findDuplicates(project.architecture.flow).length > 0 ||
        project.architecture.flow.length !== nodeIds.length ||
        project.architecture.flow.some((id) => !nodeIds.includes(id))
      ) {
        addIssue(
          ["projects", projectIndex, "architecture", "flow"],
          "Architecture flow must reference every node exactly once.",
        );
      }

      const repeatedTechnologies = findDuplicates(project.technologies);
      if (repeatedTechnologies.length > 0) {
        addIssue(
          ["projects", projectIndex, "technologies"],
          `Project technologies must be unique: ${repeatedTechnologies.join(", ")}.`,
        );
      }
    }

    if (!linkIds.has(content.research.linkId)) {
      addIssue(
        ["research", "linkId"],
        `Unknown research link: ${content.research.linkId}.`,
      );
    }

    if (
      isTodoReference(content.research.fullCitation) &&
      !gapIds.has(content.research.fullCitation.id)
    ) {
      addIssue(
        ["research", "fullCitation"],
        `Unknown research content gap: ${content.research.fullCitation.id}.`,
      );
    }

    for (const [resumeIndex, resume] of content.resumes.entries()) {
      const asset = content.media.find(({ id }) => id === resume.mediaId);
      if (!asset || asset.kind !== "pdf") {
        addIssue(
          ["resumes", resumeIndex, "mediaId"],
          `Resume media must reference a declared PDF: ${resume.mediaId}.`,
        );
      }

      if (asset && asset.subjectRef !== `resume:${resume.id}`) {
        addIssue(
          ["resumes", resumeIndex, "mediaId"],
          `Resume media subject does not match ${resume.id}.`,
        );
      }
    }

    for (const [skillIndex, skill] of content.skills.entries()) {
      const duplicateEvidence = findDuplicates(
        skill.evidenceRefs.map(({ kind, id }) => `${kind}:${id}`),
      );
      if (duplicateEvidence.length > 0) {
        addIssue(
          ["skills", skillIndex, "evidenceRefs"],
          `Skill evidence references must be unique: ${duplicateEvidence.join(", ")}.`,
        );
      }

      for (const [referenceIndex, reference] of skill.evidenceRefs.entries()) {
        const exists =
          reference.kind === "project"
            ? projectIds.has(reference.id)
            : experienceIds.has(reference.id);

        if (!exists) {
          addIssue(
            ["skills", skillIndex, "evidenceRefs", referenceIndex],
            `Unknown ${reference.kind} evidence: ${reference.id}.`,
          );
        }
      }
    }

    for (const [
      certificationIndex,
      certification,
    ] of content.certifications.entries()) {
      if (certification.linkId && !linkIds.has(certification.linkId)) {
        addIssue(
          ["certifications", certificationIndex, "linkId"],
          `Unknown certification link: ${certification.linkId}.`,
        );
      }
    }
  },
);

export function parsePortfolioContent(input: unknown): PortfolioContent {
  return validatedPortfolioContentSchema.parse(input);
}

export const portfolioContent = parsePortfolioContent(rawPortfolioContent);
