import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Saint Laurent Qixi Campaign",
    template: "%s | Saint Laurent Qixi Campaign",
  },
  description:
    "A Next.js demo for the Saint Laurent China Qixi gift campaign and AI concierge journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
