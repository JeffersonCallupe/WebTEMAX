import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',                      // Página inicial (Home)
        productos: './src/pages/productos.html',  // Página de productos
        nosotros: './src/pages/nosotros.html',    // Página de nosotros
        contactos: './src/pages/contactos.html',  // Página de contactos
      },
    },
  },
});
