"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { CheckCircle, ArrowRight } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 4000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-success text-center py-12">
        <div className="w-20 h-20 bg-radial-[at_30%_25%] from-hielo/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center mx-auto pb-8 shadow-xl">
          <CheckCircle className="w-10 h-10 text-blanco drop-shadow-lg" />
        </div>
        <h3 className="text-2xl font-bold text-teal pb-4 leading-tight">
          {t("contact.form.success.title")}
        </h3>
        <p className="text-lg text-negro leading-relaxed">
          {t("contact.form.success.description")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6 ">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-azul-profundo pb-3"
          >
            {t("contact.form.name")} <span className="text-mandarina">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 bg-blanco text-negro placeholder:text-negro/50"
            placeholder={t("contact.form.namePlaceholder")}
          />
        </div>

        <div className="form-field">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-azul-profundo pb-3"
          >
            {t("contact.form.email")} <span className="text-mandarina">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 bg-blanco text-negro placeholder:text-negro/50"
            placeholder={t("contact.form.emailPlaceholder")}
          />
        </div>
      </div>

      {/* Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-azul-profundo pb-3"
          >
            {t("contact.form.company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 bg-blanco text-negro placeholder:text-negro/50"
            placeholder={t("contact.form.companyPlaceholder")}
          />
        </div>

        <div className="form-field">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-azul-profundo pb-3"
          >
            {t("contact.form.phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 bg-blanco text-negro placeholder:text-negro/50"
            placeholder={t("contact.form.phonePlaceholder")}
          />
        </div>
      </div>

      {/* Service */}
      <div className="form-field">
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-azul-profundo pb-3"
        >
          {t("contact.form.serviceInterest")}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-4 border-2 border-hielo rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 bg-blanco text-negro"
        >
          <option value="">{t("contact.form.selectService")}</option>
          <option value="strategy">{t("contact.form.services.strategy")}</option>
          <option value="automation">{t("contact.form.services.automation")}</option>
          <option value="innovation">{t("contact.form.services.innovation")}</option>
          <option value="immersive">{t("contact.form.services.immersive")}</option>
          <option value="training">{t("contact.form.services.training")}</option>
          <option value="grants">{t("contact.form.services.grants")}</option>
          <option value="other">{t("contact.form.services.other")}</option>
        </select>
      </div>

      {/* Message */}
      <div className="form-field">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-azul-profundo pb-3"
        >
          {t("contact.form.message")} <span className="text-mandarina">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-4 border-2 border-hielo rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 resize-vertical bg-blanco text-negro placeholder:text-negro/50"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>

      {/* Submit - Using your PrimaryButton */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full contact-form-submit group px-12 py-5 text-xl font-bold rounded-lg bg-teal text-blanco shadow-md hover:shadow-lg hover:bg-teal/90 focus:outline-none transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-3">
              <div className="loading-dot-1 w-2 h-2 bg-blanco rounded-full"></div>
              <div className="loading-dot-2 w-2 h-2 bg-blanco rounded-full"></div>
              <div className="loading-dot-3 w-2 h-2 bg-blanco rounded-full"></div>
              <span>{t("contact.form.sending")}</span>
            </div>
          ) : (
            <>
              <span>{t("contact.form.send")}</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </button>
      </div>

      {/* Privacy */}
      <p className="text-xs text-negro/60 text-center pt-2">
        {t("contact.form.privacy")}
      </p>
    </form>
  );
}