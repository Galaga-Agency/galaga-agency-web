"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiTag, FiExternalLink } from "react-icons/fi";
import { getCaseStudyBySlug } from "@/data/case-studies";

interface ProyectoDetalleHeroSectionProps {
  slug: string;
}

export default function ProyectoDetalleHeroSection({ slug }: ProyectoDetalleHeroSectionProps) {
  const { t } = useTranslation();
  
  // Get the actual case study data
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return (
      <section className="proyecto-detalle-hero-section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
        <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-blanco">
              Case Study Not Found
            </h1>
            <Link href="/casos-de-exito" className="text-turquesa hover:text-hielo">
              ← Back to Case Studies
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="proyecto-detalle-hero-section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="proyecto-hero-bg-element-1 absolute top-1/4 left-1/3 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl"></div>
        <div className="proyecto-hero-bg-element-2 absolute bottom-1/3 right-1/4 w-80 h-80 bg-mandarina/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Breadcrumb */}
        <div className="proyecto-detalle-breadcrumb pb-8">
          <Link 
            href="/casos-de-exito" 
            className="inline-flex items-center gap-3 text-hielo/80 hover:text-blanco transition-colors duration-300"
          >
            <FiArrowLeft className="text-lg" />
            <span className="font-medium">{t("proyecto-detalle.back-to-projects")}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="proyecto-detalle-content">
            {/* Category badge */}
            <div className="proyecto-detalle-category inline-flex items-center gap-2 bg-teal/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FiTag className="text-turquesa text-sm" />
              <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
                {t(caseStudy.categoryKey)}
              </span>
            </div>

            {/* Title */}
            <h1 className="proyecto-detalle-title text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
              {t(caseStudy.titleKey)}
            </h1>

            {/* Challenge excerpt as subtitle */}
            <p className="proyecto-detalle-subtitle text-xl md:text-2xl text-hielo/90 font-light leading-relaxed pb-8">
              {t(caseStudy.challengeKey).substring(0, 150)}...
            </p>

            {/* Metrics */}
            <div className="proyecto-detalle-metrics grid grid-cols-2 gap-6 pb-8">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="proyecto-metric-item text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl md:text-4xl font-black text-turquesa pb-2">
                    {metric.value}
                  </div>
                  <div className="text-hielo/80 text-sm font-medium uppercase tracking-wider">
                    {t(metric.labelKey)}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button to full case study content */}
            <div className="proyecto-detalle-cta">
              <button
                onClick={() => {
                  const contentSection = document.querySelector('.proyecto-detalle-content-section');
                  contentSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal to-turquesa text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <span>Ver caso completo</span>
                <FiExternalLink className="text-lg" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="proyecto-detalle-image relative">
            <div className="proyecto-image-glow absolute inset-0 bg-gradient-to-br from-teal/30 to-turquesa/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10">
              <Image
                src={caseStudy.image}
                alt={t(caseStudy.titleKey)}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}