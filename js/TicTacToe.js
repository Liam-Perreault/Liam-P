let ticTacToe = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' '],

];



function o() {

ticTacToe[0][0] = "o"
ticTacToe[1][1] = "o"
ticTacToe[2][2] = "o"
ticTacToe[0][2] = "o"

ticTacToe[0][1] = "x"
ticTacToe[1][0] = "x"
ticTacToe[1][2] = "x"
ticTacToe[2][1] = "x"
ticTacToe[2][0] = "x"

document.getElementById("output").innerHTML =(ticTacToe.join("<br>") + "<br><br>");
}

function x() {

ticTacToe[0][0] = "x"
ticTacToe[1][1] = "x"
ticTacToe[2][2] = "x"
ticTacToe[0][2] = "x"
ticTacToe[2][1] = "x"

ticTacToe[0][1] = "o"
ticTacToe[1][0] = "o"
ticTacToe[1][2] = "o"
ticTacToe[2][0] = "o"

document.getElementById("output").innerHTML =(ticTacToe.join("<br>") + "<br><br>");
} 
