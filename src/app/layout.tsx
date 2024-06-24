import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "latin", "latin-ext"],
  display: "swap",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio Şükrü Tanrıverdi",
  description: "Personal Portfolio Şükrü Tanrıverdi",
  category: "Personal Portfolio",
  authors: {
    name: "Şükrü Tanrıverdi",
    url: "https://sukrutanriverdi.com/",
  },
  applicationName: "Personal Portfolio",
  keywords: [
    "Personal Portfolio",
    "Şükrü Tanrıverdi",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { language: string };
}>) {
  return (
    <html lang={params.language}>
      <body className={`${pixelify.className}`}>{children}</body>
    </html>
  );
}
