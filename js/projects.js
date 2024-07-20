const projectSlider = document.querySelector('.project-slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const projectSlides = document.querySelectorAll('.project-slide');

let currentIndex = 0;

function updateSlider() {
projectSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

leftArrow.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + projectSlides.length) % projectSlides.length;
updateSlider();
});

rightArrow.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % projectSlides.length;
updateSlider();
});