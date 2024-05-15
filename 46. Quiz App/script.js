const quizData = [
 {   
question: "Which language runs in a web browser?",
a: "Java",
b: "C",
c: "Python",
d: "JavaScript",
correct: "d",
},
{
question: "What does CSS stand for?",
a: "Central Style Sheets",
b: "Cascading Style Sheets",
c: "Cascading Simple Sheets",
d: "Cars SUVs Sailboats",
correct: "b",
},
{
question: "What does HTML stand for?",
a: "Hypertext Markup Language",
b: "Hypertext Markdown Language",
c: "Hyperloop Machine Language",
d: "Helicopters Terminals Motorboats Lamborginis",
correct: "a"
},
{
question: "What year was JavaScript launched?",
a: "1996",
b: "1995",
c: "1994",
d: "none of the above",
correct: "b"
}
];

const quizContainer = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const aLabel = document.getElementById("a_label");
const bLabel = document.getElementById("b_label");
const cLabel = document.getElementById("c_label");
const dLabel = document.getElementById("d_label");


let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    question.innerText = quizData[currentQuestion].question;
    aLabel.innerText = quizData[currentQuestion].a;
    bLabel.innerText = quizData[currentQuestion].b;
    cLabel.innerText = quizData[currentQuestion].c;
    dLabel.innerText = quizData[currentQuestion].d;
}