import { SkipLink } from "@/components/ui/skip-link";

import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { CredibilityStrip } from "./credibility-strip";
import { HeroSection } from "./hero-section";
import { homepageContent } from "./home-content";
import styles from "./homepage.module.css";
import { JourneySection } from "./journey-section";
import { ResearchSection } from "./research-section";
import { SiteFooter } from "./site-footer";
import { SkillsSection } from "./skills-section";
import { SiteHeader } from "./site-header";
import { WorkSection } from "./work-section";

export function PortfolioHome() {
  const emailLink = homepageContent.contactLinks[0];

  return (
    <div id="top" className={styles.page} tabIndex={-1}>
      <SkipLink />
      <SiteHeader profile={homepageContent.profile} emailLink={emailLink} />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <HeroSection
          profile={homepageContent.profile}
          emailLink={emailLink}
          socialLinks={homepageContent.socialLinks}
          resumeDownloads={homepageContent.resumeDownloads}
        />
        <CredibilityStrip
          metrics={homepageContent.metrics}
          projects={homepageContent.projects}
        />
        <WorkSection
          projects={homepageContent.projects}
          experiences={homepageContent.experiences}
          metrics={homepageContent.metrics}
        />
        <SkillsSection
          skills={homepageContent.skills}
          projects={homepageContent.projects}
          experiences={homepageContent.experiences}
        />
        <JourneySection
          experiences={homepageContent.experiences}
          education={homepageContent.education}
          certifications={homepageContent.certifications}
          languages={homepageContent.languages}
        />
        <ResearchSection research={homepageContent.research} />
        <AboutSection profile={homepageContent.profile} />
        <ContactSection
          profile={homepageContent.profile}
          contactLinks={homepageContent.contactLinks}
        />
      </main>
      <SiteFooter profile={homepageContent.profile} emailLink={emailLink} />
    </div>
  );
}
