import $ from 'jquery';

const Game = {

  playsCounter: 0,

  checkState(column) {
    let finished = false;
    if(this.playsCounter == 42){
      //alert("game over");
      return finished = true;
    } else {
      this.scanBoard(column);
    }
    return finished;
  },

  scanBoard(column) {
    this.checkColumn(column);
  },

  checkColumn(column) {
    column = Array.prototype.slice.call(column);
    let noEmpties = column.filter((e) => {
      return $(e).attr('class') !== 'empty';
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
          alert(`${winner.replace('PIECE', '')} has won!`);
          location.reload();
          break;
        }
      }
    }
  }

};

export default Game;
