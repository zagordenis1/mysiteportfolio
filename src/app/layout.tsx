import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const siteUrl = "https://zagorovsky.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Denys Zagorovsky — Software Engineering Student",
    template: "%s · Denys Zagorovsky",
  },
  description:
    "Portfolio of Denys Zagorovsky, a software engineering student at Zhytomyr Polytechnic building modern web applications with React, Next.js and TypeScript.",
  keywords: [
    "Denys Zagorovsky",
    "Денис Загоровський",
    "portfolio",
    "software engineering",
    "Zhytomyr Polytechnic",
    "Житомирська політехніка",
    "React",
    "Next.js",
    "TypeScript",
    "frontend developer",
  ],
  authors: [{ name: "Denys Zagorovsky" }],
  creator: "Denys Zagorovsky",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Denys Zagorovsky — Software Engineering Student",
    description:
      "Portfolio of Denys Zagorovsky — modern web apps with React, Next.js and TypeScript.",
    siteName: "Denys Zagorovsky Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denys Zagorovsky — Software Engineering Student",
    description:
      "Portfolio of Denys Zagorovsky — modern web apps with React, Next.js and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/?lang=en`,
      "uk-UA": `${siteUrl}/?lang=uk`,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080a12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
