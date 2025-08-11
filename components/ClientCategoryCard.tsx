"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { ClientCategory } from "@/types/clients";

interface ClientCategoryCardProps {
  category: ClientCategory;
  index: number;
}

export default function ClientCategoryCard({
  category,
  index,
}: ClientCategoryCardProps) {
  const { t } = useTranslation();

  return (
    <div className="client-category-card flex flex-col items-center relative p-8 bg-blanco rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
      {/* Background glow effect */}
      <div className="client-category-glow absolute inset-0 bg-gradient-to-br from-turquesa/10 to-mandarina/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon container */}
      <div className="client-category-icon-container relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-turquesa to-teal flex items-center justify-center shadow-md">
        <div className="text-blanco text-2xl">{category.icon}</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex-1 flex flex-col justify-center pt-4">
        <h3 className="client-category-title text-xl font-bold text-negro pb-4">
          {t(category.titleKey)}
        </h3>
        <p className="client-category-description text-grafito leading-relaxed">
          {t(category.descriptionKey)}
        </p>
      </div>
    </div>
  );
}
