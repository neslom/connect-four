var drawShapes = require('./shapes.js');
var findColumn = require('./columns.js');

var Board = {
  drawBoard: function() {

    for (var row = 0; row < 6; row ++)
    {
      for (var column = 0; column < 7; column ++)
      {
        var x = column * 100;
        var y = row * 100;

        drawShapes(x, y)
      }
    }

    for(var i=0; i<601; i+=100){
      findColumn(i.toString());
    }

  },

  svgBody: function(x, y) {
    return '<rect x="' + x.toString() + '" y="' + y.toString() + '" width="50" height="50" stroke="red" stroke-width="3"/>'
  }
};

module.exports = Board;
