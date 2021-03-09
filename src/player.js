class Player {
  constructor(token) {
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.token, JSON.stringify(this.wins));
  }

  retreiveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(this.token)) || 0;
    return this.wins
  }
}
