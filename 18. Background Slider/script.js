const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

setBackgroundToBody();
setActiveSlide();

leftButton.addEventListener("click", () => {
  if (activeSlide === 0) activeSlide = slides.length - 1;
  else activeSlide--;
  setBackgroundToBody();
  setActiveSlide();
});

rightButton.addEventListener("click", () => {
  if (activeSlide === slides.length - 1) activeSlide = 0;
  else activeSlide++;
  setBackgroundToBody();
  setActiveSlide();
});

function setBackgroundToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
