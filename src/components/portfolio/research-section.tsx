import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { TextLink } from "@/components/ui/text-link";
import type { Link, Research } from "@/content/schemas";

import styles from "./closing.module.css";
import sharedStyles from "./homepage.module.css";

type ResearchSectionProps = {
  research: Research & { link: Link };
};

export function ResearchSection({ research }: ResearchSectionProps) {
  return (
    <section
      id="research"
      className={sharedStyles.contentSection}
      aria-labelledby="research-heading"
    >
      <Container className={styles.researchLayout}>
        <SectionHeading
          id="research-heading"
          eyebrow="04 / Research"
          title="Reducing post-quantum overhead in IoT networks."
          description="Published research on an epoch-based compression approach, with the verified publication destination provided directly by IEEE Xplore."
        />

        <article
          className={styles.researchCard}
          aria-labelledby={`${research.id}-title`}
        >
          <p>IEEE Xplore publication</p>
          <h3 id={`${research.id}-title`}>{research.title}</h3>
          <TextLink
            href={research.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the paper on IEEE Xplore
            <span aria-hidden="true">↗</span>
          </TextLink>
        </article>
      </Container>
    </section>
  );
}
