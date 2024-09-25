/** @format */

import type { Metadata } from "next";
import { Sofadi_One } from "next/font/google"; // Import Sofadi One from Google Fonts
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const sofadiOne = Sofadi_One({ subsets: ["latin"], weight: ["400"] }); // Use Sofadi One font

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sofadiOne.className}>
        <Header />
        <main className="dark:bg-gray-800">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
