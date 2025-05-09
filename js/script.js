// eslint-disable-next-line no-console
console.log("¡Galería de Postres cargada correctamente!");

// Seleccionar todos los botones de filtro
const filterButtons = document.querySelectorAll(".filter-btn");
// Seleccionar todas las tarjetas de postres
const postreCards = document.querySelectorAll(".postre-card");

// Añadir evento de clic a cada botón de filtro
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtener la categoría del filtro
    const filter = button.getAttribute("data-filter");

    // Mostrar u ocultar tarjetas según la categoría
    postreCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
