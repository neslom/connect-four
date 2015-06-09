const expect = require('chai').expect;
import Board from '../lib/board.js';
import $ from 'jquery';

describe('Board', function() {
  beforeEach(function () {
    Board.drawBoard();
  });

  afterEach(function () {
    $('#squares').empty();
    $('#circles').empty();
  });

  describe('#svgBody', function() {
    it('returns a string of html to draw the rect with the input x and y coordinates', function() {
      expect(Board.svgBody(3, 4)).to.eq('<rect x="3" y="4" width="50" height="50" stroke="red" stroke-width="3"/>');
    });
  });

  describe('in initial state', function(){
    it('displays an empty board', function(){
      expect($('.redPiece').length).to.eq(0);
      expect($('rect').length).to.eq(42);
    });
  });

  describe('user interaction', function () {
    it('circle has blackPiece class applied upon click', function () {
      expect($('.blackPiece').length).to.eq(0);
      $($('.empty').splice(0, 1)).click();
      expect($('.blackPiece').length).to.eq(1);
    });
  });
});
