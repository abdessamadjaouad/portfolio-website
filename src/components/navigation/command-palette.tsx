"use client";

import { useEffect, useRef, useState } from "react";
import { useHydrated } from "@/lib/use-hydrated";
import styles from "./navigation.module.css";

export type NavigationAction = {
  label: string;
  href: string;
  keywords: string;
};

export function CommandPalette({ actions }: { actions: NavigationAction[] }) {
  const hydrated = useHydrated();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [query, setQuery] = useState("");
  const filtered = actions.filter((action) =>
    `${action.label} ${action.keywords}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );

  function open() {
    if (dialog.current?.open) return;
    returnFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setQuery("");
    dialog.current?.showModal();
    input.current?.focus();
  }

  function close() {
    dialog.current?.close();
    returnFocus.current?.focus();
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k" &&
        !event.altKey
      ) {
        if (
          event.target instanceof HTMLElement &&
          event.target.closest(
            "input, textarea, select, [contenteditable=true]",
          ) &&
          !dialog.current?.open
        )
          return;
        event.preventDefault();
        if (dialog.current?.open) close();
        else open();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {hydrated ? (
        <button
          className={styles.launcher}
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          aria-keyshortcuts="Control+k Meta+k"
        >
          Search <kbd>⌘ / Ctrl K</kbd>
        </button>
      ) : null}
      <dialog
        ref={dialog}
        aria-labelledby="palette-title"
        className={styles.dialog}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            close();
            return;
          }
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            "button, input, a[href]",
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
      >
        <div className={styles.dialogHeader}>
          <h2 id="palette-title">Find your way</h2>
          <button type="button" onClick={close} aria-label="Close search">
            Close
          </button>
        </div>
        <label htmlFor="portfolio-search">
          Search projects, resumes, and sections
        </label>
        <input
          ref={input}
          id="portfolio-search"
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
          maxLength={100}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              dialog.current?.querySelector<HTMLAnchorElement>("li a")?.focus();
            }
          }}
        />
        <p role="status" className={styles.count}>
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </p>
        <ul
          onKeyDown={(event) => {
            if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key))
              return;
            const links = Array.from(
              event.currentTarget.querySelectorAll<HTMLAnchorElement>("a"),
            );
            const index = links.indexOf(
              document.activeElement as HTMLAnchorElement,
            );
            if (index < 0) return;
            event.preventDefault();
            const next =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? links.length - 1
                  : (index +
                      (event.key === "ArrowDown" ? 1 : -1) +
                      links.length) %
                    links.length;
            links[next]?.focus();
          }}
        >
          {filtered.map((action) => (
            <li key={action.href}>
              <a
                href={action.href}
                onClick={close}
                download={action.href.endsWith(".pdf") || undefined}
              >
                {action.label}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
        {filtered.length === 0 ? (
          <p>Try a project name, technology, or “resume”.</p>
        ) : null}
      </dialog>
    </>
  );
}
