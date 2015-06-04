import $ from 'jquery';
import Game from '../lib/game.js';

const Column = {

  findColumn(x) {
    const column = $(`rect[column-id=${x}]`);
    this.bindToColumn(column);
  },

  bindToColumn(column) {
    this.bindHoverEffect(column);
    this.bindClickEvent(column);
  },

  openCircle(columnId) {
    const circles = $(`circle[column-id=${columnId}]`);
    Array.prototype.slice.call(circles).forEach((circle, index) => {
      if(!this.isCircleEmpty(circles[index + 1])) {
        $(circle).attr('class', 'filled');
      }
    });
  },

  bindHoverEffect(column) {
    $(column).hover(
        function () {
          $(column).css('fill', '#e3f6a7');
        },
        function () {
          $(column).css('fill', '#c0d737');
        }
      )
  },

  bindClickEvent(column) {
    $(column).on('click', function(){
      const columnId = $(column[0]).attr('column-id');
      this.openCircle(columnId);
      Game.playsCounter++;
    }.bind(this));
  },

  isCircleEmpty(circle) {
    return $(circle).attr('class') === 'empty';
  },

};

export default Column;
