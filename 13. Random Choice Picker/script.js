const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup",(e) => {
    createTag(e.target.value);

    if(e.key === "Enter")
    { 
        setTimeout(()=> {
            e.target.value = '';
        },10);
        randomSelect();
    }
});

function randomSelect() {
    const times = 30;
    //This interval is for random highlighting and unhighlighting
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 300);
    }, 300);

    //This timeout is for picking the random tag and highlighting it
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 200);
    }, times * 100);
}

function createTag(input) {
   const tags = input.split(",").filter(tag => tag.trim() !== "")
                .map(tag => tag.trim());

    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    })

}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random()*tags.length)];
}

function highlightTag(randomTag) {
    randomTag.classList.add("highlight");
}

function unhighlightTag(randomTag) {
    randomTag.classList.remove("highlight");
}
