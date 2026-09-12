import type { Media, Resume } from "../schemas";

export const media = [
  ...[
    {
      id: "dxc",
      owner: "DXC Technology",
      experienceId: "dxc-technology-morocco",
      height: 320,
    },
    { id: "jesa", owner: "JESA S.A.", experienceId: "jesa", height: 320 },
    { id: "ocp", owner: "OCP Group", experienceId: "ocp-group", height: 293 },
  ].map(({ id, owner, experienceId, height }): Media => ({
    id: `${id}-company-logo`,
    kind: "image",
    publicPath: `/images/${id}-logo.webp`,
    mimeType: "image/webp",
    subjectRef: `experience:${experienceId}`,
    sourceOwner: owner,
    publicationPermission: "approved",
    confidentialityReview: { status: "passed", reviewedOn: "2026-09-10" },
    metadataReview: { status: "passed", reviewedOn: "2026-09-10" },
    optimization: "optimized",
    altText: `${owner} logo`,
    dimensions: { width: 320, height },
  })),
  {
    id: "profile-portrait",
    kind: "image",
    publicPath: "/images/abdessamad-jaouad.webp",
    mimeType: "image/webp",
    subjectRef: "profile",
    sourceOwner: "Abdessamad Jaouad",
    publicationPermission: "approved",
    confidentialityReview: { status: "passed", reviewedOn: "2026-09-10" },
    metadataReview: { status: "passed", reviewedOn: "2026-09-10" },
    optimization: "optimized",
    altText: "Abdessamad Jaouad",
    dimensions: { width: 789, height: 789 },
  },
  {
    id: "data-engineer-resume-pdf",
    kind: "pdf",
    publicPath: "/resumes/abdessamad-jaouad-data-engineer.pdf",
    mimeType: "application/pdf",
    subjectRef: "resume:data-engineer",
    sourceOwner: "Abdessamad Jaouad",
    publicationPermission: "approved",
    confidentialityReview: {
      status: "passed",
      reviewedOn: "2026-08-19",
    },
    metadataReview: {
      status: "passed",
      reviewedOn: "2026-08-19",
    },
    optimization: "linearized",
    textAlternative:
      "Selectable-text English resume for Abdessamad Jaouad's Data Engineer profile.",
  },
  {
    id: "software-engineer-resume-pdf",
    kind: "pdf",
    publicPath: "/resumes/abdessamad-jaouad-software-engineer.pdf",
    mimeType: "application/pdf",
    subjectRef: "resume:software-engineer",
    sourceOwner: "Abdessamad Jaouad",
    publicationPermission: "approved",
    confidentialityReview: {
      status: "passed",
      reviewedOn: "2026-08-19",
    },
    metadataReview: {
      status: "passed",
      reviewedOn: "2026-08-19",
    },
    optimization: "linearized",
    textAlternative:
      "Selectable-text English resume for Abdessamad Jaouad's Software Engineer profile.",
  },
] satisfies Media[];

export const resumes = [
  {
    id: "data-engineer",
    order: 1,
    role: "Data Engineer",
    label: "Download the Data Engineer resume",
    mediaId: "data-engineer-resume-pdf",
    review: {
      visual: "passed",
      selectableText: "passed",
      links: "passed",
      approvedFacts: "passed",
      metadata: "passed",
      reviewedOn: "2026-08-19",
    },
  },
  {
    id: "software-engineer",
    order: 2,
    role: "Software Engineer",
    label: "Download the Software Engineer resume",
    mediaId: "software-engineer-resume-pdf",
    review: {
      visual: "passed",
      selectableText: "passed",
      links: "passed",
      approvedFacts: "passed",
      metadata: "passed",
      reviewedOn: "2026-08-19",
    },
  },
] satisfies Resume[];
