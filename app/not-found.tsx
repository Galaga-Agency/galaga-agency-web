import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
                404
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>

            {/* Error message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              key.notFound.title
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
              key.notFound.description
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                key.notFound.goHome
              </Link>

              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors duration-300"
              >
                key.notFound.contactUs
              </Link>
            </div>

            {/* Helpful links */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                key.notFound.helpfulLinks
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/about"
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      key.notFound.links.about
                    </h4>
                    <p className="text-sm text-gray-600">
                      key.notFound.links.aboutDesc
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services"
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      key.notFound.links.services
                    </h4>
                    <p className="text-sm text-gray-600">
                      key.notFound.links.servicesDesc
                    </p>
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-creative/10 rounded-lg flex items-center justify-center group-hover:bg-creative/20 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-creative"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      key.notFound.links.contact
                    </h4>
                    <p className="text-sm text-gray-600">
                      key.notFound.links.contactDesc
                    </p>
                  </div>
                </Link>

                <a
                  href="mailto:info@galagaagency.com"
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      key.notFound.links.email
                    </h4>
                    <p className="text-sm text-gray-600">
                      info@galagaagency.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
