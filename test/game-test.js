const expect = require('chai').expect;
import Game from '../lib/game.js';
import $ from 'jquery';

describe('Game', function() {
  describe('Plays counter', function() {
    it('is 0 in initial state', function() {
      expect(Game.playsCounter).to.eq(0);
    });

    it('increments on each play', function() {
      $('#squares').empty();
      $('#circles').empty();
      $('.empty').click();
      expect(Game.playsCounter).to.eq(1);
    });
  });
});


