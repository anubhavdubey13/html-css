// USER CHOICE
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (!(userInput === 'rock' | userInput === 'paper' | userInput === 'scissors' | userInput === 'bomb')) {
    console.log('Error! Choose rock/paper/scissors');
  } else {
    return userInput;
  }
};

//getUserChoice('rocky')

// COMPUTER CHOICE
const getComputerChoice = () => {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

var o = getComputerChoice()
//console.log(o);

//  FUNCTION TO FIND WINNER
function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'Tie!';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock'){
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    } else {
      return 'You won!';
    }
  }
}

//  CHECKING THINGS
//var userChoice = getUserChoice('paper');
//var computerChoice = getComputerChoice();

//console.log('User:', userChoice,'\n', 'Computer:', computerChoice);

//console.log(determineWinner(userChoice, computerChoice));

// Final function
function playGame(){
  var userChoice = getUserChoice('bomb');
  var computerChoice = getComputerChoice();
  console.log('User:', userChoice);
  console.log('Computer:', computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()