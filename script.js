const quiz = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: 1
    },
    {
        question: "Which language runs in browser?",
        options: ["C", "Java", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "HTML is used for?",
        options: ["Design", "Structure", "Logic", "Database"],
        answer: 1
    }
];

let index = 0;
let score = 0;
let user = "";

function startQuiz() {
    user = document.getElementById("username").value;
    if (user === "") {
        alert("Enter your name");
        return;
    }
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    document.getElementById("question").innerText = quiz[index].question;
    document.querySelectorAll(".option").forEach((btn, i) => {
        btn.innerText = quiz[index].options[i];
    });
}

function checkAnswer(selected) {
    if (selected === quiz[index].answer) {
        score++;
    }
}

function nextQuestion() {
    index++;
    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quizScreen").classList.add("hidden");
        document.getElementById("resultScreen").classList.remove("hidden");
        document.getElementById("resultScreen").innerHTML =
            `<h2>Thank you ${user}</h2>
             <p>Your Score: ${score}/${quiz.length}</p>
             <button onclick="location.reload()">Play Again</button>`;
    }
}
