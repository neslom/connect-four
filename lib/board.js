const drawShapes = require('./shapes.js');
const findColumn = require('./columns.js');
const rectangleTemplate = require('../templates/rectangles.hbs');

const Board = {
  drawBoard: function() {

    for (let row = 0; row < 6; row ++)
    {
      for (let column = 0; column < 7; column ++)
      {
        let x = column * 100;
        let y = row * 100;

        drawShapes(x, y)
      }
    }

    for(let i=0; i<601; i+=100){
      findColumn(i.toString());
    }

  },

  svgBody: function(x, y) {
    //return '<rect x="' + x.toString() + '" y="' + y.toString() + '" width="50" height="50" stroke="red" stroke-width="3"/>'
    return rectangleTemplate({x: x, y: y});
  }
};

module.exports = Board;
