import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://aseefdurrani.com";
const title = "Aseef Durrani — Software & AI Engineer";
const description =
  "Portfolio of Aseef Durrani — Software & AI Engineer specializing in embedded systems, FPGA accelerators, and full-stack AI applications. B.S. ECE, Rutgers University.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Aseef Durrani",
  },
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Aseef Durrani",
    "Software Engineer",
    "AI Engineer",
    "Embedded Systems",
    "FPGA",
    "Full-Stack Developer",
    "Rutgers ECE",
    "FINN",
    "VHDL",
    "Next.js",
  ],
  authors: [{ name: "Aseef Durrani", url: siteUrl }],
  creator: "Aseef Durrani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aseef Durrani",
    title,
    description,
    images: [
      {
        url: "/images/personal/sunset/sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Aseef Durrani — Software & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/personal/sunset/sunset.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
