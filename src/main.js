// GLOBAL VARIABLES
var newGame = new Game();
//QUERY SELECTOR
gameBoard.querySelector("#gameBoard");
currentTurn.querySelector("#playersTurn");
box1.querySelector("#box1");
box2.querySelector("#box2");
box3.querySelector("#box3");
box4.querySelector("#box4");
box5.querySelector("#box5");
box6.querySelector("#box6");
box7.querySelector("#box7");
box8.querySelector("#box8");
box9.querySelector("#box9");
//EVENT LISTENERS
// window.addEventListener("onload", getStorage);
window.addEventListener("onload", displayTurn);

gameBoard.addEventListener("click", function(){
  playGame(event)
});

//FUNCTIONS

// function getStorage() {
//   // JSON.parse(localStorage.getItem("games")) || [];
//   newGame.saveToStorage();
// }

//switch players. make 2 instances of player. then after every click
//switch to other character
function gameStart() {
}

function checkTurn() {
  newGame.switchTurns();
  if (newGame.player1.turn === true) {
    return newGame.player1.token;
  } else if (newGame.player2.turn === true) {
    return newGame.player2.token;
  }
}

function playGame(event) {
  event.target.text = `🥺`;
  console.log(event);
  currentTurn.innerHTML = `<h1>It's ${checkTurn()} turn</h1>`;

  //innerHTML board with CheckTurn()
}

function displayTurn() {
}
