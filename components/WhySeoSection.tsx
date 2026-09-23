"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function WhySeoSection() {
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
  const data = t.WhySeo;

  if (!data || !data.cards) return null;

  // أيقونات مميزة لكل كارت بالترتيب
  const icons = ["🚀", "📈", "🤝", "🎯", "💻", "💰"];

  return (
    <section key={locale} className="relative w-full bg-[#000000] py-24 px-4 md:px-8 overflow-hidden">
      
      {/* توهج خلفي ناعم للقسم بأكمله */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F5BD02]/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* عنوان ومقدمة القسم */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-[#F5BD02]/60 text-[#F5BD02] text-sm font-bold mb-6 shadow-[0_0_20px_rgba(245,189,2,0.3)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5BD02] animate-pulse"></span>
          {data.badge}
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          {data.title1} <span className="text-[#F5BD02] drop-shadow-[0_0_15px_rgba(245,189,2,0.5)]">{data.titleHighlight}</span>{data.title2}
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          {data.intro}
        </p>
      </div>

      {/* شبكة الكروت المتجاورة (Grid) */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {data.cards.map((card: any, index: number) => (
          <div 
            key={card.id}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#0f0f0f] to-[#000000] border border-[#F5BD02]/20 hover:border-[#F5BD02]/80 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_15px_rgba(245,189,2,0.05)] hover:shadow-[0_0_40px_rgba(245,189,2,0.3)] overflow-hidden flex flex-col h-full"
          >
            {/* إضاءة داخلية تظهر عند التمرير (Hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5BD02]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* الأيقونة ورقم الكارت */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-black border border-[#F5BD02]/30 flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(245,189,2,0.2)] group-hover:scale-110 group-hover:border-[#F5BD02] transition-all duration-500">
                  {icons[index]}
                </div>
                <span className="text-5xl font-black text-white/[0.04] group-hover:text-[#F5BD02]/10 transition-colors duration-500">
                  0{card.id}
                </span>
              </div>

              {/* نصوص الكارت */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#F5BD02] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* قسم الـ Call To Action الختامي (بتصميم فخم وتوهج) */}
      <div className="relative z-10 max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-transparent via-[#F5BD02]/50 to-transparent shadow-[0_0_60px_rgba(245,189,2,0.15)] hover:shadow-[0_0_80px_rgba(245,189,2,0.3)] transition-all duration-500">
        <div className="rounded-[23px] bg-[#050505] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          
          {/* خلفية شبكية خفيفة للـ CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5bd0205_1px,transparent_1px),linear-gradient(to_bottom,#f5bd0205_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

          <div className={`relative z-10 flex-1 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
              {data.ctaTitle}
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
              {data.ctaDesc}
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link 
              href="/contact"
              title={data.ctaBtn}
              className="group relative flex items-center justify-center gap-3 w-full md:w-auto px-8 py-5 rounded-2xl bg-[#F5BD02] text-black font-black text-lg shadow-[0_0_25px_rgba(245,189,2,0.4)] hover:shadow-[0_0_50px_rgba(245,189,2,0.8)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* لمعة تتحرك داخل الزر */}
              <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-45deg] group-hover:animate-shine"></span>
              <span>{data.ctaBtn}</span>
              <span className={`transition-transform duration-300 ${locale === 'ar' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}>
                {locale === 'ar' ? '←' : '→'}
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* Animation للزر */}
      <style jsx global>{`
        @keyframes shine {
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}</style>

    </section>
  );
}