import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "NovaStack — Production-Ready Next.js Scaffolding via @novastack/cli",
  description: "NovaStack (@novastack/cli) is an opinionated open-source CLI that scaffolds production-ready Next.js applications with a carefully curated golden stack.",
  keywords: ["@novastack/cli", "NovaStack", "Next.js", "CLI", "Boilerplate", "Developer Tool", "Better Auth", "Prisma", "PostgreSQL", "Tailwind CSS"],
  authors: [{ name: "NovaStack Team" }],
  openGraph: {
    type: "website",
    title: "NovaStack (@novastack/cli) — Production-Ready Next.js Scaffolding",
    description: "Scaffold production-ready Next.js applications in under 60 seconds with @novastack/cli.",
    siteName: "NovaStack",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaStack (@novastack/cli) — Production-Ready Next.js Scaffolding",
    description: "Scaffold production-ready Next.js applications in under 60 seconds with @novastack/cli.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-background text-primary-text min-h-screen selection:bg-white selection:text-black">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "@novastack/cli",
              "operatingSystem": "Windows, macOS, Linux",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Opinionated open-source CLI that scaffolds production-ready Next.js applications with a carefully curated golden stack.",
              "softwareVersion": "0.1.0"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
