/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./features/**/*.tsx", "./App.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
