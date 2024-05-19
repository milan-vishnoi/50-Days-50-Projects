const screens = document.querySelectorAll(".screen");
const chooseInsectButtons = document.querySelectorAll(".choose-insect-btn");
const startButton = document.getElementById("start-btn");
const gameContainer = document.querySelector(".game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

let seconds = 0;
let score = 0;
let selectedInsect = {};

startButton.addEventListener("click",() => screens[0].classList.add("up"));

chooseInsectButtons.forEach(button => {
    button.addEventListener("click",() => {
        const img =  button.querySelector("img");
        const source = img.getAttribute("src");
        const altText = img.getAttribute("alt");
        selectedInsect = {source,altText};
        screens[1].classList.add("up");
        setTimeout(addInsect,1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeElement.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function addInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");
    const { x, y } = getRandomScreenLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src=${selectedInsect.source} alt=${selectedInsect.altText} style = "transform: rotate(${Math.random()*360}deg)">`;
    insect.addEventListener("click",catchInsect);
    gameContainer.appendChild(insect);
}

function getRandomScreenLocation() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const x = Math.random() * (windowWidth - 200) + 100;
    const y = Math.random() * (windowHeight - 200) + 100;

    return { x, y };
}

function catchInsect() {
      increaseScore();
}

function increaseScore() {
    score++;
    if(score > 19 ) {
        messageElement.classList.add("visible");
    }
    scoreElement.innerHTML = `Score: ${score}`;
}