function showSidebar() {
  const sidebar = document.querySelector(".sexer-navbar-sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sexer-navbar-sidebar");
  sidebar.style.display = "none";
}

// Flip card effect on click
function flipCard(cardId) {
  var card = document.getElementById(cardId);
  card.classList.toggle("flipped");
}

// Initialize slider functionality for each .image-list container
const initSlider = (imageList) => {
  let isDragging = false;
  let startX;
  let scrollLeft;

  // Add drag-to-scroll functionality to the specific image list
  imageList.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - imageList.offsetLeft;
    scrollLeft = imageList.scrollLeft;
    imageList.style.cursor = "grabbing";
  });

  imageList.addEventListener("mouseleave", () => {
    isDragging = false;
    imageList.style.cursor = "grab";
  });

  imageList.addEventListener("mouseup", () => {
    isDragging = false;
    imageList.style.cursor = "grab";
  });

  imageList.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageList.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed by changing multiplier
    imageList.scrollLeft = scrollLeft - walk;
  });
};

// Loop through each .image-list container and initialize slider for each
window.addEventListener("load", () => {
  const imageLists = document.querySelectorAll(".slider-wrapper .image-list");
  imageLists.forEach(initSlider); // Apply initSlider to each imageList
});
