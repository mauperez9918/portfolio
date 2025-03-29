const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif", defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#07020D",
        contrastColor: "#5DB7DE",
        hoverColor: "#F1E9DB",
      },
    },
  },
  plugins: [],
};
