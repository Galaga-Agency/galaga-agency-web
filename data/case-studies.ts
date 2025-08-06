import { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    titleKey: "caseStudies.dosxdos.title",
    categoryKey: "caseStudies.categories.digital",
    challengeKey: "caseStudies.dosxdos.challenge",
    solutionKey: "caseStudies.dosxdos.solution",
    resultKey: "caseStudies.dosxdos.result",
    metrics: [
      {
        value: "100%",
        labelKey: "caseStudies.metrics.processReduction",
      },
      {
        value: "300%",
        labelKey: "caseStudies.metrics.seoImprovement",
      },
    ],
    image: "/assets/img/clients/dosxdos-cover.png",
    theme: "digital" as const,
    slug: "dos-x-dos-grupo-imagen",
  },
  {
    titleKey: "caseStudies.energiaSolar.title",
    categoryKey: "caseStudies.categories.digital",
    challengeKey: "caseStudies.energiaSolar.challenge",
    solutionKey: "caseStudies.energiaSolar.solution",
    resultKey: "caseStudies.energiaSolar.result",
    metrics: [
      {
        value: "100%",
        labelKey: "caseStudies.metrics.dataUnification",
      },
      {
        value: "24/7",
        labelKey: "caseStudies.metrics.realTimeMonitoring",
      },
    ],
    image: "/assets/img/clients/energia-solar-canarias-cover.png",
    theme: "digital" as const,
    slug: "energia-solar-canarias",
  },
  {
    titleKey: "caseStudies.toyota.title",
    categoryKey: "caseStudies.categories.marketing",
    challengeKey: "caseStudies.toyota.challenge",
    solutionKey: "caseStudies.toyota.solution",
    resultKey: "caseStudies.toyota.result",
    metrics: [
      {
        value: "375K+",
        labelKey: "caseStudies.metrics.impressions",
      },
      {
        value: "4K+",
        labelKey: "caseStudies.metrics.qualifiedLeads",
      },
    ],
    image: "/assets/img/clients/toyota-cover.png",
    theme: "marketing" as const,
    slug: "toyota-canarias",
  },
  {
    titleKey: "caseStudies.canariasGameShow.title",
    categoryKey: "caseStudies.categories.events",
    challengeKey: "caseStudies.canariasGameShow.challenge",
    solutionKey: "caseStudies.canariasGameShow.solution",
    resultKey: "caseStudies.canariasGameShow.result",
    metrics: [
      {
        value: "30K+",
        labelKey: "caseStudies.metrics.attendees",
      },
      {
        value: "2",
        labelKey: "caseStudies.metrics.cities",
      },
    ],
    image: "/assets/img/homepage/gaming.png",
    theme: "events" as const,
    slug: "canarias-game-show",
  },
  // NEW CASE STUDIES FROM SCREENSHOTS
  {
    titleKey: "caseStudies.tlpTenerife.title",
    categoryKey: "caseStudies.categories.events",
    challengeKey: "caseStudies.tlpTenerife.challenge",
    solutionKey: "caseStudies.tlpTenerife.solution",
    resultKey: "caseStudies.tlpTenerife.result",
    metrics: [
      {
        value: "62K+",
        labelKey: "caseStudies.metrics.attendees",
      },
      {
        value: "4",
        labelKey: "caseStudies.metrics.eventDays",
      },
    ],
    image: "/assets/img/casos-de-exito/tlp/tlp.jpg",
    theme: "events" as const,
    slug: "tlp-tenerife",
  },
  {
    titleKey: "caseStudies.foroCanaryIslands.title",
    categoryKey: "caseStudies.categories.events",
    challengeKey: "caseStudies.foroCanaryIslands.challenge",
    solutionKey: "caseStudies.foroCanaryIslands.solution",
    resultKey: "caseStudies.foroCanaryIslands.result",
    metrics: [
      {
        value: "100+",
        labelKey: "caseStudies.metrics.attendees",
      },
      {
        value: "1",
        labelKey: "caseStudies.metrics.recurringEvent",
      },
    ],
    image:
      "/assets/img/casos-de-exito/canary-islands-games/canary-islands-games.jpg",
    theme: "events" as const,
    slug: "foro-canary-islands-games",
  },
  {
    titleKey: "caseStudies.holidayWorld.title",
    categoryKey: "caseStudies.categories.marketing",
    challengeKey: "caseStudies.holidayWorld.challenge",
    solutionKey: "caseStudies.holidayWorld.solution",
    resultKey: "caseStudies.holidayWorld.result",
    metrics: [
      {
        value: "10K+",
        labelKey: "caseStudies.metrics.attendees",
      },
      {
        value: "3",
        labelKey: "caseStudies.metrics.eventDays",
      },
    ],
    image: "/assets/img/homepage/gaming.png",
    theme: "marketing" as const,
    slug: "holiday-world",
  },
  {
    titleKey: "caseStudies.baseEleague.title",
    categoryKey: "caseStudies.categories.marketing",
    challengeKey: "caseStudies.baseEleague.challenge",
    solutionKey: "caseStudies.baseEleague.solution",
    resultKey: "caseStudies.baseEleague.result",
    metrics: [
      {
        value: "5M+",
        labelKey: "caseStudies.metrics.impressions",
      },
      {
        value: "100+",
        labelKey: "caseStudies.metrics.qualifiedLeads",
      },
    ],
    image: "/assets/img/casos-de-exito/base-eleague/base.png",
    theme: "marketing" as const,
    slug: "base-eleague",
  },
  {
    titleKey: "caseStudies.alisiosLive.title",
    categoryKey: "caseStudies.categories.events",
    challengeKey: "caseStudies.alisiosLive.challenge",
    solutionKey: "caseStudies.alisiosLive.solution",
    resultKey: "caseStudies.alisiosLive.result",
    metrics: [
      {
        value: "5K+",
        labelKey: "caseStudies.metrics.attendees",
      },
      {
        value: "3",
        labelKey: "caseStudies.metrics.eventDays",
      },
    ],
    image: "/assets/img/casos-de-exito/alisios/alisios.jpg",
    theme: "events" as const,
    slug: "alisios-live-gaming",
  },
];

// Helper functions
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
};

export const getCaseStudiesByCategory = (
  category: "digital" | "marketing" | "events"
): CaseStudy[] => {
  return caseStudies.filter((caseStudy) => caseStudy.theme === category);
};

export const getFeaturedCaseStudies = (limit: number = 4): CaseStudy[] => {
  return caseStudies.slice(0, limit);
};

export const getRelatedCaseStudies = (
  currentSlug: string,
  limit: number = 3
): CaseStudy[] => {
  const currentCase = getCaseStudyBySlug(currentSlug);
  if (!currentCase) return [];

  return caseStudies
    .filter(
      (caseStudy) =>
        caseStudy.slug !== currentSlug && caseStudy.theme === currentCase.theme
    )
    .slice(0, limit);
};
