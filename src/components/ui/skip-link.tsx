import type { AnchorHTMLAttributes } from "react";

import styles from "./primitives.module.css";

type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function SkipLink({
  className,
  href = "#main-content",
  children = "Skip to main content",
  ...props
}: SkipLinkProps) {
  const classes = className
    ? `${styles.skipLink} ${className}`
    : styles.skipLink;

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
