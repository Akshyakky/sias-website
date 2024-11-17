import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a fallback font
import "./globals.css";

// Use Inter as a fallback font while removing the Geist font configuration
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIAS - Professional Accounting Services",
  description: "Expert accounting, auditing, and advisory services in UAE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
