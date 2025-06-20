"use client";

import { useGSAP } from "@gsap/react";
import Footer from "@/components/layout/Footer";
import ContactHeroSection from "@/components/sections/contact-page/ContactHeroSection";
import ContactFormSection from "@/components/sections/contact-page/ContactFormSection";
import { initContactHeroAnimations, initContactFormAnimations } from "@/utils/contact-animations";

export default function ContactPage() {
  useGSAP(() => {
    const timer = setTimeout(() => {
      initContactHeroAnimations();
      initContactFormAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="w-full">
        <ContactHeroSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}