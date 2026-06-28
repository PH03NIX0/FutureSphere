import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "FutureSphere — Empowering Innovation Through Technology",
  description: "Cutting-edge technology solutions that streamline business operations and drive growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body className="bg-fs-background min-h-screen antialiased">{children}</body>
    </html>
  );
}
