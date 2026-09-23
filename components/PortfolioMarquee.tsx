"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function PortfolioMarquee() {
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

  const projects = [
    { name: "Ahmed Abdul Rahman", image: "/ahmed-abdul-rahman.webp", url: "https://ahmed-abdul-rahman.vercel.app/" },
    { name: "Almustaemal", image: "/almustaemal.webp", url: "https://almustaemal.com/" },
    { name: "Elbadrelakarya", image: "/elbadrelakarya.webp", url: "https://elbadrelakarya.org/" },
    { name: "Fastmove", image: "/fastmovekw.webp", url: "https://fastmovekw.com/" },
    { name: "Gold Shield", image: "/goldshield.webp", url: "https://goldshield-sa.com/" },
    { name: "Haflorry", image: "/haflorry.webp", url: "https://haflorry.com/" },
    { name: "Kemet AI", image: "/kemet.webp", url: "https://kemet-ai-kappa.vercel.app/es" },
    { name: "Mdadak", image: "/mdadak.webp", url: "https://mdadak.com/" },
    { name: "MK Furniture", image: "/mkfurniture.webp", url: "https://mkfurniture.org/" },
    { name: "Pest Control", image: "/pest-control.webp", url: "https://pest-control-sa.vercel.app/" },
    { name: "Quraaany", image: "/quraaany.webp", url: "https://quraaany.com/en" },
    { name: "Rahal", image: "/rahalar.webp", url: "https://rahalar.com/" },
    { name: "Taatim", image: "/taatim.webp", url: "https://taatim.com/" },
    { name: "The Light House", image: "/the-light-house.webp", url: "https://the-light-house-6zaf.vercel.app/en" },
  ];

  return (
    <section className="relative w-full py-20 bg-[#000000] overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-[#F5BD02]/60 text-[#F5BD02] text-sm font-bold mb-6 shadow-[0_0_20px_rgba(245,189,2,0.3)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5BD02] animate-pulse"></span>
          {t.PortfolioSection.subtitle}
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          {t.PortfolioSection.title}
        </h2>

        <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-4xl mx-auto">
          {t.PortfolioSection.description}
        </p>

        <div className="w-32 h-1 bg-[#F5BD02] mx-auto rounded-full shadow-[0_0_15px_#F5BD02] mb-6"></div>

        <h3 className="text-xl md:text-2xl font-bold text-[#F5BD02]">
          {t.PortfolioSection.sectionTitle}
        </h3>
      </div>

      <div className="relative w-full overflow-hidden py-6">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* 3 kārts lā repeat karun seamless loop banāvalā āhe */}
        <div className={`flex w-max gap-8 hover:[animation-play-state:paused] ${locale === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
          {[...projects, ...projects, ...projects].map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-80 h-52 rounded-2xl bg-[#0a0a0a] border border-[#F5BD02]/50 shadow-[0_0_25px_rgba(245,189,2,0.2)] hover:shadow-[0_0_40px_rgba(245,189,2,0.6)] hover:border-[#F5BD02] transition-all duration-300 overflow-hidden group flex flex-col items-center justify-between p-4 flex-shrink-0"
            >
              <div className="relative w-full h-36 rounded-xl overflow-hidden bg-black/50">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="w-full flex items-center justify-between mt-3 px-1">
                <span className="text-white font-bold text-sm truncate">{project.name}</span>
                <span className="text-xs text-[#F5BD02] font-semibold underline group-hover:text-yellow-300 transition">
                  {t.PortfolioSection.visitProject} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 1.06rem)); }
        }
        @keyframes marqueeRtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(33.333% + 1.06rem)); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marqueeRtl 35s linear infinite;
        }
      `}</style>

    </section>
  );
}