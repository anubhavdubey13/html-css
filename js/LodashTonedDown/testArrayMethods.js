var arrayMethods = require('./arrayMethods.js');

// 1. Chunk
/* 
console.log(arrayMethods.chunk(['a', 'b', 'c', 'd'], 2));
console.log(arrayMethods.chunk(['a', 'b', 'c', 'd'], 3)); 
*/

// 2. Compact
//console.log(arrayMethods.compact([0, 1, false, 2, '', 3]));

// 3. Concat
var array = [1];
var other = arrayMethods.concat(array, 2, [3], [[4]]);
console.log(other);

// 4. Difference
// console.log(arrayMethods.difference([2, 1], [2, 3]));