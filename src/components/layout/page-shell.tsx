import type { ReactNode } from "react";
import { homepageContent } from "@/components/portfolio/home-content";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkipLink } from "@/components/ui/skip-link";
import { Container } from "./container";
import styles from "../projects/projects.module.css";

export function PageShell({ children }: { children: ReactNode }) {
  const { profile, contactLinks } = homepageContent;
  return (
    <div id="top" tabIndex={-1}>
      <SkipLink />
      <SiteHeader profile={profile} emailLink={contactLinks[0]} homeHref="/" />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <Container>{children}</Container>
      </main>
      <SiteFooter profile={profile} emailLink={contactLinks[0]} />
    </div>
  );
}
