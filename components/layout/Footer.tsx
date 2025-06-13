"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded text-white flex items-center justify-center font-bold text-lg">
                G
              </div>
              <div>
                <span className="text-xl font-bold">GALAGA</span>
                <span className="text-sm text-gray-400 ml-1">AGENCY</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              key.footer.description
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/company/galagaagency"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com/galagaagency"
                className="text-gray-400 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.948 4.615c.76 0 1.375.616 1.375 1.376s-.615 1.376-1.375 1.376-1.376-.616-1.376-1.376.616-1.376 1.376-1.376zm6.121 0c.76 0 1.376.616 1.376 1.376s-.616 1.376-1.376 1.376-1.375-.616-1.375-1.376.615-1.376 1.375-1.376zm-3.052 3.8c2.579 0 4.668 2.089 4.668 4.668s-2.089 4.669-4.668 4.669-4.668-2.09-4.668-4.669 2.089-4.668 4.668-4.668z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">key.footer.services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  key.footer.digitalConsulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  key.footer.automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  key.footer.immersiveMarketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  key.footer.training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">key.footer.contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:info@galagaagency.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@galagaagency.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  key.footer.getInTouch
                </Link>
              </li>
              <li className="text-gray-500">key.footer.location</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Galaga Agency. key.footer.allRightsReserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              key.footer.privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              key.footer.terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
