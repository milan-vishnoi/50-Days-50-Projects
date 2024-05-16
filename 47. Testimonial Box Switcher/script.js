const sampleTestimonials = [
    {
        "name": "Manlan Vishyagi",
        "position": "Sales",
        "photo": "https://randomuser.me/api/portraits/women/43.jpg",
        "text": "This software engineer adeptly navigates HTML, CSS, JavaScript, and Java, showcasing a versatile skill set crucial for modern software development. Proficient in both front-end and back-end technologies, they craft visually appealing interfaces with HTML/CSS and implement interactive features with JavaScript. Their Java expertise enables robust server-side development. With a keen eye for detail and effective communication, they excel in problem-solving and collaboration, making them a valuable asset in any development team"
    },
    {
        "name": "Alice Johnson",
        "position": "CEO, XYZ Corporation",
        "photo": "https://randomuser.me/portraits/women/29.jpg",
        "text": "Working with AnonymousDev has been an absolute pleasure. Their expertise and dedication have greatly contributed to the success of our projects. I highly recommend them for any development endeavor."
    },
    {
        "name": "Bob Smith",
        "position": "Senior Developer",
        "photo": "https://randomuser.me/portraits/men/42.jpg",
        "text": "I've had the privilege of collaborating with AnonymousDev on multiple occasions, and I'm consistently impressed by their technical prowess and professionalism. They are an invaluable asset to any team."
    },
    {
        "name": "Sophia Chen",
        "position": "Project Manager",
        "photo": "https://randomuser.me/portraits/women/56.jpg",
        "text": "It's rare to come across someone as skilled and dedicated as AnonymousDev. Their positive attitude and willingness to go the extra mile make them a standout team member. I'm grateful for the opportunity to work with them."
    },
    {
        "name": "Emma Wilson",
        "position": "Marketing Director",
        "photo": "https://randomuser.me/portraits/women/67.jpg",
        "text": "Working with AnonymousDev has been nothing short of fantastic. Their creativity, attention to detail, and ability to meet tight deadlines make them an invaluable asset to our marketing team. I'm grateful for their contributions."
    }
];

const testimonialContainer = document.querySelector(".testimonial-container");
const user = document.querySelector(".user");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const testimonial = document.querySelector(".testimonial");

let index = 1;



function updateTestimonial() {
    const {name, position, photo,text} = sampleTestimonials[index];

    userImage.src = photo;
    username.innerText = name;
    role.innerText = position;
    testimonial.innerText = text;

    index++;

    if(index > sampleTestimonials.length - 1)
        {
            index = 0;
        }
}

setInterval(updateTestimonial,5000);
