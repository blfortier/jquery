/*global $*/
 var button = $("#lead-banner a");
  button[0].onclick = function() {
   $("#points-of-sale").toggleClass("open");
   return false;
 };
 
/*************************************************/

$(document).ready(function(){
    
    $("section > h2").on("click", function() {
        $(this).fadeTo(200, 0.2)
               .fadeTo(1000, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(1000, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(1000, 0.8);
   
  });
});






