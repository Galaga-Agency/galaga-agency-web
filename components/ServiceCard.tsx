import { IconType } from "react-icons";
import { useTranslation } from "@/hooks/useTranslation";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  theme: string;
  size: string;
}

export default function ServiceCard({ icon: IconComponent, title, description, features, theme, size }: ServiceCardProps) {
  const { t } = useTranslation();

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "primary":
        return "bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-800";
      case "creative":
        return "bg-gradient-to-br from-primary-800 via-secondary-700 to-accent-warm/20";
      case "accent":
        return "bg-gradient-to-br from-secondary-700 via-primary-800 to-secondary-800";
      case "warm":
        return "bg-gradient-to-br from-primary-700 via-accent-warm/30 to-secondary-800";
      case "secondary":
        return "bg-gradient-to-br from-creative-800 via-secondary-800 to-primary-800";
      case "electric":
        return "bg-gradient-to-br from-primary-800 via-secondary-700 to-accent-warm/25";
      default:
        return "bg-gradient-to-br from-primary-700 to-secondary-800";
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "col-span-1"; // 1/3 width in 3-column grid
      case "large":  
        return "col-span-2"; // 2/3 width in 3-column grid
      case "mobile":
        return ""; // No grid classes for mobile
      default:
        return "col-span-1";
    }
  };

  const getContentSize = (size: string) => {
    switch (size) {
      case "large":
        return {
          titleSize: "text-xl lg:text-2xl",
          iconSize: "text-3xl lg:text-4xl",
          iconBgSize: "p-4 lg:p-5",
          maxFeatures: 4
        };
      case "small":
        return {
          titleSize: "text-lg lg:text-xl",
          iconSize: "text-2xl lg:text-3xl", 
          iconBgSize: "p-3 lg:p-4",
          maxFeatures: 3
        };
      case "mobile":
        return {
          titleSize: "text-xl",
          iconSize: "text-3xl",
          iconBgSize: "p-4",
          maxFeatures: 3
        };
      default:
        return {
          titleSize: "text-lg lg:text-xl",
          iconSize: "text-2xl lg:text-3xl",
          iconBgSize: "p-3 lg:p-4", 
          maxFeatures: 3
        };
    }
  };

  const contentSize = getContentSize(size);

  return (
    <div
      className={`${getSizeClasses(size)} ${getThemeClasses(theme)} 
        rounded-3xl p-6 lg:p-8 relative overflow-hidden group h-full
        hover:scale-[1.03] hover:-rotate-1 transition-all duration-700 cursor-pointer
        border border-white/20 backdrop-blur-sm shadow-2xl
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/15 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      {/* Floating icon background */}
      <div className={`z-20 absolute top-4 right-4 ${size === 'large' ? 'text-7xl lg:text-8xl' : 'text-5xl lg:text-6xl'} text-white/10 group-hover:text-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
        <IconComponent />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Animated header */}
        <div className="flex items-center space-x-4 pb-6 group-hover:translate-x-2 transition-transform duration-500">
          <div className={`${contentSize.iconBgSize} bg-white/25 rounded-2xl backdrop-blur-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
            <IconComponent className={`${contentSize.iconSize} text-white drop-shadow-lg`} />
          </div>
        </div>
        
        {/* Animated title */}
        <h3 className={`${contentSize.titleSize} font-black text-white pb-4 leading-tight drop-shadow-lg
          group-hover:translate-x-1 transition-transform duration-300`}>
          {t(title)}
        </h3>
        
        {/* Animated description */}
        <p className="text-sm lg:text-base text-white/95 pb-6 leading-relaxed flex-1 drop-shadow-sm
          group-hover:text-white transition-colors duration-300">
          {t(description)}
        </p>
        
        {/* Animated features */}
        <div className="mt-auto flex flex-col gap-3">
          {features.slice(0, contentSize.maxFeatures).map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-white/90 text-sm
                group-hover:translate-x-2 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-2 h-2 bg-white/80 rounded-full flex-shrink-0 group-hover:scale-150 group-hover:bg-white transition-all duration-300 shadow-lg"></div>
              <span className="leading-relaxed group-hover:text-white transition-colors duration-300 pl-2">{t(feature)}</span>
            </div>
          ))}
        </div>

        {/* Pulsing border effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 z-10"></div>
      </div>
    </div>
  );
}