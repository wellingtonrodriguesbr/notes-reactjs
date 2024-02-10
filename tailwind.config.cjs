/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
