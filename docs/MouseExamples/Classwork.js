function myMoveFunction(ev) {
  document.getElementById("demo").innerHTML = 
  "offsetX= " + ev.offsetX;
}

function myEnterFunction(ev) {
  document.getElementById("demo2").innerHTML = 
  "offsetX= " + ev.offsetX;
}

function myOverFunction(ev) {
  document.getElementById("demo3").innerHTML = 
  "offsetX= " + ev.offsetX;
}

function myClickFunction(ev) {
  document.getElementById("demo4").innerHTML = 
  "offsetX= " + ev.offsetX;
}

//now for the performance, I want a clickable tic tac toe
//that means Nine Square divs in a grid in HTML
//with a myTicTacToeFunction that either changes innerHTML to 
// an X or an O. (based on whether it is an even or odd click
var clickCounter = 0;

function myTicTacToeFunction(ev) {
   clickCounter++; // add one every time we click
   if(clickCounter % 2 == 0) //click ounter is EVEN  
   {
		//instead of getElementById how would we get 
		// the element we clicked on? ev.?????? maybe?
		//ev.??????.innerHTML = "X";
		//document.getElementById("demo4").innerHTML = "X" 
   } else  {//click count is ODD 
        //ev.??????.innerHTML = "O";
		//document.getElementById("demo4").innerHTML = "O" 
   }
}

