const canvas = document.getElementById("canvas");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById('color');
const clearElement = document.getElementById("clear");
// Details about Canvas API : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const ctx = canvas.getContext("2d");


let size = 20;
let color = "black";
let x
let y


// drawCircle(100, 200);
// drawLine(100,200,300,300);

canvas.addEventListener("mousedown",(e)=> {
    isPressed = true;
     
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup",(e)=> {
    isPressed =false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove",(e)=> {
    if(isPressed) {
         const x1 = e.offsetX;
         const y1 = e.offsetY;

         drawCircle(x,y);
         drawLine(x,y,x1,y1);

         x = x1;
         y = y1;
    }
});

colorElement.addEventListener("change",(e) => color = e.target.value);

increaseButton.addEventListener("click",()=>{
    size+=5;

    if(size>50) {
          size = 50;
    }

    updateSizeOnScreen(size);
});

decreaseButton.addEventListener("click",()=>{
    size-=5;

    if(size<5) {
          size = 5;
    }

    updateSizeOnScreen(size);
})

clearElement.addEventListener("click", () => {
    //Clearing entire canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
})


// Drawing shapes: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen(size) {
    sizeElement.innerText = size;
}