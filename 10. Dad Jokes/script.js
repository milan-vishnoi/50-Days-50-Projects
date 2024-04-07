const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("jokesBtn");

jokeButton.addEventListener("click",generateJoke);
generateJoke();

//Approach 1 : Using .then()
// function generateJoke() {
//     const config = {
//         headers : {
//             "Accept":"application/json"
//         }
//     };
//     fetch("https://icanhazdadjoke.com",config).then(response => response.json())
//     .then(data => {
//         jokeElement.innerHTML = data.joke;
//     } );
// }

//Approach 2 : Using async-await
async function generateJoke() {
        const config = {
            headers : {
                "Accept":"application/json"
            }
        };
        const response = await fetch("https://icanhazdadjoke.com",config);
        const data = await response.json(); //using await since response.json() returns a promise
        jokeElement.innerHTML = data.joke;
    }