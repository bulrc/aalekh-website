import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "../styles/main.scss";
import { Footer } from "../modules/footer";

import { CORMORANT_GARAMOND } from "@/app/fonts";
import { FixedNavigation } from "@/components/navigation";
import { ScrollToTop } from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Aalekh - Carnival of Books",
  description:
    "AALKEH is Bennett University’s annual literary fest that aims to showcase ‘the Power of Ink’. The two-day bilingual fest’s essence and spirit is to promote reading, writing, and learning with publishing support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={CORMORANT_GARAMOND.className}>
        <FixedNavigation />
        {children}
        <ScrollToTop />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
