const expect = require('chai').expect;
import Column from '../lib/columns.js';
import Board from '../lib/board.js';
import $ from 'jquery';

describe('Column', function() {
  beforeEach(function () {
    Board.drawBoard();
  });

  afterEach(function () {
    $('#squares').empty();
    $('#circles').empty();
  });

  describe('empty column clicked', function() {
    it('finds the last empty circle', function() {
      expect(Column.openCircle('0')).to.be.undefined;
    });
  });

  describe('empty circle', function() {
    it('knows if it is empty', function() {
      const circle = $('circle')[0];
      expect(Column.isCircleEmpty(circle)).to.eq(true);
    });
  });

  describe('filling circles', function () {
    it('alternates played piece colors', function () {
      expect($('.blackPiece').length).to.eq(0);
      expect($('.redPiece').length).to.eq(0);

      $($('.empty').splice(0, 1)).click();

      expect($('.blackPiece').length).to.eq(1);

      $($('.empty').splice(5, 1)).click();

      expect($('.blackPiece').length).to.eq(1);
      expect($('.redPiece').length).to.eq(1);
    });
  });
});
