// input for translation
var input = 'Hello, Peter!';

// list of vowels
const vowels = ['a','e','i','o','u'];

// storage array for input vowels
var resultArray = [];

//loop iterate over input
for (var i = 0; i < input.length; i++){
  //console.log(input[i]);
  ///nested loop
  for (var j = 0; j < vowels.length; j++){
    //console.log(j);
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
  if (input[i] === 'e' | input[i] === 'u'){
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase());