import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rahul Sunny C S — Senior Frontend Engineer",
  description:
    "Portfolio of Rahul Sunny C S, Senior Frontend Engineer specializing in React, TypeScript, Core Web Vitals, and AI-augmented frontend systems.",
  openGraph: {
    title: "Rahul Sunny C S — Senior Frontend Engineer",
    description: "7 years building high-performance React + TypeScript applications at scale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

