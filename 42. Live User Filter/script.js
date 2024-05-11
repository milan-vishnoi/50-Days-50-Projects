const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getUsers();

filter.addEventListener("input" , (event) => filterUsers(event.target.value));

async function getUsers() {
    const response = await fetch("https://randomuser.me/api?results=500");
    const data = await response.json();
    
    //Clearing the result screen
    result.innerHTML = "";

    data.results.forEach(user => {
         const listItem = document.createElement("li");
         listItems.push(listItem);
         listItem.innerHTML = `
         <img src=${user.picture.large} alt=${user.name.first}>
         <div class="user-info">
             <h4>${user.name.first} ${user.name.last}</h4>
             <p>${user.location.city}, ${user.location.country}</p>
         </div>
         `;
         result.appendChild(listItem);
    });
}

function filterUsers(searchText) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchText.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}