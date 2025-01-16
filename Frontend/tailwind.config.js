/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}", 
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
        'inter': [ 'Inter', 'serif']
      },
      colors: {
        'azul-oscuro-title': '#041C3C',
        'azul-parrafo':'#0F172A',
        'gray-title-min': '#555555',
        'azul-line':'#4555BC'
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'products-portada': "url('/img/soldador/maquina.webp')",
        'nosotros-portada': "url('/img/footer-texture.png')",
        
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

