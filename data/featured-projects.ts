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
    slug: "dos-x-dos-grupo-imagen",
    name: "Dos x Dos Grupo Imagen",
    logo: "/assets/img/clients/dos-x-dos-grupo-imagen.png",
    category: "featured-projects.dos-x-dos-grupo-imagen.category",
    description: "featured-projects.dos-x-dos-grupo-imagen.description",
    metrics: [
      {
        label: "featured-projects.dos-x-dos-grupo-imagen.metrics.integration",
        value: "featured-projects.dos-x-dos-grupo-imagen.values.complete",
      },
      {
        label: "featured-projects.dos-x-dos-grupo-imagen.metrics.performance",
        value: "featured-projects.dos-x-dos-grupo-imagen.values.optimized",
      },
    ],
    image:
      "/assets/img/casos-de-exito/dos-x-dos-grupo-imagen/dos-x-dos-grupo-imagen-web.png",
    background:
      "/assets/img/casos-de-exito/dos-x-dos-grupo-imagen/dos-x-dos-grupo-imagen-portada.png",
    color: "mandarina",
  },
  {
    id: "energia-solar-canarias",
    slug: "energia-solar-canarias",
    name: "Energía Solar Canarias",
    logo: "/assets/img/clients/energia-solar-canarias.png",
    category: "featured-projects.energia-solar-canarias.category",
    description: "featured-projects.energia-solar-canarias.description",
    metrics: [
      {
        label: "featured-projects.energia-solar-canarias.metrics.platform",
        value: "featured-projects.energia-solar-canarias.values.unified",
      },
      {
        label: "featured-projects.energia-solar-canarias.metrics.monitoring",
        value: "featured-projects.energia-solar-canarias.values.realtime",
      },
    ],
    image: "/assets/img/casos-de-exito/esc/energia-solar-canarias-app.png",
    background:
      "/assets/img/casos-de-exito/esc/energia-solar-canarias-portada.png",
    color: "teal",
  },
];
