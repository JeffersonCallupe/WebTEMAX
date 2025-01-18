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
        'inter': [ 'Inter', 'serif'],
        'open-sans': ['Open Sans', 'serif'],
        'poppins':['Poppins', 'serif']
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
        'nosotros-portada': "url('/img/soldador/implementosNosotros.webp')",  
        'nosotros-fondo':"url('/img/fondos/fondoNosotrosPage.webp')",  
        'contacto-portada':"url('/img/soldador/soldador10.png')",  
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

