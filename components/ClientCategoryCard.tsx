"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { ClientCategory } from "@/types/clients";

interface ClientCategoryCardProps {
  category: ClientCategory;
  isHovered?: boolean;
  isNeighborHovered?: boolean;
}

export default function ClientCategoryCard({
  category,
}: ClientCategoryCardProps) {
  const { t } = useTranslation();

  return (
    <div className="group h-full">
      <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-white shadow-xl border border-white/20 transition-all duration-500 ease-out">
        {category.image && (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-500 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <div className="absolute inset-0 bg-white/60 group-hover:bg-white/50 transition-colors duration-300" />
          </div>
        )}
        <div className="relative z-10 flex flex-col h-full p-8 items-center text-center">
          <div className="w-20 h-20 rounded-full bg-radial-[at_30%_25%] from-hielo/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% text-white text-3xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            {category.icon}
          </div>
          <h3 className="pt-6 text-2xl font-bold leading-tight pb-4 transition-transform duration-300 group-hover:scale-105 text-negro group-hover:text-teal/80">
            {t(category.titleKey)}
          </h3>
          <p className="text-neutral-600 group-hover:text-negro transition-colors duration-300">
            {t(category.descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
