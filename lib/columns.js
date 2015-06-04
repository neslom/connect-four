import $ from 'jquery';

const Column = {

  findColumn(x) {
    const column = $(`rect[x][x=${x}]`);
    const circles = $(`circle[cx][cx=${(parseInt(x, 10) + 50).toString()}]`);
    this.bindHoverEffect(column);
    this.bindClickEvent(column, circles);
  },

  openCircle(xCoord) {
    xCoord = (parseInt(xCoord, 10) + 50).toString();
    const circles = $(`circle[cx][cx=${xCoord}]`);
    let clickTracker = true;
    $(circles).each((index, circle) => {
      if(!this.isCircleEmpty(circles[index + 1])) {
        if (clickTracker) {
          $(circle).attr('class', 'filled');
          clickTracker = false;
        } else {
          $(circle).attr('class', 'black');
          clickTracker = true;
        }
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

  bindClickEvent(column, circles) {
    const combined = column.add(circles);
    $(combined).on('click', function(){
      const xCoordinate = $($(column)[0]).attr('x');
      this.openCircle(xCoordinate);
    }.bind(this));
  },

  isCircleEmpty(circle) {
    return $(circle).attr('class') === 'empty';
  },

};

export default Column;
