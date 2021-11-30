let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// checking length
console.log(secretMessage.length);

// removing last string of array
secretMessage.pop();

// mutated length
console.log(secretMessage.length);

//adding to & program at end
secretMessage.push('to', 'Program');

// changing easily to right
secretMessage[secretMessage.indexOf('easily')] = 'right';

// array method to remove first string
secretMessage.shift();

// add to first place
secretMessage.unshift('Programming');

// splice 
secretMessage.splice(6,5,'know,');

// finale
console.log(secretMessage.join(' '));