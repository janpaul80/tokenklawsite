import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://token.klaw.at"),
  title: {
    default: "TokenKlaw â€” Save tokens across AI coding agents",
    template: "%s Â· TokenKlaw"
  },
  description:
    "TokenKlaw is an open-source token-saving layer for AI coding agents. Reduce duplicate prompts, repeated context, and wasted model calls.",
  openGraph: {
    title: "TokenKlaw",
    description:
      "Open-source token-saving layer for AI coding agents. File-storage-first runtime, clean install, practical savings.",
    url: "https://token.klaw.at",
    siteName: "TokenKlaw",
    images: [{ url: "/og-placeholder.png", width: 1200, height: 630, alt: "TokenKlaw" }],
    type: "website"
  },
  icons: [{ rel: "icon", url: "/tokenklaw2-logo.png" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


