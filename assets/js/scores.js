var clearScores = document.getElementById("clearScores");
var tbody = document.querySelector("#tbody");
var highscoreList = localStorage.getItem("highscores");
highscoreList = JSON.parse(highscoreList);


JSON.parse(user)
console.log(user.gameNum)
console.log(user.initials)
console.log(user.newScore)

for (var i = 0; i < highscoreList.length; i++) {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.textContent = highscoreList[i][0];
    td2.textContent = highscoreList[i][1]; 

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
};

//create clear scores button
clearScores.addEventListener("click", function () {
    localStorage.removeItem("highscores");
    tbody.setAttribute("style", "display: none");

});

