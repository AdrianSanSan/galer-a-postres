/* Ejecuta el código cuando el DOM está completamente cargado */
document.addEventListener("DOMContentLoaded", () => {
  /* Muestra un mensaje en la consola para confirmar que el script se cargó */
  console.log("¡Galería de Postres cargada correctamente!");

  /* --- Gestión del carrusel --- */
  /* Selecciona el contenedor interno del carrusel */
  const carouselInner = document.querySelector(".carousel-inner");
  /* Selecciona todos los elementos del carrusel */
  const carouselItems = document.querySelectorAll(".carousel-item");
  /* Inicializa el índice de la diapositiva actual */
  let currentIndex = 0;

  /* Función para mostrar la siguiente diapositiva */
  function showNextSlide() {
    /* Verifica que el contenedor y los elementos existan */
    if (carouselInner && carouselItems.length > 0) {
      /* Incrementa el índice, volviendo a 0 si llega al final */
      currentIndex = (currentIndex + 1) % carouselItems.length;
      /* Desplaza el contenedor para mostrar la siguiente diapositiva */
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  /* Si el carrusel existe, cambia de diapositiva cada 3 segundos */
  if (carouselInner) {
    setInterval(showNextSlide, 3000);
  }

  /* --- Gestión de los menús desplegables y el modal --- */
  /* Selecciona todas las opciones de los menús desplegables */
  const dessertOptions = document.querySelectorAll(".dessert-option");
  /* Selecciona el contenedor del modal de información del postre */
  const dessertInfo = document.querySelector("#dessert-info");
  /* Selecciona el fondo oscurecido del modal */
  const dessertBackdrop = document.querySelector("#dessert-info-backdrop");
  /* Selecciona el título del modal */
  const dessertTitle = document.querySelector("#dessert-title");
  /* Selecciona la imagen del modal */
  const dessertImage = document.querySelector("#dessert-image");
  /* Selecciona la descripción del modal */
  const dessertDescription = document.querySelector("#dessert-description");
  /* Selecciona el botón de cerrar el modal */
  const closeDessertInfo = document.querySelector("#close-dessert-info");

  /* Objeto que almacena los datos de cada postre (título, imagen, descripción) */
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

  /* Si hay opciones en los menús desplegables, añade eventos de clic */
  if (dessertOptions.length > 0) {
    dessertOptions.forEach((option) => {
      option.addEventListener("click", () => {
        /* Obtiene el ID del postre desde el atributo data-dessert */
        const dessertId = option.getAttribute("data-dessert");
        /* Obtiene los datos del postre correspondiente */
        const data = dessertData[dessertId];

        /* Verifica que los datos y los elementos del modal existan */
        if (
          data &&
          dessertTitle &&
          dessertImage &&
          dessertDescription &&
          dessertInfo &&
          dessertBackdrop
        ) {
          /* Actualiza el título, imagen y descripción del modal */
          dessertTitle.textContent = data.title;
          dessertImage.src = data.image;
          dessertDescription.textContent = data.description;

          /* Muestra el modal y el fondo oscurecido */
          dessertInfo.classList.remove("hidden");
          dessertBackdrop.classList.remove("hidden");
        }
      });
    });
  }

  /* Si existe el botón de cerrar el modal, añade un evento de clic */
  if (closeDessertInfo) {
    closeDessertInfo.addEventListener("click", () => {
      /* Verifica que el modal y el fondo oscurecido existan */
      if (dessertInfo && dessertBackdrop) {
        /* Oculta el modal y el fondo oscurecido */
        dessertInfo.classList.add("hidden");
        dessertBackdrop.classList.add("hidden");
      }
    });
  }
});
