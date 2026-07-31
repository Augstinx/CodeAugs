import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodeAugs",
    template: "%s | CodeAugs",
  },

  description:
    "Building Africa's Next Generation of Software Engineers, AI Innovators and Technology Leaders.",

  keywords: [
    "Coding",
    "Computer Science",
    "Artificial Intelligence",
    "Robotics",
    "Programming",
    "Cybersecurity",
    "Software Engineering",
    "Web Development",
    "Data Science",
    "Mathematics",
    "CodeAugs",
    "Accra",
    "Ghana",
  ],

  authors: [
    {
      name: "CodeAugs",
    },
  ],

  creator: "CodeAugs",

  publisher: "CodeAugs",

  metadataBase: new URL("https://codeaugs.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}