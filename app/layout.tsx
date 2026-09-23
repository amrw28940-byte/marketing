import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Snow from "@/components/Snow";
import Navbar from "@/components/Navbar";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-cairo",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Unique | وكالة التسويق الإلكتروني وتحسين محركات البحث",
  description: "وكالة رقمية متكاملة لخدمات السيو، تصميم المواقع، وإدارة السوشيال ميديا.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`h-full ${cairo.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className={`h-full min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-yellow-400 selection:text-[#000000] ${cairo.className} antialiased`}>
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <Snow /> 
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}