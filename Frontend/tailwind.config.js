/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'lato': ['Lato', 'serif'],
        'montserrat': [ 'Montserrat', 'serif'],
        'roboto': [ 'Roboto', 'serif'],
        'actor': ['Actor', 'serif'],
      },

      colors: {
        'azul-oscuro': '#041C3C',
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

