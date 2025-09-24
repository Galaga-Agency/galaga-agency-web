"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { getLocalizedRoute } from "@/utils/navigation";
import CustomCheckbox from "../ui/CustomCheckbox";
import {
  Briefcase,
  Code,
  Lightbulb,
  Rocket,
  GraduationCap,
  DollarSign,
  MoreHorizontal,
} from "lucide-react";

export default function ContactForm() {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    { value: "strategy", icon: Briefcase },
    { value: "automation", icon: Code },
    { value: "innovation", icon: Lightbulb },
    { value: "immersive", icon: Rocket },
    { value: "training", icon: GraduationCap },
    { value: "grants", icon: DollarSign },
    { value: "other", icon: MoreHorizontal },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim())
      newErrors.name = t("contact-page.form.validation.nameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("contact-page.form.validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact-page.form.validation.emailInvalid");
    }
    if (!formData.message.trim())
      newErrors.message = t("contact-page.form.validation.messageRequired");
    if (!formData.privacyConsent)
      newErrors.privacyConsent = t(
        "contact-page.form.validation.privacyRequired"
      );
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12 scale-in">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-teal-gradient flex items-center justify-center shadow-2xl">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-black text-teal mb-3">
          {t("contact-page.form.success.title")}
        </h3>
        <p className="text-lg text-negro/70">
          {t("contact-page.form.success.description")}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative flex flex-col gap-6">
        {/* Name - offset left */}
        <div className="scale-in" style={{ transform: "translateX(-20px)" }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact-page.form.name")}
            className={`w-full md:w-4/5 px-6 py-5 text-lg rounded-3xl border-2 shadow-xl transition-all duration-300 ${
              errors.name
                ? "border-naranja-tostado shake"
                : "border-transparent bg-gradient-to-br from-blanco to-hielo/30 hover:shadow-2xl hover:scale-105 focus:border-teal focus:from-blanco focus:to-blanco"
            } focus:outline-none`}
          />
          {errors.name && (
            <p className="text-naranja-tostado text-sm mt-2 ml-6 font-bold">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email - offset right */}
        <div
          className="scale-in"
          style={{ transform: "translateX(20px)" }}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact-page.form.email")}
            className={`w-full md:w-4/5 ml-auto px-6 py-5 text-lg rounded-3xl border-2 shadow-xl transition-all duration-300 ${
              errors.email
                ? "border-naranja-tostado shake"
                : "border-transparent bg-gradient-to-br from-blanco to-hielo/30 hover:shadow-2xl hover:scale-105 focus:border-teal focus:from-blanco focus:to-blanco"
            } focus:outline-none`}
          />
          {errors.email && (
            <p className="text-naranja-tostado text-sm mt-2 mr-6 text-right font-bold">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company & Phone - staggered */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={t("contact-page.form.company")}
            className="fade-in-left w-full md:w-1/2 px-6 py-4 rounded-full border-2 border-transparent bg-gradient-to-br from-blanco to-hielo/30 shadow-lg hover:shadow-xl hover:scale-105 focus:border-teal focus:from-blanco focus:to-blanco focus:outline-none transition-all duration-300"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("contact-page.form.phone")}
            className="fade-in-right w-full md:w-1/2 px-6 py-4 rounded-full border-2 border-transparent bg-gradient-to-br from-blanco to-hielo/30 shadow-lg hover:shadow-xl hover:scale-105 focus:border-teal focus:from-blanco focus:to-blanco focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Service - Better visual hierarchy */}
        <div className="bounce-in-up py-4">
          <p className="text-sm font-black text-teal uppercase tracking-wider pb-5 px-2">
            {t("contact-page.form.serviceInterest")}
          </p>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => {
              const Icon = service.icon;
              const isSelected = formData.service === service.value;
              return (
                <button
                  key={service.value}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, service: service.value })
                  }
                  className={`group relative flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? "border-teal bg-teal text-blanco shadow-xl"
                      : "border-hielo bg-blanco hover:border-teal"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-bold">
                    {t(`contact-page.form.services.${service.value}`)}
                  </span>
                  {isSelected && (
                    <div className="absolute inset-0 rounded-full bg-teal/20 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message - Full width dramatic */}
        <div className="slide-in-up">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder={t("contact-page.form.message")}
            className={`w-full px-8 py-6 text-lg rounded-3xl border-2 resize-none shadow-2xl transition-all duration-300 ${
              errors.message
                ? "border-naranja-tostado shake"
                : "border-transparent bg-gradient-to-br from-blanco via-hielo/20 to-turquesa/5 hover:shadow-2xl focus:border-teal focus:from-blanco focus:to-blanco"
            } focus:outline-none`}
          />
          {errors.message && (
            <p className="text-naranja-tostado text-sm mt-2 ml-6 font-bold">
              {errors.message}
            </p>
          )}
        </div>

        {/* Privacy - Offset */}
        <div className="fade-in-up pl-6">
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
                  className="text-teal underline hover:text-azul-profundo transition-colors font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact-page.form.privacyLink")}
                </a>
              </>
            }
          />
          {errors.privacyConsent && (
            <p className="text-naranja-tostado text-sm mt-2 font-bold">
              {errors.privacyConsent}
            </p>
          )}
        </div>


          <PrimaryButton
            onClick={handleSubmit}
            disabled={
              isSubmitting ||
              !formData.privacyConsent ||
              Object.keys(errors).length > 0 ||
              !formData.name ||
              !formData.email ||
              !formData.message
            }
            className="w-full py-6 text-xl font-black rounded-full shadow-2xl"
            bubbleTransition={true}
            bubbleColor="var(--color-teal)"
          >
            {isSubmitting
              ? t("contact-page.form.sending")
              : t("contact-page.form.send")}
          </PrimaryButton>
      </div>
    </div>
  );
}
