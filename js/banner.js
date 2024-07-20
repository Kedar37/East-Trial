const slider = document.querySelector('.banner-slider');
const slides = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 2000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});