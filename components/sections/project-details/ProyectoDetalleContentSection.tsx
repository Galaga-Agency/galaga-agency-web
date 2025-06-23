"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FiTarget, FiZap, FiCheckCircle } from "react-icons/fi";

interface ProyectoDetalleContentSectionProps {
  slug: string;
}

export default function ProyectoDetalleContentSection({ slug }: ProyectoDetalleContentSectionProps) {
  const { t } = useTranslation();

  // Mock content data
  const contentData = {
    challenge: "La empresa necesitaba modernizar completamente sus procesos internos, implementar un sistema CRM robusto y automatizar flujos de trabajo para mejorar la eficiencia operacional.",
    solution: "Desarrollamos una solución integral que incluye un CRM personalizado, sistema ERP integrado y herramientas de automatización que transformaron por completo la manera en que la empresa gestiona sus operaciones.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Sistema CRM con gestión avanzada de clientes",
      "ERP integrado para gestión de recursos",
      "Automatización de procesos repetitivos",
      "Dashboard de analíticas en tiempo real",
      "Integración con sistemas existentes",
      "Mobile-first responsive design"
    ]
  };

  return (
    <section className="proyecto-detalle-content-section section relative bg-gradient-to-br from-blanco to-hielo">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-turquesa/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Challenge Section */}
        <div className="proyecto-content-challenge pb-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-6 pb-8">
                <div className="p-5 bg-teal/20 rounded-2xl flex-shrink-0">
                  <FiTarget className="challenge-icon text-4xl lg:text-5xl text-teal" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-teal leading-tight">
                  {t("proyecto-detalle.challenge.title")}
                </h2>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-grafito leading-relaxed">
                {contentData.challenge}
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="proyecto-content-solution pb-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="hidden lg:block lg:order-1"></div>
            <div className="lg:order-2">
              <div className="flex items-center gap-6 pb-8">
                <div className="p-5 bg-mandarina/20 rounded-2xl flex-shrink-0">
                  <FiZap className="solution-icon text-4xl lg:text-5xl text-naranja-tostado" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-teal leading-tight">
                  {t("proyecto-detalle.solution.title")}
                </h2>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-grafito leading-relaxed">
                {contentData.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies & Features */}
        <div className="proyecto-content-details grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Technologies */}
          <div className="proyecto-technologies">
            <h3 className="text-2xl md:text-3xl font-bold text-teal pb-8">
              {t("proyecto-detalle.technologies.title")}
            </h3>
            <div className="flex flex-wrap gap-4">
              {contentData.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="proyecto-tech-tag bg-gradient-to-r from-teal to-turquesa text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="proyecto-features">
            <h3 className="text-2xl md:text-3xl font-bold text-teal pb-8">
              {t("proyecto-detalle.features.title")}
            </h3>
            <div className="space-y-4">
              {contentData.features.map((feature, index) => (
                <div 
                  key={index}
                  className="proyecto-feature-item flex items-start gap-4"
                >
                  <FiCheckCircle className="text-teal text-xl flex-shrink-0 mt-1" />
                  <span className="text-lg text-grafito leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}