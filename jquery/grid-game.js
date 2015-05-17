$(document ).ready(function() {
  var rowNum;
  var grid_width=$(".grid-game").width();
  for (var i=0;i<7;i++){
    rowNum="row"+i;
    $(".grid-game").append("<div id='"+rowNum+"' class='row'></div>");
    for(var j=0;j<16;j++){
      $("#"+rowNum).append("<div class='col'></div>");
    }
  }
  $(".col").width(grid_width/300*12);
  $(".col").height(grid_width/300*12);
  changeColor();

});


var changeColor=function(){
    $(".col").on("mouseenter",function(event){
        $(this).css("opacity", $(this).css("opacity") * .75);
    });
}
