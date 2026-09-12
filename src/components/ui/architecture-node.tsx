import type { HTMLAttributes, ReactNode } from "react";

import styles from "./primitives.module.css";

type ArchitectureNodeState = "idle" | "active" | "verified";

type ArchitectureNodeProps = Omit<HTMLAttributes<HTMLLIElement>, "children"> & {
  step: ReactNode;
  label: ReactNode;
  state?: ArchitectureNodeState;
};

const stateClass: Record<ArchitectureNodeState, string> = {
  idle: "",
  active: styles.architectureActive,
  verified: styles.architectureVerified,
};

export function ArchitectureNode({
  step,
  label,
  state = "idle",
  className,
  ...props
}: ArchitectureNodeProps) {
  const classes = [styles.architectureNode, stateClass[state], className]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={classes} {...props}>
      <span className={styles.architectureStep}>{step}</span>
      <span className={styles.architectureLabel}>{label}</span>
    </li>
  );
}
