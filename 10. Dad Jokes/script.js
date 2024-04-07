const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("jokesBtn");

jokeButton.addEventListener("click",generateJoke);
generateJoke();

function generateJoke() {
    const config = {
        headers : {
            "Accept":"application/json"
        }
    };
    fetch("https://icanhazdadjoke.com",config).then(response => response.json())
    .then(data => {
        jokeElement.innerHTML = data.joke;
    } );
}