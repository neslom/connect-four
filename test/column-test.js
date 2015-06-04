const expect = require('chai').expect;
const Column = require('../lib/columns.js');
const Board = require('../lib/board.js');
const $ = require('jquery');

console.log("RUNNING TEST FILE");
describe('Column', function() {

  beforeEach(function () {
    Board.drawBoard();
  });

  describe('empty column clicked', function() {
    it("finds the last empty circle", function() {
       expect(Column.openCircle("50")).to.be.undefined;
    });
  });

  describe('empty circle', function() {
    it('knows if it is empty', function() {
      let circle = $('circle')[0];
      expect(Column.circleEmpty(circle)).to.eq(true);
    });
  });
});
