const container = document.querySelector(".image-container");
const unsplashUrl = "https://source.unsplash.com/random/";
const rows = document.getElementById("rows");
const columns = document.getElementById("columns");
const button = document.getElementById("getImages");

button.addEventListener("click",()=> {
    for(let i =0;i<rows.value*columns.value;i++)
        {
              setImages();
        }
})



function setImages() {
    const img = document.createElement("img");
    img.src = `${unsplashUrl}${getRandomNumber()}x${getRandomNumber()}`;
    container.appendChild(img);
}


function getRandomNumber() {
    return Math.floor(Math.random()*50)+300;
}