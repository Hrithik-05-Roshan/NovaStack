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
  title: "NovaStack — Production-Ready Next.js Scaffolding CLI",
  description:
    "Generate production-ready Next.js applications with Prisma, Better Auth, PostgreSQL, Docker, and Tailwind CSS using a single command. Open source, MIT licensed.",
  keywords: [
    "@novastack/cli",
    "NovaStack",
    "Next.js",
    "CLI",
    "scaffolding",
    "developer tool",
    "Better Auth",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "TypeScript",
    "Docker",
    "full-stack",
    "boilerplate",
    "open source",
  ],
  authors: [{ name: "Hrithik Burnwal" }],
  creator: "Hrithik Burnwal",
  metadataBase: new URL("https://novastack.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "NovaStack — Production-Ready Next.js Scaffolding CLI",
    description:
      "Generate production-ready Next.js applications with Prisma, Better Auth, PostgreSQL, Docker, and Tailwind CSS using a single command.",
    siteName: "NovaStack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaStack — Production-Ready Next.js Scaffolding CLI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaStack — Production-Ready Next.js Scaffolding CLI",
    description:
      "Generate production-ready Next.js applications with Prisma, Better Auth, PostgreSQL, Docker, and Tailwind CSS using a single command.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#09090b" />
        <meta name="msapplication-TileColor" content="#09090b" />
      </head>
      <body className="antialiased bg-background text-primary-text min-h-screen selection:bg-white/15 selection:text-white">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "@novastack/cli",
              alternateName: "NovaStack",
              operatingSystem: "Windows, macOS, Linux",
              applicationCategory: "DeveloperApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Opinionated open-source CLI that scaffolds production-ready Next.js applications with Prisma, Better Auth, PostgreSQL, Docker, and Tailwind CSS.",
              softwareVersion: "0.1.0",
              license: "https://opensource.org/licenses/MIT",
              author: {
                "@type": "Person",
                name: "Hrithik Burnwal",
              },
              codeRepository:
                "https://github.com/Hrithik-05-Roshan/NovaStack",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
