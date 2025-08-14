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
    id: "dos-x-dos-grupo-imagen",
    slug: "dos-por-dos-grupo-imagen",
    name: "Dos x Dos Grupo Imagen",
    logo: "/assets/img/clients/dos-x-dos-grupo-imagen.png",
    category: "projects.dos-x-dos-grupo-imagen.category",
    description: "caseStudies.dos-x-dos-grupo-imagen.intro",
    metrics: [
      {
        value: "100%",
        label: "caseStudies.metrics.processReduction",
      },
      {
        value: "SEO Boost",
        label: "caseStudies.metrics.seoImprovement",
      },
    ],
    image:
      "/assets/img/casos-de-exito/dos-x-dos-grupo-imagen/dos-x-dos-grupo-imagen-web.png",
    background:
      "/assets/img/casos-de-exito/dos-x-dos-grupo-imagen/dos-x-dos-grupo-imagen-portada.png",
    color: "mandarina",
  },
  {
    id: "energia-solar",
    slug: "energia-solar-canarias",
    name: "Energía Solar Canarias",
    logo: "/assets/img/clients/energia-solar-canarias.png",
    category: "projects.energia-solar.category",
    description: "caseStudies.energia-solar-canarias.intro",
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
    image: "/assets/img/casos-de-exito/esc/energia-solar-canarias-app.png",
    background:
      "/assets/img/casos-de-exito/esc/energia-solar-canarias-portada.png",
    color: "teal",
  },
];
