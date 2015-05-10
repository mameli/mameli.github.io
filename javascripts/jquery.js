$( document ).ready(function() {

$( "#forkme_banner" ).on("mouseenter",function( event ) {
    $(this).animate({"padding-top":"30px","background-position-y":"70%"});



});

$( "#forkme_banner" ).on("mouseleave",function( event ) {
    $(this).animate({"padding-top":"10px","background-position-y":"50%"});

});

});
