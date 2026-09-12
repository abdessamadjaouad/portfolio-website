import { PageShell } from "@/components/layout/page-shell";
import { TextLink } from "@/components/ui/text-link";
import { homepageContent } from "@/components/portfolio/home-content";
import { pageMetadata, serializeJsonLd } from "@/lib/metadata";
import styles from "@/components/projects/projects.module.css";

const { research } = homepageContent;
export const metadata = pageMetadata("Research", research.title, "/research");

export default function ResearchPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            name: research.title,
            url: research.link.href,
          }),
        }}
      />
      <header className={styles.heading}>
        <p className={styles.eyebrow}>Research · IEEE Xplore</p>
        <h1>{research.title}</h1>
      </header>
      <TextLink
        href={research.link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the paper on IEEE Xplore <span aria-hidden="true">↗</span>
      </TextLink>
    </PageShell>
  );
}
