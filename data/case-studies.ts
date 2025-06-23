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
        labelKey: "caseStudies.metrics.processReduction"
      },
      {
        value: "300%", 
        labelKey: "caseStudies.metrics.seoImprovement"
      }
    ],
    image: "/assets/img/homepage/dosxdos.jpg",
    theme: 'digital' as const,
    slug: "dos-x-dos-grupo-imagen"
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
        labelKey: "caseStudies.metrics.dataUnification"
      },
      {
        value: "24/7",
        labelKey: "caseStudies.metrics.realTimeMonitoring"
      }
    ],
    image: "/assets/img/homepage/energia-solar-canarias.webp",
    theme: 'digital' as const,
    slug: "energia-solar-canarias"
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
        labelKey: "caseStudies.metrics.impressions"
      },
      {
        value: "4K+", 
        labelKey: "caseStudies.metrics.qualifiedLeads"
      }
    ],
    image: "/assets/img/homepage/toyota.png",
    theme: 'marketing' as const,
    slug: "toyota-canarias"
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
        labelKey: "caseStudies.metrics.attendees"
      },
      {
        value: "2",
        labelKey: "caseStudies.metrics.cities"
      }
    ],
    image: "/assets/img/homepage/gaming.png",
    theme: 'events' as const,
    slug: "canarias-game-show"
  }
];

// Helper functions
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
};

export const getCaseStudiesByCategory = (category: 'digital' | 'marketing' | 'events'): CaseStudy[] => {
  return caseStudies.filter(caseStudy => caseStudy.theme === category);
};

export const getFeaturedCaseStudies = (limit: number = 4): CaseStudy[] => {
  return caseStudies.slice(0, limit);
};

export const getRelatedCaseStudies = (currentSlug: string, limit: number = 3): CaseStudy[] => {
  const currentCase = getCaseStudyBySlug(currentSlug);
  if (!currentCase) return [];
  
  return caseStudies
    .filter(caseStudy => 
      caseStudy.slug !== currentSlug && 
      caseStudy.theme === currentCase.theme
    )
    .slice(0, limit);
};