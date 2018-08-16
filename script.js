/*global $*/
 var button = $("#lead-banner a");
  button[0].onclick = function() {
   $("#points-of-sale").toggleClass("open");
   return false;
 };
 
 

var myLis = $("#points-of-sale li");

myLis.on("click", function(){
    $(this).css({"background" : "pink"});
    myLis.off("click");
});