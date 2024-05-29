const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ['"Overpass"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-grey": "hsl(217, 12%, 63%)",
        "dark-grey": "rgb(51 57 67)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
        "orange-500": "#FC7712",
      },
    },
  },
  plugins: [],
};
