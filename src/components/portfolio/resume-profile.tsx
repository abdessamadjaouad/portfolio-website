import Image from "next/image";

import { homepageContent } from "./home-content";
import styles from "./resume.module.css";

export function ResumeProfile() {
  const { profile, portrait, resumeDownloads, contactLinks, socialLinks } =
    homepageContent;

  return (
    <header className={styles.sidebar}>
      <div className={styles.profileCard}>
        <Image
          className={styles.portrait}
          src={portrait.publicPath}
          alt={portrait.altText!}
          width={portrait.dimensions!.width}
          height={portrait.dimensions!.height}
          sizes="(max-width: 599px) calc(100vw - 72px), (max-width: 899px) 280px, 288px"
          preload
        />
        <h1>
          <span>Hello, I’m</span>
          {profile.name}
        </h1>
        <p className={styles.role}>{profile.roles.primary}</p>
        <p className={styles.secondaryRole}>{profile.roles.secondary}</p>
        <p className={styles.location}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          {profile.location}
        </p>
        <p className={styles.availability}>
          <span aria-hidden="true" />
          Available {profile.availability.toLowerCase()}
        </p>
        <p className={styles.arrangements}>
          {profile.workArrangements.join(" · ")}
        </p>
      </div>
      <div className={styles.contactCard}>
        <ul aria-label="Contact options" className={styles.contactLinks}>
          {contactLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                aria-label={link.label}
                {...(link.href.startsWith("https:")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  {link.id === "email"
                    ? "@"
                    : link.id === "whatsapp"
                      ? "W"
                      : "in"}
                </span>
                <span>
                  {link.id === "email"
                    ? link.href.slice(7)
                    : link.id === "whatsapp"
                      ? "WhatsApp"
                      : "LinkedIn"}
                </span>
                <span className={styles.outbound} aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul aria-label="Social profiles" className={styles.contactLinks}>
          {socialLinks
            .filter((link) => link.id === "github")
            .map((link) => (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <span className={styles.contactIcon} aria-hidden="true">
                    ↳
                  </span>
                  <span>GitHub</span>
                  <span className={styles.outbound} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
        </ul>
        <a className={styles.contactButton} href={contactLinks[0].href}>
          Contact me <span aria-hidden="true">↗</span>
        </a>
        <div className={styles.resumes}>
          {resumeDownloads.map((resume) => (
            <a
              key={resume.id}
              href={resume.href}
              download
              aria-label={`${resume.role} resume${resume.order === 2 ? " (PDF)" : ""}`}
            >
              <span>{resume.role} resume</span>
              <span aria-hidden="true">↓</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
