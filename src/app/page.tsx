import AboutSection from "@/sections/about-section";
import BlogsSections from "@/sections/blogs-section";
import ContactSection from "@/sections/contact-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import TechonologiesSection from "@/sections/technologies-section";

export default function Home() {
  return (
    <main className="section-wrapper">
      <HeroSection />
      <TechonologiesSection />
      <AboutSection />
      <ProjectsSection />
      <BlogsSections />
      <ContactSection />
    </main>
  );
}
