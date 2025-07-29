import AboutSection from "@/sections/about-section";
import HeroSection from "@/sections/hero-section";
import TechonologiesSection from "@/sections/technologies-section";

export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <HeroSection />
      <TechonologiesSection />
      <AboutSection />
    </main>
  );
}
