// Magic Eight Ball

// user can enter name 
var userName = '';

// using falsey feature
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log('Hello!')
}

// whatever the user wants to ask
var userQuestion = 'Crypto India mei ban hoga kya?';

// log on console
console.log(userQuestion);

// random num b/w 0 & 7 to be generated
var randomNumber = Math.floor(Math.random()*8);

// the magic part
var eightBall = '';

// control flow
switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say so'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
  default:
    eightBall = 'Nikal';
    break;
}
  
console.log(eightBall)

