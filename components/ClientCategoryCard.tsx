"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { ClientCategory } from "@/types/clients";

interface ClientCategoryCardProps {
  category: ClientCategory;
  index: number;
}

export default function ClientCategoryCard({ category, index }: ClientCategoryCardProps) {
  const { t } = useTranslation();

  return (
    <div 
      className="client-type-card group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl border border-hielo/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
      data-index={index}
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/10 to-${category.accent}/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      {/* Icon container */}
      <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-${category.color} to-${category.accent} rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
        {category.icon}
        
        {/* Floating accent dots */}
        <div className={`absolute -top-2 -right-2 w-4 h-4 bg-${category.accent} rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`}></div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className={`text-xl md:text-2xl font-bold text-${category.color} pb-4 group-hover:text-negro transition-colors duration-300`}>
          {t(category.titleKey)}
        </h3>
        <p className="text-base md:text-lg text-grafito leading-relaxed group-hover:text-azul-profundo transition-colors duration-300">
          {t(category.descriptionKey)}
        </p>
      </div>

      {/* Corner accent */}
      <div className={`absolute bottom-4 right-4 w-2 h-2 bg-${category.color} rounded-full opacity-30 group-hover:opacity-70 transition-all duration-300`}></div>
    </div>
  );
}