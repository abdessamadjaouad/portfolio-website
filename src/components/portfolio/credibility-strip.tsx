import { Container } from "@/components/layout/container";
import type { Metric, Project } from "@/content/schemas";

import styles from "./homepage.module.css";

type CredibilityStripProps = {
  metrics: Metric[];
  projects: Project[];
};

export function CredibilityStrip({ metrics, projects }: CredibilityStripProps) {
  if (metrics.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.credibilityStrip}
      aria-labelledby="results-heading"
    >
      <Container>
        <h2 id="results-heading" className={styles.visuallyHidden}>
          Verified engineering results
        </h2>
        <ul className={styles.credibilityList}>
          {metrics.map((metric) => {
            const sourceProject = projects.find((project) =>
              project.metricIds.includes(metric.id),
            );

            return (
              <li className={styles.credibilityItem} key={metric.id}>
                <strong>{metric.displayValue}</strong>
                <span>{metric.label}</span>
                {sourceProject ? (
                  <a href={`#project-${sourceProject.id}`}>
                    {metric.attribution}
                  </a>
                ) : (
                  <small>{metric.attribution}</small>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
