"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { technologies } from "@/data/technologies";
import TechItem from "@/components/TechItem";
import Marquee from "react-fast-marquee";

export default function TechnologyStackSection() {
  const { t } = useTranslation();

  // Split technologies into three rows for triple marquee
  const itemsPerRow = Math.ceil(technologies.length / 3);
  const row1 = technologies.slice(0, itemsPerRow);
  const row2 = technologies.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = technologies.slice(itemsPerRow * 2);

  return (
    <section className="technology-stack-section relative overflow-hidden bg-brand-blanco">
      {/* Section Header */}
      <div className="section relative z-10">
        <div className="container">
          <div className="text-center pb-6">
            <span className="tech-stack-eyebrow text-brand-teal font-semibold tracking-wider uppercase text-sm opacity-0">
              {t("services-page.technologies-section.eyebrow")}
            </span>

            <h2 className="tech-stack-title section-title text-brand-azul-profundo pt-4 pb-6 opacity-0">
              {t("services-page.technologies-section.title")}
            </h2>

            <p className="tech-stack-subtitle text-lg md:text-xl text-brand-negro/70 opacity-0">
              {t("services-page.technologies-section.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Triple Marquee - Diagonal Overlapping Bands */}
      <div className="tech-category relative overflow-visible flex flex-col items-center">
        {/* First Marquee - Teal */}
        <div className="bg-teal-gradient py-8 transform -rotate-6 z-30 w-[120vw]">
          <div className="transform">
            <Marquee speed={60} gradient={false} autoFill={true}>
              {row1.map((tech) => (
                <TechItem key={`row1-${tech.id}`} tech={tech} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Second Marquee - Azul Profundo */}
        <div
          className="bg-darkblue-gradient py-8 transform rotate-2 relative z-20 w-[120vw]"
          style={{
            marginBottom: "clamp(2rem, 6vw, 8rem)",
          }}
        >
          {" "}
          <div className="transform">
            <Marquee
              speed={50}
              gradient={false}
              autoFill={true}
              direction="right"
            >
              {row2.map((tech) => (
                <TechItem key={`row2-${tech.id}`} tech={tech} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Third Marquee - Mandarina */}
        <div className="bg-orange-gradient py-8 transform -rotate-6 origin-left relative z-10 w-[120vw]">
          <div className="transform">
            <Marquee speed={45} gradient={false} autoFill={true}>
              {row3.map((tech) => (
                <TechItem key={`row3-${tech.id}`} tech={tech} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="py-16 relative z-10">
        <div className="container">
          <div className="tech-message text-center">
            <p className="text-subheading text-brand-azul-profundo font-light">
              {t("services-page.technologies-section.message")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
