import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Snow from "@/components/Snow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-cairo",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "شركة سيو خدمات تحسين محركات البحث SEO | Unique",
  description: "شركة سيو متخصصة في تحسين محركات البحث SEO، نساعدك على تحسين ترتيب موقعك في جوجل، زيادة الزيارات المستهدفة والوصول إلى عملاء جدد.",
  keywords: ["سيو", "تصميم مواقع", "تسويق رقمي", "وكالة تسويق", "SEO Agency", "Digital Agency"],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "شركة سيو خدمات تحسين محركات البحث SEO | Unique",
    description: "شركة سيو متخصصة في تحسين محركات البحث SEO، نساعدك على تحسين ترتيب موقعك في جوجل، زيادة الزيارات المستهدفة والوصول إلى عملاء جدد.",
    url: "https://marketing-beta-gold-30.vercel.app",
    siteName: "Unique Agency",
    locale: "ar_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={cairo.variable}
      data-scroll-behavior="smooth"
    >
      <body className={`bg-[#000000] text-white selection:bg-yellow-400 selection:text-[#000000] ${cairo.className} antialiased overflow-x-hidden`}>
        <Snow /> 
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}