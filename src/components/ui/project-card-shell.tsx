import type { HTMLAttributes, ReactNode } from "react";

import styles from "./primitives.module.css";

type ProjectCardShellProps = HTMLAttributes<HTMLElement> & {
  eyebrow: ReactNode;
  index?: ReactNode;
};

export function ProjectCardShell({
  eyebrow,
  index,
  className,
  children,
  ...props
}: ProjectCardShellProps) {
  const classes = className
    ? `${styles.projectCard} ${className}`
    : styles.projectCard;

  return (
    <article className={classes} {...props}>
      <header className={styles.projectCardHeader}>
        <span className={styles.projectCardEyebrow}>{eyebrow}</span>
        {index ? (
          <span className={styles.projectCardIndex}>{index}</span>
        ) : null}
      </header>
      {children}
    </article>
  );
}
