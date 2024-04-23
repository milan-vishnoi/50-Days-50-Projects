const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(setData,2000);

function setData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>';
    title.innerText = "Lorem ipsum dolor sit amet.";
    excerpt.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequatur."
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="">';
    name.innerText = "John Doe";
    date.innerText = "23rd April 2024";

}