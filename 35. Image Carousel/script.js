const imagesContainer = document.getElementById("images");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

const images = document.querySelectorAll("#images img");


let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;

  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1 ;
  }
  
  imagesContainer.style.transform = `translateX(${-index*450}px)`
}
