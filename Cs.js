// Variable para mantener el índice del slide actual
let slideIndex = 0;

// Función para mostrar los slides
function showSlides() {
  // Selecciona todas las imágenes dentro del contenedor del carrusel
  const slides = document.querySelectorAll('.carousel-content img');
  
  // Itera sobre todas las imágenes y las oculta
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Incrementa el índice del slide
  slideIndex++;
  
  // Si el índice es mayor que el número de slides, vuelve al primero
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }
  
  // Muestra el slide actual
  slides[slideIndex - 1].classList.add('active');

  // Llama a la función showSlides de nuevo después de 4 segundos
  setTimeout(showSlides, 4000); 
}

// Llama a la función showSlides para iniciar el carrusel
showSlides();

