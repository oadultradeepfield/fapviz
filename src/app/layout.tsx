import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAPViz",
  description: "Learn Frequency Assignment Problem with Graph Coloring!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="FAPViz" />
      </head>
      <body
        className={`${interSans.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        <Toaster expand richColors />
      </body>
    </html>
  );
}
