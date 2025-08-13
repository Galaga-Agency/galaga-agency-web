export interface CaseStudyMetric {
  value: string;
  labelKey: string;
}

export interface CaseStudy {
  titleKey: string;
  categoryKey: string;
  challengeKey: string;
  solutionKey: string;
  resultKey: string;
  introKey: string;
  metrics: CaseStudyMetric[];
  image: string;
  theme: 'digital' | 'marketing' | 'events';
  slug: string;
}