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
        'azul-oscuro-title': '#041C3C',
        'azul-parrafo':'#0F172A',
        'gray-title-min': '#555555',
        'azul-line':'#4555BC'
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

