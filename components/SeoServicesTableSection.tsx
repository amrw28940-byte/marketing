"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function SeoServicesTableSection() {
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
  const data = t.SeoServicesTable;

  if (!data) return null;

  // دالة مساعدة لبناء الجدول بشكل احترافي مع وسم <table> لضمان قراءته من جوجل
  const renderTable = (sectionTitle: string, items: string[]) => (
    <div className="mb-12 overflow-hidden rounded-[2rem] bg-[#050505] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      <div className="bg-[#0a0a0a] px-8 py-5 border-b border-white/10">
        <h3 className="text-xl md:text-2xl font-bold text-[#F5BD02]">
          {sectionTitle}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b border-white/5 text-gray-400 text-sm font-medium bg-black/40">
              <th className="py-4 px-6 md:px-8">{data.colService}</th>
              <th className="py-4 px-6 md:px-8 w-32 text-center">{data.colStatus}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {items.map((item: string, idx: number) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-6 md:px-8 text-gray-200 text-sm md:text-base leading-relaxed">
                  {item}
                </td>
                <td className="py-4 px-6 md:px-8 text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-sm shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    ✔
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section key={locale} className="relative w-full bg-[#000000] py-24 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* توهج خلفي */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F5BD02]/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* مقدمة القسم */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#111] border border-[#F5BD02]/40 text-[#F5BD02] text-sm font-bold mb-6 shadow-[0_0_15px_rgba(245,189,2,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#F5BD02] animate-pulse"></span>
            {data.badge}
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {data.title1}
            <span className="text-[#F5BD02] drop-shadow-[0_0_15px_rgba(245,189,2,0.4)]">{data.titleHighlight}</span>
            {data.title2}
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* عرض الجداول الاحترافية الأربعة */}
        {renderTable(data.section1, data.auditItems)}
        {renderTable(data.section2, data.onpageItems)}
        {renderTable(data.section3, data.offpageItems)}
        {renderTable(data.section4, data.reportItems)}

        {/* قسم الاستشارة والـ Call To Action الختامي */}
        <div className="relative max-w-5xl mx-auto group mt-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F5BD02]/40 via-[#ffe885] to-[#F5BD02]/40 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

          <div className="relative px-8 py-14 md:px-16 md:py-18 rounded-[2.3rem] bg-[#050505] border border-[#F5BD02]/30 flex flex-col items-center text-center gap-8 overflow-hidden shadow-[0_0_50px_rgba(245,189,2,0.15)]">
            
            <h3 className="text-2xl md:text-4xl font-black text-white max-w-3xl leading-tight">
              {data.ctaHeading}
            </h3>
            
            <div className="space-y-4 max-w-3xl">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {data.ctaText1}
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {data.ctaText2}
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/contact"
                className="relative inline-flex items-center justify-center px-10 py-5 text-base md:text-lg font-black text-black bg-[#F5BD02] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(245,189,2,0.4)] hover:shadow-[0_0_50px_rgba(245,189,2,0.8)] hover:scale-105 transition-all duration-300 group/btn"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/btn:w-64 group-hover/btn:h-64 opacity-20"></span>
                <span className="relative flex items-center gap-3">
                  {data.ctaBtn}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${locale === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-1.5' : 'group-hover/btn:translate-x-1.5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}