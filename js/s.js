// script.js

const slides = document.querySelectorAll('.slider .slide');
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    // Show the selected slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
