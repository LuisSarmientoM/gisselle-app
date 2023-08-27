/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      danger: colors.red,
      info: colors.teal,
      gray: colors.gray,
      success: colors.green,
      warning: colors.yellow,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [require("tailwindcss-animated"), require("@tailwindcss/forms")],
};
