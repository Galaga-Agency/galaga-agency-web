// In /components/forms/ContactForm.tsx

"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { getLocalizedRoute } from "@/utils/navigation";
import CustomCheckbox from "../ui/CustomCheckbox";

export default function ContactForm() {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    privacyConsent: false, // ADD THIS
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact-page.form.validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact-page.form.validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact-page.form.validation.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact-page.form.validation.messageRequired");
    }

    // ADD THIS VALIDATION
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = t(
        "contact-page.form.validation.privacyRequired"
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Your submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        privacyConsent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-teal rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-teal mb-4">
          {t("contact-page.form.success.title")}
        </h3>
        <p className="text-negro leading-relaxed">
          {t("contact-page.form.success.description")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-azul-profundo mb-2"
        >
          {t("contact-page.form.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("contact-page.form.namePlaceholder")}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? "border-naranja-tostado" : "border-hielo"
          } focus:border-teal focus:outline-none transition-colors`}
        />
        {errors.name && (
          <p className="text-naranja-tostado text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-azul-profundo mb-2"
        >
          {t("contact-page.form.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("contact-page.form.emailPlaceholder")}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? "border-naranja-tostado" : "border-hielo"
          } focus:border-teal focus:outline-none transition-colors`}
        />
        {errors.email && (
          <p className="text-naranja-tostado text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-azul-profundo mb-2"
        >
          {t("contact-page.form.company")}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={t("contact-page.form.companyPlaceholder")}
          className="w-full px-4 py-3 rounded-lg border border-hielo focus:border-teal focus:outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-azul-profundo mb-2"
        >
          {t("contact-page.form.phone")}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t("contact-page.form.phonePlaceholder")}
          className="w-full px-4 py-3 rounded-lg border border-hielo focus:border-teal focus:outline-none transition-colors"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-azul-profundo mb-2"
        >
          {t("contact-page.form.serviceInterest")}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-hielo focus:border-teal focus:outline-none transition-colors bg-white"
        >
          <option value="">{t("contact-page.form.selectService")}</option>
          <option value="strategy">
            {t("contact-page.form.services.strategy")}
          </option>
          <option value="automation">
            {t("contact-page.form.services.automation")}
          </option>
          <option value="innovation">
            {t("contact-page.form.services.innovation")}
          </option>
          <option value="immersive">
            {t("contact-page.form.services.immersive")}
          </option>
          <option value="training">
            {t("contact-page.form.services.training")}
          </option>
          <option value="grants">
            {t("contact-page.form.services.grants")}
          </option>
          <option value="other">{t("contact-page.form.services.other")}</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-azul-profundo mb-2"
        >
          {t("contact-page.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={t("contact-page.form.messagePlaceholder")}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? "border-naranja-tostado" : "border-hielo"
          } focus:border-teal focus:outline-none transition-colors resize-none`}
        />
        {errors.message && (
          <p className="text-naranja-tostado text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Privacy Consent - ADD THIS ENTIRE BLOCK */}
      <div className="pt-2">
        <CustomCheckbox
          id="privacyConsent"
          name="privacyConsent"
          checked={formData.privacyConsent}
          onChange={handleChange}
          error={errors.privacyConsent}
          required
          label={
            <>
              {t("contact-page.form.privacyText")}{" "}
              <a
                href={getLocalizedRoute("privacy-policy", language)}
                className="text-teal underline hover:text-azul-profundo transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact-page.form.privacyLink")}
              </a>
            </>
          }
        />
        {errors.privacyConsent && (
          <p className="text-naranja-tostado text-sm mt-2">
            {errors.privacyConsent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <PrimaryButton
          disabled={isSubmitting || !formData.privacyConsent || Object.keys(errors).length > 0 || !formData.name || !formData.email || !formData.message}
          className="w-full py-4"
          bubbleTransition={true}
          bubbleColor="var(--color-teal)"
        >
          {isSubmitting
            ? t("contact-page.form.sending")
            : t("contact-page.form.send")}
        </PrimaryButton>
      </div>
    </form>
  );
}
