import { useTranslation } from "@/hooks/useTranslation";

interface ApproachCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  color: "teal" | "orange" | "purple";
  index: number;
}

export default function ApproachCard({ icon, titleKey, descriptionKey, color, index }: ApproachCardProps) {
  const { t } = useTranslation();

  return (
    <div 
      className="approach-card flex flex-col items-center text-center group relative bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500"
      data-index={index}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        color === 'teal' ? 'from-teal-500/20' : 
        color === 'orange' ? 'from-orange-500/20' : 
        'from-purple-500/20'
      } to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10`}></div>
      
      {/* Icon */}
      <div className={`icon-container w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${
        color === 'teal' ? 'from-teal-500 to-teal-600' : 
        color === 'orange' ? 'from-orange-500 to-orange-600' : 
        'from-purple-500 to-purple-600'
      } rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className={`approach-card-title pt-6 text-xl md:text-2xl font-bold ${
          color === 'teal' ? 'text-teal-400' : 
          color === 'orange' ? 'text-orange-400' : 
          'text-purple-400'
        } pb-4 group-hover:text-white transition-colors duration-300`}>
          {t(titleKey)}
        </h3>
        <p className="approach-card-description text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {t(descriptionKey)}
        </p>
      </div>

      {/* Floating accent */}
      <div className={`accent-dot absolute top-4 right-4 w-3 h-3 ${
        color === 'teal' ? 'bg-teal-400' : 
        color === 'orange' ? 'bg-orange-400' : 
        'bg-purple-400'
      } rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}></div>
    </div>
  );
}