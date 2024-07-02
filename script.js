$(document).ready(function(){
  // Executes when the DOM is fully loaded
  
  $(document).mousemove(function(p){
    // Executes when the mouse is moved over the document
    
    // Get the cursor's X and Y coordinates relative to the document
    var cursorX = p.pageX;
    var cursorY = p.pageY;
    
    // Calculate the new background-position values
    var tranX = ((7 * cursorX) / 570) + 40;
    var tranY = ((7 * cursorY) / 570) + 50;

    // Update the CSS of elements with class "text"
    $(".text").css({
      "background-position": tranX + "%" + tranY + "%",
    });
  });
});
