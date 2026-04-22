import type { Metadata } from "next";
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
  title: "İncek Ender Perde | Ankara Perde Hizmeti",
  description:
    "İncek Ender Perde - Ücretsiz keşif, ölçü ve montaj hizmeti. Ankara perde çözümleri.",

  verification: {
    google: "J_jPf5zVpumVKDb3hm1q4PwXqgYCSUttOew7QkUUb3Y",
  },

  metadataBase: new URL("https://incekenderperde.com"),

  openGraph: {
    title: "İncek Ender Perde",
    description: "Ücretsiz keşif ve profesyonel perde hizmeti",
    url: "https://incekenderperde.com",
    siteName: "İncek Ender Perde",
    locale: "tr_TR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}