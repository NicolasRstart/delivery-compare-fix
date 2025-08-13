const datosIniciales = [
  {
    id: 1,
    usuario: "Agustin Ruocco",
    sitio: "Burger King Obelisco (PedidosYa)",
    url: "https://www.pedidosya.com.ar/restaurantes/buenos-aires/burger-king-obelisco-a4cad619-85df-4ee4-9107-70ef92f21f8d-menu?search=burger+king",
    estado: "no ingresado"
  },
  {
    id: 2,
    usuario: "Martín Sabatte",
    sitio: "Mi Gusto Empanadas (Rappi)",
    url: "https://www.rappi.com.ar/search?query=mi%20gusto%20empanadas",
    estado: "no ingresado"
  },
  {
    id: 3,
    usuario: "Helsa Cosentino",
    sitio: "Lucciano's Obelisco (PedidosYa)",
    url: "https://www.pedidosya.com.ar/restaurantes/buenos-aires/luccianos-obelisco-4c7ffefd-b510-4bc7-8cf3-99b8fde44104-menu?search=helado",
    estado: "no ingresado"
  }
];

let sitios = JSON.parse(localStorage.getItem("sitios")) || datosIniciales;
const slidesContainer = document.getElementById("slides");

function renderSlides() {
  slidesContainer.innerHTML = "";

  sitios.forEach((sitio, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";

    slide.innerHTML = `
      <h4>${sitio.usuario}</h4>
      <p><strong>Sitio:</strong> ${sitio.sitio}</p>
      <a href="${sitio.url}" target="_blank" class="btn btn-sm btn-outline-primary my-2">Ver sitio</a>
      <p><strong>Estado:</strong> ${sitio.estado}</p>
      <button class="btn btn-sm btn-outline-success estado-btn">Cambiar estado</button>
    `;

    slide.querySelector(".estado-btn").addEventListener("click", () => {
      sitios[i].estado = sitios[i].estado === "no ingresado" ? "ingresado" : "no ingresado";
      localStorage.setItem("sitios", JSON.stringify(sitios));
      renderSlides();
    });

    slidesContainer.appendChild(slide);
  });
}

renderSlides();

//esto es el a lo que em referia lo modifique con algunas modificaciones al slider pero 
//lo implemente en lo que tenia planeado con logs de donde fueron tres usuarios
//asiendo fedback para futuras recomendaciones y plataformas utilisads mas recurentes 
// psd:los atos son reales le pregunte a mis familiares 