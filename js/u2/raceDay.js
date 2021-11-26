//1
let raceNumber = Math.floor(Math.random() * 1000);
//2
var early = false;
//3
var runnerAge = 18;
//4
if (runnerAge > 18 && early === true){
  raceNumber += 1000;
}
//5, 6
if (runnerAge > 18 && early === true){
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 am`);
} else if (runnerAge > 18 && early != true){
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 am`);
} else if (runnerAge === 18) {
  console.log('See the registration desk.');
} else {
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 pm`);
}


