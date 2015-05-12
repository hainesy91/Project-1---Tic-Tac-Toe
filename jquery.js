$(document).ready(function(){

var lastMove ="O"


$(".gridBox").on("click", function(){
  if(lastMove === "X") {
    $(this).text("O");
    lastMove = "O"
  }
   else{
      $(this).text("X")
      lastMove = "X"
    }  
})


})