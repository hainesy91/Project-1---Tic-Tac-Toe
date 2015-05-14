$(document).ready(function(){

var lastMove ="O"
var winningCombo = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 5, 9]];
var xMoves = []
var oMoves = []


$(".gridBox").on("click", function(){
  if(lastMove === "X") {
    $(this).text("O");
    lastMove = "O"
    var id = $(this).attr('id')
    oMoves.push(Number(id))
    checkForWinner(oMoves);
    $(this).unbind();
  }
   else{
      $(this).text("X")
      lastMove = "X"
      var id = $(this).attr('id')
      xMoves.push(Number(id))
      checkForWinner(xMoves);
      $(this).unbind();
    }  
})

$("#Reset").on("click", function(){
    $('.Winner').text('');
    $(".gridBox").text("");
    xMoves = [];
    oMoves = [];
    $(".gridBox").on("click", function(){
  if(lastMove === "X") {
    $(this).text("O");
    lastMove = "O"
    var id = $(this).attr('id')
    oMoves.push(Number(id))
    checkForWinner(oMoves);
    $(this).unbind();
  }
   else{
      $(this).text("X")
      lastMove = "X"
      var id = $(this).attr('id')
      xMoves.push(Number(id))
      checkForWinner(xMoves);
      $(this).unbind();
    }  
})
});

function checkForWinner(playerArray){ 
  var orderedArray = playerArray.sort()
  for(i = 0; i < winningCombo.length; i++){
    for(j = 0; j < orderedArray.length; j++){
      if(orderedArray[j] === winningCombo[i][0]){
        if(winningCombo[i][1] === orderedArray[j+1] && winningCombo[i][2] === orderedArray[j+2]){
          $('div.Winner').text(lastMove + ' ' + "is the winner!");
            }
        }
    }
  }
  if(playerArray.length === 5){
    $('div.Winner').text("It's a draw!");
  }   
  }

})











