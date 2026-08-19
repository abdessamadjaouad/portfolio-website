import type { HTMLAttributes, ReactNode } from "react";

import styles from "./primitives.module.css";

type MetricProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  value: ReactNode;
  label: ReactNode;
  source?: ReactNode;
};

export function Metric({
  value,
  label,
  source,
  className,
  ...props
}: MetricProps) {
  const classes = className ? `${styles.metric} ${className}` : styles.metric;

  return (
    <div className={classes} {...props}>
      <p className={styles.metricValue}>{value}</p>
      <p className={styles.metricLabel}>{label}</p>
      {source ? <p className={styles.metricSource}>{source}</p> : null}
    </div>
  );
}
