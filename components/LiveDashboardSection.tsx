"use client";
import { useState, useEffect } from "react";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function LiveDashboardSection() {
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
  const data = t.LiveDashboard;

  if (!data) return null;

  // 1. الكونتنر الأول: سجلات ووردبريس وأدوات السيو (WordPress, Analytics, Search Console)
  const wpLogs = [
    `[INFO] WordPress Core updated to v6.6`,
    `[SUCCESS] Google Analytics (GA4) tag connected.`,
    `[SUCCESS] Google Search Console API verified.`,
    `[INFO] WP Rocket cache cleared. LCP: 1.2s`,
    `[CRON] Generating XML Sitemap... done.`,
    `[API] Screaming Frog crawler connected.`,
    `[SUCCESS] Yoast SEO Premium installed & indexing.`,
    `[INFO] Checking Canonical URLs... 100% matched.`,
    `[PERF] Smush Pro: 14 images compressed (saved 2.4MB)`,
    `[SEC] Wordfence: Scan complete. No vulnerabilities.`
  ];
  
  const infiniteLogs = [...wpLogs, ...wpLogs, ...wpLogs, ...wpLogs];

  // 2. الكونتنر الثاني: هيكل ملفات Next.js (App Router)
  const nextFiles = [
    { status: "Layout", color: "text-purple-400 bg-purple-400/10 border-purple-400/20", icon: "🧩", path: "app/layout.tsx", tag: "SEO Metadata", desc: "Global layout with optimized OpenGraph" },
    { status: "Page", color: "text-blue-400 bg-blue-400/10 border-blue-400/20", icon: "📄", path: "app/page.tsx", tag: "RSC", desc: "Server-Side Rendered home page" },
    { status: "API", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", icon: "⚡", path: "app/sitemap.ts", tag: "Dynamic", desc: "Auto-generating XML sitemap" },
    { status: "Config", color: "text-amber-400 bg-amber-400/10 border-amber-400/20", icon: "⚙️", path: "next.config.mjs", tag: "Core", desc: "Turbopack & Image optimization set" },
    { status: "i18n", color: "text-rose-400 bg-rose-400/10 border-rose-400/20", icon: "🌍", path: "messages/ar.json", tag: "Locale", desc: "Arabic language translations loaded" },
    { status: "Style", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20", icon: "🎨", path: "tailwind.config.ts", tag: "UI", desc: "Custom theme and glowing shadows" }
  ];

  const infiniteFiles = [...nextFiles, ...nextFiles, ...nextFiles, ...nextFiles];

  return (
    <section key={locale} className="relative w-full bg-[#000000] py-24 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* توهج خلفي خفيف */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#F5BD02]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* العنوان والمقدمة */}
        <div className={`mb-16 max-w-4xl ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 tracking-tight">
            {data.title1}
            <span className="font-bold text-[#F5BD02] drop-shadow-[0_0_20px_rgba(245,189,2,0.3)]">{data.titleHighlight}</span>
            {data.title2}
          </h2>
          <div className="space-y-4">
            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
              {data.desc1}
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
              {data.desc2}
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
              {data.desc3}
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
              {data.desc4}
            </p>
          </div>
        </div>

        {/* الكونتينرز (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-[600px]">
          
          {/* الكونتينر الأيسر: WordPress & SEO Tools Logs */}
          <div className="relative w-full h-full rounded-[2rem] bg-[#050505] border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col group">
            
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-[400px] rounded-2xl bg-[#111] border border-white/10 p-2 flex items-center justify-between shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3 px-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-[#F5BD02] bg-[#F5BD02]/10 border border-[#F5BD02]/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F5BD02] animate-pulse"></span>
                  Live
                </span>
                <span className="text-sm text-gray-200">wp-admin / SEO Tools <span className="text-gray-500 text-xs">▼</span></span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white text-xs font-medium transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                Sync
              </button>
            </div>

            <div className="relative flex-1 w-full overflow-hidden mask-image-y pt-24">
              <div className="absolute top-0 left-0 w-full animate-slide-down">
                <div className="flex flex-col gap-4 px-8 pb-3">
                  {infiniteLogs.map((log, index) => {
                    let coloredLog = log;
                    if(log.includes('[SUCCESS]')) coloredLog = log.replace('[SUCCESS]', '<span class="text-emerald-400">[SUCCESS]</span>');
                    if(log.includes('[INFO]')) coloredLog = log.replace('[INFO]', '<span class="text-blue-400">[INFO]</span>');
                    if(log.includes('[PERF]')) coloredLog = log.replace('[PERF]', '<span class="text-purple-400">[PERF]</span>');
                    if(log.includes('[API]')) coloredLog = log.replace('[API]', '<span class="text-amber-400">[API]</span>');
                    if(log.includes('[SEC]')) coloredLog = log.replace('[SEC]', '<span class="text-rose-400">[SEC]</span>');
                    if(log.includes('[CRON]')) coloredLog = log.replace('[CRON]', '<span class="text-gray-400">[CRON]</span>');

                    return (
                      <div 
                        key={index} 
                        className="font-mono text-[13px] md:text-sm text-gray-400 whitespace-nowrap opacity-90"
                        dangerouslySetInnerHTML={{ __html: coloredLog }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* الكونتينر الأيمن: Next.js File Structure */}
          <div className="relative w-full h-full rounded-[2rem] bg-[#050505] border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden mask-image-y">
            
            <div className={`absolute top-0 bottom-0 w-px bg-white/10 ${locale === 'ar' ? 'right-12' : 'left-12'}`}></div>

            <div className="absolute top-0 left-0 w-full animate-slide-down-slow">
              <div className="flex flex-col gap-10 py-10 px-6">
                {infiniteFiles.map((file, index) => (
                  <div key={index} className={`relative flex items-start gap-6 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                    
                    <div className={`relative z-10 w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-lg shadow-xl ${file.color.split(' ')[0]}`}>
                      {file.icon}
                    </div>

                    <div className={`flex flex-col gap-3 pt-1 ${locale === 'ar' ? 'text-right items-end' : 'text-left items-start'}`}>
                      
                      <div className={`flex items-center gap-4 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${file.color}`}>
                          {file.status}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          Next.js 14
                        </span>
                      </div>

                      <div className="text-sm text-gray-400 flex flex-wrap items-center gap-2 leading-loose">
                        <span>Path:</span>
                        <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-mono text-xs">{file.path}</span>
                      </div>

                      <div className="text-sm text-gray-400 flex flex-wrap items-center gap-2">
                        <span>{file.desc}</span>
                        <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200 flex items-center gap-1.5 text-xs">
                          {file.tag}
                        </span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .mask-image-y {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }

        @keyframes slideDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        
        .animate-slide-down {
          animation: slideDown 35s linear infinite;
        }

        .animate-slide-down-slow {
          animation: slideDown 45s linear infinite;
        }
      `}</style>

    </section>
  );
}