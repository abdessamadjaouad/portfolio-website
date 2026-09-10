import { render, cleanup } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { ArchitectureDiagram } from "./architecture-diagram";
import { caseStudies } from "@/content/project-pages";

afterEach(cleanup);

it("shows employer components without implying an unverified topology", () => {
  for (const project of caseStudies.filter(
    (item) => item.category !== "personal-project",
  )) {
    const { container, unmount } = render(
      <ArchitectureDiagram project={project} />,
    );
    expect(container.querySelectorAll("svg path")).toHaveLength(0);
    expect(container.querySelectorAll("svg rect")).toHaveLength(
      project.architecture.nodes.length,
    );
    expect(container.querySelector("title")?.textContent).toBe(
      `${project.title}: system overview`,
    );
    expect(container.querySelector("figcaption")?.textContent).toContain(
      "Components and capabilities:",
    );
    unmount();
  }
});

it("provides a visible text equivalent for personal project flows", () => {
  const project = caseStudies.find(
    (item) => item.category === "personal-project",
  )!;
  const { container } = render(<ArchitectureDiagram project={project} />);
  expect(container.querySelector("figcaption")?.textContent).toBe(
    project.architecture.textAlternative,
  );
  expect(container.querySelectorAll("svg path")).toHaveLength(
    project.architecture.flow.length - 1,
  );
});
