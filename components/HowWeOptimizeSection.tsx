"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function HowWeOptimizeSection() {
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
  const data = t.HowWeOptimize;

  if (!data || !data.steps) return null;

  const icons = ["✍️", "🔄", "🔗", "⚡", "📱", "🎯", "📍"];

  return (
    <section key={locale} className="relative w-full bg-[#000000] py-24 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* توهج خلفي */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-[#F5BD02]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vw] bg-[#F5BD02]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* مقدمة القسم */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#111] border border-[#F5BD02]/40 text-[#F5BD02] text-sm font-bold mb-6 shadow-[0_0_15px_rgba(245,189,2,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#F5BD02] animate-pulse"></span>
            {data.badge}
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {data.title1}
            <span className="text-[#F5BD02] drop-shadow-[0_0_15px_rgba(245,189,2,0.4)]">{data.titleHighlight}</span>
            {data.title2}
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            {data.intro1}
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {data.intro2}
          </p>
        </div>

        {/* مسار الخطوات (Timeline) */}
        <div className="relative max-w-5xl mx-auto mb-24">
          
          {/* الخط المركزي المضيء */}
          <div className={`absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#F5BD02]/50 to-transparent ${locale === 'ar' ? 'right-8 md:right-1/2 md:translate-x-1/2' : 'left-8 md:left-1/2 md:-translate-x-1/2'}`}></div>

          <div className="flex flex-col gap-12 md:gap-20 relative">
            {data.steps.map((step: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${locale === 'ar' ? (isEven ? 'md:flex-row-reverse' : '') : (isEven ? '' : 'md:flex-row-reverse')}`}>
                  
                  {/* الدائرة المركزية (رقم الخطوة والأيقونة) */}
                  <div className={`absolute ${locale === 'ar' ? 'right-4 translate-x-1/2' : 'left-4 -translate-x-1/2'} md:relative md:right-auto md:left-auto md:translate-x-0 z-10 w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-[#050505] border-4 border-[#000] ring-2 ring-[#F5BD02]/50 flex items-center justify-center text-xl md:text-2xl shadow-[0_0_20px_rgba(245,189,2,0.3)]`}>
                    {icons[index]}
                  </div>

                  {/* مساحة فارغة للجانب الآخر في الشاشات الكبيرة */}
                  <div className="hidden md:block flex-1"></div>

                  {/* كارت المحتوى */}
                  <div className={`flex-1 w-full pl-20 pr-4 md:px-0 ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#F5BD02]/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(245,189,2,0.1)] group">
                      <span className="block text-[#F5BD02] font-black text-lg mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        Step 0{index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* قسم استراتيجية متكاملة (CTA النهائي) */}
        <div className="relative max-w-4xl mx-auto rounded-[2.5rem] p-[2px] bg-gradient-to-r from-[#F5BD02]/20 via-[#F5BD02] to-[#F5BD02]/20 shadow-[0_0_40px_rgba(245,189,2,0.2)]">
          <div className="rounded-[2.4rem] bg-[#000000] p-10 md:p-16 text-center relative overflow-hidden">
            
            {/* إضاءة داخلية */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F5BD02]/20 via-transparent to-transparent pointer-events-none"></div>

            <h3 className="relative z-10 text-2xl md:text-4xl font-black text-white mb-6">
              {data.ctaTag}
            </h3>
            
            <p className="relative z-10 text-gray-300 text-base md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              {data.ctaDesc}
            </p>

            <Link 
              href="/contact"
              className="relative z-10 inline-flex items-center justify-center px-10 py-5 text-lg font-black text-black bg-[#F5BD02] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(245,189,2,0.4)] hover:shadow-[0_0_40px_rgba(245,189,2,0.7)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-20"></span>
              <span className="relative flex items-center gap-3">
                {data.ctaBtn}
                <svg className={`w-6 h-6 transition-transform duration-300 ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}