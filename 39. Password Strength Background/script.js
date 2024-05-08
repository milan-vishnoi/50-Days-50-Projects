const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (event) => {
    const input = event.target.value;
    const inputLength = input.length;

    background.style.filter = `blur(${20 - inputLength*2}px)`;

})