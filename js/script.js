// eslint-disable-next-line no-console
console.log("¡Galería de Postres cargada correctamente!");

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

// Carrusel de imágenes
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

if (carouselInner && carouselItems.length > 0) {
  let currentIndex = 0;
  const totalItems = carouselItems.length;

  const showSlide = (index) => {
    if (index >= totalItems) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalItems - 1;
    } else {
      currentIndex = index;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  prevButton?.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  nextButton?.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  // Deslizamiento automático cada 3 segundos
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);
}

// Menús de postres
const dessertOptions = document.querySelectorAll(".dessert-option");
const dessertInfo = document.getElementById("dessert-info");
const dessertTitle = document.getElementById("dessert-title");
const dessertImage = document.getElementById("dessert-image");
const dessertDescription = document.getElementById("dessert-description");

const desserts = {
  "tarta-chocolate": {
    title: "Tarta de Chocolate",
    description:
      "Una deliciosa tarta con capas de bizcocho de chocolate y crema suave.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "tarta-fresa": {
    title: "Tarta de Fresa",
    description: "Tarta fresca con fresas naturales y crema pastelera.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "tarta-limon": {
    title: "Tarta de Limón",
    description: "Tarta ácida y refrescante con un toque de merengue.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "magdalena-vainilla": {
    title: "Magdalena de Vainilla",
    description: "Magdalena esponjosa con un delicado sabor a vainilla.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "magdalena-chocolate": {
    title: "Magdalena de Chocolate",
    description: "Magdalena rica con trozos de chocolate fundido.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "magdalena-arandanos": {
    title: "Magdalena de Arándanos",
    description: "Magdalena con arándanos frescos y un toque dulce.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "galleta-mantequilla": {
    title: "Galleta de Mantequilla",
    description: "Galleta crujiente con un rico sabor a mantequilla.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "galleta-chocolate": {
    title: "Galleta de Chocolate",
    description:
      "Galleta con chispas de chocolate, perfecta para cualquier momento.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
  "galleta-avena": {
    title: "Galleta de Avena",
    description: "Galleta saludable con avena y un toque de miel.",
    image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
  },
};

if (dessertOptions.length > 0) {
  dessertOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const dessertId = option.getAttribute("data-dessert");
      const dessert = desserts[dessertId];
      if (dessert) {
        dessertTitle.textContent = dessert.title;
        dessertImage.src = dessert.image;
        dessertImage.alt = dessert.title;
        dessertDescription.textContent = dessert.description;
        dessertInfo.classList.remove("hidden");
      }
    });
  });
}
