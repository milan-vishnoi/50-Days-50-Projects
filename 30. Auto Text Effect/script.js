const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "We love programming!";
let index = 1;
let speed = 300 / speedElement.value;

writeMessage();

function writeMessage() {
    textElement.innerHTML = text.slice(0,index);

    index++;

    if(index > text.length)
    index = 1;

    setTimeout(writeMessage,speed);
}

speedElement.addEventListener("input",(event)=> speed = 300/event.target.value);