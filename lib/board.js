import drawShapes from './shapes.js';
import Column from './columns.js';

const Board = {
  drawBoard() {

    for (let row = 0; row < 6; row ++) {
      for (let column = 0; column < 7; column ++) {
        let x = column * 100;
        let y = row * 100;

        drawShapes(x, y);
      }
    }

    for (let i = 0; i < 601; i += 100) {
      Column.findColumn(i.toString());
    }
  },

  svgBody(x, y) {
    return '<rect x="' + x.toString() + '" y="' + y.toString() + '" width="50" height="50" stroke="red" stroke-width="3"/>'
    // return `<rect x="${x.toString()}"`
  }
};

export default Board;
