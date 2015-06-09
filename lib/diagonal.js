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

    this.diagonals.forEach((e) => {
      Game.checkColumn(e);
    });
  },

  getDiagonals(rowId) {
    const north = -1;
    const south = 1;
    const east  = 1;
    const west  = -1;

    let diagonal = [];

    for (let columnStart = 0; columnStart < 7; columnStart++) {
      for (let columnId = columnStart; columnId < 7; columnId++)  {
        let startPiece = $('circle[column-id=' + columnId.toString() + '][row-id=' + rowId.toString() + ']');
        diagonal.push(startPiece);
      console.log(rowId);
        rowId--;
      }
      this.diagonals.push(diagonal);

      rowId = 5;
    }
  }
};

export default Diagonal;
