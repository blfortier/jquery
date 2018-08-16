/*global $*/
 var button = $("#lead-banner a");
  button[0].onclick = function() {
   $("#points-of-sale").toggleClass("open");
   return false;
 };
 
/*************************************************/

$(document).ready(function(){
 
  $("*").on("click", function(e){
       console.log(e.target);
       console.log("The event type is: " + e.type);
       console.log("x co-ordinate of the event is: " + e.pageX);
       console.log("y co-ordinate of the event is: " + e.pageY);
       e.stopPropagation();
  });
});






