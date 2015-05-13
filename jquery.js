$(document).ready(function(){

var lastMove ="O"
var winningCombo = ["one, two, three", "four five six", "seven eight nine", "one four seven", "two five nine", "three six nine", "three five eight", "one five nine"];
var arrayLength = winningCombo.length;


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

for (var i = 0; i < arrayLength; i++) {
  $(click(winningCombo[i])
}





})