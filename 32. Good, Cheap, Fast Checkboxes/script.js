const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach(toggle =>{
    toggle.addEventListener("change",(event) => setTheExpectations(event.target))});

function setTheExpectations(clickedEvent) {
    if(good.checked && cheap.checked && fast.checked)
    {
        if(clickedEvent === good)
        {
            fast.checked = false;
        }
        if(clickedEvent === cheap)
        {
            good.checked = false;
        }
        if(clickedEvent === fast)
        {
            cheap.checked = false;
        }
    }
}