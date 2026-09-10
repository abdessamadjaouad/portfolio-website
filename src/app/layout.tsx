import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteTools } from "@/components/navigation/site-tools";
import { allowIndexing, siteOrigin } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
  robots: { index: allowIndexing, follow: true },
  title: "Abdessamad Jaouad | Data Engineer",
  description:
    "Portfolio of Abdessamad Jaouad, a Data Engineer and Software Engineer based in Casablanca, Morocco.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#071015",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteTools />
      </body>
    </html>
  );
}
