import { PageShell } from "@/components/layout/page-shell";
import { TextLink } from "@/components/ui/text-link";
import { caseStudies } from "@/content/project-pages";
import { portfolioContent } from "@/content/registry";
import type { Project } from "@/content/schemas";
import { ArchitectureDiagram } from "./architecture-diagram";
import { ViewModeControl } from "./view-mode";
import styles from "./projects.module.css";

export function ProjectDetail({ project }: { project: Project }) {
  const personal = project.category === "personal-project";
  const nodes = personal
    ? project.architecture.flow.map((id) =>
        project.architecture.nodes.find((node) => node.id === id)!,
      )
    : project.architecture.nodes;
  const ComponentList = personal ? "ol" : "ul";
  const experience = portfolioContent.experiences.find(
    ({ id }) => id === project.experienceId,
  );
  const metrics = portfolioContent.metrics.filter(({ id }) =>
    project.metricIds.includes(id),
  );
  const links = portfolioContent.links.filter(({ id }) =>
    project.linkIds.includes(id),
  );
  const related = caseStudies
    .filter(
      (candidate) =>
        candidate.id !== project.id && candidate.category === project.category,
    )
    .slice(0, 3);
  return (
    <PageShell>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <TextLink href="/">Home</TextLink>
        <span aria-hidden="true">/</span>
        <TextLink href="/projects">Projects</TextLink>
      </nav>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>
          {experience
            ? `${experience.employer} / ${experience.employmentType}`
            : `Personal project / ${project.year}`}
        </p>
        <h1>{project.title}</h1>
        <p className={styles.lead}>{project.contributions[0]}</p>
        {experience ? (
          <p>
            {experience.officialTitle} · {experience.dateLabel} ·{" "}
            {experience.location}
          </p>
        ) : null}
      </header>
      <ViewModeControl />
      <div className={styles.overview}>
        <div>
          {typeof project.problem === "string" ? (
            <section className={styles.section}>
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </section>
          ) : null}
          <section className={styles.section}>
            <h2>My contribution</h2>
            <ul className={styles.contributions}>
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </section>
        </div>
        <section className={`${styles.section} ${styles.result}`}>
          <p className={styles.eyebrow}>Delivered</p>
          <h2>The outcome</h2>
          <p>{project.outcome}</p>
          {metrics.length > 0 ? (
            <dl className={styles.metrics}>
              {metrics.map((metric) => (
                <div key={metric.id}>
                  <dt>{metric.displayValue}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </section>
      </div>
      <section className={styles.section} aria-labelledby="engineering-heading">
        <h2 id="engineering-heading">Architecture and engineering</h2>
        <p className={styles.lead}>
          {personal
            ? project.architecture.summary
            : "The components, responsibilities, and tools behind the work."}
        </p>
        <details data-engineering-detail className={styles.details}>
          <summary>Explore the engineering details</summary>
          <ArchitectureDiagram project={project} />
          <ComponentList
            className={styles.stages}
            aria-label="System components"
          >
            {nodes.map((node) => {
              return (
                <li id={`stage-${node.id}`} key={node.id}>
                  <h3>{node.label}</h3>
                  <p>{node.responsibility}</p>
                  <ul
                    className={styles.tags}
                    aria-label={`${node.label} tools`}
                  >
                    {node.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ComponentList>
        </details>
      </section>
      <section className={styles.section}>
        <h2>Technology stack</h2>
        <ul className={styles.tags} aria-label="Technology stack">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>
      {links.length > 0 ? (
        <section className={styles.section}>
          <h2>Explore the work</h2>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <TextLink
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {related.length > 0 ? (
        <nav className={styles.section} aria-label="Related projects">
          <h2>Continue exploring</h2>
          <ul className={styles.related}>
            {related.map((candidate) => (
              <li key={candidate.id}>
                <TextLink href={`/projects/${candidate.slug}`}>
                  {candidate.title} <span aria-hidden="true">↗</span>
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <div className={styles.contact}>
        <p>Interested in working together?</p>
        <TextLink
          href={
            portfolioContent.links.find(
              (link) => link.kind === "contact-email",
            )!.href
          }
        >
          Email {portfolioContent.profile.name}
        </TextLink>
      </div>
    </PageShell>
  );
}
