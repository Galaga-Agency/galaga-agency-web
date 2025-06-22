import { ClientCategory, FeaturedClient, ImpactMetric } from "@/types/clients";

export const clientCategories: ClientCategory[] = [
  {
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    titleKey: "about-page.clients.retail.title",
    descriptionKey: "about-page.clients.retail.description",
    color: "teal",
    accent: "azul-profundo"
  },
  {
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    titleKey: "about-page.clients.growing.title",
    descriptionKey: "about-page.clients.growing.description",
    color: "mandarina",
    accent: "naranja-tostado"
  },
  {
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    titleKey: "about-page.clients.innovative.title",
    descriptionKey: "about-page.clients.innovative.description",
    color: "violeta",
    accent: "azul-profundo"
  }
];

export const featuredClients: FeaturedClient[] = [
  {
    name: "Energía Solar Canarias",
    logo: "/assets/img/clients/energia-solar-canarias.png",
    category: "clients.energiaSolar.category",
    description: "clients.energiaSolar.description",
    results: [
      { metric: "clients.energiaSolar.results.efficiency", value: "100%" },
      { metric: "clients.energiaSolar.results.monitoring", value: "Real-time" }
    ],
    image: "/assets/img/clients/energia-solar-canarias-cover.png",
    color: "teal"
  },
  {
    name: "Toyota Canarias", 
    logo: "/assets/img/clients/toyota.png",
    category: "clients.toyota.category",
    description: "clients.toyota.description",
    results: [
      { metric: "clients.toyota.results.impressions", value: "375K+" },
      { metric: "clients.toyota.results.leads", value: "4K+" }
    ],
    image: "/assets/img/clients/toyota-cover.png",
    color: "mandarina"
  },
  {
    name: "dos x dos Grupo Imagen",
    logo: "/assets/img/clients/dosxdos.png",
    category: "clients.dosxdos.category", 
    description: "clients.dosxdos.description",
    results: [
      { metric: "clients.dosxdos.results.integration", value: "100%" },
      { metric: "clients.dosxdos.results.seo", value: "+300%" }
    ],
    image: "/assets/img/clients/dosxdos-cover.png",
    color: "violeta"
  }
];

export const impactMetrics: ImpactMetric[] = [
  {
    value: "100+",
    labelKey: "about-page.clients.impact.projects",
    color: "teal"
  },
  {
    value: "5M+",
    labelKey: "about-page.clients.impact.impressions", 
    color: "mandarina"
  },
  {
    value: "62K+",
    labelKey: "about-page.clients.impact.attendees",
    color: "violeta"
  },
  {
    value: "100%",
    labelKey: "about-page.clients.impact.satisfaction",
    color: "teal"
  }
];