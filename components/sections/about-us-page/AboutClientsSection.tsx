"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { clientCategories, featuredClients, impactMetrics } from "@/data/clients";
import ClientCategoryCard from "@/components/ClientCategoryCard";
import FeaturedClientCard from "@/components/FeaturedClientCard";
import ImpactMetricsGrid from "@/components/ImpactMetricsGrid";

export default function AboutClientsSection() {
  const { t } = useTranslation();

  return (
    <section className="about-clients-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hielo/60 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)"
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)"
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="about-clients-eyebrow inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("about-page.clients.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="about-clients-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6">
            {t("about-page.clients.title")}
          </h2>
          
          <p className="about-clients-subtitle text-lg md:text-xl text-grafito font-light leading-relaxed px-4">
            {t("about-page.clients.subtitle")}
          </p>
        </div>

        {/* Client Categories */}
        <div className="about-clients-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-20 md:pb-24">
          {clientCategories.map((category, index) => (
            <ClientCategoryCard
              key={index}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Featured Success Stories */}
        <div className="about-clients-featured pb-16 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h3 className="about-clients-featured-title text-3xl md:text-4xl font-bold text-negro pb-4">
              {t("about-page.clients.featured.title")}
            </h3>
            <p className="about-clients-featured-subtitle text-lg text-grafito">
              {t("about-page.clients.featured.subtitle")}
            </p>
          </div>

          <div className="about-clients-featured-list flex flex-col gap-12 md:gap-16">
            {featuredClients.map((client, index) => (
              <FeaturedClientCard
                key={index}
                client={client}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Overall Impact Summary */}
        <div className="about-clients-impact">
          <ImpactMetricsGrid metrics={impactMetrics} />
        </div>
      </div>
    </section>
  );
}