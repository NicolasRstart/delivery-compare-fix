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

  {
    id: 1,
    usuario; "Agustin Ruocco",
    sitio; "Burger King Obelisco (PedidosYa)",
    url; "https://www.pedidosya.com.ar/restaurantes/buenos-aires/burger-king-obelisco-a4cad619-85df-4ee4-9107-70ef92f21f8d-menu?search=burger+king",
    estado; "no ingresado"
  }
  {
    id: 2,
    usuario; "Martín Sabatte",
    sitio; "Mi Gusto Empanadas (Rappi)",
    url; "https://www.rappi.com.ar/search?query=mi%20gusto%20empanadas",
    estado; "no ingresado"
  }
  {
    id: 3,
    usuario; "Helsa Cosentino",
    sitio; "Lucciano's Obelisco (PedidosYa)",
    url; "https://www.pedidosya.com.ar/restaurantes/buenos-aires/luccianos-obelisco-4c7ffefd-b510-4bc7-8cf3-99b8fde44104-menu?search=helado",
    estado; "no ingresado"
  }

mostrarSlide(index);

//esto es el a lo que em referia lo modifique con algunas modificaciones al slider pero 
// lo implemente en lo que tenia planeado con logs de donde fueron tres usuarios