/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'primary': colors.blue,
      'accent': colors.orange,
      'danger': colors.red,
      'info': colors.teal,
      'gray': colors.gray,
      'success': colors.green,
      'warning': colors.yellow,
      'white': colors.white,
      'black': colors.black,
      'transparent': 'transparent',
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms')
  ],
}

