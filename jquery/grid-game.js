$(document).ready(function() {
  var rowNum;
  var grid_width = $(".grid-game").width();
  var squareSide = 22;
  var boxNum = grid_width / (squareSide + 2 + 6);
  for (var i = 0; i < 7; i++) {
    rowNum = "row" + i;
    $(".grid-game").append(
      "<div id='" + rowNum + "' class='row' style='margin:auto'></div>"
    );
    for (var j = 0; j < Math.floor(boxNum); j++) {
      $("#" + rowNum).append("<div class='col'></div>");
    }
  }
  $(".col").width(squareSide);
  $(".col").height(squareSide);
  changeColor();
});

var resetGrid = function() {
  $(".col").css("opacity", 1);
};

var changeColor = function() {
  $(".col").on("mouseenter", function(event) {
    $(this).css("opacity", $(this).css("opacity") * 0.75);
  });
};
