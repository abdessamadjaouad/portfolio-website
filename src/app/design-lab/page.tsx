import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArchitectureNode } from "@/components/ui/architecture-node";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Metric } from "@/components/ui/metric";
import { ProjectCardShell } from "@/components/ui/project-card-shell";
import { SkipLink } from "@/components/ui/skip-link";
import { TextLink } from "@/components/ui/text-link";

import styles from "./design-lab.module.css";

type DirectionVariant = "signal" | "field" | "modular";

type DirectionSectionProps = {
  id: string;
  number: string;
  name: string;
  summary: string;
  variant: DirectionVariant;
  children: ReactNode;
};

const directionClass: Record<DirectionVariant, string> = {
  signal: styles.signal,
  field: styles.field,
  modular: styles.modular,
};

const flowNodes = ["Raw data", "Ingest", "Transform", "Store", "Product"];

function DirectionSection({
  id,
  number,
  name,
  summary,
  variant,
  children,
}: DirectionSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={`${styles.direction} ${directionClass[variant]}`}
      aria-labelledby={headingId}
    >
      <header className={styles.directionHeader}>
        <p className={styles.directionNumber}>{number}</p>
        <div>
          <h2 id={headingId}>{name}</h2>
          <p>{summary}</p>
        </div>
      </header>
      {children}
    </section>
  );
}

function PortfolioPreview({ variant }: { variant: DirectionVariant }) {
  const filterId = `${variant}-evidence-filter`;

  return (
    <div className={styles.preview}>
      <header className={styles.previewHeader}>
        <a className={styles.wordmark} href="#design-lab-content">
          AJ<span aria-hidden="true">/</span>Systems Atlas
        </a>
        <span className={styles.status}>Available immediately</span>
      </header>

      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            Data Engineer <span aria-hidden="true">·</span> Software Engineer
          </p>
          <h3>
            I build reliable data platforms and production software, from raw
            data to useful products.
          </h3>
          <p className={styles.intro}>
            Abdessamad Jaouad builds across ingestion, transformation,
            infrastructure, APIs, and dependable interfaces.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href="mailto:abdessamadjaouad0@gmail.com"
            >
              Email Abdessamad
            </a>
            <a
              className={styles.textLink}
              href="https://github.com/abdessamadjaouad"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub profile
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>

        <dl className={styles.profileFacts}>
          <div>
            <dt>Based in</dt>
            <dd>Casablanca, Morocco</dd>
          </div>
          <div>
            <dt>Open to</dt>
            <dd>On-site, hybrid, and remote</dd>
          </div>
          <div>
            <dt>Priority</dt>
            <dd>Data engineering first</dd>
          </div>
        </dl>
      </div>

      <div className={styles.evidenceGrid}>
        <article className={styles.projectCard}>
          <div className={styles.cardMeta}>
            <span className={styles.badge}>Experience highlight</span>
            <span>01</span>
          </div>
          <h4>AI Sandbox</h4>
          <p className={styles.roleLine}>
            DXC Technology Morocco · Data &amp; AI Engineer · Internship
          </p>
          <p>
            Designed and deployed a cloud-native MLOps/AIOps platform for ML
            benchmarking and AI-agent evaluation on Azure.
          </p>
          <ul className={styles.tags} aria-label="Selected technologies">
            <li>Python</li>
            <li>FastAPI</li>
            <li>PostgreSQL</li>
            <li>Azure</li>
          </ul>
        </article>

        <aside className={styles.metric} aria-label="Verified result">
          <p className={styles.metricValue}>40%</p>
          <p className={styles.metricLabel}>reduction in data-access time</p>
          <p className={styles.metricSource}>CentralGIS · JESA S.A.</p>
        </aside>

        <section
          className={styles.flowPanel}
          aria-labelledby={`${variant}-flow`}
        >
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.kicker}>Architecture node sample</p>
              <h4 id={`${variant}-flow`}>From Signal to Useful Product</h4>
            </div>
            <span aria-hidden="true">↳</span>
          </div>
          <ol className={styles.flow} aria-label="Generic data system flow">
            {flowNodes.map((node, index) => (
              <li key={node}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {node}
              </li>
            ))}
          </ol>
        </section>

        <section
          className={styles.controlPanel}
          aria-labelledby={`${variant}-control-heading`}
        >
          <div>
            <p className={styles.kicker}>Form control and focus sample</p>
            <h4 id={`${variant}-control-heading`}>
              Inspect the Evidence Style
            </h4>
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor={filterId}>Evidence filter sample</label>
            <input
              id={filterId}
              name={filterId}
              type="text"
              defaultValue="Data engineering"
              autoComplete="off"
            />
          </div>
          <p className={styles.focusHint}>
            Use Tab to inspect every focus state.
          </p>
        </section>
      </div>
    </div>
  );
}

function ApprovedPrimitiveReview() {
  return (
    <Section
      className={styles.approvedSystem}
      aria-labelledby="approved-system-heading"
    >
      <Container>
        <SectionHeading
          id="approved-system-heading"
          eyebrow="Approved implementation"
          title="Signal Ledger Foundations"
          description="The selected semantic tokens and Server Component primitives, shown with the same approved evidence used in the comparison."
          className={styles.approvedHeading}
        />

        <div className={styles.approvedGrid}>
          <ProjectCardShell
            eyebrow="Experience highlight"
            index="01"
            className={styles.approvedProject}
          >
            <div className={styles.approvedProjectTitle}>
              <div>
                <h3>AI Sandbox</h3>
                <p>
                  DXC Technology Morocco · Data &amp; AI Engineer · Internship
                </p>
              </div>
              <Badge>Available immediately</Badge>
            </div>
            <p>
              Designed and deployed a cloud-native MLOps/AIOps platform for ML
              benchmarking and AI-agent evaluation on Azure.
            </p>
            <div className={styles.approvedActions}>
              <ButtonLink href="mailto:abdessamadjaouad0@gmail.com">
                Email Abdessamad
              </ButtonLink>
              <TextLink
                href="https://github.com/abdessamadjaouad"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile <span aria-hidden="true">↗</span>
              </TextLink>
            </div>
          </ProjectCardShell>

          <Metric
            aria-label="Verified CentralGIS result"
            value="40%"
            label="reduction in data-access time"
            source="CentralGIS · JESA S.A."
          />

          <section
            className={styles.approvedArchitecture}
            aria-labelledby="approved-flow-heading"
          >
            <p>Architecture node primitive</p>
            <h3 id="approved-flow-heading">From Signal to Useful Product</h3>
            <ol aria-label="Generic data system flow">
              {flowNodes.map((node, index) => (
                <ArchitectureNode
                  key={node}
                  step={String(index + 1).padStart(2, "0")}
                  label={node}
                  state={index === 1 ? "active" : "idle"}
                />
              ))}
            </ol>
          </section>
        </div>
      </Container>
    </Section>
  );
}

export default function DesignLabPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <>
      <SkipLink href="#design-lab-content">Skip to design directions</SkipLink>
      <main id="design-lab-content" className={styles.lab} tabIndex={-1}>
        <header className={styles.labHeader}>
          <div>
            <p className={styles.labKicker}>Phase 2 · selection checkpoint</p>
            <h1>Systems Atlas Design Lab</h1>
          </div>
          <p>
            Three visual systems, one approved content sample. Compare
            hierarchy, density, tone, and responsive behavior before choosing
            the final direction.
          </p>
          <nav aria-label="Design direction shortcuts">
            <a href="#signal-ledger">01 Signal Ledger</a>
            <a href="#field-notes">02 Field Notes</a>
            <a href="#modular-current">03 Modular Current</a>
          </nav>
        </header>

        <DirectionSection
          id="signal-ledger"
          number="01"
          name="Signal Ledger"
          summary="A precise dark control room with an editorial evidence rail."
          variant="signal"
        >
          <PortfolioPreview variant="signal" />
        </DirectionSection>

        <DirectionSection
          id="field-notes"
          number="02"
          name="Field Notes"
          summary="A warm engineering dossier with a deliberate reading rhythm."
          variant="field"
        >
          <PortfolioPreview variant="field" />
        </DirectionSection>

        <DirectionSection
          id="modular-current"
          number="03"
          name="Modular Current"
          summary="A light connected atlas built from clear system modules."
          variant="modular"
        >
          <PortfolioPreview variant="modular" />
        </DirectionSection>

        <ApprovedPrimitiveReview />

        <footer className={styles.labFooter}>
          <p>
            Selected system: <strong>Signal Ledger</strong>. Its semantic tokens
            and foundational primitives are now the approved basis for later
            presentation phases.
          </p>
          <a href="#design-lab-content">Back to comparison</a>
        </footer>
      </main>
    </>
  );
}
