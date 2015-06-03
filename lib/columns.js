const $ = require('jquery');

function findColumn(x) {
  let column = $("rect[x][x=" + x + "]")
  bindHoverEffect(column)
}

function bindHoverEffect(column){
  $(column).hover(

   function(){
    $(column).css("fill", "#e3f6a7");
   },

   function(){
    $(column).css("fill", "#c0d737");
   }
  );
}

function circleEmpty(circle) {
  let $circle = $(circle);
  return $circle.attr('class') === 'empty';
};

module.exports = findColumn;
module.exports = circleEmpty;
