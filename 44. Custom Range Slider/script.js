const range = document.getElementById("range");

range.addEventListener("input", (event) => {
    const sliderValue = event.target.value;
    const label = event.target.nextElementSibling;

    label.innerText = sliderValue;
})