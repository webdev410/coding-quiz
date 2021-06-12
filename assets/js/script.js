var score = 0;

var game = [];
var user = "Player 1";

var startButton = document.getElementById('start');
var titleDiv = document.getElementById('title');

var timerDiv = document.querySelector(".timer-div");
var gameSectionDiv = document.getElementById("game-section")
var timeEl = document.querySelector(".time");
var gameOverEl = document.getElementById("game-over");
var secondsLeft = 3;

var question = document.getElementById("question");

var selectionBtn = document.querySelectorAll(".choices");
var choice1 = document.getElementById("choice-1");
var choice2 = document.getElementById("choice-2");
var choice3 = document.getElementById("choice-3");
var choice4 = document.getElementById("choice-4");
var mainEl = document.getElementById("main");

var correctAnswer = "";

// start button & timer
function startGame() {
    // hide title div & start timer
    titleDiv.setAttribute("style", "display: none;")
    timerDiv.setAttribute("style", "display: flex;");
    // timer starts
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds";
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            sendMessage();
        }
    }, 1000);
    gameSectionDiv.setAttribute("style", "display: block;");
    displayQuestion();
}

function displayQuestion() {
    // display question #1
    question.textContent = ("This is the first question.");
    // display multiple choices for question 1
    choice1.textContent = "Answer A"
    choice2.textContent = "Answer B"
    choice3.textContent = "Answer C"
    choice4.textContent = "Answer D"

    //logic for right or wrong answers
    //store correct answer in a variable

    // listen for which answer is selected
    // answerButtonB.addEventListener("click", function(event) {
    //     var answer = event.target;


    //     console.log(correctAnswer)


    //     if (answer.matches(correctAnswer))

    // ;


    // for loop to add incorrect answers to a variable
    // combined array for all answers
    // if correct answer is chosen, add 1 to Correct
    // else add 1 to losses





}



// When Timer hits 0, display Game Over Message
function sendMessage() {
    timeEl.textContent = " ";
    var gameOverText = document.createElement("gameOver");
    gameOverText.textContent = "GAME OVER";
    gameOverText.setAttribute("style", "font-size: 50px; font-family: 'Press Start 2P', cursive;");
    gameOverEl.appendChild(gameOverText);

    // hide questions and answers
    gameSectionDiv.setAttribute("style", "display:none;")
    //hide container
    timerDiv.setAttribute("style", "display: none;")

}


function wrongAnswer() {
    // add 1 to var incorrect
    // subtract 10 seconds from the timer


}

function correctAnswer() {
    // add 1 to var correct
}


function gameOver() {

}


function saveScore() {
    // save button
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();

        var studentGrade = {
            student: student.value,
            grade: grade.value,
            comment: comment.value.trim()
        };

        localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
        renderMessage();

    });

    // add initials to score and save to localStorage
    // display all scores sorted by correct answers
}
 // if all questions are answered, run gameOver()
    // question is generated
    // answers are displayed by changing css display property to block


    // save game in localStorage
    // game = localStorage.setItem

// Stores High Scores in localStorage

        // getItem from local storage
        // sort items by highscore 
                // see javascript 19 Ins methods



        // display scores