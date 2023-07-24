
var slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");

  // Verificar o limite dos slides
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Esconder todos os slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Mostrar o slide atual
  slides[slideIndex].style.display = "block";
}
