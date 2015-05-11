$( document ).ready(function() {

  $( "#forkme_banner" ).on("mouseenter",function( event ) {
    $(this).animate({"padding-top":"30px","background-position-y":"70%"});



  });

  $( "#forkme_banner" ).on("mouseleave",function( event ) {
    $(this).animate({"padding-top":"10px","background-position-y":"50%"});

  });

  var rowNum;
  var grid_width=$(".grid-game").width();
  for (var i=0;i<5;i++){
    rowNum="row"+i;
    $(".grid-game").append("<div id='"+rowNum+"' class='row'></div>");
    for(var j=0;j<2.8*grid_width/50;j++){
      $("#"+rowNum).append("<div class='col'></div>");
    }
  }
  $(".col").width(grid_width/50);
  $(".col").height(grid_width/50);
  changeColor();

});


var changeColor=function(){
    $(".col").on("mouseenter",function(event){
        //$(this).addClass("black");
        $(this).css("opacity", $(this).css("opacity") * .75);
    });
}
