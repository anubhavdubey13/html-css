// Recreating Lodash Array Methods - A Toned Down Version :)

var arrayMethods = {
  // 1. _.chunk(array, [size=1])
  // Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  chunk(array, size=1){
    var finalArr = [];
    var multiplier = Math.ceil(array.length/size);
    for(i=0; i<multiplier; i++){
      finalArr.push(array.slice(i*size, (i+1)*size));
    }
    return finalArr;
  },
  
  // 2. _.compact(array)
  // Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  compact(array){
    var filteredArr = array.filter(element => element);
    return filteredArr;
  }

};

module.exports = arrayMethods;
