import $ from 'jquery';
import Game from './game.js';

const Diagonal = {
  board: {},

  diagonals: [],

  createBoard(rowId, color, columnId) {
    if (!this.board[columnId]) {
      this.board[columnId] = [];
      this.board[columnId].push([color, rowId]);
    } else {
      this.board[columnId].push([color, rowId]);
    }
    this.checkDiagonally();
  },

  checkDiagonally() {
    for (let i = 5; i > -1; i--) {
      this.getDiagonals(i);
    }
  },

  getDiagonals(rowId) {
    const north = -1;
    const south = 1;
    const east  = 1;
    const west  = -1;

    let diagonal = [];
    let innerArray = [];

    for (let columnStart = 0; columnStart < 7; columnStart++) {
      for (let columnId = columnStart; columnId < 7; columnId++)  {
        let startPiece = $('circle[column-id=' + columnId.toString() + '][row-id=' + rowId.toString() + ']');
        innerArray.push(startPiece);
        rowId--;
      }
      diagonal.push(innerArray);

      diagonal.forEach((d) => {
        Game.checkColumn(d);
      });

      innerArray = [];
      rowId = 5;
    }
  }
};

export default Diagonal;
