const expect = require('chai').expect;
import Column from '../lib/columns.js';
import Board from '../lib/board.js';
import $ from 'jquery';

describe('Column', function() {
  beforeEach(function () {
    Board.drawBoard();
  });

  describe('empty column clicked', function() {
    it('finds the last empty circle', function() {
      expect(Column.openCircle('50')).to.be.undefined;
    });
  });

  describe('empty circle', function() {
    it('knows if it is empty', function() {
      const circle = $('circle')[0];
      expect(Column.isCircleEmpty(circle)).to.eq(true);
    });
  });
});
