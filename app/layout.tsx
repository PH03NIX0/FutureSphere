import { Inter, Manrope } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { AuthProvider } from "@/components/auth/auth-provider";
import "./globals.css";

// Variable fonts (no weight list) → one file each instead of multiple static cuts.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  // Defer body font preload so the LCP heading face (Inter) wins the critical path.
  preload: false,
});

export const metadata: Metadata = {
  title: "FutureSphere — Empowering Innovation Through Technology",
  description: "Cutting-edge technology solutions that streamline business operations and drive growth.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9FAFB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="bg-fs-background min-h-screen antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
