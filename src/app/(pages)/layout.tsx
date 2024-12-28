import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartLayout from "./cartLayout";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul era",
  description: "Shoppingg...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartLayout>
          <div className="w-full bg-[#FF6166] text-white text-center py-2.5 text-base sticky top-0 z-50 text-xs">
            Free Shipping Available. Fast Processing.
          </div>
          <div className="min-h-screen flex flex-col bg-white text-black">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartLayout>
      </body>
    </html>
  );
}
