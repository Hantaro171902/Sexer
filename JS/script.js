function showSidebar() {
  const sidebar = document.querySelector(".sexer-navbar-sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sexer-navbar-sidebar");
  sidebar.style.display = "none";
}

// Flip card effect on click
var clickCount = 0;

function flipCard(cardId) {
  var card = document.getElementById(cardId);
  if (clickCount % 2 === 0) {
    // Check if it's an evenS click
    card.style.transform = "rotateY(180deg)";
  } else {
    // Odd click
    card.style.transform = "rotateY(0deg)";
  }
  clickCount++;
  console.log(clickCount);
}


// script.js
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
