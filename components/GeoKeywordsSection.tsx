"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function GeoKeywordsSection() {
  const [locale, setLocale] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const checkLang = () => {
      const currentDir = document.documentElement.dir;
      setLocale(currentDir === "ltr" ? "en" : "ar");
    };
    checkLang();
    window.addEventListener("languageChanged", checkLang);
    const observer = new MutationObserver(checkLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => {
      window.removeEventListener("languageChanged", checkLang);
      observer.disconnect();
    };
  }, []);

  const t: any = locale === "ar" ? ar : en;
  const data = t.GeoKeywords;

  if (!data || !data.items) return null;

  return (
    <section key={locale} className="relative w-full bg-[#000000] py-24 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* خلفية بتوهج أصفر فخم يتطابق مع تصميم صورتك */}
      <div className="absolute inset-0 bg-[#F5BD02]/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5BD02]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* مقدمة القسم */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black border border-[#F5BD02]/50 text-[#F5BD02] text-sm font-bold mb-6 shadow-[0_0_20px_rgba(245,189,2,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#F5BD02] animate-pulse"></span>
            {data.badge}
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {data.title1}
            <span className="text-[#F5BD02] drop-shadow-[0_0_15px_rgba(245,189,2,0.5)]">{data.titleHighlight}</span>
            {data.title2}
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>

        {/* شبكة الكلمات المفتاحية في مستطيلات شيك جداً وبارزة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.items.map((item: any, index: number) => (
            <Link
              key={index}
              href={`/${item.slug}`}
              className="group relative px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0a0f1d] to-[#050505] border border-[#F5BD02]/30 hover:border-[#F5BD02] hover:bg-[#F5BD02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(245,189,2,0.6)] flex items-center justify-center text-center overflow-hidden"
            >
              {/* لمعة داخلية */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              
              <span className="relative z-10 text-white group-hover:text-black font-bold text-sm md:text-base tracking-wide transition-colors duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}