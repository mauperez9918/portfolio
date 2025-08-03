const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { xs: "520px" },
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif", defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#032263",
      },
    },
  },
  plugins: [],
};
