"use client";

import { useTranslation } from "@/hooks/useTranslation";
import {
  Building,
  CheckCircle,
  Briefcase,
  CreditCard,
  Users,
  Copyright,
  Lock,
  AlertTriangle,
  XCircle,
  Scale,
  Shield,
  Edit,
  FileText,
} from "lucide-react";
import {
  CardContainer,
  CardBody,
  CardBackFrame,
  CardGlow,
  CardImageLayer,
  CardContentLayer,
} from "@/components/ui/3DCard";

export default function TermsConditionsContentSection() {
  const { t } = useTranslation();

  type Section = {
    icon: typeof Building;
    key: string;
    bubble: string;
    glow: string;
    hasCompanyInfo?: boolean;
    hasServicesList?: boolean;
    hasObligationsList?: boolean;
  };

  const sections: Section[] = [
    {
      icon: Building,
      key: "company-info",
      hasCompanyInfo: true,
      bubble: "bg-orange-gradient",
      glow: "teal",
    },
    {
      icon: CheckCircle,
      key: "acceptance",
      bubble: "bg-teal-gradient",
      glow: "teal",
    },
    {
      icon: Briefcase,
      key: "services",
      hasServicesList: true,
      bubble: "bg-skyblue-gradient",
      glow: "teal",
    },
    {
      icon: FileText,
      key: "service-agreement",
      bubble: "bg-purple-gradient",
      glow: "violeta",
    },
    {
      icon: CreditCard,
      key: "payment",
      bubble: "bg-darkblue-gradient",
      glow: "azul",
    },
    {
      icon: Users,
      key: "client-obligations",
      hasObligationsList: true,
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    {
      icon: Copyright,
      key: "intellectual-property",
      bubble: "bg-teal-gradient",
      glow: "teal",
    },
    {
      icon: Lock,
      key: "confidentiality",
      bubble: "bg-purple-gradient",
      glow: "violeta",
    },
    {
      icon: AlertTriangle,
      key: "liability",
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    {
      icon: XCircle,
      key: "termination",
      bubble: "bg-skyblue-gradient",
      glow: "teal",
    },
    {
      icon: Scale,
      key: "applicable-law",
      bubble: "bg-darkblue-gradient",
      glow: "azul",
    },
    {
      icon: Shield,
      key: "data-protection",
      bubble: "bg-teal-gradient",
      glow: "teal",
    },
    {
      icon: Edit,
      key: "changes",
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    {
      icon: FileText,
      key: "miscellaneous",
      bubble: "bg-purple-gradient",
      glow: "violeta",
    },
  ];

  const glowColor = (k: string) =>
    k === "teal"
      ? "rgba(76,188,197,0.22)"
      : k === "violeta"
      ? "rgba(78,58,115,0.22)"
      : k === "mandarina"
      ? "rgba(238,111,69,0.22)"
      : "rgba(18,28,48,0.22)";

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Intro */}
        <header className="text-center pb-14">
          <h2 className="section-title text-teal pb-4">
            {t("terms-conditions.intro.title")}
          </h2>
          <p className="text-lg md:text-xl text-negro/90 pb-2">
            {t("terms-conditions.intro.description")}
          </p>
          <span className="text-sm text-azul-profundo font-semibold">
            {t("terms-conditions.intro.effective-date")}
          </span>
        </header>

        {/* Feed with subtle left/right offsets */}
        <div className="flex flex-col gap-12">
          {sections.map((section, i) => {
            const Icon = section.icon;
            const offset =
              i % 6 === 0
                ? "md:ml-16"
                : i % 6 === 1
                ? "md:mr-14"
                : i % 6 === 2
                ? "md:ml-20"
                : i % 6 === 3
                ? "md:mr-12"
                : i % 6 === 4
                ? "md:ml-8"
                : "md:mr-8";

            return (
              <CardContainer
                key={section.key}
                containerClassName={offset}
                className="w-full"
              >
                <CardBody className="w-full rounded-2xl md:rounded-3xl overflow-visible">
                  {/* Back bevel frame (fixed Z) */}
                  <CardBackFrame className="absolute -inset-1 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-hielo/70 border border-hielo/50" />

                  {/* Ambient glow (fixed Z) */}
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

                  {/* Surface + content (parallax handled internally) */}
                  <CardContentLayer className="relative w-full rounded-2xl md:rounded-3xl glass-effect border border-hielo/40 shadow-xl overflow-hidden">
                    {/* Header */}
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
                          {t(`terms-conditions.${section.key}.title`)}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-4 leading-relaxed">
                      {section.hasCompanyInfo && (
                        <div className="p-4 rounded-lg border-l-4 border-azul-profundo bg-hielo/30">
                          <p>
                            <b>{t("terms-conditions.company-info.company")}:</b>{" "}
                            Team Galaga SL
                          </p>
                          <p>
                            <b>{t("terms-conditions.company-info.cif")}:</b>{" "}
                            B-42.833.244
                          </p>
                          <p>
                            <b>{t("terms-conditions.company-info.address")}:</b>{" "}
                            C/ Málaga, 10 - 35200 Telde, Las Palmas, España
                          </p>
                          <p>
                            <b>{t("terms-conditions.company-info.website")}:</b>{" "}
                            galagaagency.com
                          </p>
                          <p>
                            <b>{t("terms-conditions.company-info.email")}:</b>{" "}
                            info@galagaagency.com
                          </p>
                        </div>
                      )}

                      {section.hasServicesList && (
                        <div className="p-4 rounded-lg border-l-4 border-mandarina bg-mandarina/10">
                          <p>{t("terms-conditions.services.description1")}</p>
                          <ul className="list-disc list-inside">
                            {[
                              "digital-marketing",
                              "web-development",
                              "branding",
                              "social-media",
                              "consulting",
                              "automation",
                            ].map((s) => (
                              <li key={s}>
                                {t(`terms-conditions.services.${s}`)}
                              </li>
                            ))}
                          </ul>
                          <p>{t("terms-conditions.services.description2")}</p>
                        </div>
                      )}

                      {section.hasObligationsList && (
                        <div className="p-4 rounded-lg border-l-4 border-mandarina bg-mandarina/10">
                          <p>
                            {t(
                              "terms-conditions.client-obligations.description"
                            )}
                          </p>
                          <ul className="list-disc list-inside">
                            {[
                              "content",
                              "access",
                              "feedback",
                              "legal-compliance",
                            ].map((o) => (
                              <li key={o}>
                                {t(`terms-conditions.client-obligations.${o}`)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {!section.hasCompanyInfo &&
                        !section.hasServicesList &&
                        !section.hasObligationsList && (
                          <>
                            {[
                              "description1",
                              "description2",
                              "description3",
                              "spanish-law",
                              "jurisdiction",
                              "disputes",
                              "gdpr-compliance",
                              "right-to-modify",
                              "notification",
                              "severability",
                              "entire-agreement",
                              "language",
                              "vat",
                              "methods",
                              "late-fees",
                              "client-materials",
                              "galaga-work",
                              "final-deliverables",
                              "force-majeure",
                              "max-liability",
                              "notice",
                              "immediate",
                              "consequences",
                              "cancellation",
                              "privacy-policy",
                              "description",
                            ].map((desc) => {
                              const content = t(
                                `terms-conditions.${section.key}.${desc}`
                              );
                              if (
                                !content ||
                                content ===
                                  `terms-conditions.${section.key}.${desc}`
                              )
                                return null;
                              const highlight = [
                                "late-fees",
                                "cancellation",
                                "max-liability",
                                "privacy-policy",
                                "final-deliverables",
                              ].includes(desc);
                              return (
                                <p
                                  key={desc}
                                  className={
                                    highlight
                                      ? "text-azul-profundo font-semibold"
                                      : undefined
                                  }
                                >
                                  {content}
                                </p>
                              );
                            })}
                          </>
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
