"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { technologies } from "@/data/technologies";
import TechItem from "@/components/TechItem";
import Marquee from "react-fast-marquee";

export default function TechnologyStackSection() {
  const { t } = useTranslation();

  // Split technologies into two rows
  const midpoint = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, midpoint);
  const row2 = technologies.slice(midpoint);

  return (
    <section
      className="technology-stack-section relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #c3e5ef 100%)",
      }}
    >
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      {/* Section content with padding */}
      <div className="section relative z-10">
        <div className="container">
          {/* Section Header */}
          <div className="text-center pb-6">
            <span className="tech-stack-eyebrow text-teal font-semibold tracking-wider uppercase text-sm opacity-0">
              {t("services-page.technologies.eyebrow")}
            </span>
            
            <h2 className="tech-stack-title section-title text-azul-profundo pt-4 pb-6 opacity-0">
              {t("services-page.technologies.title")}
            </h2>
            
            <p className="tech-stack-subtitle text-lg md:text-xl text-negro/70 opacity-0">
              {t("services-page.technologies.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Double Marquee - Full width outside container */}
      <div className="tech-category relative z-10">
        {/* First Marquee - Left to Right */}
        <div className="pb-8">
          <Marquee speed={50} gradient={false} autoFill={true}>
            {row1.map((tech) => (
              <TechItem key={tech.id} tech={tech} />
            ))}
          </Marquee>
        </div>

        {/* Second Marquee - Right to Left */}
        <div>
          <Marquee speed={50} gradient={false} autoFill={true} direction="right">
            {row2.map((tech) => (
              <TechItem key={tech.id} tech={tech} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Bottom section */}
      <div className="section relative z-10">
        <div className="container">
          {/* Bottom message */}
          <div className="tech-message text-center">
            <p className="text-subheading text-azul-profundo font-light">
              {t("services-page.technologies.message")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}