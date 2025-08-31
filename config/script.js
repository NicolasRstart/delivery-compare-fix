let sitios = [];
const slidesContainer = document.getElementById("slides");

slidesContainer.innerHTML = `
  <div class="text-muted py-3">Cargando recomendaciones...</div>
`;

async function cargarDatos() {
  try {
    const response = await fetch("parafix/fetch.json", { cache: "no-store" });
    if (!response.ok) throw new Error("No se pudo cargar para/fix/sitios.json");

    const data = await response.json();

    sitios = JSON.parse(localStorage.getItem("sitios")) || data;

    renderSlides();

  } catch (error) {
    console.error(error);
    slidesContainer.innerHTML = `
      <div class="alert alert-danger" role="alert">
        No se pudieron cargar los sitios. Revisa que estés usando un servidor local y la ruta "para/fix/sitios.json".
      </div>
    `;
    if (typeof Swal !== "undefined") {
      Swal.fire("Error", "No se pudieron cargar los sitios", "error");
    }
  }
}

function renderSlides() {
  slidesContainer.innerHTML = "";

  if (!sitios.length) {
    slidesContainer.innerHTML = `<div class="text-muted">No hay datos para mostrar.</div>`;
    return;
  }

  sitios.forEach((sitio, i) => {
    const card = document.createElement("div");
    card.className = "card p-3 shadow-sm";
    card.style.width = "280px";

    card.innerHTML = `
      <h4 class="h5 mb-2">${sitio.usuario}</h4>
      <p class="mb-1"><strong>Sitio:</strong> ${sitio.sitio}</p>
      <a href="${sitio.url}" target="_blank" class="btn btn-sm btn-outline-primary my-2">Ver sitio</a>
      <p class="mb-2"><strong>Estado:</strong> 
        <span class="badge ${sitio.estado === "ingresado" ? "bg-success" : "bg-secondary"}">
          ${sitio.estado}
        </span>
      </p>
      <div class="d-flex gap-2">
        <button class="btn btn-sm btn-outline-success estado-btn">Cambiar estado</button>
        <button class="btn btn-sm btn-outline-danger borrar-btn">Borrar</button>
      </div>
    `;

    card.querySelector(".estado-btn").addEventListener("click", () => {
      sitios[i].estado = sitios[i].estado === "no ingresado" ? "ingresado" : "no ingresado";
      localStorage.setItem("sitios", JSON.stringify(sitios));
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: "Estado actualizado",
          text: `Ahora está: ${sitios[i].estado}`,
          icon: "success",
          timer: 1300,
          showConfirmButton: false
        });
      }
      renderSlides();
    });

    card.querySelector(".borrar-btn").addEventListener("click", () => {
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: "¿Borrar este ítem?",
          text: `${sitio.usuario} - ${sitio.sitio}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, borrar",
          cancelButtonText: "Cancelar"
        }).then((res) => {
          if (res.isConfirmed) {
            sitios.splice(i, 1);
            localStorage.setItem("sitios", JSON.stringify(sitios));
            renderSlides();
            Swal.fire("Borrado", "El ítem fue eliminado", "success");
          }
        });
      } else {
        if (confirm("¿Borrar este ítem?")) {
          sitios.splice(i, 1);
          localStorage.setItem("sitios", JSON.stringify(sitios));
          renderSlides();
        }
      }
    });

    slidesContainer.appendChild(card);
  });
}

window.resetSitios = function () {
  localStorage.removeItem("sitios");
  location.reload();
};

cargarDatos();
renderSlides();

//esto es el a lo que em referia lo modifique con algunas modificaciones al slider pero 
//lo implemente en lo que tenia planeado con logs de donde fueron tres usuarios
//asiendo fedback para futuras recomendaciones y plataformas utilisads mas recurentes 
// psd:los atos son reales le pregunte a mis familiares 