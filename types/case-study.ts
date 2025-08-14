export interface CaseStudy {
  titleKey: string;
  categoryKey: string;
  challengeKey: string;
  solutionKey: string;
  resultKey: string;
  introKey: string;

  // Detailed content structure
  situationTitleKey: string;
  situationDescKey: string;
  approachTitleKey: string;
  approachDescKey: string;
  impactTitleKey: string;
  impactDescKey: string;

  // Lists of content
  issues: string[];
  processes: string[];
  technologies: string[];
  achievements: string[];

  // Project details
  duration: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;

  // Display properties
  image: string;
  gallery: string[];
  theme: "digital" | "marketing" | "events";
  slug: string;
}
