import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import type { Experience, Project, Skill } from "@/content/schemas";

import styles from "./homepage.module.css";

type SkillsSectionProps = {
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
};

const skillGroups = [
  { id: "data-engineering", label: "Data engineering" },
  { id: "programming", label: "Programming" },
  { id: "data-stores", label: "Data stores" },
  { id: "analytics-and-bi", label: "Analytics & BI" },
  { id: "ai-and-machine-learning", label: "AI & machine learning" },
  { id: "backend-and-web", label: "Backend & web" },
  { id: "cloud-and-delivery", label: "Cloud & delivery" },
  { id: "testing", label: "Testing" },
] as const satisfies ReadonlyArray<{
  id: Skill["group"];
  label: string;
}>;

const roleLabels: Record<Skill["rolePriority"], string> = {
  "data-engineer": "Data Engineer",
  "software-engineer": "Software Engineer",
  shared: "Shared evidence",
};

export function SkillsSection({
  skills,
  projects,
  experiences,
}: SkillsSectionProps) {
  if (skills.length === 0) {
    return null;
  }

  const projectsById = new Map(
    projects.map((project) => [project.id, project]),
  );
  const experiencesById = new Map(
    experiences.map((experience) => [experience.id, experience]),
  );

  return (
    <section
      id="skills"
      className={styles.contentSection}
      aria-labelledby="skills-heading"
    >
      <Container>
        <SectionHeading
          id="skills-heading"
          eyebrow="02 / Evidence graph"
          title="Skills connected to work, not self-ratings."
          description="Each capability points to the resume-backed project or experience where it was used. Data engineering evidence leads; software engineering breadth follows."
        />

        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => {
            const groupSkills = skills.filter(
              (skill) => skill.group === group.id,
            );

            if (groupSkills.length === 0) {
              return null;
            }

            return (
              <section
                className={styles.skillGroup}
                key={group.id}
                aria-labelledby={`${group.id}-heading`}
              >
                <header className={styles.skillGroupHeader}>
                  <span aria-hidden="true" />
                  <h3 id={`${group.id}-heading`}>{group.label}</h3>
                  <p>
                    {String(groupSkills.length).padStart(2, "0")} capabilities
                  </p>
                </header>
                <ul
                  className={styles.skillList}
                  aria-label={`${group.label} skills and evidence`}
                >
                  {groupSkills.map((skill) => (
                    <li className={styles.skillItem} key={skill.id}>
                      <div className={styles.skillIdentity}>
                        <strong>{skill.label}</strong>
                        <span>{roleLabels[skill.rolePriority]}</span>
                      </div>
                      <ul
                        className={styles.evidenceLinks}
                        aria-label={`Evidence for ${skill.label}`}
                      >
                        {skill.evidenceRefs.flatMap((reference) => {
                          let label: string;
                          let target: string;

                          if (reference.kind === "project") {
                            const project = projectsById.get(reference.id);
                            if (!project) {
                              return [];
                            }
                            label = project.title;
                            target = `project-${reference.id}`;
                          } else {
                            const experience = experiencesById.get(
                              reference.id,
                            );
                            if (!experience) {
                              return [];
                            }
                            label = experience.employer;
                            target = `experience-${reference.id}`;
                          }

                          return (
                            <li key={`${reference.kind}-${reference.id}`}>
                              <a
                                href={`#${target}`}
                                aria-label={`${label} evidence for ${skill.label}`}
                              >
                                {label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
