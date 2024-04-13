const smallCups = document.querySelectorAll(".cup-small");


smallCups.forEach((cup,index)=> {
    cup.addEventListener("click",()=> highlightCup(index))
})

function highlightCup(index) {

    if(smallCups[index].classList.contains("full") &&
       !smallCups[index].nextElementSibling.classList.contains("full")) {
             index--;
       }
    
    smallCups.forEach((cup,index2) => {
        if(index2 <= index)
        {
            cup.classList.add("full");
        }
        else 
        {
            cup.classList.remove("full");
        }
    });
}