/*global $*/
 var button = $("#lead-banner a");
  button[0].onclick = function() {
   $("#points-of-sale").toggleClass("open");
   return false;
 };
 
/*************************************************/

$(document).ready(function(){
 
   function complete(){
      alert("Animation complete")
    }
    
    $("section > h2").on("click", function() {
        $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", complete);
    
    
    
  });
});






