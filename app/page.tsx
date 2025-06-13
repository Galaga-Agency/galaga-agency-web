import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/homepage/AboutSection";
import CTASection from "@/components/sections/homepage/CTASection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import ServicesSection from "@/components/sections/homepage/ServicesSection";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full text-center px-auto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
