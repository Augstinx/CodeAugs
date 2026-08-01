import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CookieConsent } from "@/components/layout/cookie-consent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodeAugs edTech — Empowering Minds Through Code & Innovation",
    template: "%s | CodeAugs edTech",
  },
  description:
    "Africa's premier EdTech platform providing high-impact education in Software Engineering, AI, Robotics, Cybersecurity, and Computer Science for learners, schools, and enterprises.",
  keywords: [
    "CodeAugs edTech",
    "EdTech Africa",
    "Coding for Kids",
    "Software Engineering",
    "Artificial Intelligence",
    "Robotics Education",
    "Computer Science Ghana",
  ],
  authors: [{ name: "CodeAugs edTech" }],
  creator: "CodeAugs edTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeaugs.com",
    title: "CodeAugs edTech — Empowering Minds Through Code & Innovation",
    description:
      "Transforming tech education across Africa with world-class programming, AI, and engineering curricula.",
    siteName: "CodeAugs edTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeAugs edTech",
    description:
      "Transforming tech education across Africa with world-class programming, AI, and engineering curricula.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#051329",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-[var(--bg-app)] text-[var(--fg-app)] font-sans antialiased selection:bg-[var(--blue-codeaugs)] selection:text-white flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}