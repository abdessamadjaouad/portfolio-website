import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import type { Link, Profile, Resume } from "@/content/schemas";

import styles from "./homepage.module.css";

type ResumeDownload = Resume & { href: string };

type HeroSectionProps = {
  profile: Profile;
  emailLink: Link;
  socialLinks: Link[];
  resumeDownloads: ResumeDownload[];
};

export function HeroSection({
  profile,
  emailLink,
  socialLinks,
  resumeDownloads,
}: HeroSectionProps) {
  const [primaryResume, secondaryResume] = resumeDownloads;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.heroLayout}>
        <div className={styles.heroStatement}>
          <p className={styles.heroEyebrow}>{profile.name}</p>
          <p className={styles.heroRole}>
            {profile.roles.primary} · {profile.roles.secondary}
          </p>
          <h1 id="hero-heading" className={styles.heroHeading}>
            I build reliable data platforms and production software.
          </h1>
          <p className={styles.heroLead}>
            From raw data and infrastructure to useful products, with
            resume-backed work across data, backend, cloud, AI, and interfaces.
          </p>

          <div className={styles.primaryActions} aria-label="Primary actions">
            {primaryResume ? (
              <ButtonLink href={primaryResume.href} download>
                Data Engineer resume
                <span aria-hidden="true">↓</span>
              </ButtonLink>
            ) : null}
            <ButtonLink href={emailLink.href} variant="secondary">
              Email Abdessamad
            </ButtonLink>
          </div>

          <div className={styles.secondaryActions}>
            {secondaryResume ? (
              <TextLink href={secondaryResume.href} download>
                Software Engineer resume (PDF)
              </TextLink>
            ) : null}
            {socialLinks.map((link) => (
              <TextLink
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.id === "github" ? "GitHub" : "LinkedIn"}
                <span aria-hidden="true">↗</span>
              </TextLink>
            ))}
          </div>
        </div>

        <dl className={styles.heroFacts} aria-label="Current profile facts">
          <div className={styles.heroFact}>
            <dt>Primary role</dt>
            <dd>{profile.roles.primary}</dd>
          </div>
          <div className={styles.heroFact}>
            <dt>Also building as</dt>
            <dd>{profile.roles.secondary}</dd>
          </div>
          <div className={styles.heroFact}>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className={styles.heroFact}>
            <dt>Availability</dt>
            <dd className={styles.available}>{profile.availability}</dd>
          </div>
          <div className={styles.heroFact}>
            <dt>Work setup</dt>
            <dd>{profile.workArrangements.join(" · ")}</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
