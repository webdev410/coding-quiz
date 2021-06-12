
var correct = 0;
var incorrect = 0;
var container = document.querySelector(".container");
var timeEl = document.querySelector(".time");
var gameOverEl = document.getElementById("game-over");
var secondsLeft = 2;
var answerButtonA = document.getElementById("choice-1");
var answerButtonB = document.getElementById("choice-2");
var answerButtonC = document.getElementById("choice-3");
var answerButtonD = document.getElementById("choice-4");
var mainEl = document.getElementById("main");

// start button
function startGame() {
    // timer starts
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to end game
          sendMessage();
        }
      }, 1000);

    // hide button with id=start
    var startButton = document.getElementById('start');
    startButton.setAttribute("style", "display: none;")

    // hide welcome text
    var titleEl = document.getElementById('title')
    titleEl.setAttribute("style", "display: none;")

    // show contianer
    container.setAttribute("style", "display: flex;");

    question1();



       
    // if all questions are answered, run gameOver()
    // question is generated
    // answers are displayed by changing css display property to block


}

function question1(){
    // display question #1
    var question1 = document.getElementById("question");
    question1.textContent = ("This is the first question.");
 
    // display multiple choices for question 1
    answerButtonA.textContent = "Answer A"
    answerButtonA.setAttribute("style", "display: block;")

    answerButtonB.textContent = "Answer B"
    answerButtonB.setAttribute("style", "display: block;")
    
    answerButtonC.textContent = "Answer C"
    answerButtonC.setAttribute("style", "display: block;")

    answerButtonD.textContent = "Answer D"
    answerButtonD.setAttribute("style", "display: block;")

    //logic for right or wrong answers

}



// When Timer hits 0, display Game Over Message
function sendMessage() {
    timeEl.textContent = " ";
    var gameOverText = document.createElement("h2");
    gameOverText.textContent = "Game Over";
    gameOverText.setAttribute("style", "font-size: 40px; font-family: 'Rubik Mono One';");
    gameOverEl.appendChild(gameOverText);

    // hide questions and answers

    mainEl.setAttribute("style", "display:none")


  
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
    // add initials to score and save to localStorage
    // display all scores sorted by correct answers
}
  


// Stores High Scores in localStorage