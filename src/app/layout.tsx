import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Abdessamad Jaouad | Data Engineer",
  description:
    "Portfolio of Abdessamad Jaouad, a Data Engineer and Software Engineer based in Casablanca, Morocco.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
