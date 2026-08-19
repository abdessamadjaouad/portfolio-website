import { Container } from "@/components/layout/container";
import type { Link, Profile } from "@/content/schemas";

import styles from "./homepage.module.css";

type SiteHeaderProps = {
  profile: Profile;
  emailLink: Link;
};

const navigationItems = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
] as const;

export function SiteHeader({ profile, emailLink }: SiteHeaderProps) {
  return (
    <header className={styles.siteHeader}>
      <Container>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <a
            className={styles.brand}
            href="#top"
            aria-label={`${profile.name}, back to the top`}
          >
            <span className={styles.brandMark} aria-hidden="true">
              AJ
            </span>
            <span className={styles.brandName}>{profile.name}</span>
          </a>

          <ul className={styles.navigationList}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className={styles.navigationLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a className={styles.headerContact} href={emailLink.href}>
            Email
          </a>
        </nav>
      </Container>
    </header>
  );
}
