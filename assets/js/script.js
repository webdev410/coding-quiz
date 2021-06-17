var score = 0;

var game = 0;
var username = document.getElementById("username");

var startButton = document.getElementById('start');
var titleDiv = document.getElementById('title');
var timerDiv = document.querySelector(".timer-div");
var gameSectionDiv = document.getElementById("game-section")
var timeEl = document.querySelector(".time");
var gameOverEl = document.getElementById("game-over");
var secondsLeft = 60;
var question = document.getElementById("question");
var questionNumber = 0;
var selectionBtn = document.querySelectorAll(".answers");
var choice1 = document.getElementById("choice-1");
var choice2 = document.getElementById("choice-2");
var choice3 = document.getElementById("choice-3");
var choice4 = document.getElementById("choice-4");
var mainEl = document.getElementById("main");
var resultEl = document.getElementById("result")

var resultsDiv = document.getElementById("end-game")
var finalScoreEl = document.getElementById("final-score")

// all questions
var allQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ['numbers & strings', 'other arrays', 'booleans', 'all of the above'],
        answer: "numbers & strings"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ['JavaScript', 'Terminal/Bash', 'for loops', 'console.log'],
        answer: "console.log"
    },


];

// sounds
function playCorrect() {
    var audio = new Audio('assets/sounds/correct.wav');
    audio.play();
}

function playWrong() {
    var audio = new Audio('assets/sounds/wrong.wav');
    audio.play();
}

function playGameOver() {
    var audio = new Audio('assets/sounds/game-over.wav');
    audio.play();
}
// hide and show divs
function hideTitle() {
    titleDiv.setAttribute("style", "display: none;")
}

function hideQuestions() {
    // hide questions and answers
    gameSectionDiv.setAttribute("style", "display:none;")
    //hide container
    timerDiv.setAttribute("style", "display: none;")
}

function showGame() {
    gameSectionDiv.setAttribute("style", "display: block;");
}

function showTimer() {
    timerDiv.setAttribute("style", "display: flex;");
}

function hideTimer() {
    timerDiv.setAttribute("style", "display: none;");
}



// when start button is pressed
function startGame() {
    hideTitle();
    showTimer();
    showGame();
    displayQuestion();
    resultsDiv.setAttribute("style", "display: none;")


    // timer
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds";
        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            gameOver();
        }

    }, 1000);
};

function displayQuestion() {
    if (questionNumber === allQuestions.length) {
        greatWork()
    }
    else {
        // display question
        question.textContent = allQuestions[questionNumber].question;

        // display multiple choices for question
        choice1.textContent = allQuestions[questionNumber].choices[0];
        choice2.textContent = allQuestions[questionNumber].choices[1];
        choice3.textContent = allQuestions[questionNumber].choices[2];
        choice4.textContent = allQuestions[questionNumber].choices[3];
    }
};

// When Timer hits 0, display Game Over Message
function gameOver() {
    resultsDiv.setAttribute("style", "display: block;")
    timeEl.textContent = " ";
    var gameOverText = document.createElement("gameOver");
    gameOverText.textContent = "GAME OVER";
    gameOverText.setAttribute("style", "font-size: 50px; font-family: 'Press Start 2P', cursive;");
    gameOverEl.appendChild(gameOverText);

    hideQuestions()
    playGameOver()
    finalScore()
};

function greatWork() {
    hideQuestions()
    resultsDiv.setAttribute("style", "display: block;")

    var greatWorkText = document.createElement("greatWork");
    greatWorkText.textContent = "GREAT WORK!";
    greatWorkText.setAttribute("style", "font-size: 50px; font-family: 'Press Start 2P', cursive;");
    gameOverEl.appendChild(greatWorkText);

    playGameOver()
    finalScore()
};

//loop through the questions and decide if it's a right or wrong answer
for (var i = 0; i < selectionBtn.length; i++) {
    selectionBtn[i].addEventListener('click', function (event) {
        if (event.target.textContent === allQuestions[questionNumber].answer) {
            resultEl.textContent = "Correct";
            score++;
            playCorrect()
        }
        else if (event.target.textContent != allQuestions[questionNumber].answer) {
            resultEl.textContent = "Incorrect";
            secondsLeft = secondsLeft - 5;
            playWrong();
        };
        questionNumber++;
        displayQuestion()
    });
};

// display final score
function finalScore() {
    finalScoreEl.setAttribute("style", "display: block;")
    finalScoreEl.textContent = score
};

// save score to local storage
function saveScore() {
    game++

    console.log("score: ", score);
    console.log("username: ", username.value)
    console.log("Game: ", game)

    gameNum = game.value;

    var user = {
        gameNum: game,
        initials: username.value.trim(),
        newScore: score
    };

 localStorage.setItem("user", JSON.stringify(user));

 renderScores()

};

