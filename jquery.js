$(document).ready(function(){

var lastMove ="O"
var winningCombo = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 9], [3, 6, 9], [3, 5, 8], [1, 5, 9]];
var winningArray = []
var xMoves = []
var oMoves = []


$(".gridBox").on("click", function(){
  if(lastMove === "X") {
    $(this).text("O");
    lastMove = "O"
    var id = $(this).attr('id')
    oMoves.push(Number(id))
  }
   else{
      $(this).text("X")
      lastMove = "X"
      var id = $(this).attr('id')
      xMoves.push(Number(id))
    }  
})



})