const expect = require('chai').expect;
const circleEmpty = require('../lib/columns.js');
const Board = require('../lib/board.js');
const $ = require('jquery');

console.log("RUNNING TEST FILE");
describe('Column', function() {

  beforeEach(function () {
    Board.drawBoard();
  });

  describe('empty circle', function() {
    it('knows if it is empty', function() {
      let circle = $('circle')[0];
      expect(circleEmpty(circle)).to.eq(true);
    });
  });
});
