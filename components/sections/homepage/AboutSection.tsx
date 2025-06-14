"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="section bg-white">
        <div className=" mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {t("about.whoWeAre")}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("about.description")}
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
            {/* Left content */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("about.ourOrigin")}
              </h3>
              <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>{t("about.originsText1")}</p>
                <p>{t("about.originsText2")}</p>
                <p>
                  <strong className="text-primary font-semibold">
                    {t("about.todayWeIntegrate")}
                  </strong>{" "}
                  {t("about.integrationText")}
                </p>
              </div>
            </div>

            {/* Right content - Values */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-10 rounded-2xl shadow-sm">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
                {t("about.ourValues")}
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                      {t("about.clarity")}
                    </h5>
                    <p className="text-gray-600">
                      {t("about.clarityText")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                      {t("about.humanity")}
                    </h5>
                    <p className="text-gray-600">
                      {t("about.humanityText")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-creative rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                      {t("about.action")}
                    </h5>
                    <p className="text-gray-600">
                      {t("about.actionText")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                      {t("about.simplicity")}
                    </h5>
                    <p className="text-gray-600">
                      {t("about.simplicityText")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                      {t("about.usefulCreativity")}
                    </h5>
                    <p className="text-gray-600">
                      {t("about.usefulCreativityText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-10 rounded-2xl text-center border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-black text-primary mb-3">35+</div>
              <p className="text-gray-700 font-medium">{t("about.yearsExperience")}</p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 lg:p-10 rounded-2xl text-center border border-accent/10 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-black text-accent mb-3">100%</div>
              <p className="text-gray-700 font-medium">{t("about.humanApproach")}</p>
            </div>
            <div className="bg-gradient-to-br from-creative/5 to-creative/10 p-8 lg:p-10 rounded-2xl text-center border border-creative/10 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-black text-creative mb-3">2018</div>
              <p className="text-gray-700 font-medium">{t("about.sinceTeamGalaga")}</p>
            </div>
          </div>
        </div>
    </section>
  );
}