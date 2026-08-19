import type { Media, Resume } from "../schemas";

export const media = [
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
