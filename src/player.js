class Player {
  constructor(token) {
    this.id = Date.now();
    this.token = token;
    this.wins = 0;
    this.turn = false;
  }

  saveWinsToStorage() {
    localStorage.setItem("newGame", JSON.stringify(newGame));
  }

  retreiveWinsFromStorage() {
    localStorage.setItem("newGame", JSON.stringify(newGame));
  }
}
