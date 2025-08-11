export interface ProjectMetric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  metrics: ProjectMetric[];
  image: string;
  color: "teal" | "mandarina" | "violeta";
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "energia-solar",
    name: "Energía Solar Canarias",
    logo: "/assets/img/clients/energia-solar-canarias.png",
    category: "projects.energia-solar.category",
    description: "projects.energia-solar.description",
    metrics: [
      { label: "projects.energia-solar.metrics.platform", value: "projects.energia-solar.values.unified" },
      { label: "projects.energia-solar.metrics.monitoring", value: "projects.energia-solar.values.realtime" }
    ],
    image: "/assets/img/clients/energia-solar-canarias-cover.png",
    color: "teal"
  },
  {
    id: "toyota",
    name: "Toyota Canarias", 
    logo: "/assets/img/clients/toyota.png",
    category: "projects.toyota.category",
    description: "projects.toyota.description",
    metrics: [
      { label: "projects.toyota.metrics.reach", value: "375K+" },
      { label: "projects.toyota.metrics.leads", value: "4K+" }
    ],
    image: "/assets/img/clients/toyota-cover.png",
    color: "mandarina"
  },
  {
    id: "dosxdos",
    name: "Dos x Dos Grupo Imagen",
    logo: "/assets/img/clients/dosxdos.png",
    category: "projects.dosxdos.category", 
    description: "projects.dosxdos.description",
    metrics: [
      { label: "projects.dosxdos.metrics.integration", value: "projects.dosxdos.values.complete" },
      { label: "projects.dosxdos.metrics.performance", value: "projects.dosxdos.values.optimized" }
    ],
    image: "/assets/img/clients/dosxdos-cover.png",
    color: "violeta"
  }
];