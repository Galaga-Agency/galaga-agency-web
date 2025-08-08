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

  const getColorClasses = () => {
    switch (color) {
      case 'teal':
        return {
          icon: 'bg-brand-teal',
          title: 'text-brand-turquesa'
        };
      case 'orange':
        return {
          icon: 'bg-brand-mandarina',
          title: 'text-brand-melocoton'
        };
      case 'purple':
        return {
          icon: 'bg-brand-violeta',
          title: 'text-brand-lavanda'
        };
      default:
        return {
          icon: 'bg-brand-teal',
          title: 'text-brand-turquesa'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div 
      className="approach-card flex flex-col items-center text-center bg-white/5 rounded-xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300"
      data-index={index}
    >
      {/* Icon */}
      <div className={`icon-container w-16 h-16 md:w-20 md:h-20 ${colors.icon} rounded-xl flex items-center justify-center text-white mb-6 md:mb-8`}>
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className={`approach-card-title text-xl md:text-2xl font-bold ${colors.title} pb-4`}>
          {t(titleKey)}
        </h3>
        <p className="approach-card-description text-base md:text-lg text-gray-300 leading-relaxed">
          {t(descriptionKey)}
        </p>
      </div>
    </div>
  );
}