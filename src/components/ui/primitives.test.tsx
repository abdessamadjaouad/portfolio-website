import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArchitectureNode } from "@/components/ui/architecture-node";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Metric } from "@/components/ui/metric";
import { ProjectCardShell } from "@/components/ui/project-card-shell";
import { SkipLink } from "@/components/ui/skip-link";
import { TextLink } from "@/components/ui/text-link";

describe("Signal Ledger primitives", () => {
  it("preserves native semantics and composed content", () => {
    render(
      <>
        <SkipLink href="#evidence">Skip to evidence</SkipLink>
        <Container>
          <Section id="evidence" aria-labelledby="evidence-heading">
            <SectionHeading
              id="evidence-heading"
              eyebrow="Selected evidence"
              title="Reliable systems"
              description="Resume-backed work only."
            />
            <ProjectCardShell eyebrow="Experience highlight" index="01">
              <h3>AI Sandbox</h3>
              <Badge>Internship</Badge>
            </ProjectCardShell>
            <Metric
              aria-label="Verified CentralGIS result"
              value="40%"
              label="reduction in data-access time"
              source="CentralGIS · JESA S.A."
            />
            <ol aria-label="Generic system flow">
              <ArchitectureNode step="01" label="Raw data" />
              <ArchitectureNode step="02" label="Product" state="verified" />
            </ol>
            <Button>Inspect</Button>
            <ButtonLink href="mailto:abdessamadjaouad0@gmail.com">
              Email Abdessamad
            </ButtonLink>
            <TextLink href="https://github.com/abdessamadjaouad">
              GitHub profile
            </TextLink>
          </Section>
        </Container>
      </>,
    );

    expect(
      screen.getByRole("link", { name: "Skip to evidence" }),
    ).toHaveProperty("hash", "#evidence");
    expect(
      screen.getByRole("heading", { level: 2, name: "Reliable systems" }),
    ).toBeDefined();
    expect(screen.getByRole("article")).toBeDefined();
    expect(screen.getByRole("button", { name: "Inspect" })).toHaveProperty(
      "type",
      "button",
    );
    expect(
      screen.getByRole("link", { name: "Email Abdessamad" }),
    ).toHaveProperty("href", "mailto:abdessamadjaouad0@gmail.com");
    expect(screen.getByText("40%")).toBeDefined();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
