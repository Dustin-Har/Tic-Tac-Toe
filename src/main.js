// GLOBAL VARIABLES
var newGame = new Game();
//QUERY SELECTOR
var gameBoard = document.querySelector("#gameBoard");
var currentTurn = document.querySelector("#playersTurn");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7 = document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");
//EVENT LISTENERS
// window.addEventListener("onload", getStorage);
window.addEventListener("onload", displayTurn);
gameBoard.addEventListener("click", checkTurn);

// box1.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box2.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box3.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box4.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box5.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box6.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box7.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box8.addEventListener("click", function(event) {
//   CheckTurn();
// });
//
// box9.addEventListener("click", function(event) {
//   CheckTurn();
// });
//


//FUNCTIONS

// function getStorage() {
//   // JSON.parse(localStorage.getItem("games")) || [];
//   newGame.saveToStorage();
// }

//switch players. make 2 instances of player. then after every click
//switch to other character
function gameStart() {
  player1Wins.innerText = `${player1.wins} wins`;
  player2Wins.innerText = `${player2.wins} wins`;
}

function checkTurn() {
  newGame.switchTurns();
  if (newGame.player1.turn === true) {
    changeTurn(event, newGame.player1.wins, newGame.player1.token, newGame.player2.token);
  } else if (newGame.player2.turn === true) {
    changeTurn(event,newGame.player2.wins, newGame.player2.token, newGame.player1.token);
  }
}

function changeTurn(event, player, token, turn) {
  event.target.innerText = `${token}`;
  if(newGame.checkWinConditions(token, player)){
    currentTurn.innerText = `${token} WON!`;
  } else {
    currentTurn.innerText = `It's ${turn} turn`;
  }


  //innerHTML board with CheckTurn()
}

function displayTurn() {
}
