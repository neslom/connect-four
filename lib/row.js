import $ from 'jquery';

const Row = {

  rows: {},

  pieces(rowId, color, columnId) {
    if (!this.rows[rowId]) {
      this.rows[rowId] = [];
      this.rows[rowId].push(color, columnId);
    } else {
      this.rows[rowId].push(color, columnId);
    }
    console.log(this.rows);
  }
}

export default Row;
