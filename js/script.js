// eslint-disable-next-line no-console
console.log("¡Galería de Postres cargada correctamente!");

// Filtro de postres
const filterButtons = document.querySelectorAll(".filter-btn");
const postreCards = document.querySelectorAll(".postre-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
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

// Validación del formulario de contacto
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío real del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      formMessage.classList.remove("hidden");
      formMessage.textContent = "¡Mensaje enviado con éxito!";
      contactForm.reset();
      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 3000);
    } else {
      formMessage.classList.remove("hidden");
      formMessage.textContent = "Por favor, completa todos los campos.";
      formMessage.classList.add("text-red-600");
      setTimeout(() => {
        formMessage.classList.add("hidden");
        formMessage.classList.remove("text-red-600");
      }, 3000);
    }
  });
}
