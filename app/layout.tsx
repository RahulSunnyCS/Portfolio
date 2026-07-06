import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rahul Sunny C S — Frontend Engineer",
  description:
    "Portfolio of Rahul Sunny C S, Senior Software Design Engineer specializing in React, TypeScript, and performant web applications.",
  openGraph: {
    title: "Rahul Sunny C S — Frontend Engineer",
    description: "5+ years building production-grade web applications.",
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

