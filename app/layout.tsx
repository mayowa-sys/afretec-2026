import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Darker_Grotesque, Raleway } from "next/font/google";
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

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  title: "AFRETEC-UNILAG Innovation Challenge 3.0",
  description:
    "AFRETEC-UNILAG Innovation Challenge 3.0 — Inclusive Education Innovation Challenge. Open to undergraduate teams across Anglophone West Africa. Deadline: May 31, 2026.",
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
    title: "AFRETEC-UNILAG Innovation Challenge 3.0",
    description:
      "Inclusive Education Innovation Challenge. Multidisciplinary undergraduate teams across Anglophone West Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} ${darkerGrotesque.variable} ${raleway.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
