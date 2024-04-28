const loveMe = document.querySelector(".loveMe");
const times = document.querySelector(".times");

let clickTime = 0;
let timeClicked = 0;

loveMe.addEventListener("click", (event) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(event);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (event) => {
   const heart = document.createElement("i");
   heart.classList.add("fas");
   heart.classList.add("fa-heart");

   const x = event.clientX;
   const y = event.clientY;

   const leftOffset = event.target.offsetLeft;
   const topOffset = event.target.offsetTop;

   const insideX = x - leftOffset;
   const insideY = y - topOffset;

   heart.style.left = `${insideX}px`;
   heart.style.top = `${insideY}px`;

   loveMe.appendChild(heart);
   times.innerHTML = ++timeClicked;

   setTimeout(()=> heart.remove(),1000);
};