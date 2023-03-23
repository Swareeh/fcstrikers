// Nav Bar 

toggleBtn()

function toggleBtn() {

  const navLinks = document.getElementById('nav_connections')
  const web_body = document.getElementById('web_body')

  if (navLinks.style.right === "450px") {
      navLinks.style.right = "0px";
      web_body.style.overflow = "hidden";
  } else {
      navLinks.style.right = "450px";
      web_body.style.overflow = "visible";
  }
}


const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeButton = document.querySelector('.close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentImageIndex = 0;

function openLightbox(event) {
  lightboxImage.src = event.target.src;
  lightbox.classList.add('show');
  currentImageIndex = Array.from(thumbnails).indexOf(event.target.parentElement);
}

function closeLightbox() {
  lightbox.classList.remove('show');
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
  lightboxImage.src = thumbnails[currentImageIndex].firstElementChild.src;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
  lightboxImage.src = thumbnails[currentImageIndex].firstElementChild.src;
}

function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  }

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', openLightbox);
});

closeButton.addEventListener('click', closeLightbox);
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
window.addEventListener('keydown', handleKeyDown);