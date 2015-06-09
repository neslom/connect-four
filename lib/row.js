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
      }
    }
    potentialWinners.forEach((row) => {
     this.checkForWin(row);
    });
  },

  checkForWin(row) {
    let matches = [];

    let sorted_row = row.sort((a, b) => {
      if (parseInt(a[1]) >  parseInt(b[1])) {
        return 1;
      }
      if (parseInt(a[1]) <  parseInt(b[1])) {
        return -1;
      }
      return 0;
    });

    for(let i = 0; i < sorted_row.length; i++) {
      if (sorted_row[i + 1] && sorted_row[i][0] === sorted_row[i + 1][0]) {
        if (parseInt(sorted_row[i][1]) + 1 == sorted_row[i + 1][1]) {
           matches.push(sorted_row[i][0]);
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
