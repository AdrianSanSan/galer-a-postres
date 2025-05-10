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
      image: "img/tartaChocolate.jpg",
      description:
        "Exquisita tarta elaborada con capas de bizcocho de cacao puro, rellena y cubierta con un cremoso glaseado de chocolate negro fundido, perfecta para los amantes del chocolate intenso.",
    },
    "tarta-fresa": {
      title: "Tarta de Fresa",
      image: "img/tartaFresa.jpg",
      description:
        "Delicada tarta con un suave bizcocho de vainilla, rellena de crema batida ligera y fresas frescas de temporada, decorada con un toque de mermelada de fresa para un sabor vibrante.",
    },
    "tarta-limon": {
      title: "Tarta de Limón",
      image: "img/tartaLimon.jpg",
      description:
        "Refrescante tarta con una base crujiente de galleta, un relleno cremoso de limón natural y un toque de merengue tostado, ideal para quienes buscan un equilibrio entre lo dulce y lo cítrico.",
    },
    "magdalena-vainilla": {
      title: "Magdalena de Vainilla",
      image: "img/magdalenaVainilla.jpg",
      description:
        "Esponjosa magdalena artesanal infusionada con esencia de vainilla de Madagascar, coronada con un delicado glaseado de azúcar que resalta su sabor clásico y reconfortante.",
    },
    "magdalena-chocolate": {
      title: "Magdalena de Chocolate",
      image: "img/magdalenaChocolate.jpg",
      description:
        "Jugosa magdalena de cacao intenso, repleta de chips de chocolate semiamargo que se derriten en la boca, perfecta para un capricho dulce en cualquier momento del día.",
    },
    "magdalena-arandanos": {
      title: "Magdalena de Arándanos",
      image: "img/magdalenaArandanos.jpg",
      description:
        "Suave magdalena con un toque de vainilla, cargada de arándanos frescos que aportan un estallido de sabor frutal en cada bocado, ideal para desayunos o meriendas.",
    },
    "galleta-mantequilla": {
      title: "Galleta de Mantequilla",
      image: "img/galletaMantequilla.jpg",
      description:
        "Crujiente galleta artesanal hecha con mantequilla de primera calidad, con un sabor rico y una textura que se deshace en la boca, perfecta para acompañar un café o té.",
    },
    "galleta-chocolate": {
      title: "Galleta de Chocolate",
      image: "img/galletaChocolate.jpg",
      description:
        "Deliciosa galleta crujiente con trozos generosos de chocolate fundido, equilibrada en dulzura y con un toque de sal que realza su sabor, ideal para los golosos.",
    },
    "galleta-avena": {
      title: "Galleta de Avena",
      image: "img/galletaAvena.jpg",
      description:
        "Saludable y sabrosa galleta de avena integral, endulzada con miel natural y un toque de canela, con una textura rústica que la hace perfecta para un snack nutritivo.",
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
