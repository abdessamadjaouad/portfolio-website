import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { parsePortfolioContent, portfolioContent } from "./registry";
import { isTodoReference } from "./schemas";
import { validatePublicAssets } from "./validate-public-assets";

describe("portfolio content registry", () => {
  it("keeps approved profile, experience, research, and metric claims exact", () => {
    expect(portfolioContent.profile).toMatchObject({
      name: "Abdessamad Jaouad",
      roles: {
        primary: "Data Engineer",
        secondary: "Software Engineer",
      },
      location: "Casablanca, Morocco",
      availability: "Immediately",
      workArrangements: ["On-site", "Hybrid", "Remote"],
      phone: "+212679075431",
      contactLinkIds: ["email", "whatsapp", "linkedin"],
    });

    expect(
      portfolioContent.experiences.map(
        ({ employer, officialTitle, employmentType, dateLabel, location }) => ({
          employer,
          officialTitle,
          employmentType,
          dateLabel,
          location,
        }),
      ),
    ).toEqual([
      {
        employer: "DXC Technology Morocco",
        officialTitle: "Data & AI Engineer",
        employmentType: "Internship",
        dateLabel: "February to August 2026",
        location: "Sale El Jadida, Morocco",
      },
      {
        employer: "JESA S.A.",
        officialTitle: "Software Engineer & Data Scientist",
        employmentType: "Internship",
        dateLabel: "July to September 2025",
        location: "Casablanca, Morocco",
      },
      {
        employer: "OCP Group",
        officialTitle: "Full Stack Developer",
        employmentType: "Internship",
        dateLabel: "April to June 2024",
        location: "Safi, Morocco",
      },
    ]);

    expect(portfolioContent.metrics.map(({ claim }) => claim)).toEqual([
      "CentralGIS reduced data access time by 40%.",
      "The JESA Environmental Impact Assessment work reduced inputs from 52 to 38 parameters, a 27% reduction.",
      "The JESA Environmental Impact Assessment work maintained at least 95% accuracy.",
      "OCP backend performance improved by 30%.",
    ]);

    expect(portfolioContent.research).toMatchObject({
      title:
        "Reducing PQC Overhead in IoT Networks Using an Epoch-Based Compression Approach",
      linkId: "pqc-research",
      publicTreatment: "title-and-approved-link-only",
    });
    expect(isTodoReference(portfolioContent.research.fullCitation)).toBe(true);
  });

  it("preserves unique slugs and the approved project ordering", () => {
    const slugs = portfolioContent.projects.map(({ slug }) => slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    expect(
      portfolioContent.projects
        .filter(({ featured }) => featured)
        .map(({ slug }) => slug),
    ).toEqual(["ai-sandbox", "centralgis", "ocp-workforce-platform"]);

    expect(portfolioContent.projects.map(({ order }) => order)).toStrictEqual([
      1, 2, 3, 4, 10, 11, 12, 13,
    ]);

    const eia = portfolioContent.projects.find(
      ({ id }) => id === "jesa-eia-input-reduction",
    );
    const centralGis = portfolioContent.projects.find(
      ({ id }) => id === "centralgis",
    );
    expect(eia?.metricIds).toEqual([
      "eia-parameter-reduction",
      "eia-accuracy-floor",
    ]);
    expect(centralGis?.metricIds).toEqual(["centralgis-data-access-reduction"]);
  });

  it("keeps featured evidence complete and confidential employer assets absent", () => {
    const featuredProjects = portfolioContent.projects.filter(
      ({ featured }) => featured,
    );

    for (const project of featuredProjects) {
      expect(JSON.stringify(project)).not.toContain("TODO_CONTENT_");
      expect(project.evidence.claimsApproved).toBe(true);
      expect(project.evidence.sources.length).toBeGreaterThan(0);
      expect(project.contributions.length).toBeGreaterThan(0);
      expect(project.architecture.nodes.length).toBeGreaterThan(1);
      expect(project.linkIds).toEqual([]);
      expect(project.mediaIds).toEqual([]);
    }
  });

  it("validates approved links and omits the blocked shared-drive destination", () => {
    expect(portfolioContent.links.map(({ href }) => href)).toEqual([
      "mailto:abdessamadjaouad0@gmail.com",
      "https://wa.me/212679075431",
      "https://linkedin.com/in/abdessamadjaouad",
      "https://github.com/abdessamadjaouad",
      "https://ieeexplore.ieee.org/document/11601673",
    ]);

    for (const { href } of portfolioContent.links) {
      const url = new URL(href);
      expect(["https:", "mailto:"]).toContain(url.protocol);
      expect(url.hostname).not.toBe("drive.google.com");
    }
  });

  it("connects every published skill to existing project evidence", () => {
    const projectIds = new Set(portfolioContent.projects.map(({ id }) => id));

    for (const skill of portfolioContent.skills) {
      const projectRefs = skill.evidenceRefs.filter(
        ({ kind }) => kind === "project",
      );
      expect(projectRefs.length).toBeGreaterThan(0);
      for (const reference of projectRefs) {
        expect(projectIds.has(reference.id)).toBe(true);
      }
    }
  });

  it("finds every declared public asset and rejects a broken public root", () => {
    const result = validatePublicAssets();
    expect(result).toMatchObject({
      declaredAssetCount: 2,
      governedFileCount: 2,
      checkedPaths: [
        "/resumes/abdessamad-jaouad-data-engineer.pdf",
        "/resumes/abdessamad-jaouad-software-engineer.pdf",
      ],
    });

    const emptyPublicDirectory = mkdtempSync(
      join(tmpdir(), "portfolio-public-assets-"),
    );
    try {
      expect(() =>
        validatePublicAssets(portfolioContent, emptyPublicDirectory),
      ).toThrow("Declared public asset is missing");
    } finally {
      rmSync(emptyPublicDirectory, { recursive: true });
    }
  });

  it("rejects duplicate slugs and broken evidence references", () => {
    const duplicateSlug = structuredClone(portfolioContent);
    duplicateSlug.projects[1].slug = duplicateSlug.projects[0].slug;
    expect(() => parsePortfolioContent(duplicateSlug)).toThrow(
      "Duplicate identifiers are not allowed",
    );

    const brokenSkillEvidence = structuredClone(portfolioContent);
    brokenSkillEvidence.skills[0].evidenceRefs[0].id = "missing-project";
    expect(() => parsePortfolioContent(brokenSkillEvidence)).toThrow(
      "Unknown project evidence",
    );
  });
});
