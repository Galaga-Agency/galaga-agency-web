"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ContactHeroSection from "@/components/pages/contact-page/ContactHeroSection";
import ContactFormSection from "@/components/pages/contact-page/ContactFormSection";
import { getLocalizedRoute } from "@/utils/navigation";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { init3DCardAnimations } from "@/utils/animations/3D-card-animations";
import { finishPageTransition } from "@/utils/animations/page-transition-animation";

export default function ContactPage() {
  const { t, language } = useTranslation();

  // Breadcrumb navigation
  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.contact"),
      href: getLocalizedRoute("contact", language),
    },
  ];

  useGSAPAnimations({
    animations: [
      initEntranceAnimations,
      init3DCardAnimations,
      finishPageTransition],
    delay: 100,
  });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ContactHeroSection />
      <ContactFormSection />
    </>
  );
}
