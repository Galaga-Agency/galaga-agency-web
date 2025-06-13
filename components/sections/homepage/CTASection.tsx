"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            key.cta.readyToTransform
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            key.cta.subtitle
          </p>

          {/* Benefits list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <h3 className="font-bold text-lg mb-2">key.cta.benefit1.title</h3>
              <p className="text-sm opacity-90">key.cta.benefit1.description</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <h3 className="font-bold text-lg mb-2">key.cta.benefit2.title</h3>
              <p className="text-sm opacity-90">key.cta.benefit2.description</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <h3 className="font-bold text-lg mb-2">key.cta.benefit3.title</h3>
              <p className="text-sm opacity-90">key.cta.benefit3.description</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              key.cta.scheduleCall
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              key.cta.knowMore
            </Link>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg mb-4">key.cta.directContact</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:info@galagaagency.com"
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@galagaagency.com</span>
              </a>
              <a
                href="https://linkedin.com/company/galagaagency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
