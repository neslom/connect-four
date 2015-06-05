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
      const columnId = $($(column)[0]).attr('column-id');
      this.openCircle(columnId);
    }.bind(this));
  },

  isCircleEmpty(circle) {
    return $(circle).attr('class') === 'empty';
  },

};

export default Column;
