"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { getLocalizedRoute } from "@/utils/navigation";

interface ServiceCTASectionProps {
  serviceKey: string;
}

export default function ServiceCTASection({ serviceKey }: ServiceCTASectionProps) {
  const { t, language } = useTranslation();

  // Service-specific theme mappings
  const serviceThemes = {
    "marketing-inmersivo": {
      gradient: "from-violeta via-lavanda to-azul-profundo",
      primary: "from-violeta to-lavanda hover:from-lavanda hover:to-violeta",
      secondary: "border-lavanda text-lavanda hover:bg-lavanda hover:text-azul-profundo"
    },
    "consultoria-estrategica": {
      gradient: "from-teal via-turquesa to-azul-profundo", 
      primary: "from-teal to-turquesa hover:from-turquesa hover:to-teal",
      secondary: "border-turquesa text-turquesa hover:bg-turquesa hover:text-azul-profundo"
    },
    "automatizacion": {
      gradient: "from-azul-profundo via-negro to-azul-profundo",
      primary: "from-azul-profundo to-negro hover:from-negro hover:to-azul-profundo", 
      secondary: "border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-azul-profundo"
    },
    "innovacion-tecnologica": {
      gradient: "from-mandarina via-naranja-tostado to-azul-profundo",
      primary: "from-mandarina to-naranja-tostado hover:from-naranja-tostado hover:to-mandarina",
      secondary: "border-mandarina text-mandarina hover:bg-mandarina hover:text-blanco"
    },
    "formacion-soporte": {
      gradient: "from-azul-profundo via-negro to-azul-profundo",
      primary: "from-azul-profundo to-negro hover:from-negro hover:to-azul-profundo",
      secondary: "border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-azul-profundo"  
    },
    "gestion-subvenciones": {
      gradient: "from-teal via-azul-profundo to-negro",
      primary: "from-teal to-azul-profundo hover:from-azul-profundo hover:to-teal",
      secondary: "border-teal text-teal hover:bg-teal hover:text-blanco"
    }
  };

  const theme = serviceThemes[serviceKey as keyof typeof serviceThemes] || serviceThemes["marketing-inmersivo"];

  return (
    <section className={`service-cta-section section bg-gradient-to-br ${theme.gradient} relative overflow-hidden`}>
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-32 h-32 bg-blanco/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-24 right-20 w-40 h-40 bg-blanco/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blanco/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      <div className="container relative z-10">
        
        {/* Main CTA Content */}
        <div className="text-center">
          
          {/* Header */}
          <div className="pb-12 md:pb-16">
            <h2 className="service-cta-title section-title text-blanco leading-tight pb-8">
              {t(`services.${serviceKey}.cta.title`)}
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed px-4 font-light">
              {t(`services.${serviceKey}.cta.subtitle`)}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="service-cta-buttons flex flex-col md:flex-row gap-6 justify-center pb-16 md:pb-20">
            <Link
              href={getLocalizedRoute("contacto", language)}
              className={`btn-primary bg-gradient-to-r ${theme.primary} transition-all duration-300 px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transform`}
            >
              {t(`services.${serviceKey}.cta.primary`)}
            </Link>
            
            <Link
              href={getLocalizedRoute("casos-de-exito", language)} 
              className={`btn-outline border-2 ${theme.secondary} transition-all duration-300 px-10 py-5 text-lg font-semibold rounded-2xl hover:scale-105 transform`}
            >
              {t(`services.${serviceKey}.cta.secondary`)}
            </Link>
          </div>

          {/* Contact Info */}
          <div className="service-cta-contact bg-blanco/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blanco/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blanco/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blanco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-blanco font-bold pb-2">
                  {t("contact.phone.title")}
                </h4>
                <p className="text-gray-200">
                  {t("contact.phone.number")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blanco/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blanco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-blanco font-bold pb-2">
                  {t("contact.email.title")}
                </h4>
                <p className="text-gray-200">
                  {t("contact.email.address")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blanco/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blanco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-blanco font-bold pb-2">
                  {t("contact.schedule.title")}
                </h4>
                <p className="text-gray-200">
                  {t("contact.schedule.hours")}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}