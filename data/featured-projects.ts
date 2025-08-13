export interface ProjectMetric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  slug: string; 
  logo: string;
  category: string;
  description: string;
  background: string;
  metrics: ProjectMetric[];
  image: string;
  color: "teal" | "mandarina" | "violeta";
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "dosxdos",
    slug: "dos-por-dos-grupo-imagen",
    name: "Dos x Dos Grupo Imagen",
    logo: "/assets/img/clients/dosxdos.png",
    category: "projects.dosxdos.category",
    description: "caseStudies.dosxdos.intro",
    metrics: [
      {
        label: "projects.dosxdos.metrics.integration",
        value: "projects.dosxdos.values.complete",
      },
      {
        label: "projects.dosxdos.metrics.performance",
        value: "projects.dosxdos.values.optimized",
      },
    ],
    image: "/assets/img/casos-de-exito/dosxdos/dosxdos-web.png",
    background: "/assets/img/casos-de-exito/dosxdos/dosxdos-portada.png",
    color: "mandarina",
  },
  {
    id: "energia-solar",
    slug: "energia-solar-canarias",
    name: "Energía Solar Canarias",
    logo: "/assets/img/clients/energia-solar-canarias.png",
    category: "projects.energia-solar.category",
    description: "caseStudies.energiaSolar.intro",
    metrics: [
      {
        label: "projects.energia-solar.metrics.platform",
        value: "projects.energia-solar.values.unified",
      },
      {
        label: "projects.energia-solar.metrics.monitoring",
        value: "projects.energia-solar.values.realtime",
      },
    ],
    image: "/assets/img/casos-de-exito/esc/energia-solar-canarias-cover.png",
    background: "/assets/img/casos-de-exito/esc/energia-solar-canarias-portada.png",
    color: "teal",
  },
];
