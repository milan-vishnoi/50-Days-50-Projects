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

setInterval(setTime,1000);

function setTime(){
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth();
    const hour = time.getHours() % 12; //getHours will return hours in 24 hour format, converting it to 12 hours
    const minutes = time.getMinutes();
    const seconds  = time.getSeconds();
    const meridian = time.getHours() < 12 ? "AM": "PM";

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hour,0,11,0,360)}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;
    timeElement.innerText = `${hour<10?`0${hour}`:hour}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds} ${meridian}`;
    dateElement.innerHTML = `${months[month]},  <span class="datevalue">${day}</span>`;
}

function scale (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max -
    in_min) + out_min};