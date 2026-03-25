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
  metadataBase: new URL("https://clanklabs.dev"),
  title: "Clank — Agentic Assistant",
  description: "Local-first agentic assistant powered by local models and cloud providers. 14 tools, self-learning memory, zero telemetry. Terminal or desktop — your choice.",
  keywords: ["AI assistant", "local AI", "agentic assistant", "Ollama", "Claude", "OpenAI", "terminal", "zero telemetry", "private AI"],
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
    title: "Clank — Agentic Assistant",
    description: "Local-first agentic assistant powered by local models and cloud providers. 14 tools, self-learning memory, zero telemetry. Terminal or desktop — your choice.",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1500, height: 500, alt: "Clank Labs — Your Code. Your Rules." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clank — Agentic Assistant",
    description: "Local-first agentic assistant powered by local models and cloud providers. 14 tools, self-learning memory, zero telemetry. Terminal or desktop — your choice.",
    images: ["/og-banner.png"],
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
