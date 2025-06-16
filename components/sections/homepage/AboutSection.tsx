"use client";

import StatCard from "@/components/StatCard";
import ValueCard from "@/components/ValueCard";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="section bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            {t("about.whoWeAre")}
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mx-auto py-6 leading-relaxed font-light">
            {t("about.description")}
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start mb-20 lg:mb-28">
          {/* Left content */}
          <div className="space-y-8">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              {t("about.ourOrigin")}
            </h3>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg sm:text-xl leading-relaxed">
                {t("about.originsText1")}
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                {t("about.originsText2")}
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                <strong className="text-primary font-semibold">
                  {t("about.todayWeIntegrate")}
                </strong>{" "}
                {t("about.integrationText")}
              </p>
            </div>
          </div>

          {/* Right content - Values */}
          <div className="bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center lg:text-left">
              {t("about.ourValues")}
            </h4>
            <div className="space-y-8">
              <ValueCard
                title={t("about.clarity")}
                description={t("about.clarityText")}
                color="primary"
              />
              <ValueCard 
                title={t("about.humanity")}
                description={t("about.humanityText")}
                color="accent"
              />
              <ValueCard 
                title={t("about.action")}
                description={t("about.actionText")}
                color="creative"
              />
              <ValueCard 
                title={t("about.simplicity")}
                description={t("about.simplicityText")}
                color="primary"
              />
              <ValueCard 
                title={t("about.usefulCreativity")}
                description={t("about.usefulCreativityText")}
                color="accent"
              />
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
          <StatCard 
            value="35+"
            label={t("about.yearsExperience")}
            color="primary"
          />
          <StatCard 
            value="100%"
            label={t("about.humanApproach")}
            color="accent"
          />
          <StatCard
            value="2018"
            label={t("about.sinceTeamGalaga")}
            color="creative"
          />
        </div>
      </div>
    </section>
  );
}