import Game from '../lib/game.js';
import $ from 'jquery';

const Column = {

  findColumn(x) {
    const column = $(`rect[column-id=${x}]`);
    const circles = $(`circle[column-id=${x}]`);
    this.bindHoverEffect(column);
    this.bindClickEvent(column, circles);
  },

  openCircle(columnId) {
    const circles = $(`circle[column-id=${columnId}]`);
    this.fillCirclesFromBottom(circles);
  },

  circleTracker: 0,

  fillCirclesFromBottom(circles) {
    for (let i = circles.length - 1; i >= 0; i--) {
      if (this.isCircleEmpty(circles[i]) && this.circleTracker % 2 === 0) {
        $(circles[i]).attr('class', 'blackPiece');
        this.circleTracker++;
        return null;
      } else {
        if (this.isCircleEmpty(circles[i]) && this.circleTracker % 2 !== 0) {
          $(circles[i]).attr('class', 'redPiece');
          this.circleTracker++;
          return null;
        }
      }
    }
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

  bindClickEvent(column, circles) {
    const combined = column.add(circles);
    $(combined).on('click', function(){
      const columnId = $($(column)[0]).attr('column-id');
      this.openCircle(columnId);
      Game.playsCounter++;
      Game.checkState(circles);
    }.bind(this));
  },

  isCircleEmpty(circle) {
    return $(circle).attr('class') === 'empty';
  },

};

export default Column;
