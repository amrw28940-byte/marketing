import HeroSection from "@/components/Hero";
import AboutSeoSection from "@/components/AboutSeoSection";
import PortfolioMarquee from "@/components/PortfolioMarquee";
import SeoStrategiesSection from "@/components/SeoStrategiesSection";
import WhySeoSection from "@/components/WhySeoSection";
import LiveDashboardSection from "@/components/LiveDashboardSection";




export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSeoSection />
      <PortfolioMarquee />
      <SeoStrategiesSection />
      <WhySeoSection />
      <LiveDashboardSection />
    </main>
  );
}