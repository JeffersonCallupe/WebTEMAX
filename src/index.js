const menuToggle = document.querySelector('.menu_toggle');
const headerMenu = document.querySelector('.header_menu');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

menuToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
    overlay.classList.toggle('active'); // Mostrar/ocultar el overlay
});

overlay.addEventListener('click', () => {
    headerMenu.classList.remove('open');
    menuToggle.classList.remove('active');
    overlay.classList.remove('active');
});
