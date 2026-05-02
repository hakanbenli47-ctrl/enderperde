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
  metadataBase: new URL("https://incekenderperde.com"),

  title: {
    default: "İncek Perdeci | Ankara Perde Hizmeti",
    template: "%s | İncek Perdeci",
  },

  description:
    "Ankara İncek bölgesinde stor perde, tül perde ve fon perde hizmeti. Ücretsiz keşif, ölçü ve montaj ile profesyonel çözümler.",

  keywords: [
    "ankara perde",
    "incek perde",
    "incek perdeci",
    "incek stor perde",
    "stor perde ankara",
    "tül perde ankara",
    "fon perde modelleri",
    "perde montaj",
    "perde ölçü hizmeti",
    "ankara perde firması",
  ],

  verification: {
    google: "J_jPf5zVpumVKDb3hm1q4PwXqgYCSUttOew7QkUUb3Y",
  },

  // 🔥 GÜÇLENDİRİLDİ (GÖRSEL EKLENDİ)
  openGraph: {
    title: "İncek Perdeci | Ankara Perde Hizmeti",
    description:
      "Ankara'da stor perde, tül perde ve fon perde çözümleri. Ücretsiz keşif ve montaj.",
    url: "https://incekenderperde.com",
    siteName: "İncek Perdeci",
    images: [
      {
        url: "https://incekenderperde.com/3.jpg",
        width: 1200,
        height: 630,
        alt: "İncek perdeci Ankara perde hizmeti",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  // 🔥 YENİ EKLENDİ (Google da kullanıyor)
  twitter: {
    card: "summary_large_image",
    title: "İncek Perdeci | Ankara Perde Hizmeti",
    description:
      "Ankara İncek bölgesinde profesyonel perde çözümleri",
    images: ["https://incekenderperde.com/3.jpg"],
  },

  alternates: {
    canonical: "https://incekenderperde.com",
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