import type { Viewport } from "next";
import { PortfolioResume } from "@/components/portfolio/portfolio-resume";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Résumé",
  "Abdessamad Jaouad’s résumé: Data Engineer and Software Engineer in Casablanca. Experience, skills, education, research, and English PDF downloads.",
  "/resume",
);

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f3fa",
};

export default function ResumePage() {
  return <PortfolioResume />;
}
