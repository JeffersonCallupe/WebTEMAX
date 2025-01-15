const carousel = document.getElementById('carousel');

// Variables para el arrastre
let isDragging = false;
let startX, scrollLeft;

// Eventos de mouse y touch
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  carousel.classList.add('cursor-grabbing');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
  carousel.classList.remove('cursor-grabbing');
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
  carousel.classList.remove('cursor-grabbing');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Multiplica para aumentar la sensibilidad
  carousel.scrollLeft = scrollLeft - walk;
});

// Soporte para dispositivos móviles
carousel.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => {
  isDragging = false;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});
