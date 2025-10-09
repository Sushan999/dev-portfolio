import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://susanthapamagar.vercel.app/"),
  title: "Susan Thapa | Dev Portfolio",
  description:
    "Full Stack Developer specializing in Next.js, MERN, and TypeScript.",
  icons: {
    icon: "code.svg",
  },
  openGraph: {
    title: "Susan Thapa | Dev Portfolio",
    description:
      "Explore my projects, skills, and experience in modern web development.",
    url: "https://susanthapa.dev",
    siteName: "Dev Portfolio",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Preview of Susan Thapa's Portfolio",
      },
    ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
