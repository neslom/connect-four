import $ from 'jquery';

const Column = {

  findColumn(x) {
    const column = $(`rect[x][x=${x}]`);
    this.bindHoverEffect(column);
    this.bindClickEvent(column);
  },

  openCircle(xCoord) {
    xCoord = (parseInt(xCoord, 10) + 50).toString();
    const circles = $(`circle[cx][cx=${xCoord}]`);
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
      const xCoordinate = $($(column)[0]).attr('x');
      this.openCircle(xCoordinate);
    }.bind(this));
  },

  isCircleEmpty(circle) {
    return $(circle).attr('class') === 'empty';
  },

};

export default Column;
