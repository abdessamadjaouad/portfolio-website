import type { ReactNode } from "react";

import styles from "./layout.module.css";

type SectionHeadingProps = {
  id?: string;
  level?: 2 | 3;
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({
  id,
  level = 2,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  const Heading = level === 2 ? "h2" : "h3";
  const classes = className
    ? `${styles.sectionHeading} ${className}`
    : styles.sectionHeading;

  return (
    <header className={classes}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading id={id} className={styles.heading}>
        {title}
      </Heading>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
