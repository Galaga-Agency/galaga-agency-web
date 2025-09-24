"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Building, Briefcase, FileText } from "lucide-react";
import {
  CardContainer,
  CardBody,
  CardBackFrame,
  CardGlow,
  CardImageLayer,
  CardContentLayer,
} from "@/components/ui/3DCard";

export default function LegalNoticeContentSection() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Building,
      key: "company-info",
      bubble: "bg-teal-gradient",
      glow: "teal",
    },
    {
      icon: Briefcase,
      key: "activity",
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    {
      icon: FileText,
      key: "registration",
      bubble: "bg-purple-gradient",
      glow: "violeta",
    },
  ];

  const glowColor = (k: string) =>
    k === "teal"
      ? "rgba(76,188,197,0.22)"
      : k === "mandarina"
      ? "rgba(238,111,69,0.22)"
      : "rgba(78,58,115,0.22)";

  return (
    <section className="section bg-white">
      <div className="container">
        <header className="text-center pb-14">
          <h2 className="section-title text-teal pb-4">
            {t("legal-notice.intro.title")}
          </h2>
          <p className="text-lg md:text-xl text-negro/90">
            {t("legal-notice.intro.description")}
          </p>
        </header>

        <div className="flex flex-col gap-12">
          {sections.map((section, i) => {
            const Icon = section.icon;
            const offset =
              i === 0 ? "md:ml-16" : i === 1 ? "md:mr-14" : "md:ml-20";

            return (
              <CardContainer
                key={section.key}
                containerClassName={offset}
                className="w-full"
              >
                <CardBody className="w-full rounded-2xl md:rounded-3xl overflow-visible">
                  <CardBackFrame className="absolute -inset-1 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-hielo/70 border border-hielo/50" />

                  <CardGlow className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none">
                    <div
                      className="absolute inset-0 rounded-2xl md:rounded-3xl"
                      style={{
                        background: `radial-gradient(420px 220px at 50% 50%, ${glowColor(
                          section.glow
                        )} 0%, transparent 70%)`,
                        opacity: 0.0,
                      }}
                    />
                  </CardGlow>

                  <CardContentLayer className="relative w-full rounded-2xl md:rounded-3xl glass-effect border border-hielo/40 shadow-xl overflow-hidden">
                    <div className="flex items-center gap-4 p-6 border-b border-hielo/40">
                      <CardImageLayer className="w-14 h-14">
                        <div
                          className={`w-14 h-14 ${section.bubble} rounded-full flex items-center justify-center shadow-xl`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </CardImageLayer>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-azul-profundo">
                          {t(`legal-notice.${section.key}.title`)}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-3 leading-relaxed">
                      {section.key === "company-info" ? (
                        <div className="p-4 rounded-lg border-l-4 border-teal bg-hielo/30">
                          <p className="font-semibold">
                            {t("legal-notice.company-info.company")}
                          </p>
                          <p className="font-semibold">
                            {t("legal-notice.company-info.cif")}
                          </p>
                          <p className="font-semibold">
                            {t("legal-notice.company-info.address")}
                          </p>
                          <p className="font-semibold">
                            {t("legal-notice.company-info.email")}
                          </p>
                          <p className="font-semibold">
                            {t("legal-notice.company-info.website")}
                          </p>
                        </div>
                      ) : (
                        <p>{t(`legal-notice.${section.key}.description`)}</p>
                      )}
                    </div>
                  </CardContentLayer>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
