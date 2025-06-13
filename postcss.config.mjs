/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // NOT 'tailwindcss' - this is critical
  },
};
export default config;
