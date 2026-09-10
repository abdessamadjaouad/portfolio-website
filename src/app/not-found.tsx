import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageShell>
      <h1>Page not found</h1>
      <p>This address does not match a page in the portfolio.</p>
      <ButtonLink href="/">Back to the portfolio</ButtonLink>
    </PageShell>
  );
}
