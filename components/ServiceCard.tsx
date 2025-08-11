import { IconType } from "react-icons";
import { useTranslation } from "@/hooks/useTranslation";

interface ServiceConfig {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  theme: string;
  image: string;
}

interface ServiceCardProps {
  service: ServiceConfig;
  size: string;
  isHovered?: boolean;
  isNeighborHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
}

export default function ServiceCard({
  service,
  size,
  isHovered = false,
  isNeighborHovered = false,
  onHover,
}: ServiceCardProps) {
  const { t } = useTranslation();

  const getThemeStyles = (theme: string) => {
    const styles = {
      teal: {
        border: "border-teal/40",
        bulletHovered: "bg-teal",
        bulletDefault: "bg-teal/60",
        titleColor: "text-teal",
        textColor: "text-azul-profundo"
      },
      violeta: {
        border: "border-violeta/40",
        bulletHovered: "bg-violeta",
        bulletDefault: "bg-violeta/60",
        titleColor: "text-violeta",
        textColor: "text-azul-profundo"
      },
      mandarina: {
        border: "border-mandarina/40",
        bulletHovered: "bg-mandarina",
        bulletDefault: "bg-mandarina/60",
        titleColor: "text-mandarina",
        textColor: "text-azul-profundo"
      },
      "azul-profundo": {
        border: "border-azul-profundo/40",
        bulletHovered: "bg-azul-profundo",
        bulletDefault: "bg-azul-profundo/60",
        titleColor: "text-azul-profundo",
        textColor: "text-azul-profundo"
      }
    };
    return styles[theme as keyof typeof styles] || styles.teal;
  };

  const themeStyles = getThemeStyles(service.theme);

  return (
    <div
      className={`
        ${size === "large" ? "col-span-2" : size === "small" ? "col-span-1" : ""}
        ${themeStyles.border}
        ${isHovered ? "scale-105 -translate-y-2 shadow-2xl z-20" : isNeighborHovered ? "scale-95 translate-y-1 opacity-75" : "scale-100"}
        rounded-3xl p-6 lg:p-8 relative overflow-hidden h-full cursor-pointer
        shadow-lg border-2 transition-all duration-500 ease-out bg-blanco/70 backdrop-blur-sm
      `}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <img
          src={service.image}
          alt={t(service.title)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "opacity-5 scale-110" : "opacity-20 scale-100"
          }`}
        />
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
        <service.icon />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3
          className={`${
            size === "large" ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
          } font-black ${themeStyles.titleColor} pb-6 leading-tight transition-all duration-300 ${
            isHovered ? "translate-x-1" : "translate-x-0"
          }`}
        >
          {t(service.title)}
        </h3>

        {/* Description */}
        <p
          className={`text-sm lg:text-base font-semibold pb-6 leading-relaxed flex-1 transition-all duration-300 ${
            isHovered ? themeStyles.textColor : "text-azul-profundo/80"
          }`}
        >
          {t(service.description)}
        </p>

        {/* Features */}
        <div className="mt-auto flex flex-col gap-3">
          {service.features.slice(0, size === "large" ? 4 : 3).map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 font-semibold text-sm transition-all duration-300 ${
                isHovered
                  ? `translate-x-2 ${themeStyles.textColor}`
                  : "translate-x-0 text-azul-profundo/80"
              }`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm transition-all duration-300 
                ${isHovered ? `${themeStyles.bulletHovered} scale-125` : themeStyles.bulletDefault}
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