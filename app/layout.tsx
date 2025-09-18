import type { Metadata } from "next";
import { Geist, Geist_Mono, Epilogue, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Analytics from "@/components/gtag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const epilogueFont = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const loraFont = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qousul's Web",
  description: "Ahmad Qousul Haq portofolio website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${epilogueFont.variable} ${loraFont.variable} antialiased`}
      >
        <Navbar>
          {children}
        </Navbar>
      </body>
    </html >
  );
}
