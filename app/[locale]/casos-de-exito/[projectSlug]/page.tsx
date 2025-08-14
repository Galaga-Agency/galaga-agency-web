"use client";

import { use } from "react";
import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";
import { useTranslation } from "@/hooks/useTranslation";
import { getCaseStudyBySlug } from "@/data/case-studies";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { initProyectoDetalleAnimations } from "@/utils/animations/project-details-animations";
import ProyectoDetalleHeroSection from "@/components/sections/project-details/ProyectoDetalleHeroSection";
import ProyectoDetalleContentSection from "@/components/sections/project-details/ProyectoDetalleContentSection";
import ProyectoDetalleResultsSection from "@/components/sections/project-details/ProyectoDetalleResultsSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initCTAAnimations } from "@/utils/animations/cta-animation";
import { getLocalizedRoute } from "@/utils/navigation";

interface ProyectoDetallePageProps {
  params: Promise<{
    projectSlug: string;
  }>;
}

export default function ProyectoDetallePage({
  params,
}: ProyectoDetallePageProps) {
  const { projectSlug } = use(params);
  const isAppReady = useAppReady();
  const { t, language } = useTranslation();

  useGSAP(() => {
    if (!isAppReady) return;

    const timer = setTimeout(() => {
      initProyectoDetalleAnimations();
      initCTAAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [isAppReady]);

  // Get case study data
  const caseStudy = getCaseStudyBySlug(projectSlug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-azul-profundo to-teal">
        <div className="text-center text-blanco">
          <h1 className="text-4xl font-black pb-4">{t("common.notFound")}</h1>
          <p className="text-hielo">{t("common.projectNotFound")}</p>
        </div>
      </div>
    );
  }

  // Breadcrumb navigation using project title from data
  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.cases"),
      href: getLocalizedRoute("casos-de-exito", language),
    },
    {
      name: t(caseStudy.titleKey),
      href: getLocalizedRoute(`casos-de-exito/${projectSlug}`, language),
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ProyectoDetalleHeroSection slug={projectSlug} />
      <ProyectoDetalleContentSection slug={projectSlug} />
      {/* <ProyectoDetalleResultsSection slug={projectSlug} /> */}
      <CTASection />
    </>
  );
}