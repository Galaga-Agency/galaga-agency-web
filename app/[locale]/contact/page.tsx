"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ContactHeroSection from "@/components/sections/contact-page/ContactHeroSection";
import ContactFormSection from "@/components/sections/contact-page/ContactFormSection";
import {
  initContactHeroAnimations,
  initContactFormAnimations,
} from "@/utils/animations/contact-animations";
import { getLocalizedRoute } from "@/utils/navigation";

export default function ContactPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [initContactHeroAnimations, initContactFormAnimations],
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
