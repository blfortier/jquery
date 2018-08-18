/*global $*/
 var button = $("#lead-banner a");
  button[0].onclick = function() {
   $("#points-of-sale").toggleClass("open");
   return false;
 };
 
/*************************************************/

$(document).ready(function(){
    
    $(".slide-button-up").on("click", function(){
         $("#lead-banner").slideToggle(1000, function(){
          alert("animation complete");
         });
  });
});






