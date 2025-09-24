"use client";

import { useTranslation } from "@/hooks/useTranslation";
import {
  Shield,
  Users,
  Lock,
  Eye,
  Globe,
  Clock,
  FileText,
  Phone,
  AlertCircle,
  UserCheck,
} from "lucide-react";
import {
  CardContainer,
  CardBody,
  CardBackFrame,
  CardGlow,
  CardImageLayer,
  CardContentLayer,
} from "@/components/ui/3DCard";

export default function PrivacyPolicyContentSection() {
  const { t } = useTranslation();

  type Section = {
    icon: typeof Users;
    key: string;
    bubble: string;
    glow: string;
    hasCompanyInfo?: boolean;
    hasComplaintInfo?: boolean;
  };

  const sections: Section[] = [
    {
      icon: Users,
      key: "who-we-are",
      hasCompanyInfo: true,
      bubble: "bg-teal-gradient",
      glow: "teal",
    },
    {
      icon: Eye,
      key: "data-usage",
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    {
      icon: Lock,
      key: "why-data",
      bubble: "bg-purple-gradient",
      glow: "violeta",
    },
    {
      icon: Shield,
      key: "who-knows",
      bubble: "bg-skyblue-gradient",
      glow: "teal",
    },
    { icon: Lock, key: "protection", bubble: "bg-teal-gradient", glow: "teal" },
    {
      icon: Globe,
      key: "transfers",
      bubble: "bg-darkblue-gradient",
      glow: "azul",
    },
    {
      icon: Clock,
      key: "retention",
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    {
      icon: FileText,
      key: "rights",
      bubble: "bg-purple-gradient",
      glow: "violeta",
    },
    {
      icon: UserCheck,
      key: "consent",
      bubble: "bg-skyblue-gradient",
      glow: "teal",
    },
    {
      icon: Phone,
      key: "complaints",
      hasComplaintInfo: true,
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    { icon: Users, key: "profiles", bubble: "bg-teal-gradient", glow: "teal" },
    {
      icon: AlertCircle,
      key: "other-purposes",
      bubble: "bg-purple-gradient",
      glow: "violeta",
    },
    {
      icon: FileText,
      key: "cookies-usage",
      bubble: "bg-teal-gradient",
      glow: "teal",
    },
    {
      icon: Phone,
      key: "contact-form-data",
      bubble: "bg-orange-gradient",
      glow: "mandarina",
    },
    {
      icon: Globe,
      key: "language-preference",
      bubble: "bg-skyblue-gradient",
      glow: "teal",
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
        <header className="text-center pb-14">
          <h2 className="section-title text-teal pb-4">
            {t("privacy-policy.intro.title")}
          </h2>
          <p className="text-lg md:text-xl text-negro/90 pb-2">
            {t("privacy-policy.intro.description")}
          </p>
          <span className="text-sm text-azul-profundo font-semibold">
            {t("privacy-policy.intro.thanks")}
          </span>
        </header>

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
                          {t(`privacy-policy.${section.key}.title`)}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-4 leading-relaxed">
                      {section.hasCompanyInfo && (
                        <div className="p-4 rounded-lg border-l-4 border-teal bg-hielo/30">
                          <p>
                            <b>{t("privacy-policy.who-we-are.company")}:</b>{" "}
                            Team Galaga SL
                          </p>
                          <p>
                            <b>{t("privacy-policy.who-we-are.cif")}:</b>{" "}
                            B-42.833.244
                          </p>
                          <p>
                            <b>{t("privacy-policy.who-we-are.activity")}:</b>{" "}
                            {t("privacy-policy.who-we-are.activity-value")}
                          </p>
                          <p>
                            <b>{t("privacy-policy.who-we-are.address")}:</b>{" "}
                            C/Málaga, 10 Telde
                          </p>
                          <p>
                            <b>{t("privacy-policy.who-we-are.email")}:</b>{" "}
                            info@galagaagency.com
                          </p>
                          <p>
                            <b>{t("privacy-policy.who-we-are.website")}:</b>{" "}
                            galagaagency.com
                          </p>
                        </div>
                      )}

                      {section.hasComplaintInfo && (
                        <div className="p-4 rounded-lg border-l-4 border-mandarina bg-mandarina/10">
                          <p>
                            <b>
                              {t("privacy-policy.complaints.website-label")}:
                            </b>{" "}
                            www.agpd.es
                          </p>
                          <p>
                            <b>
                              {t("privacy-policy.complaints.address-label")}:
                            </b>{" "}
                            Agencia Española de Protección de Datos, C/ Jorge
                            Juan, 6, 28001-Madrid
                          </p>
                          <p>
                            <b>{t("privacy-policy.complaints.phone-label")}:</b>{" "}
                            901 100 099 / 91 266 35 17
                          </p>
                        </div>
                      )}

                      {section.key === "contact-form-data" && (
                        <div className="flex flex-col gap-3">
                          <p className="text-azul-profundo font-semibold">
                            {t("privacy-policy.contact-form-data.what")}
                          </p>
                          <p>{t("privacy-policy.contact-form-data.why")}</p>
                          <p>
                            {t("privacy-policy.contact-form-data.retention")}
                          </p>
                          <p className="text-sm text-negro/80">
                            {t("privacy-policy.contact-form-data.legal-basis")}
                          </p>
                        </div>
                      )}

                      {section.key === "cookies-usage" && (
                        <div className="flex flex-col gap-3">
                          <p>
                            {t("privacy-policy.cookies-usage.description1")}
                          </p>
                          <p>
                            {t("privacy-policy.cookies-usage.description2")}
                          </p>
                          <p className="text-sm text-azul-profundo font-semibold">
                            {t("privacy-policy.cookies-usage.types")}
                          </p>
                        </div>
                      )}

                      {!section.hasCompanyInfo &&
                        !section.hasComplaintInfo &&
                        section.key !== "contact-form-data" &&
                        section.key !== "cookies-usage" && (
                          <>
                            {[
                              "description1",
                              "description2",
                              "description3",
                              "description",
                            ].map((desc) => {
                              const content = t(
                                `privacy-policy.${section.key}.${desc}`
                              );
                              if (
                                !content ||
                                content ===
                                  `privacy-policy.${section.key}.${desc}`
                              )
                                return null;
                              return <p key={desc}>{content}</p>;
                            })}
                          </>
                        )}

                      {section.key === "who-we-are" && (
                        <p className="text-azul-profundo">
                          {t("privacy-policy.who-we-are.contact")}
                        </p>
                      )}
                      {section.key === "complaints" && (
                        <p className="text-azul-profundo">
                          {t("privacy-policy.complaints.note")}
                        </p>
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
