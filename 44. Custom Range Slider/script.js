const range = document.getElementById("range");

range.addEventListener("input", (event) => {
    const sliderValue = +event.target.value;
    const label = event.target.nextElementSibling;

    const rangeWidth = getComputedStyle(event.target).getPropertyValue("width");
    const labelWidth = getComputedStyle(label).getPropertyValue("width");

    const numRangeWidth = +rangeWidth.substring(0,rangeWidth.length-2);
    const numLabelWidth = +labelWidth.substring(0,labelWidth.length -2);

    const min = +event.target.min;
    const max = +event.target.max;

    const left = sliderValue * (numRangeWidth/max) - numLabelWidth/2 + scale(sliderValue,min,max,10,-10) ;

    label.style.left = `${left}px`;
    label.innerText = sliderValue;
});

const scale = (num, in_min, in_max, out_min, out_max)=> {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; };