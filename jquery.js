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
    console.log(oMoves)
    checkForWinner(oMoves);
  }
   else{
      $(this).text("X")
      lastMove = "X"
      var id = $(this).attr('id')
      xMoves.push(Number(id))
      console.log(xMoves)
      checkForWinner(xMoves);
    }  
})

function checkForWinner(playerArray){
  var orderedArray = playerArray.sort()
  console.log(orderedArray[0])
  for(i = 0; i < winningCombo.length -1; i++){
    for(j = 0; j < orderedArray.length -1; j++){
      if(orderedArray[j] === winningCombo[i][0]){
        if(winningCombo[i][1] === orderedArray[j+1] && winningCombo[i][2] === orderedArray[j+2]){
          $('div.Winner').text(lastMove + ' ' + "is the winner!");
            
          }
        }
        // console.log(winningCombo[i])
        
    }
  }    //console.log(winningCombo[i])
    //}

  }

})