import { describe, expect, it } from "vitest";

import { linkSchema, mediaSchema, projectSchema } from "./schemas";

const evidence = {
  sources: ["approved-fact"] as const,
  claimsApproved: true as const,
};

const completeProject = {
  id: "approved-highlight",
  slug: "approved-highlight",
  order: 1,
  title: "Approved highlight",
  category: "employer-highlight" as const,
  publicDepth: "concise-highlight" as const,
  featured: true,
  experienceId: "approved-experience",
  context: "Approved employer context.",
  problem: "Approved problem statement.",
  contributions: ["Delivered the approved contribution."],
  architecture: {
    summary: "A resume-level architecture summary.",
    textAlternative: "Input flows through processing to an approved output.",
    privacy: "sanitized-resume-level" as const,
    nodes: [
      {
        id: "input",
        label: "Input",
        responsibility: "Receives approved input.",
        technologies: ["HTTPS"],
      },
      {
        id: "output",
        label: "Output",
        responsibility: "Produces an approved output.",
        technologies: ["HTML"],
      },
    ],
    flow: ["input", "output"],
  },
  outcome: "Delivered the approved outcome.",
  metricIds: [],
  technologies: ["TypeScript"],
  linkIds: [],
  mediaIds: [],
  contentGapIds: [],
  evidence,
};

describe("content schemas", () => {
  it("rejects unresolved content inside a featured project", () => {
    const result = projectSchema.safeParse({
      ...completeProject,
      problem: {
        status: "todo",
        id: "TODO_CONTENT_FEATURED_PROBLEM",
      },
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          message: "Featured records cannot contain unresolved TODO content.",
        }),
      ]),
    );
  });

  it("allows a structured TODO only for an incomplete nonfeatured project", () => {
    const result = projectSchema.safeParse({
      ...completeProject,
      id: "candidate-project",
      slug: "candidate-project",
      category: "personal-project",
      publicDepth: "concise-card",
      featured: false,
      year: 2025,
      experienceId: undefined,
      problem: {
        status: "todo",
        id: "TODO_CONTENT_CANDIDATE_CONTEXT",
      },
      contentGapIds: ["TODO_CONTENT_CANDIDATE_CONTEXT"],
    });

    expect(result.success).toBe(true);
  });

  it("rejects unsafe public links and incomplete media records", () => {
    expect(
      linkSchema.safeParse({
        id: "shared-drive",
        kind: "project-evidence",
        label: "Shared drive",
        href: "https://drive.google.com/example",
        publicationApproved: true,
      }).success,
    ).toBe(false);

    expect(
      mediaSchema.safeParse({
        id: "project-image",
        kind: "image",
        publicPath: "/images/projects/example.webp",
        mimeType: "image/webp",
        subjectRef: "project:example",
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
        optimization: "optimized",
      }).success,
    ).toBe(false);
  });
});
