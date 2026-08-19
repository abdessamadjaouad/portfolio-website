import * as z from "zod";

const TODO_PREFIX = "TODO_CONTENT_";
const publicAssetPattern =
  /^\/(?:images|resumes|videos)\/[a-z0-9][a-z0-9./-]*$/;

export const contentTextSchema = z
  .string()
  .trim()
  .min(1)
  .refine((value) => !value.includes(TODO_PREFIX), {
    message: "Use a structured TODO reference instead of placeholder text.",
  });

export const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase kebab-case slug.");

export const todoIdSchema = z
  .string()
  .regex(/^TODO_CONTENT_[A-Z0-9_]+$/, "Use a named TODO_CONTENT_* identifier.");

export const todoReferenceSchema = z.strictObject({
  status: z.literal("todo"),
  id: todoIdSchema,
});

export const narrativeSchema = z.union([
  contentTextSchema,
  todoReferenceSchema,
]);

const approvedUriSchema = z.url().superRefine((value, context) => {
  const url = new URL(value);

  if (url.protocol !== "https:" && url.protocol !== "mailto:") {
    context.addIssue({
      code: "custom",
      message: "Public links must use HTTPS or mailto.",
    });
  }

  if (url.username || url.password) {
    context.addIssue({
      code: "custom",
      message: "Public links cannot contain credentials.",
    });
  }

  if (url.hostname === "drive.google.com") {
    context.addIssue({
      code: "custom",
      message: "The unresolved Google Drive destination is not publishable.",
    });
  }
});

export const linkSchema = z
  .strictObject({
    id: slugSchema,
    kind: z.enum([
      "contact-email",
      "contact-social",
      "research",
      "project-evidence",
      "certification",
    ]),
    label: contentTextSchema,
    href: approvedUriSchema,
    publicationApproved: z.literal(true),
  })
  .superRefine((link, context) => {
    const url = new URL(link.href);

    if (link.kind === "contact-email") {
      if (
        url.protocol !== "mailto:" ||
        !z.email().safeParse(url.pathname).success
      ) {
        context.addIssue({
          code: "custom",
          path: ["href"],
          message: "Email contacts require a valid mailto destination.",
        });
      }
    } else if (url.protocol !== "https:") {
      context.addIssue({
        code: "custom",
        path: ["href"],
        message: "Non-email links require HTTPS.",
      });
    }
  });

export const profileSchema = z.strictObject({
  name: contentTextSchema,
  roles: z.strictObject({
    primary: z.literal("Data Engineer"),
    secondary: z.literal("Software Engineer"),
  }),
  location: z.literal("Casablanca, Morocco"),
  availability: z.literal("Immediately"),
  workArrangements: z.array(z.enum(["On-site", "Hybrid", "Remote"])).length(3),
  phone: z.e164(),
  contactLinkIds: z.array(slugSchema).length(3),
  socialLinkIds: z.array(slugSchema).length(2),
});

export const evidenceSourceSchema = z.enum([
  "approved-fact",
  "data-engineer-resume",
  "software-engineer-resume",
]);

export const evidenceSchema = z.strictObject({
  sources: z.array(evidenceSourceSchema).min(1),
  claimsApproved: z.literal(true),
});

const percentageMeasureSchema = z.strictObject({
  kind: z.enum([
    "percentage-reduction",
    "percentage-improvement",
    "accuracy-floor",
  ]),
  percent: z.number().min(0).max(100),
});

const parameterReductionMeasureSchema = z
  .strictObject({
    kind: z.literal("parameter-reduction"),
    from: z.int().positive(),
    to: z.int().nonnegative(),
    percent: z.number().min(0).max(100),
  })
  .refine(({ from, to }) => to < from, {
    message: "A parameter reduction must end below its starting value.",
  });

export const metricSchema = z.strictObject({
  id: slugSchema,
  displayValue: contentTextSchema,
  label: contentTextSchema,
  claim: contentTextSchema,
  attribution: contentTextSchema,
  measure: z.union([percentageMeasureSchema, parameterReductionMeasureSchema]),
  evidence: evidenceSchema,
});

export const architectureNodeSchema = z.strictObject({
  id: slugSchema,
  label: contentTextSchema,
  responsibility: contentTextSchema,
  technologies: z.array(contentTextSchema).min(1),
});

export const architectureSchema = z.strictObject({
  summary: contentTextSchema,
  textAlternative: contentTextSchema,
  privacy: z.enum(["sanitized-resume-level", "resume-backed-public"]),
  nodes: z.array(architectureNodeSchema).min(2),
  flow: z.array(slugSchema).min(2),
});

export const publicAssetPathSchema = z
  .string()
  .regex(publicAssetPattern, "Use an approved lowercase public asset path.")
  .refine(
    (value) =>
      !value.includes("..") &&
      !value.includes("//") &&
      !value.includes("\\") &&
      !value.endsWith("/") &&
      !value.includes("private-inputs") &&
      !value.includes(TODO_PREFIX),
    { message: "Public asset paths must stay inside approved public folders." },
  );

export const mediaSchema = z
  .strictObject({
    id: slugSchema,
    kind: z.enum(["pdf", "image", "poster", "video"]),
    publicPath: publicAssetPathSchema,
    mimeType: z.enum([
      "application/pdf",
      "image/avif",
      "image/svg+xml",
      "image/webp",
      "video/mp4",
      "video/webm",
    ]),
    subjectRef: contentTextSchema,
    sourceOwner: contentTextSchema,
    publicationPermission: z.literal("approved"),
    confidentialityReview: z.strictObject({
      status: z.literal("passed"),
      reviewedOn: z.iso.date(),
    }),
    metadataReview: z.strictObject({
      status: z.literal("passed"),
      reviewedOn: z.iso.date(),
    }),
    optimization: z.enum(["linearized", "optimized", "not-applicable"]),
    altText: contentTextSchema.optional(),
    textAlternative: contentTextSchema.optional(),
    dimensions: z
      .strictObject({
        width: z.int().positive(),
        height: z.int().positive(),
      })
      .optional(),
  })
  .superRefine((media, context) => {
    const expectedExtension = {
      "application/pdf": ".pdf",
      "image/avif": ".avif",
      "image/svg+xml": ".svg",
      "image/webp": ".webp",
      "video/mp4": ".mp4",
      "video/webm": ".webm",
    }[media.mimeType];

    if (!media.publicPath.endsWith(expectedExtension)) {
      context.addIssue({
        code: "custom",
        path: ["publicPath"],
        message: `The public path must end with ${expectedExtension}.`,
      });
    }

    if (media.kind === "pdf") {
      if (
        media.mimeType !== "application/pdf" ||
        !media.publicPath.endsWith(".pdf")
      ) {
        context.addIssue({
          code: "custom",
          message: "PDF records must use the PDF MIME type and extension.",
        });
      }
      if (!media.textAlternative) {
        context.addIssue({
          code: "custom",
          path: ["textAlternative"],
          message: "PDF records require a text alternative.",
        });
      }
    }

    if (media.kind === "image" || media.kind === "poster") {
      if (!media.mimeType.startsWith("image/")) {
        context.addIssue({
          code: "custom",
          path: ["mimeType"],
          message: "Images and posters require an image MIME type.",
        });
      }
      if (!media.dimensions || !media.altText) {
        context.addIssue({
          code: "custom",
          message: "Images and posters require dimensions and alt text.",
        });
      }
    }

    if (media.kind === "video" && !media.mimeType.startsWith("video/")) {
      context.addIssue({
        code: "custom",
        path: ["mimeType"],
        message: "Video records require a video MIME type.",
      });
    }
  });

export const experienceSchema = z
  .strictObject({
    id: slugSchema,
    order: z.int().positive(),
    employer: contentTextSchema,
    officialTitle: contentTextSchema,
    employmentType: z.literal("Internship"),
    start: z.string().regex(/^\d{4}-(?:0[1-9]|1[0-2])$/),
    end: z.string().regex(/^\d{4}-(?:0[1-9]|1[0-2])$/),
    dateLabel: contentTextSchema,
    location: contentTextSchema,
    summary: contentTextSchema,
    evidence: evidenceSchema,
  })
  .refine(({ start, end }) => start <= end, {
    path: ["end"],
    message: "Experience end dates cannot precede start dates.",
  });

const projectCategorySchema = z.enum([
  "employer-highlight",
  "employer-result",
  "personal-project",
]);

export const projectSchema = z
  .strictObject({
    id: slugSchema,
    slug: slugSchema,
    order: z.int().positive(),
    title: contentTextSchema,
    category: projectCategorySchema,
    publicDepth: z.enum([
      "concise-highlight",
      "supporting-result",
      "concise-card",
    ]),
    featured: z.boolean(),
    year: z.int().min(2000).max(2100).optional(),
    experienceId: slugSchema.optional(),
    context: contentTextSchema,
    problem: narrativeSchema,
    contributions: z.array(contentTextSchema).min(1),
    architecture: architectureSchema,
    outcome: contentTextSchema,
    metricIds: z.array(slugSchema),
    technologies: z.array(contentTextSchema).min(1),
    linkIds: z.array(slugSchema),
    mediaIds: z.array(slugSchema),
    contentGapIds: z.array(todoIdSchema),
    evidence: evidenceSchema,
  })
  .superRefine((project, context) => {
    const containsTodo = JSON.stringify(project).includes(TODO_PREFIX);
    const expectedDepth = {
      "employer-highlight": "concise-highlight",
      "employer-result": "supporting-result",
      "personal-project": "concise-card",
    }[project.category];

    if (project.publicDepth !== expectedDepth) {
      context.addIssue({
        code: "custom",
        path: ["publicDepth"],
        message: `The ${project.category} category requires ${expectedDepth}.`,
      });
    }

    if (project.featured && containsTodo) {
      context.addIssue({
        code: "custom",
        message: "Featured records cannot contain unresolved TODO content.",
      });
    }

    if (project.featured && project.category !== "employer-highlight") {
      context.addIssue({
        code: "custom",
        path: ["category"],
        message: "Only concise employer highlights are featured in Version 1.",
      });
    }

    if (
      project.category !== "personal-project" &&
      project.experienceId === undefined
    ) {
      context.addIssue({
        code: "custom",
        path: ["experienceId"],
        message: "Employer records must reference their experience.",
      });
    }

    if (project.category === "personal-project") {
      if (project.experienceId !== undefined) {
        context.addIssue({
          code: "custom",
          path: ["experienceId"],
          message: "Personal projects cannot reference employer experience.",
        });
      }
      if (project.year === undefined) {
        context.addIssue({
          code: "custom",
          path: ["year"],
          message: "Personal projects require a resume-backed year.",
        });
      }
    }
  });

export const researchSchema = z.strictObject({
  id: slugSchema,
  title: contentTextSchema,
  linkId: slugSchema,
  fullCitation: narrativeSchema,
  publicTreatment: z.literal("title-and-approved-link-only"),
  evidence: evidenceSchema,
});

export const resumeSchema = z.strictObject({
  id: z.enum(["data-engineer", "software-engineer"]),
  order: z.int().positive(),
  role: z.enum(["Data Engineer", "Software Engineer"]),
  label: contentTextSchema,
  mediaId: slugSchema,
  review: z.strictObject({
    visual: z.literal("passed"),
    selectableText: z.literal("passed"),
    links: z.literal("passed"),
    approvedFacts: z.literal("passed"),
    metadata: z.literal("passed"),
    reviewedOn: z.iso.date(),
  }),
});

export const contentGapSchema = z.strictObject({
  id: todoIdSchema,
  status: z.literal("unresolved"),
  requirement: contentTextSchema,
  affects: z.array(contentTextSchema).min(1),
  blocksCurrentPublicTreatment: z.boolean(),
});

export const skillEvidenceReferenceSchema = z.strictObject({
  kind: z.enum(["project", "experience"]),
  id: slugSchema,
});

export const skillSchema = z.strictObject({
  id: slugSchema,
  label: contentTextSchema,
  group: z.enum([
    "programming",
    "data-engineering",
    "backend-and-web",
    "data-stores",
    "analytics-and-bi",
    "ai-and-machine-learning",
    "cloud-and-delivery",
    "testing",
    "architecture",
  ]),
  rolePriority: z.enum(["data-engineer", "software-engineer", "shared"]),
  evidenceRefs: z.array(skillEvidenceReferenceSchema).min(1),
});

export const educationSchema = z
  .strictObject({
    id: slugSchema,
    order: z.int().positive(),
    institution: contentTextSchema,
    program: contentTextSchema,
    startYear: z.int().min(1900).max(2100),
    endYear: z.int().min(1900).max(2100),
    result: contentTextSchema,
    location: contentTextSchema,
    evidence: evidenceSchema,
  })
  .refine(({ startYear, endYear }) => startYear <= endYear, {
    path: ["endYear"],
    message: "Education end years cannot precede start years.",
  });

export const certificationSchema = z.strictObject({
  id: slugSchema,
  order: z.int().positive(),
  name: contentTextSchema,
  year: z.int().min(1900).max(2100),
  linkId: slugSchema.optional(),
  evidence: evidenceSchema,
});

export const languageSchema = z.strictObject({
  id: slugSchema,
  order: z.int().positive(),
  name: contentTextSchema,
  level: z.enum(["Native", "Fluent"]),
  evidence: evidenceSchema,
});

export const portfolioContentSchema = z.strictObject({
  profile: profileSchema,
  links: z.array(linkSchema),
  experiences: z.array(experienceSchema).min(1),
  metrics: z.array(metricSchema),
  projects: z.array(projectSchema).min(1),
  research: researchSchema,
  media: z.array(mediaSchema),
  resumes: z.array(resumeSchema).length(2),
  contentGaps: z.array(contentGapSchema),
  skills: z.array(skillSchema),
  education: z.array(educationSchema),
  certifications: z.array(certificationSchema),
  languages: z.array(languageSchema),
});

export type PortfolioContent = z.infer<typeof portfolioContentSchema>;
export type Link = z.infer<typeof linkSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Metric = z.infer<typeof metricSchema>;
export type Evidence = z.infer<typeof evidenceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Media = z.infer<typeof mediaSchema>;
export type Research = z.infer<typeof researchSchema>;
export type Resume = z.infer<typeof resumeSchema>;
export type ContentGap = z.infer<typeof contentGapSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Language = z.infer<typeof languageSchema>;
export type TodoReference = z.infer<typeof todoReferenceSchema>;

export function isTodoReference(value: unknown): value is TodoReference {
  return todoReferenceSchema.safeParse(value).success;
}
