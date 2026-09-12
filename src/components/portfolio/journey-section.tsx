import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import type {
  Certification,
  Education,
  Experience,
  Language,
} from "@/content/schemas";

import sharedStyles from "./homepage.module.css";
import styles from "./journey.module.css";

type JourneySectionProps = {
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
};

export function JourneySection({
  experiences,
  education,
  certifications,
  languages,
}: JourneySectionProps) {
  if (experiences.length === 0 && education.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      className={sharedStyles.contentSection}
      aria-labelledby="experience-heading"
    >
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow="03 / Experience & education"
          title="A progression through data, software, and delivery."
          description="Official titles and internship context are kept explicit, followed by the education and credentials behind the work."
        />

        <div className={styles.journeyLayout}>
          {experiences.length > 0 ? (
            <section aria-labelledby="professional-experience-heading">
              <h3
                id="professional-experience-heading"
                className={styles.columnHeading}
              >
                Professional experience
              </h3>
              <ol className={styles.timeline}>
                {experiences.map((experience, index) => (
                  <li
                    id={`experience-${experience.id}`}
                    className={styles.timelineItem}
                    key={experience.id}
                  >
                    <span className={styles.timelineIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <article aria-labelledby={`${experience.id}-title`}>
                      <header className={styles.experienceHeader}>
                        <div>
                          <p>{experience.employer}</p>
                          <h4 id={`${experience.id}-title`}>
                            {experience.officialTitle}
                          </h4>
                        </div>
                        <Badge>{experience.employmentType}</Badge>
                      </header>
                      <p className={styles.experienceSummary}>
                        {experience.summary}
                      </p>
                      <dl className={styles.timelineMeta}>
                        <div>
                          <dt>Dates</dt>
                          <dd>{experience.dateLabel}</dd>
                        </div>
                        <div>
                          <dt>Location</dt>
                          <dd>{experience.location}</dd>
                        </div>
                      </dl>
                    </article>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <div className={styles.backgroundColumn}>
            {education.length > 0 ? (
              <section aria-labelledby="education-heading">
                <h3 id="education-heading" className={styles.columnHeading}>
                  Education
                </h3>
                <ol className={styles.educationList}>
                  {education.map((item) => (
                    <li key={item.id}>
                      <p className={styles.educationYears}>
                        {item.startYear}–{item.endYear}
                      </p>
                      <h4>{item.program}</h4>
                      <p>{item.institution}</p>
                      <p>
                        {item.result} · {item.location}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {certifications.length > 0 ? (
              <section aria-labelledby="certifications-heading">
                <h3
                  id="certifications-heading"
                  className={styles.columnHeading}
                >
                  Certifications
                </h3>
                <ul className={styles.compactList}>
                  {certifications.map((certification) => (
                    <li key={certification.id}>
                      <strong>{certification.name}</strong>
                      <span>{certification.year}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {languages.length > 0 ? (
              <section aria-labelledby="languages-heading">
                <h3 id="languages-heading" className={styles.columnHeading}>
                  Languages
                </h3>
                <ul className={styles.compactList}>
                  {languages.map((language) => (
                    <li key={language.id}>
                      <strong>{language.name}</strong>
                      <span>{language.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
