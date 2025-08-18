// /data/services.ts
import { Service } from "@/types/service";
import {
  FaBullseye,
  FaCogs,
  FaRocket,
  FaEye,
  FaGraduationCap,
  FaDollarSign,
} from "react-icons/fa";

export const services: Service[] = [
  {
    icon: FaBullseye,
    title: "services.strategy.title",
    description: "services.strategy.description",
    features: [
      "services.strategy.feature1",
      "services.strategy.feature2",
      "services.strategy.feature3",
    ],
    theme: "teal",
    size: "small",
    href: "/servicios/consultoria-estrategica",
    slug: "services.strategy.slug",
  },
  {
    icon: FaCogs,
    title: "services.automation.title",
    description: "services.automation.description",
    features: [
      "services.automation.feature1",
      "services.automation.feature2",
      "services.automation.feature3",
    ],
    theme: "azul-profundo",
    size: "large",
    href: "/servicios/automatizacion",
    slug: "services.automation.slug",
  },
  {
    icon: FaRocket,
    title: "services.innovation.title",
    description: "services.innovation.description",
    features: [
      "services.innovation.feature1",
      "services.innovation.feature2",
      "services.innovation.feature3",
    ],
    theme: "mandarina",
    size: "large",
    href: "/servicios/innovacion-tecnologica",
    slug: "services.innovation.slug",
  },
  {
    icon: FaEye,
    title: "services.immersive-marketing.title",
    description: "services.immersive-marketing.description",
    features: [
      "services.immersive-marketing.feature1",
      "services.immersive-marketing.feature2",
      "services.immersive-marketing.feature3",
    ],
    theme: "violeta",
    size: "small",
    href: "/servicios/marketing-inmersivo",
    slug: "services.immersive-marketing.slug",
  },
  {
    icon: FaGraduationCap,
    title: "services.training.title",
    description: "services.training.description",
    features: [
      "services.training.feature1",
      "services.training.feature2",
      "services.training.feature3",
    ],
    theme: "azul-profundo",
    size: "small",
    href: "/servicios/formacion",
    slug: "services.training.slug",
  },
  {
    icon: FaDollarSign,
    title: "services.grants.title",
    description: "services.grants.description",
    features: [
      "services.grants.feature1",
      "services.grants.feature2",
      "services.grants.feature3",
      "services.grants.feature4",
    ],
    theme: "teal",
    size: "large",
    href: "/servicios/subvenciones",
    slug: "services.grants.slug",
  },
];
