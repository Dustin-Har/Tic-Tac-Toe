// GLOBAL VARIABLES
var newGame = new Game();
//QUERY SELECTOR
var gameBoard = document.getElementById("gameBoard");
var currentTurn = document.getElementById("playersTurn");
var player1Wins = document.getElementById("pl1Wins");
var player2Wins = document.getElementById("pl2Wins");

//EVENT LISTENERS
// window.addEventListener("onload", getStorage);
window.addEventListener("onload", displayTurn);

gameBoard.addEventListener("click", function() {
  checkTurn()
});

//FUNCTIONS

// function getStorage() {
//   // JSON.parse(localStorage.getItem("games")) || [];
//   newGame.saveToStorage();
// }

//switch players. make 2 instances of player. then after every click
//switch to other character
function gameStart() {
  player1Wins.innerText = `${newGame.player1.wins} wins`;
  player2Wins.innerText = `${newGame.player2.wins} wins`;
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
  var index = event.target.closest(".box").id;
  if (newGame.board[index].id === parseInt(index)) {
    event.target.closest(".box").innerText = `${token}`;
    newGame.board[index].token = `${token}`;
  }
  checkWin(token, turn);
}


function checkWin(token, turn) {
  if (newGame.checkWinConditions(token)) {
    currentTurn.innerText = `${token} WON!`;
    // resetBoard();
  } else {
    currentTurn.innerText = `It's ${turn} turn`;
  }
}

// function resetBoard() {
//   for (var i = 0; i < board.length; i++) {
//     setTimeout(newGame.resetGame(board[i]), 4000);
//   }
// }


//innerHTML board with CheckTurn()


function displayTurn() {}
