// GLOBAL VARIABLES
var newGame = new Game();
//QUERY SELECTOR
var gameBoard = document.getElementById("gameBoard");
var currentTurn = document.getElementById("playersTurn");
var player1Wins = document.getElementById("pl1Wins");
var player2Wins = document.getElementById("pl2Wins");
var box = document.querySelectorAll(".box");

//EVENT LISTENERS
// window.addEventListener("onload", getStorage);
gameBoard.addEventListener("click", function() {
  checkBox(event)
});

//FUNCTIONS

// function getStorage() {
//   // JSON.parse(localStorage.getItem("games")) || [];
//   newGame.saveToStorage();
// }

function gameStart() {
  player1Wins.innerText = `${newGame.player1.wins} wins`;
  player2Wins.innerText = `${newGame.player2.wins} wins`;
}

function checkBox(event) {
  if (event.target.closest(".box").innerText === "")
  checkTurn();
}

function checkTurn() {
  if (newGame.currentTurn === newGame.player1) {
    playGame(event, newGame.player1.token, newGame.player2.token);
  } else if (newGame.currentTurn === newGame.player2) {
    playGame(event, newGame.player2.token, newGame.player1.token);
  }
  newGame.switchTurns();
}

function playGame(event, token, turn) {
  var index = event.target.closest(".box");
  if (newGame.board[index.id].id === parseInt(index.id) && (index.innerText === "")) {
    event.target.closest(".box").innerText = `${token}`;
    newGame.board[parseInt(index.id)].token = token;
    newGame.addTurn();
  }
  checkWin(token, turn);
}


function checkWin(token, turn) {
  if (newGame.checkWinConditions(token)) {
    console.log("win");
    currentTurn.innerText = `${token} WON!`;
    newGame.resetGame();
    window.setTimeout(clearBoard, 2000);
  } else if (newGame.drawGame()){
    console.log("made it");
    currentTurn.innerText = `It's a DRAW!`;
    newGame.resetGame();
    window.setTimeout(clearBoard, 2000);
  } else {
    currentTurn.innerText = `It's ${turn} turn`;
  }
}

function clearBoard() {
  for (var i = 0; i < box.length; i++) {
    box[i].innerText = "";
    currentTurn.innerText = `It's ${newGame.currentTurn.token} turn`;
  }
}
