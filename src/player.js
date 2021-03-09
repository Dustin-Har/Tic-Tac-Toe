class Player {
  constructor(token) {
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem("newGame", JSON.stringify(newGame));
  }

  retreiveWinsFromStorage() {
    JSON.parse(localStorage.getItem("newGame"))
  }
}
