////slider-carrusel de imagenes 
const carrusel = document.querySelector('.carrusel-container');
const slides = document.querySelectorAll('.carrusel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  carrusel.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

// Cambio automático cada 5 segundos
setInterval(() => showSlide(currentIndex + 1), 5000);
