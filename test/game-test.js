const expect = require('chai').expect;
import Game from '../lib/game.js';
import Board from '../lib/board.js';
import $ from 'jquery';

describe('Game', function() {

  describe('Plays counter', function() {
    it('is 0 in initial state', function() {
      expect(Game.playsCounter).to.eq(0);
    });

    it('increments on each play', function() {
      $($('.empty').splice(0, 1)).click();
      expect(Game.playsCounter).to.eq(1);
    });
  });

  describe('state of game', function() {

    it('knows when game is over without a win', function() {
      for(let i = 0; i < 43; i ++){
        $('.empty').click();
      }
      expect(Game.gameOver).to.eq(true);
    });

      it("finds four consecutive peices in a column", function() {
        for(let i = 0; i < 5; i ++) {
          $('.empty[column-id="0"]').click();
          $('.empty[column-id="2"]').click();
        }
        expect(Game.gameOver).to.eq(true)
      })
    });
});


