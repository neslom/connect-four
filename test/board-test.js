var expect = require('chai').expect;
var Board = require('../lib/board.js');
var $ = require("jquery");

describe('Board', function() {
  describe('#svgBody', function() {
    it('returns a string of html to draw the rect with the input x and y coordinates', function() {
      console.log($("#board"));
      expect(2).to.eq(2);
      expect(Board.svgBody(3, 4)).to.eq('<rect x="3" y="4" width="50" height="50" stroke="red" stroke-width="3"/>');
    });
  });
});
