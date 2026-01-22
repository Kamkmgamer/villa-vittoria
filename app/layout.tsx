import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relais Villa Vittoria | Lake Como Luxury",
  description:
    "An intimate boutique retreat on the shores of Lake Como. Experience timeless Italian elegance and unparalleled hospitality.",
  keywords: [
    "Lake Como",
    "luxury hotel",
    "boutique",
    "Italy",
    "Italian hospitality",
    "villa",
    "retreat",
  ],
  openGraph: {
    title: "Relais Villa Vittoria | Lake Como Luxury",
    description: "An intimate boutique retreat on the shores of Lake Como.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
