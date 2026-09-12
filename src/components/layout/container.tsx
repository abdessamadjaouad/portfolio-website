import type { ComponentPropsWithoutRef } from "react";

import styles from "./layout.module.css";

type ContainerWidth = "wide" | "reading";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  width?: ContainerWidth;
};

const widthClass: Record<ContainerWidth, string> = {
  wide: styles.wide,
  reading: styles.reading,
};

export function Container({
  className,
  width = "wide",
  ...props
}: ContainerProps) {
  const classes = className
    ? `${styles.container} ${widthClass[width]} ${className}`
    : `${styles.container} ${widthClass[width]}`;

  return <div className={classes} {...props} />;
}
