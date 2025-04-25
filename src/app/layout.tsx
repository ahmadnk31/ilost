import { Geist, Geist_Mono } from "next/font/google";
import { metadata } from "@/lib/metadata";
import "./globals.css";
import {JsonLdProvider} from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://ilost-app.vercel.app" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <JsonLdProvider />
      </body>
    </html>
  );
}
