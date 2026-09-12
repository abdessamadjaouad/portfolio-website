import styles from "./data-stack.module.css";

const layers = [
  { id: "ingest", label: "01 / Ingest", glyph: "↳" },
  { id: "transform", label: "02 / Transform", glyph: "{ }" },
  { id: "deliver", label: "03 / Deliver", glyph: "↗" },
] as const;

export function DataStack() {
  return (
    <figure className={styles.figure} aria-label="Interactive data stack">
      <div className={styles.caption}>
        <span>Inside the work</span>
        <span aria-hidden="true">↗</span>
      </div>
      <details className={styles.explorer}>
        <summary aria-label="Explore the data stack">
          <span className={styles.scene} aria-hidden="true">
            <span className={styles.halo} />
            <span className={styles.stack}>
              {layers.map((layer) => (
                <span
                  key={layer.id}
                  className={`${styles.plate} ${styles[layer.id]}`}
                >
                  <span className={styles.plateLabel}>{layer.label}</span>
                  <span className={styles.glyph}>{layer.glyph}</span>
                  <span className={styles.cells}>
                    {Array.from({ length: 12 }, (_, index) => (
                      <i key={index} />
                    ))}
                  </span>
                  <span className={styles.edge} />
                </span>
              ))}
            </span>
            <span className={styles.orbit} />
          </span>
          <span className={styles.control}>
            <span className={styles.closedLabel}>Separate the layers</span>
            <span className={styles.openLabel}>Bring it together</span>
            <span aria-hidden="true">⌁</span>
          </span>
        </summary>
        <p className={styles.explanation}>
          Ingest source data, transform it into usable datasets, and deliver it
          through APIs and interfaces.
        </p>
      </details>
      <figcaption>
        Data in. <span>Useful products out.</span>
      </figcaption>
    </figure>
  );
}
