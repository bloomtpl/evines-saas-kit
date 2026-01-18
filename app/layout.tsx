import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Evines — The High-Performance SaaS Starter Kit",
    template: "%s | Evines",
  },
  description:
    "Ship your SaaS in hours, not months. Evines provides a production-ready Next.js 16 stack with Auth.js, Prisma, and Stripe integration.",
  keywords: [
    "SaaS Boilerplate",
    "Next.js 16",
    "React 19",
    "Stripe Integration",
    "Starter Kit",
    "Tailwind CSS v4",
  ],
  authors: [{ name: "Bloomtpl" }],
  creator: "Bloomtpl",
  metadataBase: new URL("https://evines.bloomtpl.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evines.bloomtpl.com",
    title: "Evines — Modern SaaS Starter Kit",
    description:
      "The ultimate boilerplate to build and scale your next big idea.",
    siteName: "Evines",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evines SaaS Boilerplate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Evines — Modern SaaS Starter Kit",
    description:
      "Ship your SaaS in hours with Next.js 15, Auth.js, and Stripe.",
    images: ["/og-image.png"],
    creator: "@bloomtpl",
  },

  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {children}
          <Toaster richColors closeButton position="top-center" />
        </SessionProvider>
      </body>
    </html>
  );
}
