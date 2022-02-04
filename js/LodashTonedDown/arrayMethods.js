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
  },

  // 3. _.concat(array, [values])
  // Creates a new array concatenating array with any additional arrays and/or values.
  concat(array, ...args){
    var normalArr = args;
    var emp = array;
    for(var i=0; i<normalArr.length; i++){
      // probably there is a better logic out there
      if(typeof normalArr[i] === "object"){
        emp.push(normalArr[i][0]);
      } else {
        emp.push(normalArr[i]);
      };
    }
    return emp;
  },

  // 4. _.difference(array, [values])
  // Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
  difference(array, [values]){
    var diffArr = [];
    array.forEach(element => {
      if(!([values].includes(element))){
        diffArr.push(element);
      };
    });
    return diffArr;
  }
};

module.exports = arrayMethods;
