import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts are self-hosted by Next.js at build time, so no requests go to Google.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Mohammad Nabi Noorzai";
const siteDescription =
  "Software engineer building full-stack web applications with React, Next.js, and TypeScript, including FinTech tools for active traders.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Software Engineer`,
    // Child pages set only their own title, e.g. "Projects" → "Projects | Mohammad Nabi Noorzai".
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName, url: "https://github.com/mnoorzai21" }],
  creator: siteName,
  // Open Graph controls the preview card shown when this site is shared on LinkedIn, Slack, etc.
  // TODO: add `metadataBase`, `url`, and a preview image once the site has a domain.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} | Software Engineer`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}