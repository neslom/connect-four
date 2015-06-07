import $ from 'jquery';

const Game = {

  playsCounter: 0,

  checkState(column) {
    let finished = false;
    if(this.playsCounter == 42){
      alert("game over");
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
      let truths = [];
      let klasses = noEmpties.map((e) => {
        return $(e).attr('class');
      })
      for (let i=0; i < 4; i++) {
        if (klasses[i] === klasses[i + 1]) {
          truths.push(1);
        }
        if (truths.length >= 3) {
          alert('yolo');
          break;
        }
      }
      console.log(klasses);
    }
  }

};

export default Game;
