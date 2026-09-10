"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./signal.module.css";

const SignalAnimation = dynamic(() => import("./signal-animation"), {
  ssr: false,
});
const stages = [
  { label: "Ingest", href: "#data-engineering-heading" },
  { label: "Transform", href: "#project-stock-market-etl" },
  { label: "Store", href: "#data-stores-heading" },
  { label: "Serve", href: "#backend-and-web-heading" },
  { label: "Observe", href: "#analytics-and-bi-heading" },
  { label: "Deliver", href: "#cloud-and-delivery-heading" },
];

export function SignalFlow() {
  const target = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const element = target.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const update = () =>
      setActive(
        inView && !preference.matches && document.visibilityState === "visible",
      );
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(element);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <section
      id="signal-flow"
      ref={target}
      className={styles.flow}
      aria-label="From raw data to useful products"
    >
      <div className={styles.inner}>
        <p className={styles.label}>From raw data to useful products</p>
        <div className={styles.track} aria-hidden="true">
          <svg viewBox="0 0 1000 24" preserveAspectRatio="none">
            <path d="M20 12H980" />
          </svg>
          {active ? <SignalAnimation target={target} /> : null}
        </div>
        <ol>
          {stages.map((stage, index) => (
            <li key={stage.label}>
              <a href={stage.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {stage.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
