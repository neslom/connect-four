var $ = require('jquery');

function drawShapes(x,y) {

  var NS="http://www.w3.org/2000/svg";
  var SVGObj = document.createElementNS(NS,"rect");
  var SVGCircle = document.createElementNS(NS,"circle");

  SVGObj.setAttribute("x", x);
  SVGObj.setAttribute("y", y);
  SVGObj.setAttribute("fill", "#c0d737");
  SVGObj.setAttribute("stroke", "#1d754d");
  SVGObj.setAttribute("stroke-width", "2");
  SVGObj.setAttribute("height", "100");
  SVGObj.setAttribute("width", "100");

  SVGCircle.setAttribute("cx", x+50);
  SVGCircle.setAttribute("cy", y+50);
  SVGCircle.setAttribute("r", "40");
  SVGCircle.setAttribute("fill", "#E36723");
  SVGCircle.setAttribute("stroke", "#e3f6a7");
  SVGCircle.setAttribute("stroke-width", "1");
  SVGCircle.setAttribute("height", "80");
  SVGCircle.setAttribute("width", "80");

  $('#squares').append(SVGObj);
  $('#circles').append(SVGCircle);

}

module.exports = drawShapes;
