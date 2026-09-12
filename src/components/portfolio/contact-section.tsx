import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import type { Link, Profile } from "@/content/schemas";

import styles from "./closing.module.css";
import sharedStyles from "./homepage.module.css";

type ContactSectionProps = {
  profile: Profile;
  contactLinks: Link[];
};

function getContactLabel(link: Link) {
  if (link.id === "email") {
    return { channel: "Email", note: "Preferred contact" };
  }

  if (link.id === "whatsapp") {
    return { channel: "WhatsApp", note: "Direct message" };
  }

  if (link.id === "linkedin") {
    return { channel: "LinkedIn", note: "Professional profile" };
  }

  return { channel: link.label, note: "Direct contact" };
}

export function ContactSection({ profile, contactLinks }: ContactSectionProps) {
  if (contactLinks.length === 0) {
    return null;
  }

  return (
    <section
      id="contact"
      className={`${sharedStyles.contentSection} ${styles.contactSection}`}
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className={styles.contactHeader}>
          <SectionHeading
            id="contact-heading"
            eyebrow="06 / Contact"
            title="Available to build reliable systems."
            description={`${profile.location} · Available ${profile.availability.toLowerCase()} · ${profile.workArrangements.join(", ")}`}
          />
          <p className={styles.contactPrompt}>
            For opportunities in data engineering or software engineering, start
            with email or use the direct channel that works best for you.
          </p>
        </div>

        <ol className={styles.contactList} aria-label="Contact options">
          {contactLinks.map((link, index) => {
            const contactLabel = getContactLabel(link);
            const opensNewTab = link.href.startsWith("https://");

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={opensNewTab ? "_blank" : undefined}
                  rel={opensNewTab ? "noopener noreferrer" : undefined}
                >
                  <span className={styles.contactIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.contactIdentity}>
                    <strong>{contactLabel.channel}</strong>
                    <small>{contactLabel.note}</small>
                  </span>
                  <span className={styles.contactArrow} aria-hidden="true">
                    {opensNewTab ? "↗" : "→"}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
