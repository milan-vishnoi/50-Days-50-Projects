const container = document.querySelector(".container");
const unsplashUrl = "https://source.unsplash.com/random/";
const rows = 10;
const columns = 3;

for(let i = 0;i<=rows*columns;i++)
    {
          setImages();
    }

function setImages() {
    const img = document.createElement("img");
    img.src = `${unsplashUrl}${getRandomNumber()}x${getRandomNumber()}`;
    container.appendChild(img);
}


function getRandomNumber() {
    return Math.floor(Math.random()*10)+300;
}