const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createCardOfUser(data);
  } catch (error) {
    if(error.response.status == 404)
      createErrorCard("No profile found with this username");
    else if(error.response.status == 500)
    createErrorCard("Currently Server is down");
  }
}

function createCardOfUser(userData){
    const card = `
    <div class="card">
            <div>
                <img src="${userData.avatar_url}" alt="${userData.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio}</p>
                <ul>
                    <li>${userData.followers} <strong>Followers</strong></li>
                    <li>${userData.following} <strong>Following</strong></li>
                    <li>${userData.public_repos} <strong>Repos</strong></li>
                </ul>

                <div class="repos">
                    <a href="#" class="repo">Repo 1</a>
                    <a href="#" class="repo">Repo 2</a>
                    <a href="#" class="repo">Repo 3</a>
                </div>
            </div>
        </div>
    `;

    main.innerHTML = card ;
}

function createErrorCard(message) {
    const card = `
    <div class="card">
    <h1>${message}</h1>
    </div>
    `;
     
    main.innerHTML = card;

}

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);

        search.value = "";
    }
})