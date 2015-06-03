const expect = require('chai').expect;
const circleEmpty = require('../lib/columns.js');

describe('Column', function() {
  describe('empty circle', function() {
    it('knows if it is empty', function() {
      let circle = $('circle')[0];
      expect(circleEmpty(circle)).to.eq(true);
    });
  });
});
