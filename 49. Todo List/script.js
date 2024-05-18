const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");
const savedTodos = JSON.parse(localStorage.getItem("todos"));

if(savedTodos) {
    savedTodos.forEach(task => addTodo(task));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let task = input.value;

    if(todo) {
        task = todo.text;
    }

    if(task) {
        const taskElement = document.createElement("li");

        if(todo && todo.completed) {
            taskElement.classList.add("completed");
        }
        taskElement.innerText = task;

        taskElement.addEventListener("click",() => {
            taskElement.classList.toggle("completed");
            updateLocalStorage();
        } );

        taskElement.addEventListener("contextmenu",(event) => {
          event.preventDefault();
          taskElement.remove();
          updateLocalStorage();
        } );

        todos.appendChild(taskElement);
        input.value = "";

        updateLocalStorage();
    }
}

function updateLocalStorage() {
    const taskElements = document.querySelectorAll("li");
    const todoArray = [];

    taskElements.forEach(task => {
        todoArray.push({
            text: task.innerText,
            completed: task.classList.contains("completed")
        })
    });

    localStorage.setItem("todos",JSON.stringify(todoArray));
}