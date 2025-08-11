"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { FiArrowRight } from "react-icons/fi";

interface Service {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  slug: string;
  image?: string;
  theme: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <div className="service-card group">
      <Link href={`/servicios/${service.slug}`} className="block h-full">
        <div className="
          relative h-full min-h-[400px] rounded-2xl overflow-hidden 
          bg-blanco border border-hielo/30
          transform transition-all duration-300 ease-out
          hover:scale-[1.02] hover:-translate-y-1
          shadow-md hover:shadow-xl
        ">
          
          {/* Background Image */}
          {service.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundImage: `url(${service.image})` }}
            />
          )}

          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            
            {/* Icon */}
            <div className="
              w-16 h-16 rounded-full bg-teal flex items-center justify-center
              text-blanco text-2xl shadow-md
              transform transition-transform duration-300 group-hover:scale-110
            ">
              <div className="flex items-center justify-center">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-negro pt-6 pb-4 leading-tight">
              {t(service.titleKey)}
            </h3>

            {/* Description */}
            <p className="text-neutral-600 pb-6 leading-relaxed flex-1">
              {t(service.descriptionKey)}
            </p>

            {/* Features */}
            <div className="space-y-3 pt-6">
              {service.featuresKeys.map((featureKey, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                  <span className="text-sm text-neutral-600">
                    {t(featureKey)}
                  </span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="flex items-center justify-between pt-6">
              <span className="text-sm text-teal font-medium">
                {t("knowMore")}
              </span>
              <FiArrowRight className="text-teal opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}