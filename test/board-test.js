const expect = require('chai').expect;
import Board from '../lib/board.js';
import $ from 'jquery';

describe('Board', function() {
  describe('#svgBody', function() {
    it('returns a string of html to draw the rect with the input x and y coordinates', function() {
      expect(Board.svgBody(3, 4)).to.eq('<rect x="3" y="4" width="50" height="50" stroke="red" stroke-width="3"/>');
    });
  });

  describe('in initial state', function(){
    Board.drawBoard();
    it('displays an empty board', function(){
      expect($('.filled').length).to.eq(0);
      expect($('rect').length).to.eq(42);
    });
  });

  describe('user interaction', function () {
    Board.drawBoard();
    it('circle has filled class applied upon click', function () {

    });
  });
});
