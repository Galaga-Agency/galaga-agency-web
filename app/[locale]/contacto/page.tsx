"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ContactHeroSection from "@/components/pages/contact-page/ContactHeroSection";
import ContactFormSection from "@/components/pages/contact-page/ContactFormSection";
import { getLocalizedRoute } from "@/utils/navigation";

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
