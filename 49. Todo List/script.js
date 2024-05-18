const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    addTodo();
});

function addTodo(todo) {
    const task = input.value;

    if(todo) {
        task = todo.text;
    }

    if(task) {
        const taskElement = document.createElement("li");

        if(todo && todo.completed) {
            taskElement.classList.add("completed");
        }
        taskElement.innerText = task;

        taskElement.addEventListener("click",() => taskElement.classList.toggle("completed"));

        taskElement.addEventListener("contextmenu",(event) => {
          event.preventDefault();
          taskElement.remove()
        } );

        todos.appendChild(taskElement);
        input.value = "";
    }

}