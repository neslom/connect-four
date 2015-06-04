const $ = require('jquery');

let Column = {

  findColumn: function(x) {
    let column = $("rect[x][x=" + x + "]");
    this.bindHoverEffect(column);
    this.bindClickEvent(column);
  },

  openCircle: function(xCoord) {
    let x = this;
    xCoord = (parseInt(xCoord, 10) + 50).toString();
    let circles = $(`circle[cx][cx=${xCoord}]`);
    Array.prototype.slice.call(circles).forEach(function(circle, index) {
     if(!x.circleEmpty(circles[index + 1])) {
       $(circle).attr("class", "filled");
       return null;
     }
     return null;
    });
  },

  bindHoverEffect: function(column){
    $(column).hover(
      function(){
        $(column).css("fill", "#e3f6a7");
      },
      function(){
        $(column).css("fill", "#c0d737");
      }
    )
  },

  bindClickEvent: function(column) {
    let x = this;
    $(column).on("click", function(){
      let xCoordinate = $($(column)[0]).attr("x");
      x.openCircle(xCoordinate);
    });
  },

  circleEmpty: function(circle) {
    let $circle = $(circle);
    return $circle.attr('class') === 'empty';
  },

};

module.exports = Column;
