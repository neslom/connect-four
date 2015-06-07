import $ from 'jquery';

const Diagonal = {
  board: {},

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
    let diagonals = [];
    for (let columnId in this.board) {
      for (let plays in this.board[columnId]) {
        if (columnId === '3') {
         const circles = $(`circle[column-id=${x}]`);
          console.log(`columnId: ${columnId} ${this.board[columnId][plays]}`);
          console.log(this.board[columnId - 1][
        }
      }
    }
  },

};

export default Diagonal;
