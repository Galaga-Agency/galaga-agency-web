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
    <div className="client-category-card flex flex-col items-center relative p-8 bg-blanco rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Background glow effect */}
      <div className="client-category-glow absolute inset-0 bg-gradient-to-br from-turquesa/20 to-mandarina/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon container */}
      <div className="client-category-icon-container relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-turquesa to-teal flex items-center justify-center">
        {category.icon}
        
        {/* Floating accent dots */}
        <div className="client-category-accent absolute -top-2 -right-2 w-4 h-4 bg-mandarina rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative pt-6 z-10 text-center">
        <h3 className="client-category-title text-xl font-bold text-negro mb-4">
          {t(category.titleKey)}
        </h3>
        <p className="client-category-description text-grafito leading-relaxed">
          {t(category.descriptionKey)}
        </p>
      </div>

      {/* Corner accent */}
      <div className="client-category-corner absolute bottom-4 right-4 w-3 h-3 bg-mandarina rounded-full"></div>
    </div>
  );
}