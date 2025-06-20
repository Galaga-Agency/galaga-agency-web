"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

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

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
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
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-success text-center py-12">
        <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto pb-6 shadow-lg">
          <svg className="w-10 h-10 text-teal" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-teal pb-4">
          {t("contact.form.success.title")}
        </h3>
        <p className="text-grafito text-lg leading-relaxed">
          {t("contact.form.success.description")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="name" className="block text-base font-semibold text-negro pb-3">
            {t("contact.form.name")} <span className="text-mandarina">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo/50 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 text-base bg-white/50 backdrop-blur-sm"
            placeholder={t("contact.form.namePlaceholder")}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email" className="block text-base font-semibold text-negro pb-3">
            {t("contact.form.email")} <span className="text-mandarina">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo/50 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 text-base bg-white/50 backdrop-blur-sm"
            placeholder={t("contact.form.emailPlaceholder")}
          />
        </div>
      </div>

      {/* Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="company" className="block text-base font-semibold text-negro pb-3">
            {t("contact.form.company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo/50 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 text-base bg-white/50 backdrop-blur-sm"
            placeholder={t("contact.form.companyPlaceholder")}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="block text-base font-semibold text-negro pb-3">
            {t("contact.form.phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-hielo/50 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 text-base bg-white/50 backdrop-blur-sm"
            placeholder={t("contact.form.phonePlaceholder")}
          />
        </div>
      </div>

      {/* Service of interest */}
      <div className="form-field">
        <label htmlFor="service" className="block text-base font-semibold text-negro pb-3">
          {t("contact.form.serviceInterest")}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-4 border-2 border-hielo/50 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 text-base bg-white/50 backdrop-blur-sm"
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
        <label htmlFor="message" className="block text-base font-semibold text-negro pb-3">
          {t("contact.form.message")} <span className="text-mandarina">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-4 border-2 border-hielo/50 rounded-xl focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300 resize-vertical text-base bg-white/50 backdrop-blur-sm"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>

      {/* Submit button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="contact-form-submit w-full bg-gradient-to-r from-teal to-turquesa text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-azul-profundo hover:to-teal hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 flex items-center justify-center shadow-lg"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-3">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>{t("contact.form.sending")}</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span>{t("contact.form.send")}</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Privacy notice */}
      <p className="text-sm text-grafito/70 text-center pt-4">
        {t("contact.form.privacy")}
      </p>
    </form>
  );
}