const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

button.addEventListener("click",()=>createNotification());

const messages = [
        "message one",
        "message two",
        "message three",
        "message four"
    ];



function createNotification(){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    toast.innerHTML = getRandomMessage();

    toasts.appendChild(toast);

    setTimeout(()=>toast.remove(),2500);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random()*messages.length)];
}