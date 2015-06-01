$(document).ready(function() {
  var NS="http://www.w3.org/2000/svg";

  for (var row = 0; row < 6; row ++)
  {
    for (var column = 0; column < 7; column ++)
    {
      var x = column * 100;
      var y = row * 100;

      var SVGObj = document.createElementNS(NS,"rect");
      var SVGCircle = document.createElementNS(NS,"circle");
      SVGObj.setAttribute("x", x);
      SVGObj.setAttribute("y", y);
      SVGObj.setAttribute("fill", "gray");
      SVGObj.setAttribute("stroke", "black");
      SVGObj.setAttribute("height", "100");
      SVGObj.setAttribute("width", "100");

      SVGCircle.setAttribute("x", x);
      SVGCircle.setAttribute("y", y);
      SVGCircle.setAttribute("fill", "#E36723");

      $('svg').append(SVGObj);
    }
  }
});

function svgBody(x, y) {
  return '<rect x=' + x.toString() + ' y=' + y.toString() + ' width="50" height="50" stroke="red" stroke-width="3"/>'
};

