"use client";

import { use } from "react";
import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";
import { initProyectoDetalleAnimations } from "@/utils/animations/project-details-animations";
import ProyectoDetalleHeroSection from "@/components/sections/project-details/ProyectoDetalleHeroSection";
import ProyectoDetalleContentSection from "@/components/sections/project-details/ProyectoDetalleContentSection";
import ProyectoDetalleGallerySection from "@/components/sections/project-details/ProyectoDetalleGallerySection";
import ProyectoDetalleResultsSection from "@/components/sections/project-details/ProyectoDetalleResultsSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initCTAAnimations } from "@/utils/animations/homepage-cta-animation";

interface ProyectoDetallePageProps {
  params: Promise<{
    projectSlug: string; 
  }>;
}

export default function ProyectoDetallePage({ params }: ProyectoDetallePageProps) {
  const { projectSlug } = use(params); 
  const isAppReady = useAppReady();

  useGSAP(() => {
    if (!isAppReady) return;

    const timer = setTimeout(() => {
      initProyectoDetalleAnimations();
      initCTAAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [isAppReady]);

  return (
    <>
      <ProyectoDetalleHeroSection slug={projectSlug} />
      <ProyectoDetalleContentSection slug={projectSlug} />
      {/* <ProyectoDetalleGallerySection slug={projectSlug} /> */}
      <ProyectoDetalleResultsSection slug={projectSlug} />
      <CTASection />
    </>
  );
}