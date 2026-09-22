import type { Metadata } from "next";
import { Silkscreen, Geist_Mono } from "next/font/google";
import "./globals.css";

const pixel = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mono = Geist_Mono({
  variable: "--font-pixel-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelForge — Piyush Kanojiya",
  description:
    "PixelForge — a pixel-built portfolio of software, interfaces, experiments, and digital work by Piyush Kanojiya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={pixel.variable + " " + mono.variable + " h-full antialiased"}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
