import { Container } from "@/components/layout/container";
import type { Link, Profile } from "@/content/schemas";

import styles from "./closing.module.css";

type SiteFooterProps = {
  profile: Profile;
  emailLink: Link;
};

export function SiteFooter({ profile, emailLink }: SiteFooterProps) {
  return (
    <footer className={styles.siteFooter}>
      <Container className={styles.footerLayout}>
        <div>
          <p className={styles.footerName}>{profile.name}</p>
          <p>
            {profile.roles.primary} · {profile.roles.secondary}
          </p>
        </div>
        <p>
          {profile.location} · Available {profile.availability.toLowerCase()}
        </p>
        <nav aria-label="Footer navigation">
          <a href={emailLink.href}>Email</a>
          <a href="#top">Back to top ↑</a>
        </nav>
      </Container>
    </footer>
  );
}
