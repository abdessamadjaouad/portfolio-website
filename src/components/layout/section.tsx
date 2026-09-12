import type { ComponentPropsWithoutRef } from "react";

import styles from "./layout.module.css";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  const classes = className ? `${styles.section} ${className}` : styles.section;

  return <section className={classes} {...props} />;
}
