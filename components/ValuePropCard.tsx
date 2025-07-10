"use client";
import { useTranslation } from "@/hooks/useTranslation";

interface ValuePropCardProps {
  icon: any;
  titleKey: string;
  descriptionKey: string;
  index?: number;
  delay?: number;
}

export default function ValuePropCard({ icon, titleKey, descriptionKey, index = 0, delay = 0 }: ValuePropCardProps) {
  const { t } = useTranslation();

  // Professional color schemes with your brand colors
  const colorSchemes = [
    {
      iconBg: 'linear-gradient(135deg, #ffffff, #f0f9ff)',
      iconColor: '#4cbcc5', // turquesa
      textColor: '#2c2c2c', // grafito
      accent: '#4cbcc5'
    },
    {
      iconBg: 'linear-gradient(135deg, #ffffff, #f1f5f9)',
      iconColor: '#121c30', // azul-profundo
      textColor: '#121c30',
      accent: '#121c30'
    },
    {
      iconBg: 'linear-gradient(135deg, #ffffff, #ecfeff)',
      iconColor: '#079494', // verde-azulado
      textColor: '#176161', // teal
      accent: '#079494'
    }
  ];

  const scheme = colorSchemes[index] || colorSchemes[0];

  // Better distribution variations
  const getCardVariation = () => {
    switch(index) {
      case 0:
        return {
          rotation: 'rotate-1',
          translation: 'translate-y-6 translate-x-4',
          scale: 'scale-105',
          animationClass: 'fade-up'
        };
      case 1:
        return {
          rotation: '-rotate-1',
          translation: '-translate-y-2',
          scale: 'scale-110',
          animationClass: 'fade-down'
        };
      case 2:
        return {
          rotation: 'rotate-2',
          translation: 'translate-y-4 -translate-x-4',
          scale: 'scale-105',
          animationClass: 'fade-up'
        };
      default:
        return {
          rotation: '',
          translation: '',
          scale: '',
          animationClass: 'fade-up'
        };
    }
  };

  const variation = getCardVariation();

  return (
    <div className={`group relative w-full h-full ${variation.rotation} ${variation.translation} ${variation.scale} ${variation.animationClass} opacity-0`}>
             
      {/* Professional glassmorphism background */}
      <div className="relative backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                 
        {/* Subtle accent glow */}
        <div 
          className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm -z-10"
          style={{
            background: `linear-gradient(135deg, ${scheme.accent}, transparent)`
          }}
        ></div>

        {/* Content container */}
        <div className="flex flex-col gap-4 items-center text-center space-y-6">
                     
          {/* Professional icon container */}
          <div className="relative">
            <div 
              className="w-32 h-32 rounded-full flex items-center justify-center shadow-lg border border-white/50 backdrop-blur-sm"
              style={{
                background: scheme.iconBg
              }}
            >
              <span 
                className="text-6xl filter drop-shadow-sm"
                style={{ color: scheme.iconColor }}
              >
                {icon}
              </span>
            </div>
          </div>

          {/* Professional title */}
          <h3 
            className="text-2xl font-bold leading-tight tracking-tight max-w-[200px]"
            style={{ color: scheme.textColor }}
          >
            {t(titleKey)}
          </h3>
                     
          {/* Professional description */}
          <p 
            className="text-base leading-relaxed font-medium max-w-[180px] opacity-80"
            style={{ color: scheme.textColor }}
          >
            {t(descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}