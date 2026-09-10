import { PageShell } from "@/components/layout/page-shell";
import { TextLink } from "@/components/ui/text-link";
import { caseStudies } from "@/content/project-pages";
import styles from "./projects.module.css";

export function ProjectIndex() {
  return (
    <PageShell>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>Project index</p>
        <h1>From data to working systems.</h1>
        <p className={styles.lead}>
          A closer look at the problems I worked on, the systems I built, and
          the results.
        </p>
      </header>
      {[
        {
          title: "Experience",
          projects: caseStudies.filter(
            (project) => project.category !== "personal-project",
          ),
        },
        {
          title: "Personal projects",
          projects: caseStudies.filter(
            (project) => project.category === "personal-project",
          ),
        },
      ].map(({ title, projects }) => (
        <section className={styles.section} key={title} aria-label={title}>
          <h2>{title}</h2>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article className={styles.card} key={project.id}>
                <p className={styles.eyebrow}>
                  {project.year ?? "Internship experience"}
                </p>
                <h3>
                  <TextLink href={`/projects/${project.slug}`}>
                    {project.title}
                  </TextLink>
                </h3>
                <p>
                  {typeof project.problem === "string"
                    ? project.problem
                    : project.contributions[0]}
                </p>
                <p className={styles.outcome}>{project.outcome}</p>
                <ul
                  className={styles.tags}
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.slice(0, 6).map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
