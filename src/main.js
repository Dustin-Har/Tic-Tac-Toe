
var newGame = new Game();

var gameBoard = document.getElementById("gameBoard");
var currentTurn = document.getElementById("playersTurn");
var player1Wins = document.getElementById("pl1Wins");
var player2Wins = document.getElementById("pl2Wins");
var box = document.querySelectorAll(".box");


window.addEventListener("load", startGame);
gameBoard.addEventListener("click", checkBox);


function startGame() {
  showWins(newGame.player1.retreiveWinsFromStorage(), newGame.player2.retreiveWinsFromStorage());
  newGame.resetGame();
  showTurn();
}

function checkBox(event) {
  if (event.target.closest(".box").innerText === "") {
    checkTurn();
  }
}

function checkTurn() {
  if (newGame.currentTurn === newGame.player1) {
    placeToken(event, newGame.player1.token, newGame.player2.token);
  } else if (newGame.currentTurn === newGame.player2) {
    placeToken(event, newGame.player2.token, newGame.player1.token);
  }
  newGame.switchTurns();
}

function placeToken(event, token, turn) {
  var index = event.target.closest(".box");
  if (newGame.board[index.id].id === parseInt(index.id)) {
    event.target.closest(".box").innerText = `${token}`;
    newGame.board[parseInt(index.id)].token = token;
    newGame.addTurn();
  }
  checkBoard(token, turn);
}

function checkBoard(token, turn) {
  if (newGame.checkWinConditions(token)) {
    currentTurn.innerText = `${token} WON!`;
    resetBoard();
  } else if (newGame.drawGame()) {
    currentTurn.innerText = `It's a DRAW!`;
    resetBoard();
  } else {
    currentTurn.innerText = `It's ${turn} turn`;
  }
}

function showWins(player1, player2) {
  player1Wins.innerText = `${player1} wins`;
  player2Wins.innerText = `${player2} wins`;
}

function resetBoard() {
  newGame.saveWins();
  gameBoard.removeEventListener("click", checkBox);
  window.setTimeout(clearBoard, 2000);
}

function clearBoard() {
  for (var i = 0; i < box.length; i++) {
    box[i].innerText = "";
    showTurn()
    gameBoard.addEventListener("click", checkBox);
    startGame();
  }
}

function showTurn() {
  currentTurn.innerText = `It's ${newGame.currentTurn.token} turn`;
}
