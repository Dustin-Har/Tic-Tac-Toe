class Game {
  constructor() {
    this.player1 = new Player("🪱");
    this.player2 = new Player("🦅");
    this.currentTurn = this.player1;
    this.turns = 0;
    this.board = [
      {id: 0, token: ""},
      {id: 1, token: ""},
      {id: 2, token: ""},
      {id: 3, token: ""},
      {id: 4, token: ""},
      {id: 5, token: ""},
      {id: 6, token: ""},
      {id: 7, token: ""},
      {id: 8, token: ""},
    ];
  }

  saveToStorage() {
    localStorage.setItem("games", JSON.stringify(newGame))
  }

  switchTurns() {
    if (this.currentTurn === this.player1) {
      this.currentTurn = this.player2;
    } else if (this.currentTurn === this.player2) {
      this.currentTurn = this.player1;
    }
  }

  checkWinConditions(token) {
    var winOptions = [
      [this.board[0].token === token, this.board[1].token === token, this.board[2].token === token],
      [this.board[3].token === token, this.board[4].token === token, this.board[5].token === token],
      [this.board[6].token === token, this.board[7].token === token, this.board[8].token === token],
      [this.board[0].token === token, this.board[3].token === token, this.board[6].token === token],
      [this.board[1].token === token, this.board[4].token === token, this.board[7].token === token],
      [this.board[2].token === token, this.board[5].token === token, this.board[8].token === token],
      [this.board[0].token === token, this.board[4].token === token, this.board[8].token === token],
      [this.board[2].token === token, this.board[4].token === token, this.board[6].token === token],
    ]
    for (var i = 0; i < winOptions.length; i++) {
      if((winOptions[i][0] === true) && (winOptions[i][1] === true) && (winOptions[i][2] === true)) {
        this.currentTurn.wins++;
        return true;
      }
    }
  }

  addTurn() {
    this.turns++
  }

  resetGame() {
    for (var i = 0; i < this.board.length; i++) {
      this.board[i].token = ""
    }
    this.turns = 0;
  }

  drawGame() {
    if (this.turns === 9) {
      return true
    }
  }
}
