var expect = require('chai').expect;
var Board = require('../lib/board.js');

describe('Board', function() {
  describe('#svgBody', function() {
    xit('returns a string of html to draw the rect with the input x and y coordinates', function() {
      expect(Board.svgBody(3, 4)).to.eq('<rect x="3" y="4" width="50" height="50" stroke="red" stroke-width="3"/>');
    });
  });
});
