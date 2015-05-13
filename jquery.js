$(document).ready(function(){

var lastMove ="O"
var winningCombo = [{'id': 'one'}, {'id': 'two'}, {'id': 'three'}, {'id': 'four'}, {'id': 'five'}, {'id': 'six'}, {'id': 'seven'}, {'id': 'eight'}, {'id': 'nine'}]; 

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

var result = $.grep(winningCombo, function (e){
  return e.id == id;
});




})