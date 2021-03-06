class Game {
  constructor() {
    this.player1 = new Player("⛩");
    this.player2 = new Player("🗽");
  }

  // saveToStorage() {
  //   localStorage.setItem("games", JSON.stringify(games))
  // }

  switchTurns() {
    if (this.player1.turn === false) {
      this.player1.turn = true;
      this.player2.turn = false;
    } else if (this.player2.turn === true) {
      this.player1.turn = false;
      this.player2.turn = true;
    }
  }

  // checkWinConditions() {
  //
  // }
  //
  // resetGame() {
  //
  // }
}
