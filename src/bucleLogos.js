window.onload = function() {
    const container = document.querySelector('.containerMarca');
    const images = document.querySelectorAll('.imgMarca');
  
    let currentIndex = 0;
    const totalImages = images.length;
  
    // Función para mover las imágenes
    function moveImages() {
      const currentImage = images[currentIndex];
  
      // Hacer que la imagen actual desaparezca (salga a la izquierda)
      currentImage.style.transform = 'translateX(-100%)';
      currentImage.classList.remove('in-view');
  
      // Esperar el tiempo de transición antes de moverla al final
      setTimeout(() => {
        currentImage.style.transition = 'none'; // Desactivar la transición temporalmente
        currentImage.style.transform = 'translateX(100%)'; // Moverla a la derecha
        container.appendChild(currentImage); // Añadir la imagen al final
        setTimeout(() => {
          currentImage.style.transition = 'transform 1s ease-in-out, opacity 1s ease-out';
          currentImage.classList.add('in-view'); // Hacerla visible nuevamente
        }, 50); // Reactivar la transición
      }, 1000); // Este tiempo debe coincidir con la duración de la animación
  
      // Actualizar el índice para la siguiente imagen
      currentIndex = (currentIndex + 1) % totalImages;
    }
  
    // Inicializar el movimiento de imágenes
    setInterval(moveImages, 3000); // Mover las imágenes cada 3 segundos
    moveImages(); // Llamar inicialmente para iniciar la animación
  }
  