const imgContainer = document.querySelector(".image-container");
const unsplashUrl = "https://source.unsplash.com/random/";
const rows = document.getElementById("rows");
const columns = document.getElementById("columns");
const button = document.getElementById("getImages");

button.addEventListener("click",()=> {
    imgContainer.innerHTML ="";
    for(let i =0;i<rows.value*columns.value;i++)
        {
              setImages();
        }
})



function setImages() {
    const img = document.createElement("img");
    const imgSize = Math.floor((1000-(20*columns.value))/columns.value);
    img.src = `${unsplashUrl}${getRandomNumber()}x${getRandomNumber()}`;
    img.style.width=`${imgSize}px`;
    img.style.height=`${imgSize}px`;
    imgContainer.appendChild(img);
}


function getRandomNumber() {
    return Math.floor(Math.random()*50)+300;
}