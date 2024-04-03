const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",checkBoxes);


function checkBoxes() {
    // This will calculate what is the 80% height if the window
    const triggerBottom = window.innerHeight/ 5 * 4;

    boxes.forEach(box => {
        //Get the top of the box wrt viewport
        const boxTop = box.getBoundingClientRect().top;
         
        if(boxTop<triggerBottom){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    })
}