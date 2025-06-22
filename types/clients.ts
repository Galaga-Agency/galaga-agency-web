export interface ClientCategory {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  color: string;
  accent: string;
}

export interface ClientResult {
  metric: string;
  value: string;
}

export interface FeaturedClient {
  name: string;
  logo: string;
  category: string;
  description: string;
  results: ClientResult[];
  image: string;
  color: string;
}

export interface ImpactMetric {
  value: string;
  labelKey: string;
  color: string;
}