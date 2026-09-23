"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // حالة اللغة (افتراضياً العربية 'ar')
  const [locale, setLocale] = useState<"ar" | "en">("ar");

  // اختيار ملف الترجمة مع تحديد النوع كـ any لمنع أي خطأ في محرر الكود
  const t: any = locale === "ar" ? ar : en;

  // تغيير اتجاه الصفحة (dir) ولغة الـ HTML عند تبديل اللغة
  const toggleLanguage = () => {
    const newLang = locale === "ar" ? "en" : "ar";
    setLocale(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // قائمة الخدمات الاحترافية مع دعم الترجمة للـ Slugs
  const servicesList = [
    { name: locale === "ar" ? "تحسين محركات البحث (SEO)" : "Search Engine Optimization (SEO)", slug: "seo" },
    { name: locale === "ar" ? "بناء الروابط الخلفية (Backlinks)" : "Backlinks Building", slug: "backlinks" },
    { name: locale === "ar" ? "تصميم وتطوير المواقع (WordPress & Next.js)" : "Web Design & Development", slug: "wordpress-nextjs" },
    { name: locale === "ar" ? "إنشاء المتاجر الإلكترونية" : "E-commerce Stores", slug: "e-commerce" },
    { name: locale === "ar" ? "تطوير تطبيقات الجوال (Android)" : "Mobile Apps Development", slug: "android" },
    { name: locale === "ar" ? "كتابة المحتوى التسويقي" : "Marketing Content Writing", slug: "content-writing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/95 border-b border-[#F5BD02]/40 backdrop-blur-md shadow-[0_4px_30px_rgba(245,189,2,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* اليسار: الأيقونات (همبرجر، لغة، سوشيال، اتصل بنا، بحث) */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* زر الهمبرجر */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isSearchOpen) setIsSearchOpen(false);
            }}
            aria-label="فتح القائمة الرئيسية"
            className="p-2 rounded-xl bg-[#000000] border border-[#F5BD02]/50 text-[#F5BD02] hover:bg-[#F5BD02]/10 transition flex items-center justify-center shadow-[0_0_10px_rgba(245,189,2,0.2)]"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* أيقونات السوشيال ميديا الفاخرة (تظهر على الشاشات المتوسطة والكبيرة) */}
          <div className="hidden lg:flex items-center gap-2 px-2 border-x border-[#F5BD02]/20">
            {/* فيسبوك */}
            <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" title="Facebook - Unique Agency" 
               className="w-9 h-9 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02] hover:bg-[#F5BD02] hover:text-black hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(245,189,2,0.2)] hover:shadow-[0_0_20px_rgba(245,189,2,0.6)]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            {/* لينكد إن */}
            <a href="http://linkedin.com/in/ghada-salem-51b146153" target="_blank" rel="noopener noreferrer" title="LinkedIn" 
               className="w-9 h-9 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02] hover:bg-[#F5BD02] hover:text-black hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(245,189,2,0.2)] hover:shadow-[0_0_20px_rgba(245,189,2,0.6)]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* يوتيوب */}
            <a href="https://www.youtube.com/@alwaleedhost3388" target="_blank" rel="noopener noreferrer" title="YouTube Channel" 
               className="w-9 h-9 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02] hover:bg-[#F5BD02] hover:text-black hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(245,189,2,0.2)] hover:shadow-[0_0_20px_rgba(245,189,2,0.6)]">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"></path><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
            </a>
            {/* واتساب */}
            <a href="https://wa.me/201270506511" target="_blank" rel="noopener noreferrer" title="WhatsApp Contact" 
               className="w-9 h-9 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02] hover:bg-[#F5BD02] hover:text-black hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(245,189,2,0.2)] hover:shadow-[0_0_20px_rgba(245,189,2,0.6)]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>

          {/* زر تبديل اللغة */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-xl bg-[#000000] border border-[#F5BD02]/50 text-[#F5BD02] text-xs font-bold hover:bg-[#F5BD02]/20 transition flex items-center gap-1.5 shadow-[0_0_10px_rgba(245,189,2,0.2)]"
            title="تغيير اللغة / Change Language"
          >
            <span className="w-2 h-2 rounded-full bg-[#F5BD02] animate-pulse"></span>
            <span>{locale === "ar" ? "English" : "عربي"}</span>
          </button>

          {/* زر "اتصل بنا" السريع */}
          <Link
            href="/contact"
            title={t.Navbar.contactUs}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#000000] border border-[#F5BD02]/50 text-[#F5BD02] text-sm font-semibold hover:bg-[#F5BD02]/20 transition shadow-[0_0_15px_rgba(245,189,2,0.2)]"
          >
            <span className="text-[#F5BD02]">{locale === "ar" ? "←" : "→"}</span>
            <span>{t.Navbar.contactUs}</span>
          </Link>

          {/* زر البحث */}
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isMenuOpen) setIsMenuOpen(false);
            }}
            aria-label="بحث في الموقع"
            title="البحث"
            className="p-2 rounded-xl bg-[#000000] border border-[#F5BD02]/50 text-[#F5BD02] hover:bg-[#F5BD02]/10 transition flex items-center justify-center shadow-[0_0_10px_rgba(245,189,2,0.2)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

        </div>

        {/* اليمين: اللوجو المُكبّر مع التوهج الناعم */}
        <Link href="/" title={t.Navbar.agencyName} className="flex items-center gap-3 group">
          <div className="text-right hidden sm:block">
            <span className="block text-xs text-[#F5BD02] font-bold tracking-widest">{t.Navbar.agencyName}</span>
            <span className="block text-[10px] text-gray-300">{t.Navbar.agencySub}</span>
          </div>
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-[#000000] flex items-center justify-center shadow-[0_0_30px_rgba(245,189,2,0.8)] group-hover:shadow-[0_0_45px_rgba(245,189,2,1)] transition duration-300">
            <Image
              src="/logo.webp"
              alt="Unique Agency Logo"
              title="Unique Agency Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

      </div>

      {/* 1. قائمة البحث المنسدلة */}
      {isSearchOpen && (
        <div className="bg-[#000000]/98 border-b border-[#F5BD02]/40 px-4 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.Navbar.searchPlaceholder}
              title={t.Navbar.searchPlaceholder}
              className="w-full px-5 py-3 rounded-xl bg-[#000000] border border-[#F5BD02]/50 text-white placeholder-gray-400 focus:outline-none focus:border-[#F5BD02] shadow-inner text-sm"
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              title={t.Navbar.cancel}
              className="px-6 py-3 rounded-xl bg-[#F5BD02] text-black font-bold text-sm hover:bg-yellow-400 transition shadow-[0_0_20px_rgba(245,189,2,0.5)]"
            >
              {t.Navbar.cancel}
            </button>
          </div>
        </div>
      )}

      {/* 2. القائمة المنسدلة الكاملة (همبرجر) */}
      {isMenuOpen && (
        <div className="bg-[#000000]/98 border-b border-[#F5BD02]/50 py-8 px-6 shadow-2xl transition-all animate-fadeIn">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* خدماتنا الاحترافية */}
            <div>
              <h3 className="text-[#F5BD02] font-bold text-lg mb-4 border-b border-[#F5BD02]/30 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5BD02]"></span>
                {t.Navbar.servicesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesList.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    title={service.name}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-xl bg-[#000000] border border-[#F5BD02]/30 text-gray-200 hover:text-[#F5BD02] hover:border-[#F5BD02] transition flex items-center justify-between group shadow-sm"
                  >
                    <span className="text-sm font-medium">{service.name}</span>
                    <span className="text-[#F5BD02] group-hover:-translate-x-1 transition">{locale === "ar" ? "←" : "→"}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* القائمة الرئيسية */}
            <div className="lg:border-r lg:border-[#F5BD02]/30 lg:pr-8">
              <h3 className="text-[#F5BD02] font-bold text-lg mb-4 border-b border-[#F5BD02]/30 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5BD02]"></span>
                {t.Navbar.mainMenu}
              </h3>
              <ul className="space-y-3 font-semibold">
                <li>
                  <Link href="/" title={t.Navbar.home} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-200 hover:text-[#F5BD02] transition py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5BD02]"></span>
                    {t.Navbar.home}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" title={t.Navbar.portfolio} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-200 hover:text-[#F5BD02] transition py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5BD02]"></span>
                    {t.Navbar.portfolio}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" title={t.Navbar.projects} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-200 hover:text-[#F5BD02] transition py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5BD02]"></span>
                    {t.Navbar.projects}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" title={t.Navbar.blog} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-200 hover:text-[#F5BD02] transition py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5BD02]"></span>
                    {t.Navbar.blog}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" title={t.Navbar.contactUs} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-200 hover:text-[#F5BD02] transition py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5BD02]"></span>
                    {t.Navbar.contactUs}
                  </Link>
                </li>
                <li>
                  <Link href="/about" title={t.Navbar.about} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-200 hover:text-[#F5BD02] transition py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5BD02]"></span>
                    {t.Navbar.about}
                  </Link>
                </li>
              </ul>
              
              {/* أيقونات السوشيال ميديا للموبايل داخل القائمة */}
              <div className="mt-8 flex lg:hidden items-center gap-3">
                <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" title="Facebook - Unique Agency" className="w-10 h-10 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="http://linkedin.com/in/ghada-salem-51b146153" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-10 h-10 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.youtube.com/@alwaleedhost3388" target="_blank" rel="noopener noreferrer" title="YouTube Channel" className="w-10 h-10 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"></path><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
                </a>
                <a href="https://wa.me/201270506511" target="_blank" rel="noopener noreferrer" title="WhatsApp Contact" className="w-10 h-10 rounded-full bg-black border border-[#F5BD02]/50 flex items-center justify-center text-[#F5BD02]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </header>
  );
}