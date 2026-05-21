import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mhd Nur Ifaturachman | Portfolio",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}