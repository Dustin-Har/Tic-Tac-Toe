class Player {
  constructor(token) {
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    this.wins++
    localStorage.setItem("newGame", JSON.stringify(newGame));
  }

  retreiveWinsFromStorage() {
    localStorage.setItem("newGame", JSON.stringify(newGame));
  }
}
