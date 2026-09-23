"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function AboutSeoSection() {
  const [locale, setLocale] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const checkLang = () => {
      const currentDir = document.documentElement.dir;
      setLocale(currentDir === "ltr" ? "en" : "ar");
    };
    checkLang();
    const observer = new MutationObserver(checkLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  const t: any = locale === "ar" ? ar : en;

  return (
    <section className="relative w-full py-16 px-4 md:px-8 flex items-center justify-center bg-[#000000] overflow-hidden">
      
      {/* الكارد الرئيسي المخصص بخلفية شبكية وتوهج ذهبي */}
      <div className="relative w-full max-w-[92rem] rounded-3xl bg-[#0a0a0a] border border-[#F5BD02]/40 shadow-[0_0_80px_rgba(245,189,2,0.15)] p-8 md:p-14 overflow-hidden">
        
        {/* تأثير شبكة الخلفية (Grid Pattern) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5bd020a_1px,transparent_1px),linear-gradient(to_bottom,#f5bd020a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* الجانب الأيمن: النصوص والشارات والأزرار */}
          <div className={`w-full lg:w-[58%] flex flex-col ${locale === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
            
            {/* شارة العنوان */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-[#F5BD02]/60 text-[#F5BD02] text-sm md:text-base font-bold mb-6 shadow-[0_0_20px_rgba(245,189,2,0.3)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BD02] animate-pulse"></span>
              {t.AboutSeo.badge}
            </div>

            {/* الفقرة الأولى */}
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 font-normal">
              {t.AboutSeo.p1}
            </p>

            {/* الفقرة المميزة مع الخط العمودي الذهبي على الجانب الصحيح */}
            <div className={`flex items-start gap-4 p-4 rounded-xl bg-black/60 border border-[#F5BD02]/30 mb-8 ${locale === 'ar' ? 'border-r-4 border-r-[#F5BD02]' : 'border-l-4 border-l-[#F5BD02]'}`}>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium">
                {t.AboutSeo.highlight}
              </p>
            </div>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                title={t.AboutSeo.btnConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F5BD02] text-black font-bold text-base shadow-[0_0_25px_rgba(245,189,2,0.5)] hover:bg-yellow-400 hover:scale-105 transition-all text-center border border-[#F5BD02]"
              >
                {t.AboutSeo.btnConsultation}
              </Link>

              <Link
                href="/portfolio"
                title={t.AboutSeo.btnPortfolio}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/60 border-2 border-[#F5BD02]/60 text-[#F5BD02] font-bold text-base hover:bg-[#F5BD02]/20 hover:border-[#F5BD02] transition-all text-center backdrop-blur-md"
              >
                {t.AboutSeo.btnPortfolio}
              </Link>
            </div>

          </div>

          {/* الجانب الأيسر: عرض الصورة المطلوبة */}
          <div className="w-full lg:w-[38%] flex items-center justify-center">
            <div className="relative w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden border border-[#F5BD02]/40 bg-black/80 shadow-[0_0_30px_rgba(245,189,2,0.2)] group flex items-center justify-center">
              <Image
                src="/AboutSeoSection.webp"
                alt="About SEO Section"
                title="About SEO Section"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                priority
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}