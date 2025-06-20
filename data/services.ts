import { Service } from '@/types/service';
import { 
  FaBullseye, 
  FaCogs, 
  FaRocket, 
  FaGamepad, 
  FaGraduationCap, 
  FaDollarSign 
} from 'react-icons/fa';

export const services: Service[] = [
  {
    icon: FaBullseye,
    title: "services.strategy.title",
    description: "services.strategy.description",
    features: [
      "services.strategy.feature1",
      "services.strategy.feature2",
    ],
    theme: "primary",
    size: "small", // 1/3 width
    href: "/services/strategy"
  },
  {
    icon: FaCogs,
    title: "services.automation.title",
    description: "services.automation.description",
    features: [
      "services.automation.feature1",
      "services.automation.feature2",
    ],
    theme: "creative",
    size: "large", // 2/3 width
    href: "/services/automation"
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
    theme: "accent",
    size: "large", // 2/3 width
    href: "/services/innovation"
  },
  {
    icon: FaGamepad,
    title: "services.immersive.title",
    description: "services.immersive.description",
    features: [
      "services.immersive.feature1",
      "services.immersive.feature2",
      "services.immersive.feature3",
    ],
    theme: "warm",
    size: "small", // 1/3 width
    href: "/services/immersive"
  },
  {
    icon: FaGraduationCap,
    title: "services.training.title",
    description: "services.training.description",
    features: [
      "services.training.feature1",
      "services.training.feature2",
      "services.training.feature3",
      "services.training.feature4",
    ],
    theme: "secondary",
    size: "small", // 1/3 width
    href: "/services/training"
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
    theme: "electric",
    size: "large", // 2/3 width
    href: "/services/grants"
  },
];