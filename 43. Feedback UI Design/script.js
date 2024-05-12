const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendButton = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied";


ratingsContainer.addEventListener("click", (event) => {
    if(event.target.parentNode.classList.contains("rating")) {
        removeActiveRating();
        event.target.parentNode.classList.add("active");
        selectedRating = event.target.nextElementSibling.innerText;
    } else if(event.target.classList.contains("rating")) {
        removeActiveRating();
        event.target.classList.add("active");
         selectedRating = event.target.querySelector("small").innerText;
    }
})

sendButton.addEventListener("click", (event)=> {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thanks You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use you feedback to improve our customer support<p>
    `;
})


function removeActiveRating() {
    ratings.forEach(rating => rating.classList.remove("active"));
}