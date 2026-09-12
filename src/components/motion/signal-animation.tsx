"use client";

import { LazyMotion, MotionConfig, useScroll } from "motion/react";
import * as m from "motion/react-m";
import type { RefObject } from "react";

const loadFeatures = () =>
  import("./features").then((module) => module.default);

export default function SignalAnimation({
  target,
}: {
  target: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        <svg
          viewBox="0 0 1000 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <m.path
            data-signal=""
            d="M20 12H980"
            style={{
              pathLength: scrollYProgress,
              stroke: "var(--color-data-signal)",
            }}
          />
        </svg>
      </LazyMotion>
    </MotionConfig>
  );
}
