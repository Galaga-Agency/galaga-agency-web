import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/forms/ContactForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Galaga Agency. Let's talk about transforming your business with digital solutions that work.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                key.contact.title
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                key.contact.subtitle
              </p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact form */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    key.contact.form.title
                  </h2>
                  <ContactForm />
                </div>

                {/* Contact information */}
                <div className="space-y-8">
                  {/* Direct contact */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      key.contact.info.title
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            key.contact.email
                          </h4>
                          <a
                            href="mailto:info@galagaagency.com"
                            className="text-primary hover:text-primary-dark transition-colors duration-200"
                          >
                            info@galagaagency.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            key.contact.location
                          </h4>
                          <p className="text-gray-600">
                            key.contact.locationText
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-creative/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-creative"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            key.contact.schedule
                          </h4>
                          <p className="text-gray-600">
                            key.contact.scheduleText
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social media */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      key.contact.social.title
                    </h3>

                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com/company/galagaagency"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors duration-200"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>

                      <a
                        href="https://instagram.com/galagaagency"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center hover:bg-accent-dark transition-colors duration-200"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.948 4.615c.76 0 1.375.616 1.375 1.376s-.615 1.376-1.375 1.376-1.376-.616-1.376-1.376.616-1.376 1.376-1.376zm6.121 0c.76 0 1.376.616 1.376 1.376s-.616 1.376-1.376 1.376-1.375-.616-1.375-1.376.615-1.376 1.375-1.376zm-3.052 3.8c2.579 0 4.668 2.089 4.668 4.668s-2.089 4.669-4.668 4.669-4.668-2.09-4.668-4.669 2.089-4.668 4.668-4.668z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Quick response promise */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      key.contact.promise.title
                    </h4>
                    <p className="text-gray-600 text-sm">
                      key.contact.promise.description
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
