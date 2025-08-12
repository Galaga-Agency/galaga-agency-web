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
    <div className="client-category-card group">
      <div className="
        relative h-full min-h-[350px] rounded-2xl overflow-hidden 
        bg-blanco
        transform transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        shadow-md hover:shadow-xl
        border border-neutral-100 hover:border-teal/30
      ">
        
        {/* Clean bottom accent - elegant and minimal */}
        <div className="
          absolute bottom-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-teal to-transparent
          group-hover:h-1 group-hover:via-teal group-hover:from-teal/50 group-hover:to-teal/50
          transition-all duration-300 ease-out
        " />

        {/* Background Image */}
        {category.image && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-300"
            style={{ backgroundImage: `url(${category.image})` }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
          
          {/* Icon container */}
          <div className="
            w-20 h-20 rounded-full
            bg-gradient-to-br from-turquesa to-teal
            flex items-center justify-center
            text-blanco text-2xl
            transform transition-all duration-300 
            group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-teal/20
            mb-6
          ">
            <div className="text-blanco text-2xl">{category.icon}</div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-negro pb-4 leading-tight">
              {t(category.titleKey)}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {t(category.descriptionKey)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}