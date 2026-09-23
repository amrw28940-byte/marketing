"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function CommonMistakesSection() {
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
  const data = t.CommonMistakes;

  if (!data || !data.mistakes) return null;

  // أيقونات تحذيرية واحترافية لكل خطأ
  const icons = ["⚠️", "📉", "📱", "📝", "⚙️", "🕸️", "🔍"];

  return (
    <section key={locale} className="relative w-full bg-[#000000] py-24 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* توهج خفيف يميل للون البرتقالي/الذهبي الخافت لإيحاء التنبيه الذكي */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F5BD02]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* مقدمة القسم */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#111] border border-amber-500/30 text-amber-400 text-sm font-bold mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
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

        {/* شبكة الأخطاء (Bento Grid Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {data.mistakes.map((item: any, index: number) => {
            // جعل الكارت الأخير يأخذ عرضاً أكبر إذا أمكن (Bento UI touch)
            const isLast = index === data.mistakes.length - 1;
            return (
              <div 
                key={index}
                className={`group relative p-8 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] overflow-hidden flex flex-col justify-between ${isLast ? 'lg:col-span-1' : ''}`}
              >
                {/* إضاءة خفيفة عند التمرير */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-500">
                      {icons[index]}
                    </div>
                    <span className="text-4xl font-black text-white/5 group-hover:text-amber-500/10 transition-colors duration-500 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* علامة صغيرة توحي بتجنب الخطأ */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    تم تفاديها كلياً
                  </span>
                  <span className="font-mono opacity-40">SAFE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* قسم Call to Action الختامي */}
        <div className="relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-[#F5BD02]/50 to-amber-500/30 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

          <div className="relative px-8 py-14 md:px-16 md:py-18 rounded-[2.3rem] bg-[#050505] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)]">
            
            <div className={`relative z-10 flex-1 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
                {data.ctaTitle}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                {data.ctaDesc}
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link 
                href="/contact"
                className="relative inline-flex items-center justify-center w-full md:w-auto px-8 py-5 text-base md:text-lg font-black text-black bg-[#F5BD02] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(245,189,2,0.4)] hover:shadow-[0_0_50px_rgba(245,189,2,0.8)] hover:scale-105 transition-all duration-300 group/btn"
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