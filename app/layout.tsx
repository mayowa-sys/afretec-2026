import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AFRETEC-UNILAG Inclusive Education Innovation Challenge 2026",
  description:
    "A pan-African competition for undergraduate teams across Anglophone West Africa. Funded by AFRETEC, supported by MathWorks. Submission deadline: May 31, 2026.",
  keywords: [
    "AFRETEC",
    "UNILAG",
    "inclusive education",
    "West Africa",
    "innovation challenge",
    "MathWorks",
    "Carnegie Mellon Africa",
  ],
  openGraph: {
    title: "AFRETEC-UNILAG Inclusive Education Innovation Challenge 2026",
    description:
      "Build the future of education, built by Africa. Multidisciplinary undergraduate teams across Anglophone West Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
