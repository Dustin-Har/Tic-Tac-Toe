// GLOBAL VARIABLES
var newGame = new Game();
//QUERY SELECTOR
var gameBoard = document.getElementById("gameBoard");
var currentTurn = document.getElementById("playersTurn");
var player1Wins = document.getElementById("pl1Wins");
var player2Wins = document.getElementById("pl2Wins");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
//EVENT LISTENERS
// window.addEventListener("onload", getStorage);
window.addEventListener("load", gameStart);
gameBoard.addEventListener("click", changeTurn);


//switch players. make 2 instances of player. then after every click
//switch to other character
function gameStart() {
  console.log("BITCH");
  player1Wins.innerText = `${newGame.player1.wins} wins`;
  player2Wins.innerText = `${newGame.player2.wins} wins`;
}

function changeTurn() {
  if (newGame.currentTurn === newGame.player1) {
    playGame(event, newGame.player1.token, newGame.player2.token);
  } else if (newGame.currentTurn === newGame.player2) {
    playGame(event, newGame.player2.token, newGame.player1.token);
  }
  newGame.switchTurns();
}

function playGame(event, token, turn) {
  if (event.target.innerText === "") {
    event.target.innerText = `${token}`;
  }
  checkWin(token, turn);
}

function checkWin(token, turn) {
  if (newGame.checkWinConditions(token)) {
    currentTurn.innerText = `${token} WON!`;
  } else {
    currentTurn.innerText = `It's ${turn} turn`;
  }
}


//innerHTML board with CheckTurn()

function displayTurn() {}
