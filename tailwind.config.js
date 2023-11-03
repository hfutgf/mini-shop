/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobileS: "375px",
      mobileL: "450px",
      tablet: "769px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      light: "#fff",
      dark: "#000",
      grey: "#6b7280",
      green: "#16a34a",
    },
  },

  plugins: [],
};
