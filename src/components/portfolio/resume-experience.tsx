import Image from "next/image";
import { homepageContent } from "./home-content";
import styles from "./resume.module.css";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function shortDate(value: string) {
  return dateFormatter.format(new Date(`${value}-01T00:00:00Z`));
}

export function ResumeExperience() {
  const { experiences, projects, metrics, employerLogos } = homepageContent;
  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className={styles.label}>
        Experience
      </h2>
      <div className={styles.experienceList}>
        {experiences.map((experience) => {
          const logo = employerLogos.find(
            (asset) => asset.subjectRef === `experience:${experience.id}`,
          );
          return (
            <details
              key={experience.id}
              id={`experience-${experience.id}`}
              className={styles.experience}
            >
              <summary>
                <span
                  className={styles.employerMark}
                  data-employer={experience.id}
                  aria-hidden="true"
                >
                  {logo ? (
                    <Image
                      src={logo.publicPath}
                      alt=""
                      width={logo.dimensions!.width}
                      height={logo.dimensions!.height}
                      sizes={
                        experience.id === "dxc-technology-morocco"
                          ? "116px"
                          : "64px"
                      }
                    />
                  ) : null}
                </span>
                <div>
                  <h3>{experience.employer}</h3>
                  <p className={styles.experienceRole}>
                    {experience.officialTitle} · {experience.employmentType}
                  </p>
                </div>
                <span className={styles.dates}>
                  <time dateTime={experience.start}>
                    {shortDate(experience.start)}
                  </time>{" "}
                  –{" "}
                  <time dateTime={experience.end}>
                    {shortDate(experience.end)}
                  </time>
                </span>
                <span className={styles.chevron} aria-hidden="true" />
              </summary>
              <div className={styles.experienceBody}>
                <p>
                  {experience.location} · {experience.dateLabel}
                </p>
                <p>{experience.summary}</p>
                <ul>
                  {projects
                    .filter((project) => project.experienceId === experience.id)
                    .map((project) => (
                      <li id={`project-${project.id}`} key={project.id}>
                        <h4>{project.title}</h4>
                        <p>{project.outcome}</p>
                        {project.metricIds.map((id) => {
                          const metric = metrics.find((item) => item.id === id);
                          return metric ? <p key={id}>{metric.claim}</p> : null;
                        })}
                        <a href={`/projects/${project.slug}`}>
                          Explore {project.title}{" "}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
