import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Memory Game",
  description: "Next.js + TS + Tailwind",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
