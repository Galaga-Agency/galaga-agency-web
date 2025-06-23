"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface Category {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  color: string;
  accent: string;
  count: string;
}

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const { t } = useTranslation();

  // Color mapping for better readability on dark backgrounds
  const getCardColors = (color: string) => {
    switch (color) {
      case "teal":
        return {
          titleColor: "text-turquesa",
          titleHoverColor: "group-hover:text-blanco",
          countColor: "text-turquesa",
          countHoverColor: "group-hover:text-blanco",
          badgeBg: "bg-turquesa/20",
          iconGradient: "from-teal to-turquesa",
        };
      case "mandarina":
        return {
          titleColor: "text-mandarina",
          titleHoverColor: "group-hover:text-blanco",
          countColor: "text-mandarina",
          countHoverColor: "group-hover:text-blanco",
          badgeBg: "bg-mandarina/20",
          iconGradient: "from-mandarina to-naranja-tostado",
        };
      case "violeta":
        return {
          titleColor: "text-hielo",
          titleHoverColor: "group-hover:text-blanco",
          countColor: "text-hielo",
          countHoverColor: "group-hover:text-blanco",
          badgeBg: "bg-hielo/20",
          iconGradient: "from-violeta to-azul-profundo",
        };
      default:
        return {
          titleColor: "text-hielo",
          titleHoverColor: "group-hover:text-blanco",
          countColor: "text-hielo",
          countHoverColor: "group-hover:text-blanco",
          badgeBg: "bg-hielo/20",
          iconGradient: "from-teal to-turquesa",
        };
    }
  };

  const colors = getCardColors(category.color);

  return (
    <div
      className="category-card text-center group relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer"
      data-index={index}
    >
      {/* Background glow effect */}
      <div
        className={`category-card-glow absolute inset-0 bg-gradient-to-br from-${category.color}/20 to-${category.accent}/10 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
      ></div>

      {/* Content */}
      <div className="relative text-center flex flex-col items-center">
        {/* Icon */}
        <div
          className={`category-card-icon w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${colors.iconGradient} rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}
        >
          {category.icon}
        </div>

        {/* Title */}
        <h3
          className={`category-card-title pt-6 text-xl md:text-2xl font-bold ${colors.titleColor} ${colors.titleHoverColor} pb-4 transition-colors duration-300`}
        >
          {t(category.titleKey)}
        </h3>

        {/* Description */}
        <p className="category-card-description text-base md:text-lg text-hielo/80 leading-relaxed pb-6 group-hover:text-hielo transition-colors duration-300">
          {t(category.descriptionKey)}
        </p>

        {/* Count */}
        <div className="category-card-count flex items-center justify-center gap-3">
          <div
            className={`category-count-badge w-8 h-8 ${colors.badgeBg} rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300`}
          >
            <span
              className={`category-count-number text-sm font-bold ${colors.countColor} ${colors.countHoverColor} transition-colors duration-300`}
            >
              {category.count}
            </span>
          </div>
          <span className="category-count-label text-hielo/60 text-sm font-medium group-hover:text-hielo/80 transition-colors duration-300">
            {t("case-studies-page.categories.projects")}
          </span>
        </div>
      </div>

      {/* Floating accent */}
      <div
        className={`category-card-accent absolute top-4 right-4 w-3 h-3 bg-${category.accent} rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}
      ></div>
    </div>
  );
}
