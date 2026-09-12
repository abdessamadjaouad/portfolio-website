import { describe, expect, it } from "vitest";
import { resolveSiteOrigin } from "./site";
import { pageMetadata, serializeJsonLd } from "./metadata";
import { parseViewMode } from "./view-mode";
import { caseStudies, getCaseStudy } from "@/content/project-pages";

describe("public page contracts", () => {
  it("defaults to the recruiter view and accepts only the engineer value", () => {
    for (const query of [
      "",
      "?view=invalid",
      "?view=ENGINEER",
      "?view=%3Cscript%3E",
    ])
      expect(parseViewMode(query)).toBe("recruiter");
    expect(parseViewMode("?from=resume&view=engineer#architecture")).toBe(
      "recruiter",
    );
    expect(parseViewMode("?from=resume&view=engineer")).toBe("engineer");
  });

  it("generates only unique approved case-study routes", () => {
    expect(caseStudies).toHaveLength(8);
    expect(new Set(caseStudies.map((project) => project.slug)).size).toBe(
      caseStudies.length,
    );
    expect(getCaseStudy("missing")).toBeUndefined();
    for (const project of caseStudies)
      expect(getCaseStudy(project.slug)).toEqual(project);
  });

  it("validates deployment origins without guessing a public domain", () => {
    expect(resolveSiteOrigin(undefined)).toBeUndefined();
    expect(resolveSiteOrigin("https://example.com/")).toBe(
      "https://example.com",
    );
    expect(resolveSiteOrigin("http://127.0.0.1:3100")).toBe(
      "http://127.0.0.1:3100",
    );
    for (const value of [
      "https://name:secret@example.com",
      "https://example.com/path",
      "https://example.com?preview=1",
      "https://example.com#hash",
      "http://example.com",
      "javascript:alert(1)",
      "invalid",
    ])
      expect(() => resolveSiteOrigin(value)).toThrow();
  });

  it("keeps metadata specific and serializes structured data safely", () => {
    const metadata = pageMetadata(
      "CentralGIS",
      "Geospatial data integration.",
      "/projects/centralgis",
    );
    expect(metadata.title).toBe("CentralGIS | Abdessamad Jaouad");
    expect(metadata.description).toBe("Geospatial data integration.");
    const input = { name: "</script><script>alert(1)</script>" };
    const json = serializeJsonLd(input);
    expect(json).not.toContain("<");
    expect(JSON.parse(json)).toEqual(input);
  });
});
