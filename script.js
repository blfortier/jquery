/*global $*/
 var button = $("#lead-banner a");
  button[0].onclick = function() {
   $("#points-of-sale").toggleClass("open");
   return false;
 };
 
/*************************************************/

$(document).ready(function(){
    
    $("img[alt=map]").on("click", function() {
       
        $("section > h2").toggle(1000);
       
       
       
  });
});






