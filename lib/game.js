const Game = {

  playsCounter: 0,

  checkState() {
    let finished = false;
    if(this.playsCounter == 43){
      alert("game over");
      return finished = true;
    }
    return finished;
  }

};

export default Game;
