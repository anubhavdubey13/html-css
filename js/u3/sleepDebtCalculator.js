function getSleepHours(day){
  var hours = 0;
  switch (day){
    case 'monday':
      hours = 7
      break;
    case 'tuesday':
      hours = 5
      break;
    case 'wednesday':
      hours = 6
      break;
    case 'thursday':
      hours = 8
      break;
    case 'friday':
      hours = 9
      break;
    case 'saturday':
      hours = 10
      break;
    case 'sunday':
      hours = 6
      break;
  }
  return hours;
}

//console.log(getSleepHours('tuesday'))

function getActualSleepHours(){
  var totSleep = getSleepHours('monday')*7 //I will use loop later
  return totSleep
}

function getIdealSleepHours(){
  var idealHours = 8;
  return idealHours*7;
}

//console.log(getActualSleepHours(),getIdealSleepHours());

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  var diff = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours){
    console.log('Perfect!');
  } else if (actualSleepHours > idealSleepHours){
    console.log('More than ideal sleep by', -diff, 'hours');
  } else {
    console.log('You need some sleep! Deficit =', diff);
  }
}

calculateSleepDebt()