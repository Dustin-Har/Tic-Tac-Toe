class Game {
  constructor() {
    this.player1 = new Player("⛩");
    this.player2 = new Player("🗽");
    this.WinConditions = [
      [box1, box2, box3],
      [box4, box5, box6],
      [box7, box8, box9],
      [box1, box4, box7],
      [box2, box5, box8],
      [box3, box6, box9],
      [box1, box5, box9],
      [box3, box5, box7],
    ]
  }

  saveToStorage() {
    localStorage.setItem("games", JSON.stringify(newGame))
  }

  switchTurns() {
    if (this.player1.turn === false) {
      this.player1.turn = true;
      this.player2.turn = false;
    } else if (this.player2.turn === false) {
      this.player1.turn = false;
      this.player2.turn = true;
    }
  }

  // checkWinConditions() {
  //   if()
  // }

  // resetGame() {
  //
  // }

  // setTimeout(function() {
  // console.log("WINNER!"); }, 1000);
  //   }
}
