"use client";

import { use } from "react";
import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { initProyectoDetalleAnimations } from "@/utils/animations/project-details-animations";
import ProyectoDetalleHeroSection from "@/components/sections/project-details/ProyectoDetalleHeroSection";
import ProyectoDetalleContentSection from "@/components/sections/project-details/ProyectoDetalleContentSection";
import ProyectoDetalleGallerySection from "@/components/sections/project-details/ProyectoDetalleGallerySection";
import ProyectoDetalleResultsSection from "@/components/sections/project-details/ProyectoDetalleResultsSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initCTAAnimations } from "@/utils/animations/homepage-cta-animation";
import { getLocalizedRoute } from "@/utils/navigation";

interface ProyectoDetallePageProps {
  params: Promise<{
    projectSlug: string;
  }>;
}

// Helper function to get project title from slug
function getProjectTitle(slug: string, t: (key: string) => string): string {
  const projectTitles: { [key: string]: string } = {
    "dos-x-dos": "Dos x Dos Grupo Imagen",
    "energia-solar": "Energía Solar Canarias",
    toyota: "Toyota Canarias",
    "canarias-game-show": "Canarias Game Show",
    "alisios-live": "Alisios Live Gaming",
  };

  return projectTitles[slug] || slug;
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

  // Get project title for breadcrumbs
  const projectTitle = getProjectTitle(projectSlug, t);

  // Breadcrumb navigation
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
      name: projectTitle,
      href: getLocalizedRoute(`casos-de-exito/${projectSlug}`, language),
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ProyectoDetalleHeroSection slug={projectSlug} />
      <ProyectoDetalleContentSection slug={projectSlug} />
      {/* <ProyectoDetalleGallerySection slug={projectSlug} /> */}
      <ProyectoDetalleResultsSection slug={projectSlug} />
      <CTASection />
    </>
  );
}
