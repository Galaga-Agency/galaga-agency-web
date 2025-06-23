"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import ContactHeroSection from "@/components/sections/contact-page/ContactHeroSection";
import ContactFormSection from "@/components/sections/contact-page/ContactFormSection";
import {
  initContactHeroAnimations,
  initContactFormAnimations,
} from "@/utils/animations/contact-animations";

export default function ContactPage() {
  useGSAPAnimations({
    animations: [
      initContactHeroAnimations,
      initContactFormAnimations
    ],
    delay: 100
  });

  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
    </>
  );
}