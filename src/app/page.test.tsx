import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import HomePage from "./page";

afterEach(cleanup);

describe("HomePage", () => {
  it("renders the approved recruiter path above the fold", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /I build reliable data platforms/i,
      }),
    ).toBeDefined();
    expect(screen.getAllByText("Abdessamad Jaouad").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Data Engineer · Software Engineer").length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText("Casablanca, Morocco").length).toBeGreaterThan(
      0,
    );
    expect(screen.getByText("Immediately")).toBeDefined();
    expect(
      screen.getByRole("link", { name: /Data Engineer resume/i }),
    ).toHaveProperty(
      "pathname",
      "/resumes/abdessamad-jaouad-data-engineer.pdf",
    );
    for (const emailLink of screen.getAllByRole("link", {
      name: "Email Abdessamad",
    })) {
      expect(emailLink).toHaveProperty(
        "href",
        "mailto:abdessamadjaouad0@gmail.com",
      );
    }
  });

  it("keeps approved work, metrics, and publication boundaries explicit", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Work that connects data to production.",
      }),
    ).toBeDefined();

    const workSection = screen.getByRole("region", {
      name: "Work that connects data to production.",
    });
    const projectHeadings = within(workSection)
      .getAllByRole("article")
      .map((article) => within(article).getByRole("heading").textContent);

    expect(projectHeadings).toEqual([
      "AI Sandbox",
      "CentralGIS",
      "OCP workforce management platform",
      "Real-Time ETL Pipeline — Stock Market",
      "Data Quality & KPI Dashboard",
      "Multi-Label Classification — Legal Texts",
      "Healthics — Full-Stack Medical Platform",
    ]);
    expect(within(workSection).getAllByText("Internship")).toHaveLength(3);
    expect(screen.getAllByText("40%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("52 → 38").length).toBeGreaterThan(0);
    expect(screen.getAllByText("≥95%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("30%").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", {
        name: "JESA Environmental Impact Assessment input reduction",
      }),
    ).toBeDefined();
    expect(screen.queryByText(/TODO_CONTENT_/)).toBeNull();
  });

  it("renders skills as evidence-linked semantic lists without ratings", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Skills connected to work, not self-ratings.",
      }),
    ).toBeDefined();
    expect(
      screen.getByRole("link", {
        name: "AI Sandbox evidence for Python",
      }),
    ).toHaveProperty("hash", "#project-ai-sandbox");
    expect(
      screen.getByRole("link", {
        name: "Real-Time ETL Pipeline — Stock Market evidence for Apache Spark",
      }),
    ).toHaveProperty("hash", "#project-stock-market-etl");
    expect(screen.queryByRole("progressbar")).toBeNull();
  });

  it("renders official internship and background facts in order", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "A progression through data, software, and delivery.",
      }),
    ).toBeDefined();

    const experienceTitles = [
      "Data & AI Engineer",
      "Software Engineer & Data Scientist",
      "Full Stack Developer",
    ];
    for (const title of experienceTitles) {
      expect(
        screen.getByRole("heading", { level: 4, name: title }),
      ).toBeDefined();
    }

    expect(screen.getAllByText("Internship")).toHaveLength(6);
    expect(
      screen.getByRole("heading", {
        name: "Master's Degree in Big Data & Internet of Things",
      }),
    ).toBeDefined();
    expect(screen.getByText("AWS Cloud Foundations")).toBeDefined();
    expect(screen.getByText("Arabic")).toBeDefined();
    expect(screen.getAllByText("Fluent")).toHaveLength(2);
  });

  it("renders the bounded research, about, contact, and footer content", () => {
    render(<HomePage />);

    const researchTitle =
      "Reducing PQC Overhead in IoT Networks Using an Epoch-Based Compression Approach";
    expect(
      screen.getByRole("heading", { level: 3, name: researchTitle }),
    ).toBeDefined();
    expect(
      screen.getByRole("link", { name: /Read the paper on IEEE Xplore/i }),
    ).toHaveProperty("href", "https://ieeexplore.ieee.org/document/11601673");
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Data first. Software complete.",
      }),
    ).toBeDefined();

    const contactOptions = screen.getByRole("list", {
      name: "Contact options",
    });
    expect(
      within(contactOptions)
        .getAllByRole("link")
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "mailto:abdessamadjaouad0@gmail.com",
      "https://wa.me/212679075431",
      "https://linkedin.com/in/abdessamadjaouad",
    ]);
    expect(screen.getByRole("contentinfo")).toBeDefined();
    expect(screen.queryByRole("form")).toBeNull();
    expect(screen.queryByText(/TODO_CONTENT_IEEE_CITATION/)).toBeNull();
  });
});
