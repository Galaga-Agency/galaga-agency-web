export interface ParallaxItem {
  id: number;
  title: string; // i18n key
  image: string;
  video?: string; // Optional video property
}

export const parallaxItems: ParallaxItem[] = [
  {
    id: 1,
    title: "homepage.hero-section.hero-features.digitalization-plan",
    image: "/assets/img/features/consultoria.jpg",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 2,
    title: "homepage.hero-section.hero-features.crm-erp",
    image: "/assets/img/features/crm-erp.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 3,
    title: "homepage.hero-section.hero-features.automations",
    image: "/assets/img/features/automatizacion.jpg",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 4,
    title: "homepage.hero-section.hero-features.cloud-collab",
    image: "/assets/img/features/cloud-collab.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 5,
    title: "homepage.hero-section.hero-features.strategic-consulting",
    image: "/assets/img/servicios/consultoria.jpg",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 6,
    title: "homepage.hero-section.hero-features.system-integration",
    image: "/assets/img/features/crm.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 7,
    title: "homepage.hero-section.hero-features.task-automation",
    image: "/assets/img/servicios/automatizacion.jpg",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 8,
    title: "homepage.hero-section.hero-features.artificial-intelligence",
    image: "/assets/img/servicios/innovacion.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 9,
    title: "homepage.hero-section.hero-features.interactive-experiences",
    image: "/assets/img/features/interactive-corners.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 10,
    title: "homepage.hero-section.hero-features.gamification",
    image: "/assets/img/features/gaming.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 11,
    title: "homepage.hero-section.hero-features.immersive-technologies",
    image: "/assets/img/features/base.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
  {
    id: 12,
    title: "homepage.hero-section.hero-features.promotional-spaces",
    image: "/assets/img/features/dynamic-furniture.png",
    video: "/assets/videos/galaga-presentation.mp4",
  },
];
