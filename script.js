let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget= () =>
{
  return Math.floor(Math.random()*9);
};
let compareGuesses=(userGuess,computerGuess,generateTarget) => 
{
  //checking if userguess is between 0-9.
  
  validNumber(userGuess);
 


  //returning absolute distance between user guess and target
  let ug=getAbsoluteDistance(userGuess,generateTarget);
  //returning absolute distance between computer guess and target
  let cg=getAbsoluteDistance(computerGuess,generateTarget);
  if(ug===cg)
     {
    return true;
      }
  else if(ug<cg)
    {
          return true;
     }
  else if(ug>cg)
  {
          return false;
  }
  else{

  }
  
  };


const validNumber= num => num>9 || num<0?alert("valid number range 0-9"):num;


const getAbsoluteDistance = (guess,target)=>Math.abs(guess-target);
  



let updateScore=winner=>winner==='human'?humanScore++:computerScore++;
  


const advanceRound=()=>{
  currentRoundNumber++; 

}


