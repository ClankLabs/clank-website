import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://llamatalksuite.dev"),
  title: "LlamaTalk Suite — AI Tools, Your Data, Your Rules",
  description: "Local-first agentic coding assistant and companion tools. Zero telemetry, full encryption, 8 providers.",
  keywords: ["AI coding assistant", "local AI", "agentic coding", "Ollama", "Claude", "OpenAI", "terminal", "zero telemetry", "private AI"],
  authors: [{ name: "ItsTrag1c" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "LlamaTalk Suite — AI Tools, Your Data, Your Rules",
    description: "Local-first agentic coding assistant and companion tools. Zero telemetry. MIT licensed.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LlamaTalk Suite — AI Tools, Your Data, Your Rules",
    description: "Local-first agentic coding assistant and companion tools. Zero telemetry. MIT licensed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
