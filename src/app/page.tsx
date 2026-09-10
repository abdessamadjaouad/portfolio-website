import { PortfolioHome } from "@/components/portfolio/portfolio-home";
import { StructuredData } from "@/components/structured-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata(
    "Data Engineer",
    "Abdessamad Jaouad builds data platforms and production software. Explore verified work, engineering projects, and English resumes. Casablanca, Morocco; available immediately.",
    "/",
  ),
  title: "Abdessamad Jaouad | Data Engineer",
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <PortfolioHome />
    </>
  );
}
