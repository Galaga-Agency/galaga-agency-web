"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ContactHeroSection from "@/components/sections/contact-page/ContactHeroSection";
import ContactFormSection from "@/components/sections/contact-page/ContactFormSection";
import { getLocalizedRoute } from "@/utils/navigation";
import { initContactFormAnimations } from "@/utils/animations/contact-form-animations";
import { initHeroAnimations } from "@/utils/animations/hero-animations";

export default function ContactPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [initHeroAnimations, initContactFormAnimations],
    delay: 100,
  });

  // Breadcrumb navigation
  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.contact"),
      href: getLocalizedRoute("contacto", language),
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ContactHeroSection />
      <ContactFormSection />
    </>
  );
}
