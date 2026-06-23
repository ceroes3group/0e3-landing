import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "0E3 — Menos complicaciones. Más control.",
  description: site.description,
  keywords: [
    "0E3",
    "Cero Es Tres",
    "POS",
    "punto de venta",
    "comercios",
    "Argentina",
    "stock",
    "caja",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.name,
    title: "0E3 — Menos complicaciones. Más control.",
    description: site.description,
    images: [
      {
        url: "/social/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "0E3 — Menos complicaciones. Más control.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "0E3 — Menos complicaciones. Más control.",
    description: site.description,
    images: ["/social/og-placeholder.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icons/favicon.svg",
    shortcut: "/icons/favicon.svg",
    apple: "/icons/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#111318",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
