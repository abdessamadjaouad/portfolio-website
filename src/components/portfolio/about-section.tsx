import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import type { Profile } from "@/content/schemas";

import styles from "./closing.module.css";
import sharedStyles from "./homepage.module.css";

type AboutSectionProps = {
  profile: Profile;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={sharedStyles.contentSection}
      aria-labelledby="about-heading"
    >
      <Container className={styles.aboutLayout}>
        <SectionHeading
          id="about-heading"
          eyebrow="05 / About"
          title="Data first. Software complete."
        />
        <div className={styles.aboutCopy}>
          <p>
            I work across the path from data ingestion and transformation to
            storage, APIs, product interfaces, cloud delivery, and testing.
          </p>
          <p>
            My primary focus is {profile.roles.primary}, supported by hands-on{" "}
            {profile.roles.secondary} experience. I am based in{" "}
            {profile.location} and available{" "}
            {profile.availability.toLowerCase()} for{" "}
            {profile.workArrangements.join(", ").toLowerCase()} work.
          </p>
        </div>
      </Container>
    </section>
  );
}
