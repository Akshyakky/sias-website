import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "SIAS - Professional Accounting & Tax Services in UAE",
    template: "%s | SIAS Accounting & Tax Services UAE",
  },
  description:
    "Leading accounting firm in UAE offering expert VAT, corporate tax, accounting, and business setup services. Professional financial guidance for startups to enterprises with personalized solutions.",
  keywords: [
    "accounting services UAE",
    "UAE tax consulting",
    "VAT registration UAE",
    "business setup UAE",
    "VAT filing UAE",
    "financial statements UAE",
    "bookkeeping services Dubai",
    "audit services UAE",
    "business advisory Dubai",
    "SIAS Accounting",
    "corporate tax UAE",
    "tax consultancy Dubai",
    "accounting firm UAE",
    "business consultation UAE",
    "financial advisory Dubai",
    "company formation UAE",
    "SME accounting services",
    "professional accounting UAE",
  ],
  authors: [{ name: "SIAS Accounting Services" }],
  creator: "SIAS Accounting Services",
  publisher: "SIAS Accounting Services",
  formatDetection: {
    email: true, // Changed to true since you have contact information
    telephone: true, // Changed to true since you have phone numbers
  },
  alternates: {
    canonical: "https://siasaccounting.com",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
        color: "#1e40af",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://siasaccounting.com/",
    siteName: "SIAS Accounting Services UAE",
    title: "SIAS - Professional Accounting & Tax Services in UAE",
    description:
      "Expert accounting, tax, and business setup services in UAE. Comprehensive financial solutions for businesses of all sizes with professional guidance and support.",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "SIAS Professional Accounting Services UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIAS - Professional Accounting & Tax Services in UAE",
    description: "Expert accounting, tax, and business setup services in UAE. Comprehensive financial solutions for all business sizes.",
    images: ["/web-app-manifest-512x512.png"],
    creator: "@SIASAccounting",
    site: "@SIASAccounting",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
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
    nocache: true,
  },
  category: "Business & Professional Services",
  applicationName: "SIAS Accounting Services",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="canonical" href="https://siasaccounting.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
