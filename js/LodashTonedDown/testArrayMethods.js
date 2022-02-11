var arrayMethods = require('./arrayMethods.js');

// 1. Chunk
/* 
console.log(arrayMethods.chunk(['a', 'b', 'c', 'd'], 2));
console.log(arrayMethods.chunk(['a', 'b', 'c', 'd'], 3)); 
*/

// 2. Compact
//console.log(arrayMethods.compact([0, 1, false, 2, '', 3]));

// 3. Concat
/*
var array = [1];
var other = arrayMethods.concat(array, 2, [3], [[4]]);
console.log(other);
*/

// 4. Difference
// console.log(arrayMethods.difference([2, 1], [2, 3]));

// 5. DifferenceBy
/*
console.log(arrayMethods.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// => [1.2]
 
// The `_.property` iteratee shorthand.
console.log(arrayMethods.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
// => [{ 'x': 2 }]
*/

// 6. DifferenceWith
var comparatorFunc = require('./misc.js');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
console.log(arrayMethods.differenceWith(objects, [{ 'x': 1, 'y': 2 }], comparatorFunc.isEqual));
// => [{ 'x': 2, 'y': 1 }]

