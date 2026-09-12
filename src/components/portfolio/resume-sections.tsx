import { homepageContent } from "./home-content";
import styles from "./resume.module.css";

const groups = [
  ["data-engineering", "Data engineering"],
  ["programming", "Programming"],
  ["data-stores", "Data stores"],
  ["backend-and-web", "Backend & web"],
  ["analytics-and-bi", "Analytics & BI"],
  ["cloud-and-delivery", "Cloud & delivery"],
  ["ai-and-machine-learning", "AI & machine learning"],
  ["testing", "Testing"],
] as const;

export function ResumeSkills() {
  const { skills, projects, experiences } = homepageContent;
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className={styles.label}>
        Tech stacks
      </h2>
      <div className={styles.stackGrid}>
        {groups.map(([id, label]) => (
          <section
            key={id}
            className={styles.stackGroup}
            aria-labelledby={`${id}-heading`}
          >
            <h3 id={`${id}-heading`}>{label}</h3>
            <ul>
              {skills
                .filter((skill) => skill.group === id)
                .map((skill) => {
                  const evidence = skill.evidenceRefs[0];
                  const project =
                    evidence.kind === "project"
                      ? projects.find((item) => item.id === evidence.id)
                      : undefined;
                  const experience =
                    evidence.kind === "experience"
                      ? experiences.find((item) => item.id === evidence.id)
                      : undefined;
                  return (
                    <li key={skill.id}>
                      <a
                        href={
                          project
                            ? `/projects/${project.slug}`
                            : `#experience-${experience!.id}`
                        }
                        aria-label={`${skill.label} — ${project?.title ?? experience!.employer} evidence`}
                      >
                        {skill.label}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export function ResumeProjects() {
  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className={styles.label}>
        Personal projects
      </h2>
      <div className={styles.projects}>
        {homepageContent.projects
          .filter((project) => project.category === "personal-project")
          .map((project) => (
            <article
              id={`project-${project.id}`}
              className={styles.project}
              key={project.id}
            >
              <h3>{project.title}</h3>
              <p>{project.year}</p>
              <p>{project.outcome}</p>
              <ul
                className={styles.technologies}
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.slice(0, 4).map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a href={`/projects/${project.slug}`}>
                Explore {project.title} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
      </div>
    </section>
  );
}

export function ResumeBackground() {
  const { education, certifications, languages, research } = homepageContent;
  return (
    <>
      <section className={styles.section} aria-labelledby="education-heading">
        <h2 id="education-heading" className={styles.label}>
          Education
        </h2>
        <ol className={styles.background}>
          {education.map((item) => (
            <li key={item.id}>
              <h3>{item.program}</h3>
              <p>{item.institution}</p>
              <p>
                {item.startYear}–{item.endYear} · {item.result} ·{" "}
                {item.location}
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section
        className={styles.section}
        aria-labelledby="certifications-heading"
      >
        <h2 id="certifications-heading" className={styles.label}>
          Certifications
        </h2>
        <ul>
          {certifications.map((item) => (
            <li key={item.id} className={styles.compact}>
              {item.name}
              <span>{item.year}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section} aria-labelledby="languages-heading">
        <h2 id="languages-heading" className={styles.label}>
          Languages
        </h2>
        <ul>
          {languages.map((item) => (
            <li key={item.id} className={styles.compact}>
              {item.name}
              <span>{item.level}</span>
            </li>
          ))}
        </ul>
      </section>
      <section
        id="research"
        className={`${styles.section} ${styles.research}`}
        aria-labelledby="research-heading"
      >
        <h2 id="research-heading" className={styles.label}>
          Research
        </h2>
        <h3>{research.title}</h3>
        <a href={research.link.href} target="_blank" rel="noopener noreferrer">
          Read the paper on IEEE Xplore <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}
