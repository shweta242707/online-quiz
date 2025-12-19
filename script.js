const quiz = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: 1
    },
    {
        question: "Which language runs in a browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "HTML is used for?",
        options: ["Styling", "Structure", "Logic", "Database"],
        answer: 1
    },
    {
        question: "CSS stands for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1
    },
    {
        question: "Which is NOT a programming language?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: 1
    }
];

let index = 0;
let score = 0;
let user = "";
let timeLeft = 10;
let timer;

function startQuiz() {
    user = document.getElementById("username").value;
    if (user === "") {
        alert("Please enter your name");
        return;
    }
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    timeLeft = 10;
    document.getElementById("timer").innerText = "Time left: 10s";
    startTimer();

    document.getElementById("question").innerText = quiz[index].question;
    const options = document.querySelectorAll(".option");
    options.forEach((btn, i) => {
        btn.innerText = quiz[index].options[i];
    });
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText =
            "Time left: " + timeLeft + "s";

        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selected) {
    if (selected === quiz[index].answer) {
        score++;
    }
}

function nextQuestion() {
    clearInterval(timer);
    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quizScreen").classList.add("hidden");
        document.getElementById("resultScreen").classList.remove("hidden");
        document.getElementById("resultScreen").innerHTML =
            `<h2>Well done, ${user}!</h2>
             <p>Your Score: ${score}/${quiz.length}</p>
             <button onclick="location.reload()">Play Again</button>`;
    }
}
