const Game = {

  playsCounter: 0,

  checkState() {
    if(this.playsCounter == 42){
      alert("game over");
    }
  }

};

export default Game;
