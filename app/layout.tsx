import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";

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
  title: {
    default: "Medtrix Technologies — Self-powered triboelectric sensors for rehabilitation",
    template: "%s · Medtrix",
  },
  description:
    "Medtrix builds self-powered triboelectric sensors for rehabilitation. Energy harvested from the patient's own motion. No batteries. Developed with PGIMER Chandigarh.",
  metadataBase: new URL("https://medtrix.example"),
  openGraph: {
    title: "Medtrix Technologies",
    description:
      "Self-powered triboelectric sensors for rehabilitation. Developed with PGIMER Chandigarh. Peer-reviewed in Elsevier and RSC.",
    siteName: "Medtrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medtrix Technologies",
    description:
      "Self-powered triboelectric sensors for rehabilitation. Developed with PGIMER Chandigarh.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
