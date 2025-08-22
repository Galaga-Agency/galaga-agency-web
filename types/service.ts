export interface Service {
  id: number;
  icon: any;
  slug: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  theme: string;
  size: 'small' | 'large';
  hasRedirection: boolean;
}