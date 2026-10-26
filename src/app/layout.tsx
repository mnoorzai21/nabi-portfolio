import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://mnoorzai.vercel.app"),
  title: {
    default: `${siteName} | Software Engineer`,
    // Child pages set only their own title, e.g. "Projects" → "Projects | Mohammad Nabi Noorzai".
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName, url: "https://github.com/mnoorzai21" }],
  creator: siteName,
  alternates: {
    canonical: "/",
  },
  // Open Graph controls the preview card shown when this site is shared on LinkedIn, Slack, etc.
  openGraph: {
    type: "website",
    url: "/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}