const addButton = document.getElementById("add");

addButton.addEventListener("click",()=> addNewNote("**Hello World**"));

function addNewNote(text="") {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
<div class="main ${text ? "":"hidden"}"></div>
<textarea class="${text ? "hidden":""}"></textarea>
    `;
    
    const editButton = note.querySelector(".edit");
    const deleteButton = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textarea = note.querySelector("textarea");

    textarea.value = text;
    main.innerHTML = text;

    deleteButton.addEventListener("click", () => note.remove() );

    editButton.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    } );

    textarea.addEventListener("input",(event)=> {
        const { value } = event.target;

        main.innerHTML = value;
    })

    document.body.appendChild(note);
}