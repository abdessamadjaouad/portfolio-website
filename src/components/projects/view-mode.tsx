"use client";

import { useEffect, useSyncExternalStore } from "react";
import { parseViewMode, type ViewMode } from "@/lib/view-mode";
import { useHydrated } from "@/lib/use-hydrated";
import styles from "./projects.module.css";

function subscribe(listener: () => void) {
  window.addEventListener("popstate", listener);
  return () => window.removeEventListener("popstate", listener);
}

export function ViewModeControl() {
  const hydrated = useHydrated();
  const mode = useSyncExternalStore(
    subscribe,
    () => parseViewMode(window.location.search),
    () => "recruiter",
  );
  useEffect(() => {
    for (const detail of document.querySelectorAll<HTMLDetailsElement>(
      "[data-engineering-detail]",
    )) {
      detail.open = mode === "engineer";
    }
  }, [mode]);

  function select(next: ViewMode) {
    if (next === mode) return;
    const url = new URL(window.location.href);
    if (next === "engineer") url.searchParams.set("view", next);
    else url.searchParams.delete("view");
    window.history.pushState(null, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <div
      className={styles.viewControl}
      role="group"
      aria-label="Reading view"
      style={{ visibility: hydrated ? "visible" : "hidden" }}
    >
      {(["recruiter", "engineer"] as const).map((value) => (
        <button
          key={value}
          type="button"
          aria-pressed={mode === value}
          onClick={() => select(value)}
        >
          {value === "recruiter" ? "Recruiter overview" : "Engineer detail"}
        </button>
      ))}
    </div>
  );
}
