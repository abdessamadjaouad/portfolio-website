export type ViewMode = "recruiter" | "engineer";

export function parseViewMode(search: string): ViewMode {
  return new URLSearchParams(search).get("view") === "engineer"
    ? "engineer"
    : "recruiter";
}
