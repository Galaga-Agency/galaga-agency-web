"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MarketingInmersivoResultsSection() {
  const { t } = useTranslation();

  const results = [
    {
      title:
        "service-details-pages.immersive-marketing.results.emotional-connection.title",
      description:
        "service-details-pages.immersive-marketing.results.emotional-connection.description",
      metric:
        "service-details-pages.immersive-marketing.results.emotional-connection.metric",
      detail:
        "service-details-pages.immersive-marketing.results.emotional-connection.detail",
      icon: "💝",
    },
    {
      title:
        "service-details-pages.immersive-marketing.results.conversion-increase.title",
      description:
        "service-details-pages.immersive-marketing.results.conversion-increase.description",
      metric:
        "service-details-pages.immersive-marketing.results.conversion-increase.metric",
      detail:
        "service-details-pages.immersive-marketing.results.conversion-increase.detail",
      icon: "📈",
    },
    {
      title:
        "service-details-pages.immersive-marketing.results.data-driven-decisions.title",
      description:
        "service-details-pages.immersive-marketing.results.data-driven-decisions.description",
      metric:
        "service-details-pages.immersive-marketing.results.data-driven-decisions.metric",
      detail:
        "service-details-pages.immersive-marketing.results.data-driven-decisions.detail",
      icon: "🎯",
    },
    {
      title:
        "service-details-pages.immersive-marketing.results.space-optimization.title",
      description:
        "service-details-pages.immersive-marketing.results.space-optimization.description",
      metric:
        "service-details-pages.immersive-marketing.results.space-optimization.metric",
      detail:
        "service-details-pages.immersive-marketing.results.space-optimization.detail",
      icon: "🏪",
    },
    {
      title:
        "service-details-pages.immersive-marketing.results.real-time-personalization.title",
      description:
        "service-details-pages.immersive-marketing.results.real-time-personalization.description",
      metric:
        "service-details-pages.immersive-marketing.results.real-time-personalization.metric",
      detail:
        "service-details-pages.immersive-marketing.results.real-time-personalization.detail",
      icon: "⚡",
    },
    {
      title:
        "service-details-pages.immersive-marketing.results.competitive-advantage.title",
      description:
        "service-details-pages.immersive-marketing.results.competitive-advantage.description",
      metric:
        "service-details-pages.immersive-marketing.results.competitive-advantage.metric",
      detail:
        "service-details-pages.immersive-marketing.results.competitive-advantage.detail",
      icon: "🏆",
    },
  ];

  return (
    <section className="marketing-inmersivo-results-section section bg-gradient-to-br from-blanco via-hielo/10 to-blanco relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center pb-16 md:pb-20">
          <span className="text-teal font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("service-details-pages.immersive-marketing.results.eyebrow")}
          </span>

          <h2 className="section-title text-azul-profundo leading-tight pb-8">
            {t("service-details-pages.immersive-marketing.results.title")}
          </h2>

          <p className="text-lg md:text-xl text-negro leading-relaxed px-4">
            {t("service-details-pages.immersive-marketing.results.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {results.map((result, index) => (
            <div
              key={index}
              className={`marketing-inmersivo-result-card-${
                index + 1
              } group cursor-pointer`}
            >
              <div className="bg-gradient-to-br from-teal/20 to-teal/5 rounded-3xl p-8 shadow-xl border border-teal/20 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col">
                <div className="flex items-center gap-4 pb-6">
                  <div className="w-14 h-14 bg-teal rounded-2xl flex items-center justify-center text-xl shadow-lg">
                    {result.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-teal leading-tight">
                      {t(result.title)}
                    </h3>
                  </div>
                </div>

                <p className="text-negro leading-relaxed pb-6 text-base flex-grow">
                  {t(result.description)}
                </p>

                <div className="bg-blanco/60 rounded-2xl p-4 border border-blanco/40">
                  <div className="text-2xl md:text-3xl font-black text-teal pb-2">
                    {t(result.metric)}
                  </div>
                  <p className="text-sm text-negro font-medium">
                    {t(result.detail)}
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center group-hover:bg-teal/40 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-teal transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
