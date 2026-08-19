import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { ProjectCardShell } from "@/components/ui/project-card-shell";
import type { Experience, Metric, Project } from "@/content/schemas";

import styles from "./homepage.module.css";

type WorkSectionProps = {
  projects: Project[];
  experiences: Experience[];
  metrics: Metric[];
};

type ProjectEvidenceProps = {
  project: Project;
  headingLevel: 3 | 4;
  index?: string;
  experience?: Experience;
  metrics: Metric[];
};

function ProjectEvidence({
  project,
  headingLevel,
  index,
  experience,
  metrics,
}: ProjectEvidenceProps) {
  const Heading = headingLevel === 3 ? "h3" : "h4";
  const projectMetrics = project.metricIds.flatMap((metricId) => {
    const metric = metrics.find((candidate) => candidate.id === metricId);
    return metric ? [metric] : [];
  });
  const problem = typeof project.problem === "string" ? project.problem : null;

  return (
    <ProjectCardShell
      id={`project-${project.id}`}
      className={styles.projectCard}
      eyebrow={
        project.category === "employer-highlight"
          ? "Employer experience"
          : "Personal project"
      }
      index={index}
      aria-labelledby={`${project.id}-heading`}
    >
      <div className={styles.projectTitleBlock}>
        <Heading id={`${project.id}-heading`} className={styles.projectTitle}>
          {project.title}
        </Heading>
        {experience ? (
          <p className={styles.projectContext}>
            {experience.employer} · {experience.officialTitle}
          </p>
        ) : (
          <p className={styles.projectContext}>{project.context}</p>
        )}
      </div>

      {experience ? (
        <ul className={styles.projectMeta} aria-label="Experience details">
          <li>
            <Badge>{experience.employmentType}</Badge>
          </li>
          <li>{experience.dateLabel}</li>
          <li>{experience.location}</li>
        </ul>
      ) : project.year ? (
        <p className={styles.projectYear}>{project.year}</p>
      ) : null}

      {problem ? (
        <div className={styles.projectStatement}>
          <p className={styles.projectLabel}>Problem</p>
          <p>{problem}</p>
        </div>
      ) : null}

      <div className={styles.projectStatement}>
        <p className={styles.projectLabel}>My contribution</p>
        <ul className={styles.contributionList}>
          {project.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </div>

      <div className={styles.projectOutcome}>
        <p className={styles.projectLabel}>Outcome</p>
        <p>{project.outcome}</p>
      </div>

      {projectMetrics.length > 0 ? (
        <dl className={styles.projectMetrics}>
          {projectMetrics.map((metric) => (
            <div key={metric.id}>
              <dt>{metric.displayValue}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <ul className={styles.technologyList} aria-label="Key technologies">
        {project.technologies.slice(0, 8).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </ProjectCardShell>
  );
}

export function WorkSection({
  projects,
  experiences,
  metrics,
}: WorkSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingResults = projects.filter(
    (project) => project.category === "employer-result",
  );
  const personalProjects = projects.filter(
    (project) => project.category === "personal-project",
  );

  if (featuredProjects.length === 0 && personalProjects.length === 0) {
    return null;
  }

  return (
    <section
      id="work"
      className={styles.contentSection}
      aria-labelledby="work-heading"
    >
      <Container>
        <SectionHeading
          id="work-heading"
          eyebrow="01 / Selected evidence"
          title="Work that connects data to production."
          description="Resume-backed contributions, official internship context, and only approved results. Employer work stays intentionally concise."
        />

        {featuredProjects.length > 0 ? (
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project, index) => (
              <ProjectEvidence
                key={project.id}
                project={project}
                headingLevel={3}
                index={String(index + 1).padStart(2, "0")}
                experience={experiences.find(
                  (experience) => experience.id === project.experienceId,
                )}
                metrics={metrics}
              />
            ))}
          </div>
        ) : null}

        {supportingResults.map((project) => (
          <aside
            id={`project-${project.id}`}
            className={styles.supportingResult}
            key={project.id}
            aria-labelledby={`${project.id}-heading`}
          >
            <div>
              <p className={styles.projectLabel}>Separate JESA result</p>
              <h3 id={`${project.id}-heading`}>{project.title}</h3>
              <p>{project.outcome}</p>
            </div>
            <dl className={styles.supportingMetrics}>
              {project.metricIds.flatMap((metricId) => {
                const metric = metrics.find(
                  (candidate) => candidate.id === metricId,
                );

                return metric ? (
                  <div key={metric.id}>
                    <dt>{metric.displayValue}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                ) : (
                  []
                );
              })}
            </dl>
          </aside>
        ))}

        {personalProjects.length > 0 ? (
          <section
            className={styles.personalProjects}
            aria-labelledby="personal-projects-heading"
          >
            <header className={styles.subsectionHeading}>
              <p>Personal project evidence</p>
              <h3 id="personal-projects-heading">
                Data systems, machine learning, and full-stack delivery.
              </h3>
            </header>
            <div className={styles.personalGrid}>
              {personalProjects.map((project) => (
                <ProjectEvidence
                  key={project.id}
                  project={project}
                  headingLevel={4}
                  metrics={metrics}
                />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </section>
  );
}
