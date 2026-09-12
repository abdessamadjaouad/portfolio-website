import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";
import { homepageContent } from "@/components/portfolio/home-content";
import { pageMetadata } from "@/lib/metadata";
import styles from "@/components/projects/projects.module.css";

export const metadata = pageMetadata(
  "About",
  "Abdessamad Jaouad's background in data engineering, software engineering, Big Data, and the Internet of Things. Based in Casablanca, Morocco.",
  "/about",
);

export default function AboutPage() {
  const { profile, education, certifications, languages, resumeDownloads } =
    homepageContent;
  return (
    <PageShell>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>About</p>
        <h1>{profile.name}</h1>
        <p className={styles.lead}>
          {profile.roles.primary} · {profile.roles.secondary}
        </p>
        <p>
          I work across data ingestion, transformation, storage, APIs, product
          interfaces, cloud delivery, and testing.
        </p>
        <p>
          {profile.location} · Available {profile.availability.toLowerCase()}{" "}
          for {profile.workArrangements.join(", ").toLowerCase()} work.
        </p>
      </header>
      <section className={styles.section} aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div className={styles.grid}>
          {education.map((item) => (
            <article className={styles.card} key={item.id}>
              <p className={styles.eyebrow}>
                {item.startYear}–{item.endYear}
              </p>
              <h3>{item.program}</h3>
              <p>{item.institution}</p>
              <p>
                {item.result} · {item.location}
              </p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.grid}>
        <section
          className={styles.section}
          aria-labelledby="certifications-title"
        >
          <h2 id="certifications-title">Certifications</h2>
          <ul>
            {certifications.map((item) => (
              <li key={item.id}>
                {item.name} · {item.year}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.section} aria-labelledby="languages-title">
          <h2 id="languages-title">Languages</h2>
          <ul>
            {languages.map((item) => (
              <li key={item.id}>
                {item.name} · {item.level}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className={styles.section} aria-labelledby="resume-title">
        <h2 id="resume-title">Explore my experience</h2>
        <div className={styles.links}>
          {resumeDownloads.map((resume) => (
            <ButtonLink key={resume.id} href={resume.href} download>
              {resume.label}
            </ButtonLink>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
