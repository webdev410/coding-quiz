
var correct = " ";
var incorrect = " ";
// Selects element by class
var timeEl = document.querySelector(".time");
// Selects element by id
var gameOverEl = document.getElementById("status");
var secondsLeft = 2;



// Stores High Scores in localStorage

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


       
        // if all questions are answered, run gameOver()
    // question is generated
    // answers are displayed by changing css display property to block
    // hide button with id=start

}

// When Timer hits 0, display Game Over Message
function sendMessage() {
    timeEl.textContent = " ";
    var gameOverText = document.createElement("h2");
    gameOverText.textContent = "Game Over";
    gameOverText.setAttribute("style", "font-size: 40px; font-family: 'Rubik Mono One';");
    gameOverEl.appendChild(gameOverText);
  
  }

// function gameOver() {
//     gameOverEl.textContent = "Game Over"
//     gameOverEl.setAttribute("style", "font-size: 40px; font-family: monospace;")
//     document.
    // redirect to score page
    // display score
  
//   }

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
  