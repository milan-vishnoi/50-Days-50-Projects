const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replayButton = document.querySelector("#replay");

runAnimation();

function runAnimation(){
    nums.forEach((num,index)=> {
        const last = nums.length - 1;
        num.addEventListener("animationend",(event)=>{
            if(event.animationName === "goIn" && index !== last) {
                    num.classList.remove("in");
                    num.classList.add("out");
            }else if(event.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            }else {
                 counter.classList.add("hide");
                 final.classList.add("show");
            }
        });
    });
}

function resetDOM() {
    counter.classList.remove("hide");
    final.classList.remove("show");

    nums.forEach(num => num.classList.value = "") ;

    nums[0].classList.add("in");
}

replayButton.addEventListener("click", () => {
   resetDOM();
   runAnimation();
});