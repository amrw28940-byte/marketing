"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function Footer() {
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
  const data = t.Footer;

  if (!data) return null;

  return (
    <footer key={locale} className="relative w-full bg-[#000000] pt-20 pb-10 px-4 md:px-8 border-t border-white/10 font-sans overflow-hidden">
      
      {/* توهج خلفي خفيف */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5BD02]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* الجزء العلوي: اللوجو، الوصف، معلومات الاتصال، وأيقونات السوشيال */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-white/10">
          
          {/* اسم الوكالة والوصف */}
          <div className="max-w-md">
            <h3 className="text-3xl font-black text-white tracking-wider mb-3">
              {data.agencyName} <span className="text-[#F5BD02]">.</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {data.agencyDesc}
            </p>
          </div>

          {/* أزرار الاتصال والسوشيال ميديا (نفس الستايل في الصورة المرجعية) */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* البريد الإلكتروني */}
            <a 
              href={`mailto:${data.email}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#F5BD02]/50 text-gray-300 hover:text-white text-sm transition-all shadow-lg"
            >
              <svg className="w-5 h-5 text-[#F5BD02]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>{data.email}</span>
            </a>

            {/* الهاتف */}
            <a 
              href={`tel:${data.phone}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#F5BD02]/50 text-gray-300 hover:text-white text-sm transition-all shadow-lg font-mono"
            >
              <svg className="w-5 h-5 text-[#F5BD02]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>{data.phone}</span>
            </a>

            {/* أيقونات السوشيال ميديا */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#F5BD02] hover:bg-[#F5BD02]/10 text-gray-300 hover:text-[#F5BD02] flex items-center justify-center transition-all shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#F5BD02] hover:bg-[#F5BD02]/10 text-gray-300 hover:text-[#F5BD02] flex items-center justify-center transition-all shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#F5BD02] hover:bg-[#F5BD02]/10 text-gray-300 hover:text-[#F5BD02] flex items-center justify-center transition-all shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>

          </div>

        </div>

        {/* الجزء السفلي: الروابط السريعة وخدماتنا على هيئة مستطيلات بارزة (نفس تصميم الصورة المرجعية) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16">
          
          {/* عمود الروابط السريعة */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              {data.quickLinksTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/" className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#F5BD02] hover:bg-[#F5BD02]/5 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.aboutUs}
              </Link>
              <Link href="/" className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#F5BD02] hover:bg-[#F5BD02]/5 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.services}
              </Link>
              <Link href="/" className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#F5BD02] hover:bg-[#F5BD02]/5 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.portfolio}
              </Link>
              <Link href="/contact" className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#F5BD02] hover:bg-[#F5BD02]/5 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.contactUs}
              </Link>
            </div>
          </div>

          {/* عمود خدماتنا */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              {data.servicesTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.seoService}
              </div>
              <div className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.webDesign}
              </div>
              <div className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.socialMedia}
              </div>
              <div className="px-6 py-4 rounded-2xl bg-[#0a0a0a] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.marketing}
              </div>
            </div>
          </div>

        </div>

        {/* حقوق النشر */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          {data.rights}
        </div>

      </div>
    </footer>
  );
}