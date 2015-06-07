import $ from 'jquery';

const Row = {

  rows: {},

  pieces(rowId, color, columnId) {
    if (!this.rows[rowId]) {
      this.rows[rowId] = [];
      this.rows[rowId].push([color, columnId]);
    } else {
      this.rows[rowId].push([color, columnId]);
    }
    this.checkRows();
  },

  checkRows() {
    let potentialWinners = [];
    for(let row in this.rows) {
      if (this.rows[row].length >= 4) {
        potentialWinners.push(this.rows[row]);
        this.checkForWin(potentialWinners);
      }
    }
  },

  checkForWin(rowSpecs) {
    let matches = [];
    let rows = rowSpecs[0];
    for(let i = 0; i < rows.length; i++) {
      if (rows[i + 1] && rows[i][0] === rows[i + 1][0]) {
        if (parseInt(rows[i][1]) + 1 == rows[i + 1][1]) {
           matches.push(rows[i][0]);
        }
      }
    }
    if (matches.length >= 3) {
      let winner = matches[0].toUpperCase();
      alert(`${winner} has won the game!`);
      location.reload();
    }
  }

}

export default Row;
