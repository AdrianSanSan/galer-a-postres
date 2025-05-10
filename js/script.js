document.addEventListener("DOMContentLoaded", () => {
  console.log("¡Galería de Postres cargada correctamente!");

  // Carrusel
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, 3000);

  // Menús desplegables
  const dessertOptions = document.querySelectorAll(".dessert-option");
  const dessertInfo = document.querySelector("#dessert-info");
  const dessertBackdrop = document.querySelector("#dessert-info-backdrop");
  const dessertTitle = document.querySelector("#dessert-title");
  const dessertImage = document.querySelector("#dessert-image");
  const dessertDescription = document.querySelector("#dessert-description");
  const closeDessertInfo = document.querySelector("#close-dessert-info");

  const dessertData = {
    "tarta-chocolate": {
      title: "Tarta de Chocolate",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Deliciosa tarta de chocolate con un suave glaseado.",
    },
    "tarta-fresa": {
      title: "Tarta de Fresa",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Tarta fresca con fresas naturales y crema batida.",
    },
    "tarta-limon": {
      title: "Tarta de Limón",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Tarta cítrica con un toque refrescante de limón.",
    },
    "magdalena-vainilla": {
      title: "Magdalena de Vainilla",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Magdalena esponjosa con esencia de vainilla.",
    },
    "magdalena-chocolate": {
      title: "Magdalena de Chocolate",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Magdalena rica en cacao con chips de chocolate.",
    },
    "magdalena-arandanos": {
      title: "Magdalena de Arándanos",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Magdalena con arándanos frescos y un toque dulce.",
    },
    "galleta-mantequilla": {
      title: "Galleta de Mantequilla",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Galleta crujiente con rico sabor a mantequilla.",
    },
    "galleta-chocolate": {
      title: "Galleta de Chocolate",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Galleta con trozos de chocolate fundido.",
    },
    "galleta-avena": {
      title: "Galleta de Avena",
      image: "img/kobby-mendez-q54Oxq44MZs-unsplash.jpg",
      description: "Galleta saludable con avena y un toque de miel.",
    },
  };

  dessertOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const dessertId = option.getAttribute("data-dessert");
      const data = dessertData[dessertId];

      dessertTitle.textContent = data.title;
      dessertImage.src = data.image;
      dessertDescription.textContent = data.description;

      dessertInfo.classList.remove("hidden");
      dessertBackdrop.classList.remove("hidden");
    });
  });

  closeDessertInfo.addEventListener("click", () => {
    dessertInfo.classList.add("hidden");
    dessertBackdrop.classList.add("hidden");
  });
});
