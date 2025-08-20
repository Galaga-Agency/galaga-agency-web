"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function MarketingInmersivoConceptSection() {
  const { t } = useTranslation();

  return (
    <section className="marketing-inmersivo-concept-section why-choose-section section bg-blanco relative overflow-hidden">

      <div className="container relative z-10">
        
        {/* What we understand section */}
        <div className="pb-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* AR Demo Images */}
            <div className="marketing-inmersivo-concept-ar-demo px-4 lg:px-0">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src="/assets/img/servicios/immersive-marketing/event.png"
                      alt="AR Experience Demo"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Text */}
            <div className="marketing-inmersivo-concept-text px-4 lg:px-0">
              <h2 className="text-3xl md:text-4xl font-black text-mandarina leading-tight pb-8">
                {t("service-details-pages.immersive-marketing.concept.title")}
              </h2>
              
              <div className="flex flex-col gap-6">
                <p className="text-lg text-negro leading-relaxed">
                  {t("service-details-pages.immersive-marketing.concept.description-1")}
                </p>
                
                <p className="text-lg text-negro leading-relaxed">
                  {t("service-details-pages.immersive-marketing.concept.description-2")}
                </p>
                
                <p className="text-lg text-negro leading-relaxed">
                  {t("service-details-pages.immersive-marketing.concept.description-3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}