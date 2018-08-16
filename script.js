/*global $*/
 var button = $("#lead-banner a");
  button[0].onclick = function() {
   $("#points-of-sale").toggleClass("open");
   return false;
 };
 
/***************************************************/


$("#lead-banner").dblclick(function(){
  alert("you double clicked me"); 
  $("#lead-banner").off("dblclick");
});

