
//computerPLay is the function that mimics the 
//computer's "opponents" behaviour.
function computerPlay() {
    //Using the Math functions in order to get a random
    //integer between one and three.
 let randomToThree= Math.Float(Math.random()*30);
 switch(randomToThree){
 case 1: computerMove="Rock";
   break;
 case 2: computerMove="Paper";
   break;
 case 3: computerMove="Scissors";
   break;

 }
 return computerMove;
 
}

