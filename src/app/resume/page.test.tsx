import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import ResumePage from "./page";

afterEach(cleanup);

describe("ResumePage", () => {
  it("renders the portrait, primary role, availability and reviewed resumes", () => {
    render(<ResumePage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Hello, I’m.*Abdessamad Jaouad/,
      }),
    ).toBeDefined();
    const photo = screen.getByRole("img", { name: "Abdessamad Jaouad" });
    expect(photo.getAttribute("src")).toContain("abdessamad-jaouad");
    expect(photo.getAttribute("width")).toBe("789");
    expect(screen.getByText("Data Engineer", { exact: true })).toBeDefined();
    expect(
      screen.getByText("Software Engineer", { exact: true }),
    ).toBeDefined();
    expect(screen.getByText("Available immediately")).toBeDefined();
    expect(
      screen.getByText("Casablanca, Morocco", { exact: true }),
    ).toBeDefined();
    for (const role of ["Data Engineer", "Software Engineer"]) {
      expect(
        screen.getByRole("link", { name: new RegExp(`^${role} resume`) }),
      ).toHaveProperty(
        "pathname",
        `/resumes/abdessamad-jaouad-${role.toLowerCase().replace(" ", "-")}.pdf`,
      );
    }
  });

  it("keeps official internship titles visible in native experience disclosures", () => {
    const { container } = render(<ResumePage />);
    const summaries = [...container.querySelectorAll("#experience summary")];
    expect(summaries.map((item) => item.textContent)).toEqual([
      expect.stringContaining("Data & AI Engineer · Internship"),
      expect.stringContaining(
        "Software Engineer & Data Scientist · Internship",
      ),
      expect.stringContaining("Full Stack Developer · Internship"),
    ]);
    expect(container.querySelectorAll("#experience details")).toHaveLength(3);
    expect(
      container.querySelectorAll("#experience details[open]"),
    ).toHaveLength(0);
    expect(
      screen.getByText("CentralGIS reduced data access time by 40%."),
    ).toBeDefined();
    expect(
      screen.getByText(/52 to 38 parameters, a 27% reduction/),
    ).toBeDefined();
    expect(screen.getByText(/maintained at least 95% accuracy/)).toBeDefined();
    expect(
      screen.getByText("OCP backend performance improved by 30%."),
    ).toBeDefined();
  });

  it("separates personal projects and links capabilities to their evidence", () => {
    render(<ResumePage />);
    const work = screen.getByRole("region", { name: "Personal projects" });
    expect(
      within(work)
        .getAllByRole("article")
        .map((item) => within(item).getByRole("heading").textContent),
    ).toEqual([
      "Real-Time ETL Pipeline — Stock Market",
      "Data Quality & KPI Dashboard",
      "Multi-Label Classification — Legal Texts",
      "Healthics — Full-Stack Medical Platform",
    ]);
    expect(
      screen.getByRole("link", { name: "Python — AI Sandbox evidence" }),
    ).toHaveProperty("pathname", "/projects/ai-sandbox");
    expect(
      screen.getByRole("link", {
        name: "Apache Spark — Real-Time ETL Pipeline — Stock Market evidence",
      }),
    ).toHaveProperty("pathname", "/projects/stock-market-etl");
    expect(screen.queryByRole("progressbar")).toBeNull();
  });

  it("preserves background facts, research and ordered direct contact paths", () => {
    render(<ResumePage />);
    expect(
      screen.getByRole("heading", {
        name: "Master's Degree in Big Data & Internet of Things",
      }),
    ).toBeDefined();
    expect(screen.getByText("AWS Cloud Foundations")).toBeDefined();
    expect(screen.getByText("Arabic")).toBeDefined();
    expect(screen.getAllByText("Fluent")).toHaveLength(2);
    expect(
      screen.getByRole("link", { name: /Read the paper on IEEE Xplore/ }),
    ).toHaveProperty("href", "https://ieeexplore.ieee.org/document/11601673");
    expect(
      within(screen.getByRole("list", { name: "Contact options" }))
        .getAllByRole("link")
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "mailto:abdessamadjaouad0@gmail.com",
      "https://wa.me/212679075431",
      "https://linkedin.com/in/abdessamadjaouad",
    ]);
    expect(screen.getByRole("contentinfo")).toBeDefined();
    expect(screen.queryByRole("form")).toBeNull();
    expect(screen.queryByText(/TODO_CONTENT_/)).toBeNull();
  });
});
