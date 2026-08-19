import type { AnchorHTMLAttributes } from "react";

import styles from "./primitives.module.css";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function TextLink({ className, ...props }: TextLinkProps) {
  const classes = className
    ? `${styles.textLink} ${className}`
    : styles.textLink;

  return <a className={classes} {...props} />;
}
