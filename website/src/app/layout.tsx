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
  title: "NovaStack — Production-Ready Next.js Scaffolding in Minutes",
  description: "NovaStack is an opinionated open-source CLI that scaffolds production-ready Next.js applications with a carefully curated golden stack.",
  keywords: ["Next.js", "CLI", "Boilerplate", "Developer Tool", "Better Auth", "Prisma", "PostgreSQL", "Tailwind CSS"],
  authors: [{ name: "NovaStack Team" }],
  openGraph: {
    type: "website",
    title: "NovaStack — Production-Ready Next.js Scaffolding",
    description: "Build production-ready applications before your coffee gets cold.",
    siteName: "NovaStack",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaStack — Production-Ready Next.js Scaffolding",
    description: "Build production-ready applications before your coffee gets cold.",
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
        {children}
      </body>
    </html>
  );
}
