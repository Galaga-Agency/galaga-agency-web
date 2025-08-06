import { IconType } from "react-icons";
import { useTranslation } from "@/hooks/useTranslation";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  theme: string;
  size: string;
  isHovered?: boolean;
  isNeighborHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
}

export default function ServiceCard({
  icon: IconComponent,
  title,
  description,
  features,
  theme,
  size,
  isHovered = false,
  isNeighborHovered = false,
  onHover,
}: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`
        ${
          size === "large" ? "col-span-2" : size === "small" ? "col-span-1" : ""
        }
        ${theme === "teal" ? "border-teal/40" : ""}
        ${theme === "violeta" ? "border-violeta/40" : ""}
        ${theme === "turquesa" ? "border-turquesa/40" : ""}
        ${theme === "mandarina" ? "border-mandarina/40" : ""}
        ${theme === "azul-profundo" ? "border-teal/40" : ""}
        ${theme === "verde-azulado" ? "border-turquesa/40" : ""}
        ${
          isHovered
            ? "scale-105 -translate-y-2 shadow-2xl z-20"
            : isNeighborHovered
            ? "scale-95 translate-y-1 opacity-75"
            : "scale-100"
        }
        rounded-3xl p-6 lg:p-8 relative overflow-hidden h-full cursor-pointer
        shadow-lg border-2 transition-all duration-500 ease-out
      `}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      {/* Background images based on theme - cool AF */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {theme === "teal" && (
          <img
            src="/assets/img/servicios/consultoria.png"
            alt={t(title)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "opacity-20 scale-110" : "opacity-50 scale-100"
            }`}
          />
        )}
        {theme === "violeta" && (
          <img
            src="/assets/img/servicios/automatizacion.png"
            alt={t(title)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "opacity-20 scale-110" : "opacity-50 scale-100"
            }`}
          />
        )}
        {theme === "turquesa" && (
          <img
            src="/assets/img/servicios/innovacion.png"
            alt={t(title)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "opacity-20 scale-110" : "opacity-50 scale-100"
            }`}
          />
        )}
        {theme === "mandarina" && (
          <img
            src="/assets/img/servicios/gaming.png"
            alt={t(title)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "opacity-40 scale-110" : "opacity-30 scale-100"
            }`}
          />
        )}
        {theme === "azul-profundo" && (
          <img
            src="/assets/img/servicios/formacion.png"
            alt={t(title)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "opacity-20 scale-110" : "opacity-50 scale-100"
            }`}
          />
        )}
        {theme === "verde-azulado" && (
          <img
            src="/assets/img/servicios/subvenciones.png"
            alt={t(title)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "opacity-20 scale-110" : "opacity-50 scale-100"
            }`}
          />
        )}
      </div>

      {/* Floating icon background */}
      <div
        className={`absolute -top-4 -right-4 transition-all duration-500 ${
          size === "large" ? "text-[12rem]" : "text-[10rem]"
        } ${
          isHovered
            ? "text-blanco/30 rotate-12 scale-110"
            : "text-blanco/8 rotate-6 scale-100"
        }`}
      >
        <IconComponent />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title - bigger and more prominent */}
        <h3
          className={`${
            size === "large" ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
          } font-black text-blanco pb-6 leading-tight transition-all duration-300 ${
            isHovered ? "translate-x-1" : "translate-x-0"
          }`}
        >
          {t(title)}
        </h3>

        {/* Description */}
        <p
          className={`text-sm lg:text-base pb-6 leading-relaxed flex-1 transition-all duration-300 ${
            isHovered ? "text-blanco/90" : "text-hielo"
          }`}
        >
          {t(description)}
        </p>

        {/* Features */}
        <div className="mt-auto flex flex-col gap-3">
          {features.slice(0, size === "large" ? 4 : 3).map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                isHovered
                  ? "translate-x-2 text-blanco/95"
                  : "translate-x-0 text-hielo"
              }`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm transition-all duration-300 
                ${theme === "teal" && isHovered ? "bg-teal scale-125" : ""}
                ${
                  theme === "violeta" && isHovered ? "bg-violeta scale-125" : ""
                }
                ${
                  theme === "turquesa" && isHovered
                    ? "bg-turquesa scale-125"
                    : ""
                }
                ${
                  theme === "mandarina" && isHovered
                    ? "bg-mandarina scale-125"
                    : ""
                }
                ${
                  theme === "azul-profundo" && isHovered
                    ? "bg-teal scale-125"
                    : ""
                }
                ${!isHovered ? "bg-hielo/60" : ""}
              `}
              ></div>
              <span className="leading-relaxed">{t(feature)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
