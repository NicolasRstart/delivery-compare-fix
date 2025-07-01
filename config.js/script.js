let index = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (n + slides.length) % slides.length;
  slides[index].classList.add('active');
}

function cambiarSlide(direccion) {
  mostrarSlide(index + direccion);
}

mostrarSlide(index);
