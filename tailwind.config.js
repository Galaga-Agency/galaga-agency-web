/**
 * Tailwind CSS Configuration
 *
 * This configuration file serves as the central hub for all custom styling logic.
 * Instead of using global.css for custom styles, animations, and utilities,
 * we've chosen to define everything possible here in the Tailwind config.
 *
 * Benefits of this approach:
 * - Single source of truth for styling
 * - Better maintainability (all custom styles in one place)
 * - Easier to track and modify design tokens
 * - Prevents CSS specificity issues
 * - Keeps global.css clean and minimal
 * - Allows for better tree-shaking of unused styles
 *
 * The global.css file is reserved only for:
 * - CSS Reset
 * - Root variables
 * - Styles that absolutely cannot be achieved through Tailwind
 */

const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode using class strategy instead of media queries
  darkMode: ["class"],

  // Define which files Tailwind should scan for classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Custom font families for consistent typography
      fontFamily: {
        primary: ['"Adam Bold"', "sans-serif"],
        secondary: ['"Corbert"', "sans-serif"],
      },
    },
  },

  // Tailwind plugins
  plugins: [
    // Enable basic animation utilities
    require("tailwindcss-animate"),
    
    // Custom utility to remove tap highlight on mobile
    function ({ addUtilities }) {
      addUtilities({
        ".no-tap-highlight": {
          "-webkit-tap-highlight-color": "transparent",
        },
      });
    },
  ],
};