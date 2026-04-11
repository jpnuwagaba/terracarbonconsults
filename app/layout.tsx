import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terra Carbon Consults",
  description: "A platform to connect carbon offset projects in Africa with global buyers, fostering transparency and sustainability in the carbon market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
