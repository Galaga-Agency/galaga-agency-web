export interface Technology {
  id: string;
  name: string;
  logo: string;
  category: string;
  descriptionKey: string;
}

export interface TechnologyCategory {
  key: string;
  titleKey: string;
  color: string;
}

export const technologies: Technology[] = [
  // CRM & Business Tools
  {
    id: "zoho-crm",
    name: "Zoho CRM",
    logo: "/assets/img/technologies/zoho-logo.png",
    category: "crm",
    descriptionKey: "technologies.zoho.description",
  },
  {
    id: "a3-erp",
    name: "A3 ERP",
    logo: "/assets/img/technologies/a3rep-logo.png",
    category: "erp",
    descriptionKey: "technologies.a3erp.description",
  },
  {
    id: "notion",
    name: "Notion",
    logo: "/assets/img/technologies/notion-logo.png",
    category: "collaboration",
    descriptionKey: "technologies.notion.description",
  },

  // AI Tools
  {
    id: "openai",
    name: "Open AI",
    logo: "/assets/img/technologies/openai-logo.png",
    category: "ai",
    descriptionKey: "technologies.openai.description",
  },
  {
    id: "claude",
    name: "Claude AI",
    logo: "/assets/img/technologies/claudeai-logo.png",
    category: "ai",
    descriptionKey: "technologies.claude.description",
  },

  // Development & Web
  {
    id: "nextjs",
    name: "Next.js",
    logo: "/assets/img/technologies/nextjs-logo.png",
    category: "development",
    descriptionKey: "technologies.nextjs.description",
  },
  {
    id: "react",
    name: "React",
    logo: "/assets/img/technologies/react-logo.png",
    category: "development",
    descriptionKey: "technologies.react.description",
  },
  {
    id: "nodejs",
    name: "Node.js",
    logo: "/assets/img/technologies/nodejs-logo.png",
    category: "development",
    descriptionKey: "technologies.nodejs.description",
  },
  {
    id: "javascript",
    name: "Javascript",
    logo: "/assets/img/technologies/javascript-logo.png",
    category: "development",
    descriptionKey: "technologies.javascript.description",
  },
  {
    id: "php",
    name: "PHP",
    logo: "/assets/img/technologies/php-logo.png",
    category: "development",
    descriptionKey: "technologies.php.description",
  },
  {
    id: "java",
    name: "Java",
    logo: "/assets/img/technologies/java-logo.png",
    category: "development",
    descriptionKey: "technologies.java.description",
  },
  {
    id: "vercel",
    name: "Vercel",
    logo: "/assets/img/technologies/vercel-logo.png",
    category: "development",
    descriptionKey: "technologies.vercel.description",
  },
  {
    id: "sass",
    name: "Sass",
    logo: "/assets/img/technologies/scss-logo.png",
    category: "development",
    descriptionKey: "technologies.sass.description",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    logo: "/assets/img/technologies/tailwind-logo.png",
    category: "development",
    descriptionKey: "technologies.tailwind.description",
  },
  {
    id: "gsap",
    name: "GSAP",
    logo: "/assets/img/technologies/gsap-logo.png",
    category: "development",
    descriptionKey: "technologies.gsap.description",
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "/assets/img/technologies/typescript-logo.png",
    category: "development",
    descriptionKey: "technologies.typescript.description",
  },

  // Mobile Development
  {
    id: "android",
    name: "Android",
    logo: "/assets/img/technologies/android-logo.png",
    category: "mobile",
    descriptionKey: "technologies.android.description",
  },
  {
    id: "ios",
    name: "iOS",
    logo: "/assets/img/technologies/ios-logo.png",
    category: "mobile",
    descriptionKey: "technologies.ios.description",
  },

  // Cloud & Infrastructure
  {
    id: "aws",
    name: "AWS",
    logo: "/assets/img/technologies/aws-logo.png",
    category: "cloud",
    descriptionKey: "technologies.aws.description",
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    logo: "/assets/img/technologies/google-cloud-logo.png",
    category: "cloud",
    descriptionKey: "technologies.googlecloud.description",
  },
];

export const technologyCategories: TechnologyCategory[] = [
  {
    key: "crm",
    titleKey: "technologies.categories.crm",
    color: "teal",
  },
  {
    key: "erp",
    titleKey: "technologies.categories.erp",
    color: "azul-profundo",
  },
  {
    key: "ai",
    titleKey: "technologies.categories.ai",
    color: "mandarina",
  },
  {
    key: "development",
    titleKey: "technologies.categories.development",
    color: "violeta",
  },
  {
    key: "mobile",
    titleKey: "technologies.categories.mobile",
    color: "turquesa",
  },
  {
    key: "cloud",
    titleKey: "technologies.categories.cloud",
    color: "naranja-tostado",
  },
  {
    key: "google-workspace",
    titleKey: "technologies.categories.googleWorkspace",
    color: "teal",
  },
  {
    key: "collaboration",
    titleKey: "technologies.categories.collaboration",
    color: "lavanda",
  },
];
