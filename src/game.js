class Game {
  constructor() {
    this.player1 = new Player("⛩");
    this.player2 = new Player("🗽");

    // this.WinConditions = [
    //   [box1, box2, box3],
    //   [box4, box5, box6],
    //   [box7, box8, box9],
    //   [box1, box4, box7],
    //   [box2, box5, box8],
    //   [box3, box6, box9],
    //   [box1, box5, box9],
    //   [box3, box5, box7],
    // ]
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

  checkWinConditions(token, player) {
    var winOptions = [
      [box1.innerText === token, box2.innerText === token, box3.innerText === token],
      [box4.innerText === token, box5.innerText === token, box6.innerText === token],
      [box7.innerText === token, box8.innerText === token, box9.innerText === token],
      [box1.innerText === token, box4.innerText === token, box7.innerText === token],
      [box2.innerText === token, box5.innerText === token, box8.innerText === token],
      [box3.innerText === token, box6.innerText === token, box9.innerText === token],
      [box1.innerText === token, box5.innerText === token, box9.innerText === token],
      [box3.innerText === token, box5.innerText === token, box7.innerText === token],
    ]
    for (var i = 0; i < winOptions.length; i++) {
      if((winOptions[i][0] === true) && (winOptions[i][1] === true) && (winOptions[i][2] === true)) {
        player++;
        return true;
      }
    }
  }


  // resetGame() {
  //
  // }

  // setTimeout(function() {
  // console.log("WINNER!"); }, 1000);
  //   }
}
