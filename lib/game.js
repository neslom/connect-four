import $ from 'jquery';

const Game = {

  playsCounter: 0,

  checkState(columnOfCircles) {
    let finished = false;
    if(this.playsCounter == 42){
      alert("game over");
      return finished = true;
    } else {
      this.scanBoard();
    }
    return finished;
  },

  scanBoard() {
    this.checkColumn(columnOfCircles);
  },

  checkColumn(circles) {
    let duplicates = []
      for(i = 0; i < circles.length; i++){
        if($(circles[i]).attr("class") === $(circles[i+1]).attr("class")) {
          duplicates.push(circles[i])
        }
      }
      if(duplicates.length === 4){
        alert("win")
      }
  },

};

export default Game;
