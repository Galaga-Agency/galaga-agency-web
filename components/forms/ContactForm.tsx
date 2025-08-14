"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/hooks/useTranslation";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import CustomInput from "@/components/ui/CustomInput";
import CustomTextarea from "@/components/ui/CustomTextarea";
import CustomSelect from "@/components/ui/CustomSelect";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    }
  });

  const watchedValues = watch();

  const handleSelectChange = (value: string) => {
    setValue("service", value);
    if (submitError) setSubmitError(null);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      const templateParams = {
        name: data.name,
        email: data.email,
        company: data.company || 'No company provided',
        phone: data.phone || 'No phone provided',
        service: data.service || 'No service selected',
        message: data.message,
        to_email: 'thomas@galagaagency.com'
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      console.log('EmailJS Success:', result);
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 4000);

    } catch (emailError) {
      console.error('EmailJS Error:', emailError);
      setIsSubmitting(false);
      setSubmitError(t("contact.form.error.message"));
    }
  };

  const serviceOptions = [
    { value: "strategy", label: t("contact.form.services.strategy") },
    { value: "automation", label: t("contact.form.services.automation") },
    { value: "innovation", label: t("contact.form.services.innovation") },
    { value: "immersive", label: t("contact.form.services.immersive") },
    { value: "training", label: t("contact.form.services.training") },
    { value: "grants", label: t("contact.form.services.grants") },
    { value: "other", label: t("contact.form.services.other") },
  ];

  if (isSubmitted) {
    return (
      <div className="contact-form-success flex flex-col justify-center items-center text-center py-12">
        <div className="w-20 h-20 bg-radial-[at_30%_25%] from-hielo/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center mx-auto shadow-xl">
          <CheckCircle className="w-10 h-10 text-blanco drop-shadow-lg" />
        </div>
        <h3 className="text-2xl font-bold text-teal py-4 leading-tight">
          {t("contact.form.success.title")}
        </h3>
        <p className="text-lg text-negro leading-relaxed">
          {t("contact.form.success.description")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form flex flex-col gap-6">
      {/* Error Message */}
      {submitError && (
        <div className="bg-mandarina/10 border border-mandarina/30 rounded-xl p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-mandarina flex-shrink-0" />
          <p className="text-sm text-mandarina font-medium">{submitError}</p>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          {...register("name", { 
            required: t("contact.form.validation.nameRequired") || "Full name is required" 
          })}
          type="text"
          label={t("contact.form.name")}
          placeholder={t("contact.form.namePlaceholder")}
          error={errors.name?.message}
          required
        />

        <CustomInput
          {...register("email", { 
            required: t("contact.form.validation.emailRequired") || "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("contact.form.validation.emailInvalid") || "Please enter a valid email address"
            }
          })}
          type="email"
          label={t("contact.form.email")}
          placeholder={t("contact.form.emailPlaceholder")}
          error={errors.email?.message}
          required
        />
      </div>

      {/* Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          {...register("company")}
          type="text"
          label={t("contact.form.company")}
          placeholder={t("contact.form.companyPlaceholder")}
        />

        <CustomInput
          {...register("phone")}
          type="tel"
          label={t("contact.form.phone")}
          placeholder={t("contact.form.phonePlaceholder")}
        />
      </div>

      {/* Service */}
      <CustomSelect
        name="service"
        label={t("contact.form.serviceInterest")}
        placeholder={t("contact.form.selectService")}
        options={serviceOptions}
        value={watchedValues.service}
        onChange={handleSelectChange}
      />

      {/* Message */}
      <CustomTextarea
        {...register("message", { 
          required: t("contact.form.validation.messageRequired") || "Project details are required" 
        })}
        label={t("contact.form.message")}
        placeholder={t("contact.form.messagePlaceholder")}
        rows={6}
        error={errors.message?.message}
        required
      />

      {/* Submit Button */}
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