"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight } from "react-icons/fi";

interface Service {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  slug: string;
  image?: string;
  theme: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { t } = useTranslation();

  const getThemeStyles = (theme: string) => {
    const styles = {
      teal: {
        accent: "teal",
        iconFrom: "from-teal",
        iconTo: "to-teal/90",
        iconHover: "group-hover:shadow-teal/20",
        borderHover: "hover:border-teal/30",
        bottomAccent: "via-teal group-hover:from-teal/50 group-hover:to-teal/50 group-hover:via-teal",
        bullet: "bg-teal",
        textAccent: "text-teal",
        buttonBg: "bg-teal/10 group-hover:bg-teal",
        buttonIcon: "text-teal group-hover:text-blanco"
      },
      violeta: {
        accent: "violeta",
        iconFrom: "from-violeta",
        iconTo: "to-violeta/90",
        iconHover: "group-hover:shadow-violeta/20",
        borderHover: "hover:border-violeta/30",
        bottomAccent: "via-violeta group-hover:from-violeta/50 group-hover:to-violeta/50 group-hover:via-violeta",
        bullet: "bg-violeta",
        textAccent: "text-violeta",
        buttonBg: "bg-violeta/10 group-hover:bg-violeta",
        buttonIcon: "text-violeta group-hover:text-blanco"
      },
      mandarina: {
        accent: "mandarina",
        iconFrom: "from-mandarina",
        iconTo: "to-mandarina/90",
        iconHover: "group-hover:shadow-mandarina/20",
        borderHover: "hover:border-mandarina/30",
        bottomAccent: "via-mandarina group-hover:from-mandarina/50 group-hover:to-mandarina/50 group-hover:via-mandarina",
        bullet: "bg-mandarina",
        textAccent: "text-mandarina",
        buttonBg: "bg-mandarina/10 group-hover:bg-mandarina",
        buttonIcon: "text-mandarina group-hover:text-blanco"
      },
      "azul-profundo": {
        accent: "azul-profundo",
        iconFrom: "from-azul-profundo",
        iconTo: "to-azul-profundo/90",
        iconHover: "group-hover:shadow-azul-profundo/20",
        borderHover: "hover:border-azul-profundo/30",
        bottomAccent: "via-azul-profundo group-hover:from-azul-profundo/50 group-hover:to-azul-profundo/50 group-hover:via-azul-profundo",
        bullet: "bg-azul-profundo",
        textAccent: "text-azul-profundo",
        buttonBg: "bg-azul-profundo/10 group-hover:bg-azul-profundo",
        buttonIcon: "text-azul-profundo group-hover:text-blanco"
      }
    };
    return styles[theme as keyof typeof styles] || styles.teal;
  };

  const themeStyles = getThemeStyles(service.theme);

  return (
    <div className="service-card group">
      <Link href={`/servicios/${service.slug}`} className="block h-full">
        <div className={`
          relative h-full min-h-[400px] rounded-2xl overflow-hidden 
          bg-blanco
          transform transition-all duration-300 ease-out
          hover:scale-[1.02] hover:-translate-y-1
          shadow-md hover:shadow-xl
          border border-neutral-100 ${themeStyles.borderHover}
        `}>
          
          {/* Themed bottom accent */}
          <div className={`
            absolute bottom-0 left-0 right-0 h-px
            bg-gradient-to-r from-transparent ${themeStyles.bottomAccent}
            group-hover:h-1
            transition-all duration-300 ease-out
          `} />
          
          {/* Background Image */}
          {service.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-300"
              style={{ backgroundImage: `url(${service.image})` }}
            />
          )}
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            
            {/* Themed Icon */}
            <div className={`
              w-16 h-16 rounded-full
              bg-gradient-to-br ${themeStyles.iconFrom} ${themeStyles.iconTo}
              flex items-center justify-center
              text-blanco text-2xl
              transform transition-all duration-300 
              group-hover:scale-105 group-hover:shadow-lg ${themeStyles.iconHover}
            `}>
              {service.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-negro pt-6 pb-4 leading-tight">
              {t(service.titleKey)}
            </h3>
            
            {/* Description */}
            <p className="text-neutral-600 pb-6 leading-relaxed flex-1">
              {t(service.descriptionKey)}
            </p>
            
            {/* Features with themed bullets */}
            <div className="space-y-3 pt-6">
              {service.featuresKeys.map((featureKey, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 ${themeStyles.bullet} rounded-full flex-shrink-0`} />
                  <span className="text-sm text-neutral-600">
                    {t(featureKey)}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Themed action area */}
            <div className="flex items-center justify-between pt-8 mt-4">
              <span className={`text-sm ${themeStyles.textAccent} font-medium`}>
                {t("knowMore")}
              </span>
              <div className={`
                w-10 h-10 rounded-full ${themeStyles.buttonBg}
                flex items-center justify-center
                transition-all duration-300
              `}>
                <FiArrowRight className={`
                  ${themeStyles.buttonIcon} text-sm
                  transform group-hover:translate-x-0.5
                  transition-all duration-300
                `} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}