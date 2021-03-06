class Player {
  constructor(token) {
    this.id = Date.now();
    this.token = token;
    this.wins = 0;
    this.turn = false;
  }

  saveWinsToStorage() {
    this.wins++
    localStorage.setItem("newGame", JSON.stringify(newGame));
  }

  retreiveWinsFromStorage() {
    localStorage.setItem("newGame", JSON.stringify(newGame));
  }
}
