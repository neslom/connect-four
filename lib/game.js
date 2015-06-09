import $ from 'jquery';

const Game = {
  playsCounter: 0,

  checkState(column) {
    if(this.playsCounter == 42){
      alert("game over");
      location.reload();
    } else {
      this.scanBoard(column);
    }
  },

  scanBoard(column) {
    this.checkColumn(column);
  },

  checkColumn(column) {
    let gameOver = false;
    column = Array.prototype.slice.call(column);
    let noEmpties = column.filter((e) => {
      let thisKlass = $(e).attr('class');
      return thisKlass !== 'empty' && thisKlass !== undefined;
    });

    if (noEmpties.length >= 4) {
      let matches = [];
      let klasses = noEmpties.map((e) => {
        return $(e).attr('class');
      })
      for (let i=0; i < 4; i++) {
        if (klasses[i] === klasses[i + 1]) {
          matches.push(klasses[i]);
        }
        if (matches.length >= 3) {
          let winner = matches[0].toUpperCase();
          gameOver = true;
          location.reload();
          break;
        }
      }
      if (gameOver) { alert(`${winner.replace('PIECE', '')} has won!`); }
    }
  },

};

export default Game;
