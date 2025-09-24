"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import SocialIcons from "@/components/SocialIcons";

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-blanco">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left - Content */}
          <div className="lg:col-span-5">
            <h2 className="fade-in-left text-5xl lg:text-7xl font-black leading-[0.95] pb-8 tracking-tight text-azul-profundo">
              {t("contact-page.section.title")}
            </h2>

            <p className="fade-in-left text-xl lg:text-2xl leading-relaxed pb-12 text-negro/80">
              {t("contact-page.section.subtitle")}
            </p>

            <div className="flex flex-col gap-6 pb-8">
              <a
                href="mailto:info@galagaagency.com"
                className="scale-in group flex items-center gap-4 text-azul-profundo hover:text-teal transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold">
                  info@galagaagency.com
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=C.+Arado%2C+35200+Telde"
                target="_blank"
                rel="noopener noreferrer"
                className="scale-in group flex items-center gap-4 text-azul-profundo hover:text-teal transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-mandarina/10 flex items-center justify-center group-hover:bg-mandarina/20 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold">Telde, Las Palmas</span>
              </a>
            </div>

            <div className="fade-in-up border-t border-negro/10 pt-6">
              <p className="text-sm text-negro/60 pb-4 uppercase tracking-wider font-semibold">
                {t("contact-page.social.title")}
              </p>
              <SocialIcons
                linkedinColor="teal"
                instagramColor="mandarina"
                size="lg"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7 slide-in-right">
            <div className="bg-blanco rounded-3xl p-8 lg:p-12 border border-hielo shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
