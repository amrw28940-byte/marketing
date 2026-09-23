"use client";
import { useState, useEffect } from "react";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function SeoTasksSection() {
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
  const data = t.SeoTasks;

  // في حال لم يتم حفظ نصوص SeoTasks في ملفات JSON بعد، سيظهر هذا التنبيه بدلاً من تعطل الموقع
  if (!data || !data.tasks) {
    return (
      <div className="py-20 text-center text-[#F5BD02] font-bold bg-black w-full min-h-[50vh] flex items-center justify-center">
        جاري تحميل الترجمة... (تأكد من إضافة نصوص SeoTasks في ملفي ar.json و en.json)
      </div>
    );
  }

  // تعريف الأيقونات بالترتيب
  const taskIcons = ["🔑", "📝", "⚙️", "🎯", "💡", "🧩", "🖼️", "🔗", "🕸️"];

  return (
    <section className="relative w-full bg-[#000000] py-24 px-4 md:px-8">
      
      {/* مقدمة القسم */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-[#F5BD02]/60 text-[#F5BD02] text-sm font-bold mb-6 shadow-[0_0_20px_rgba(245,189,2,0.3)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5BD02] animate-pulse"></span>
          {data.subtitle}
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
          {data.title1} <span className="text-[#F5BD02]">{data.titleHighlight}</span>{data.title2}
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {data.desc1}
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {data.desc2}
        </p>
      </div>

      {/* الكروت المتراكمة (Sticky Stacking Cards) */}
      <div className="max-w-5xl mx-auto relative pb-32">
        {data.tasks.map((task: any, index: number) => (
          <div
            key={task.id}
            className="sticky top-[100px] w-full min-h-[60vh] md:min-h-[50vh] flex flex-col justify-center rounded-3xl bg-[#0a0a0a] border-t-2 border-[#F5BD02] shadow-[0_-20px_40px_rgba(0,0,0,0.9)] overflow-hidden mb-12 transform transition-all duration-500 hover:scale-[1.01]"
            style={{ zIndex: index + 1 }}
          >
            {/* تأثير الإضاءة الخلفية للكارت */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F5BD02]/10 via-transparent to-transparent pointer-events-none"></div>
            
            {/* رقم الكارت الشفاف الكبير في الخلفية */}
            <div className={`absolute bottom-[-10%] ${locale === 'ar' ? 'left-[-5%]' : 'right-[-5%]'} text-[180px] md:text-[250px] font-black text-white/[0.02] pointer-events-none leading-none select-none`}>
              {task.id}
            </div>

            <div className={`relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-16 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
              
              {/* الأيقونة */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl bg-black border border-[#F5BD02]/40 flex items-center justify-center text-5xl md:text-6xl shadow-[0_0_30px_rgba(245,189,2,0.15)]">
                {taskIcons[index]}
              </div>

              {/* نصوص الكارت */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-black text-[#F5BD02]">{task.id}</span>
                  <div className={`w-12 h-[2px] bg-[#F5BD02]/50 ${locale === 'ar' ? '' : 'rotate-180'}`}></div>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                  {task.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed md:leading-loose">
                  {task.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* خاتمة القسم */}
      <div className="max-w-4xl mx-auto text-center mt-8 p-8 md:p-12 rounded-3xl bg-black/60 border border-[#F5BD02]/20 shadow-[0_0_50px_rgba(245,189,2,0.05)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5BD02]/5 pointer-events-none"></div>
        <p className="relative z-10 text-gray-200 text-base md:text-xl leading-relaxed font-medium">
          {data.conclusion1}<span className="text-[#F5BD02] font-bold">{data.conclusionHighlight}</span>{data.conclusion2}
          <br /><br />
          {data.conclusion3}
        </p>
      </div>

    </section>
  );
}