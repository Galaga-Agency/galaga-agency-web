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
  onHover
}: ServiceCardProps) {
  const { t } = useTranslation();

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "teal":
        return "bg-gradient-to-br from-blanco/25 via-blanco/20 to-teal/10 border-teal/40";
      case "violeta":
        return "bg-gradient-to-br from-blanco/25 via-blanco/20 to-violeta/10 border-violeta/40";
      case "turquesa":
        return "bg-gradient-to-br from-blanco/25 via-blanco/20 to-turquesa/10 border-turquesa/40";
      case "mandarina":
        return "bg-gradient-to-br from-blanco/25 via-blanco/20 to-mandarina/10 border-mandarina/40";
      case "azul-profundo":
        return "bg-gradient-to-br from-blanco/25 via-blanco/20 to-azul-profundo/10 border-azul-profundo/40";
      case "verde-azulado":
        return "bg-gradient-to-br from-blanco/25 via-blanco/20 to-verde-azulado/10 border-verde-azulado/40";
      default:
        return "bg-gradient-to-br from-blanco/25 via-blanco/20 to-teal/10 border-teal/40";
    }
  };

  const getIconColor = (theme: string) => {
    switch (theme) {
      case "teal":
        return "text-teal";
      case "violeta":
        return "text-violeta";
      case "turquesa":
        return "text-turquesa";
      case "mandarina":
        return "text-mandarina";
      case "azul-profundo":
        return "text-azul-profundo";
      case "verde-azulado":
        return "text-verde-azulado";
      default:
        return "text-teal";
    }
  };

  const getFeatureDotColor = (theme: string, isHovered: boolean) => {
    if (!isHovered) return 'bg-hielo/60 scale-100';
    
    switch (theme) {
      case "teal":
        return "bg-teal scale-125 shadow-lg";
      case "violeta":
        return "bg-violeta scale-125 shadow-lg";
      case "turquesa":
        return "bg-turquesa scale-125 shadow-lg";
      case "mandarina":
        return "bg-mandarina scale-125 shadow-lg";
      case "azul-profundo":
        return "bg-azul-profundo scale-125 shadow-lg";
      case "verde-azulado":
        return "bg-verde-azulado scale-125 shadow-lg";
      default:
        return "bg-teal scale-125 shadow-lg";
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "col-span-1";
      case "large":  
        return "col-span-2";
      case "mobile":
        return "";
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

  // Dynamic classes based on hover states
  const getCardState = () => {
    if (isHovered) {
      return "scale-105 -translate-y-2 shadow-2xl z-20";
    } else if (isNeighborHovered) {
      return "scale-95 translate-y-1 opacity-75";
    }
    return "scale-100";
  };

  const getBackgroundState = () => {
    if (isHovered) {
      return "opacity-100 scale-110";
    }
    return "opacity-0 scale-100";
  };

  const handleMouseEnter = () => {
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    onHover?.(false);
  };

  return (
    <div
      className={`${getSizeClasses(size)} ${getThemeClasses(theme)} ${getCardState()}
        rounded-3xl p-6 lg:p-8 relative overflow-hidden group h-full cursor-pointer
        backdrop-blur-md shadow-lg border-2 transition-all duration-500 ease-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic glow background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blanco/30 via-blanco/15 to-transparent rounded-3xl transition-all duration-500 ${getBackgroundState()}`}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-4 right-4 w-8 h-8 bg-blanco/20 rounded-full blur-lg transition-all duration-700 ${isHovered ? 'opacity-100 scale-150 animate-pulse' : 'opacity-0 scale-100'}`}></div>
        <div className={`absolute bottom-6 left-6 w-6 h-6 bg-blanco/30 rounded-full blur-md transition-all duration-700 delay-200 ${isHovered ? 'opacity-100 scale-125 animate-pulse' : 'opacity-0 scale-100'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-4 h-4 bg-blanco/15 rounded-full blur-sm transition-all duration-700 delay-400 ${isHovered ? 'opacity-100 scale-110 animate-pulse' : 'opacity-0 scale-100'}`}></div>
      </div>

      {/* Large floating icon background */}
      <div className={`absolute -top-4 -right-4 ${size === 'large' ? 'text-8xl lg:text-9xl' : 'text-6xl lg:text-7xl'} transition-all duration-500 ${isHovered ? 'text-blanco/25 rotate-12 scale-110' : 'text-blanco/8 rotate-6 scale-100'}`}>
        <IconComponent />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with enhanced icon */}
        <div className={`flex items-center pb-6 transition-all duration-300 ${isHovered ? 'translate-x-2' : 'translate-x-0'}`}>
          <div className={`${contentSize.iconBgSize} bg-blanco/40 rounded-2xl backdrop-blur-sm shadow-lg border border-blanco/20 transition-all duration-300 ${isHovered ? 'scale-110 bg-blanco/60 shadow-xl' : 'scale-100'}`}>
            <IconComponent className={`${contentSize.iconSize} ${getIconColor(theme)} drop-shadow-md transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} />
          </div>
        </div>
        
        {/* Enhanced title */}
        <h3 className={`${contentSize.titleSize} font-black text-blanco pb-4 leading-tight transition-all duration-300 ${isHovered ? 'translate-x-1 text-shadow-lg' : 'translate-x-0'}`}>
          {t(title)}
        </h3>
        
        {/* Enhanced description */}
        <p className={`text-sm lg:text-base text-hielo pb-6 leading-relaxed flex-1 transition-all duration-300 ${isHovered ? 'text-blanco/90' : 'text-hielo'}`}>
          {t(description)}
        </p>
        
        {/* Enhanced features with staggered animation */}
        <div className="mt-auto flex flex-col gap-3">
          {features.slice(0, contentSize.maxFeatures).map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-sm transition-all duration-300 ${isHovered ? 'translate-x-2 text-blanco/95' : 'translate-x-0 text-hielo'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm transition-all duration-300 ${getFeatureDotColor(theme, isHovered)}`}></div>
              <span className="leading-relaxed">{t(feature)}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}