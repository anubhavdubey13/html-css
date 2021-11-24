// my age
var myAge = 29;

// early years
var earlyYears = 2;

// reassignment
earlyYears *= 10.5;

// later years from myAge
laterYears = myAge - 2;

// reassignment
laterYears *= 4;

// check by printing
console.log('EY:',earlyYears);
console.log('LY:',laterYears);

//adding LY, EY
var myAgeInDogYears = earlyYears + laterYears;

// my name in lowercase
var myName = 'Anubhav'.toLowerCase();

// final print
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)