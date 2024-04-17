const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggleElement = document.querySelector(".toggle");

const days = ["Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday"];
const months = ["January","February","March","April",
"May","June","July","August","September","October",
"Novemeber","December"];


toggleElement.addEventListener("click",()=> {
    const htmlElement = document.querySelector("html")
    htmlElement.classList.toggle("dark");
    if(htmlElement.classList.contains("dark"))
    toggleElement.innerText = "Light Mode";
    else
    toggleElement.innerText = "Dark Mode";
});