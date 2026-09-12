import { SkipLink } from "@/components/ui/skip-link";
import Link from "next/link";
import { SignalFlow } from "@/components/motion/signal-flow";

import { homepageContent } from "./home-content";
import { ResumeExperience } from "./resume-experience";
import { ResumeProfile } from "./resume-profile";
import {
  ResumeBackground,
  ResumeProjects,
  ResumeSkills,
} from "./resume-sections";
import styles from "./resume.module.css";

export function PortfolioResume() {
  const { profile, contactLinks } = homepageContent;

  return (
    <div id="top" className={styles.page} tabIndex={-1}>
      <SkipLink />
      <div className={styles.layout}>
        <ResumeProfile />
        <main id="main-content" className={styles.main} tabIndex={-1}>
          <nav className={styles.navigation} aria-label="Primary navigation">
            <Link href="/" prefetch={false}>
              Portfolio
            </Link>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <Link href="/projects" prefetch={false}>
              Projects
            </Link>
          </nav>
          <section
            id="about"
            className={styles.section}
            aria-labelledby="about-heading"
          >
            <h2 id="about-heading" className={styles.label}>
              About
            </h2>
            <p className={styles.intro}>
              I’m <strong>{profile.name}</strong>, a{" "}
              <strong>{profile.roles.primary.toLowerCase()}</strong> based in{" "}
              {profile.location}. I build data platforms and production
              software, from ingestion and transformation to APIs, interfaces,
              and cloud delivery. My experience spans AI platforms at DXC,
              geospatial data at JESA, and workforce software at OCP.
            </p>
          </section>
          <ResumeExperience />
          <ResumeSkills />
          <SignalFlow />
          <ResumeProjects />
          <ResumeBackground />
          <section
            id="contact"
            className={`${styles.section} ${styles.research}`}
            aria-labelledby="contact-heading"
          >
            <h2 id="contact-heading" className={styles.label}>
              Let’s connect
            </h2>
            <p>
              Available {profile.availability.toLowerCase()} for{" "}
              {profile.workArrangements.join(", ").toLowerCase()} work.
            </p>
            <a href={contactLinks[0].href}>
              Email Abdessamad <span aria-hidden="true">↗</span>
            </a>
          </section>
        </main>
      </div>
      <footer className={styles.footer}>
        <p>
          {profile.name} · {profile.roles.primary}
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
