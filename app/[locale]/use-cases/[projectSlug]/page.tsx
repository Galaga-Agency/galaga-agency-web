"use client";

import { use } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { getCaseStudyBySlug } from "@/data/case-studies";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ProyectoDetalleHeroSection from "@/components/pages/project-details-pages/ProyectoDetalleHeroSection";
import ProyectoDetalleContentSection from "@/components/pages/project-details-pages/ProyectoDetalleContentSection";
import CTASection from "@/components/pages/homepage/CTASection";
import { getLocalizedRoute } from "@/utils/navigation";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { initAlternateBlocksAnimations } from "@/utils/animations/alternate-blocks-animations";

interface ProyectoDetallePageProps {
  params: Promise<{
    projectSlug: string;
  }>;
}

export default function ProyectoDetallePage({
  params,
}: ProyectoDetallePageProps) {
  const { projectSlug } = use(params);
  const { t, language } = useTranslation();

  // Get case study data
  const caseStudy = getCaseStudyBySlug(projectSlug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-azul-profundo to-teal">
        <div className="text-center text-blanco">
          <h1 className="text-4xl font-black pb-4">{t("project-details-page.common.notFound")}</h1>
          <p className="text-hielo">{t("project-details-page.common.projectNotFound")}</p>
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

      useGSAPAnimations({
        animations: [initEntranceAnimations, initAlternateBlocksAnimations],
        delay: 100,
      });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ProyectoDetalleHeroSection slug={projectSlug} />
      <ProyectoDetalleContentSection slug={projectSlug} />
      <CTASection />
    </>
  );
}
