const questions = [
    {
        question: "Which is the largest animal in the world?";
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},

        ]
    },
    {
    question: "Which is the smallest continent in the world?";
    answers: [
        { text: "Asia", correct: false},
        { text: "Australia", correct: true},
        { text: "Arctic", correct: false},
        { text: "Africa", correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.Button.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement
}